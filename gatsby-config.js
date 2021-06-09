module.exports = {
  pathPrefix: "/ee-website",
  siteMetadata: {
    title: "Erciyes English Website",
    siteUrl: "https://erciyes-english.github.io/ee-website/",
  },
  plugins: [
    {
      resolve: `gatsby-theme-i18n`,
      options: {
        defaultLang: `en`,
        prefixDefault: true,
        locales: `en tr`,
        configPath: require.resolve(`./i18n/config.json`),
      },
    },
    {
      resolve: `gatsby-theme-i18n-lingui`,
      options: {
        localeDir: `./i18n/lingui`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-mdx`,
  ],
};
