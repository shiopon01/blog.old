const fs = require("fs");
const path = require("path");
const dir = "./articles/";

const exportMapGen = () => {
  const articles = fs.readdirSync(dir).map(filename => {
    return {
      filename
      // mtime: fs.statSync(dir + filename).mtime
    };
  });

  const pathMap = {
    "/": { page: "/" },
    "/about": { page: "/about" }
  };

  // /page/[1..]
  for (let i = 0; i < Math.ceil(articles.length / 10); i++) {
    pathMap["/page/" + (i + 1)] = { page: "/page/[pid]", query: { pid: i + 1 }};
  }

  // /entry/[postName]
  for (let article of articles) {
    const title = path.basename(article.filename, path.extname(article.filename));
    pathMap["/entry/" + title] = { page: "/entry/[entry]", query: { entry: title }};
  }

  return async function() {
    return pathMap;
  };
}

module.exports = {
  exportPathMap: exportMapGen()
};
