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
