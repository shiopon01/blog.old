import { NextApiRequest, NextApiResponse } from "next";
import { getArticle } from "../../../src/utils/filectl";

const handle = (req: NextApiRequest, res: NextApiResponse) => {
  const dir: string = "./articles/";
  const key: string | string[] = req.query.filename;

  const response = getArticle(dir, key + ".md");
  res.json(response);
};

export default handle;
