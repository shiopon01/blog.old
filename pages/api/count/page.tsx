import * as fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";

const handle = (_req: NextApiRequest, res: NextApiResponse) => {
  const dir: string = "./articles/";
  const articles: string[] = fs.readdirSync(dir);
  res.json({ count: Math.ceil(articles.length / 10) });
};

export default handle;
