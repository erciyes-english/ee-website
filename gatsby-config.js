module.exports = {
  siteMetadata: {
    title: "Erciyes English",
    siteUrl: "https://www.erciyesenglish.com",
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
          google2: [
            {
              family: "Quicksand",
              axes: "wght@300;500;700",
              subsets: ["latin", "latin-ext"],
              fontDisplay: "swap",
            },
          ],
        },
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Erciyes English`,
        short_name: `Erciyes English`,
        icon: `src/images/icon.png`,
        start_url: `/tr/`,
        lang: `tr`,
        background_color: `#c0272d`,
        theme_color: `#ffffff`,
        display: `standalone`,
        localize: [
          {
            start_url: `/en/`,
            lang: `en`,
            name: `Erciyes English`,
            short_name: `Erciyes English`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `parts`,
        path: `${__dirname}/src/parts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-multi-language-sitemap`,
      options: {
        output: "/",
        query: `
          query {
            allSitePage {
              nodes {
                path
              }
            }
            site {
              siteMetadata {
                siteUrl
              }
            }
          }
        `,
        langs: ["en", "tr"],
      },
    },
  ],
};
