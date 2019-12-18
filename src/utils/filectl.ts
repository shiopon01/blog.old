import * as fs from "fs";
const path = require("path");

/**
 * 記事の一覧を取得（昇順）
 * @param dir 通常は ./articles/ が入る
 */
export const getArticles = (dir: string) => {
  const articles = fs.readdirSync(dir).map(filename => {
    return fileDetailObject(dir, filename);
  });

  articles.sort(compare);
  return articles;
};

/**
 * 記事の詳細を取得（有無は exists で判定）
 * @param dir 通常は ./articles/ が入る
 * @param filename 情報を取得したいファイル名
 */
export const getArticle = (dir: string, filename: string) => {
  let result: any = {
    exists: false
  };

  if (fileExists(dir + filename)) {
    result = fileDetailObject(dir, filename);
    result.exists = true;
  }
  return result;
};

const fileDetailObject = (dir: string, filename: string) => {
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
    image: details.minuts || "https://source.unsplash.com/random",
    body: details.body
  };
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
    image: null,
    body: ""
  };

  const array = article.split(/\r\n|\r|\n/);
  if (array.length <= 0 || array[0] !== "---") {
    result.body = article;
    return result;
  }

  let i = 1;
  for (; i < array.length; i++) {
    if (array[i] === "---") {
      break;
    }

    const kv = array[i].split(":");
    if (kv.length <= 1) {
      continue;
    }
    result[kv[0].trim()] = kv[1].trim();
  }

  result.body = array.slice(i + 1).join("\n");
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
