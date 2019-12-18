import { NextApiRequest, NextApiResponse } from "next";
import { getArticles } from "../../../src/utils/filectl";

const handle = (req: NextApiRequest, res: NextApiResponse) => {
  const dir: string = "./articles/";
  const response: any = getArticles(dir); // NOTE: 指定するのはこのファイルからの相対パスじゃない

  const page: number = parseInt(req.query.page as string);
  const head: number = (page - 1) * 10;
  res.json({ articles: response.slice(head, head + 10) });
};

export default handle;
