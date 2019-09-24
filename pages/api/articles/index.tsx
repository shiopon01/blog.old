import * as fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";

const path = require("path");

const handle = (_req: NextApiRequest, res: NextApiResponse) => {
  const dir: string = "./articles/";
  const response: any = getArticles(dir);
  res.json(response);
};

const getArticles = (dir: string) => {
  const articles = fs.readdirSync(dir).map(filename => {
    const title = path.basename(filename, path.extname(filename));
    const subtitle = "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica";
    const createdAt = title.split('-').slice(0, 3).join('-');
    const updatedAt =  fs.statSync(dir + filename).mtime.toJSON().split('T')[0];

    return {
      title,
      subtitle,
      createdAt,
      updatedAt,
      image: "https://source.unsplash.com/random"
    };
  });

  articles.sort(compare);
  return articles;
};

const compare = (a: any, b: any) => {
  const aString = a.createdAt.toUpperCase();
  const bString = b.createdAt.toUpperCase();

  let comparison = 0;
  if (aString > bString) {
    comparison = -1;
  } else if (aString < bString) {
    comparison = 1;
  }
  return comparison;
}

export default handle;
