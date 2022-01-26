const { createRemoteFileNode } = require("gatsby-source-filesystem");

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  createTypes(`
    type Mdx implements Node {
      frontmatter: Frontmatter
    }

    type Frontmatter {
      title: String!
      remoteImageUrl: [File] @link(by: "url")
      localImageUrl: [File] @fileByRelativePath
    }
    `);
};

exports.onCreateNode = ({
  node,
  createNodeId,
  actions: { createNode },
  cache,
  store,
}) => {
  if (
    node.internal.type === "Mdx" &&
    node.frontmatter &&
    node.frontmatter.remoteImageUrl
  ) {
    return Promise.all(
      node.frontmatter.remoteImageUrl.map((url) => {
        try {
          return createRemoteFileNode({
            url,
            parentNodeId: node.id,
            createNode,
            createNodeId,
            cache,
            store,
          });
        } catch (error) {
          console.error(error);
        }
      })
    );
  }
};

// exports.createPages = async ({ actions: { createPage } }) => {
//   createPage({
//     path: "/offline-plugin-app-shell-fallback",
//     component: require.resolve("./src/offline/index.js"),
//     context: {
//       originalPath: "/offline-plugin-app-shell-fallback",
//       locale: "tr",
//       hrefLang: "tr-TR",
//       dateFormat: "MM/DD/YYYY",
//     },
//   });
// };
