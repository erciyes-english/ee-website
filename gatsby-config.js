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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Erciyes English`,
        short_name: `Erciyes English`,
        icon: `src/images/maskable-icon.png`,
        icon_options: {
          purpose: `any maskable`,
        },
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
    `gatsby-plugin-offline`,
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
      resolve: "gatsby-plugin-sitemap",
      options: {
        excludes: ["offline-plugin-app-shell-fallback", "404"],
        query: `
            {
              site {
                siteMetadata {
                  siteUrl
                }
              }
     
              allSitePage {
                edges {
                  node {
                    path
                  }
                }
              }
          }`,
        resolveSiteUrl: () => "https://www.erciyesenglish.com",
        resolvePages: ({ site, allSitePage }) => {
          return allSitePage.edges.map((edge) => ({
            path: edge.node.path,
            pathNoLang: edge.node.path.replace(/en\/|tr\//, ""),
            siteUrl: site.siteMetadata.siteUrl,
          }));
        },
        filterPages: ({ path }, excludedRoute) => {
          return path.includes(excludedRoute);
        },
        serialize: ({ path, siteUrl, pathNoLang }) => ({
          url: siteUrl + path,
          changefreq: "weekly",
          priority: pathNoLang === "/" ? 1 : 0.7,
          links: [
            { lang: "en", url: `${siteUrl}/en${pathNoLang}` },
            {
              lang: "tr",
              url: `${siteUrl}/tr${pathNoLang}`,
            },
          ],
        }),
      },
    },
  ],
};
