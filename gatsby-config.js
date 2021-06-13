module.exports = {
  siteMetadata: {
    title: "Erciyes English",
    siteUrl: "https://erciyes-english.github.io/ee-website/",
    author: "Erciyes English",
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
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Roboto",
              variants: ["100", "300", "400", "500", "900"],
            },
          ],
        },
      },
    },
  ],
};
