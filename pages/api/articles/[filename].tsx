import { NextApiRequest, NextApiResponse } from "next";
import { getArticle } from "../../../src/utils/filectl";

const handle = (req: NextApiRequest, res: NextApiResponse) => {
  const dir: string = "./articles/";
  const key: string | string[] = req.query.filename;
  const path: string = dir + key + ".md";

  const response = getArticle(path);
  response.title = key as string;

  res.json(response);
};

export default handle;
