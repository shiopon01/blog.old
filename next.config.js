module.exports = {
  exportPathMap: function() {
    return {
      "/": { page: "/" },
      "/about": { page: "/about" },
      "/initial-props": { page: "/initial-props" },

      "/page/1": { page: "/page/[pid]" },
      "/entry/2019-01-01-test": { page: "/entry/[entry]" }
    };
  }
};
