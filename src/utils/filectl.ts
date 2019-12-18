import * as fs from "fs";
const path = require("path");
const dir: string = "./articles/"; // NOTE: 指定するのはこのファイルからの相対パスじゃないらしい

export const getArticles = () => {
  const articles = fs.readdirSync(dir).map(filename => {
    const article = fileRead(dir + filename);
    const details = parseArticle(article);

    // default values
    const title = path.basename(filename, path.extname(filename));
    const subtitle = "No Subtitle";
    const createdAt = title
      .split("-")
      .slice(0, 3)
      .join("-");
    const updatedAt = fs
      .statSync(dir + filename)
      .mtime.toJSON()
      .split("T")[0];

    return {
      path: title,
      title: details.title || title,
      subtitle: details.subtitle || subtitle,
      publishedOn: details.publishedOn || createdAt,
      updatedOn: details.updatedOn || updatedAt,
      createdAt: details.publishedOn || createdAt, // 削除予定
      updatedAt: details.updatedOn || updatedAt, // 削除予定
      minuts: details.minuts,
      image: details.minuts || "https://source.unsplash.com/random"
    };
  });

  articles.sort(compare);
  return articles;
};

const fileRead = (path: string) => {
  const content: any = fs.readFileSync(path, "utf8");
  return content;
};

const parseArticle = (article: any) => {
  const result: any = {
    title: null, // Year End Day
    subtitle: null, // 来年もよろしくお願いします
    publishedOn: null, // 2019-12-31
    updatedOn: null, // 2019-12-31
    minutes: null, // 2
    image: null
  };

  const array = article.split(/\r\n|\r|\n/);
  if (array.length <= 0 || array[0] !== "---") {
    return result;
  }

  for (let i = 1; i < array.length; i++) {
    if (array[i] === "---") {
      break;
    }

    const kv = array[i].split(":");
    if (kv.length <= 1) {
      continue;
    }

    result[kv[0].trim()] = kv[1].trim();
  }

  return result;
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
};

export const getArticle = (path: string) => {
  const article: any = {
    exists: false
  };

  if (fileExists(path)) {
    article.exists = true;
    article.body = fileRead(path);
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
