import * as fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import { any } from "prop-types";

interface Article {
  exists: boolean;
  title?: string;
  body?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const handle = (req: NextApiRequest, res: NextApiResponse) => {
  const dir: string = "./articles/";
  const key: string | string[] = req.query.filename;
  const path: string = dir + key + ".md";

  const response: Article = getArticle(path);

  res.json(response);
};

const getArticle = (path: string): Article => {
  const article: Article = {
    exists: false
  };

  if (fileExists(path)) {
    article.exists = true;
  }

  return article;
};

const fileExists = (path: string): boolean => {
  let exists: boolean = false;

  try {
    fs.statSync(path);
    exists = true;
  } catch (err) {
    // if (err.code === "ENOENT") {
    //   exists = false;
    // }
  }

  return exists;
};

// const read = (path: string) => {
//   let content: any = fs.readFileSync(path, 'utf8');
//   return content;
// };

export default handle;
