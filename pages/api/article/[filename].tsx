import * as fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";

interface Response {
  exists: boolean;
  title?: string;
}

const handle = (req: NextApiRequest, res: NextApiResponse) => {
  const dir: string = "./articles/";
  const key: string | string[] = req.query.filename;
  const path: string = dir + key + ".md";

  let exists: boolean = false;

  try {
    fs.statSync(path);
    exists = true;
  } catch (err) {
    if (err.code === "ENOENT") {
      exists = false;
    }
  }

  const response: Response = {
    exists: exists
  };

  response.title = "aa";

  res.json(response);
};

// const read = (path: string) => {
//   let content: any = fs.readFileSync(path, 'utf8');
//   return content;
// };

export default handle;
