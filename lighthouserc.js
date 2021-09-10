const url = (lang, page) => `http://localhost/${lang}${page}/`;
module.exports = {
  ci: {
    collect: {
      staticDistDir: "./public",
      url: [
        url("en", ""),
        url("tr", ""),
        url("en", "/register"),
        url("tr", "/register"),
      ],
    },
    upload: {
      target: "temporary-public-storage",
    },
    assert: {
      preset: "lighthouse:recommended",
      assertions: {
        "csp-xss": "warn",
      },
    },
  },
};
