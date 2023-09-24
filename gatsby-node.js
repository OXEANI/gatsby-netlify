const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")

exports.onCreateNode = ({node, getNode, actions}) => {
    const { createNodeField } = actions;
    if( node.internal.type === "Mdx" ) {
        const slug = createFilePath({ node, getNode, basePath: "posts" })
        createNodeField({
            node,
            name: "slug",
            value: slug
        })
    }
}

exports.createPages = ({graphql, actions}) => {
    const { createPage } = actions
    return graphql(`
    {
        allMdx {
        nodes {
          fields {
            slug
          }
        }
      }
    }
    `).then( result => {
        result.data.allMdx.nodes.forEach(node => {
            createPage({
                path: node.fields.slug,
                component: path.resolve('./src/layouts/BlogPostLayout.js'),
                context: {
                    slug: node.fields.slug
                }
            })
        })
    })
}