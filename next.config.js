const fs = require("fs");
const path = require("path");

const dir = "./articles/";

module.exports = {
  exportPathMap: function() {
    const articles = fs.readdirSync(dir).map(filename => {
      return {
        filename
        // mtime: fs.statSync(dir + filename).mtime
      };
    });
    // articles.sort((a, b) => b.mtime - a.mtime)

    const pathMap = {
      "/": { page: "/" },
      "/about": { page: "/about" }
    };

    // /page/[1..]
    for (let i = 0; i < Math.ceil(articles.length / 5); i++) {
      pathMap["/page/" + (i + 1)] = { page: "/page/[pid]" };
    }

    // /entry/[filename]
    for (let article of articles) {
      pathMap["/entry/" + path.basename(article.filename, path.extname(article.filename))] = { page: "/entry/[entry]" };
    }

    return pathMap;
  }
};
