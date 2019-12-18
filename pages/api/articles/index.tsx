import { NextApiRequest, NextApiResponse } from "next";
import { getArticles } from "../../../src/utils/filectl";

const handle = (req: NextApiRequest, res: NextApiResponse) => {
  const dir: string = "./articles/"; // NOTE: 指定するのはこのファイルからの相対パスじゃない
  const response: any = getArticles(dir);

  const page: number = parseInt(req.query.page as string);
  const head: number = (page - 1) * 10;
  res.json({ articles: response.slice(head, head + 10) });
};

export default handle;
