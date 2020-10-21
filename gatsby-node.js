const path = require('path')

module.exports.onCreateNode = ({ node, actions}) => {
    const { createNodeField } = actions

    if (node.internal.type === 'MarkdownRemark') {
        const slug = path.basename(node.fileAbsolutePath, '.md')

        createNodeField ({
            node,
            name: 'slug',
            value: slug
        })
    }
}

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogTemplate = path.resolve('./src/templates/blogpage.js')
    const res = await graphql(`
        query {
            allMarkdownRemark
            (sort: {fields: [frontmatter___id], order: ASC })
            {
                edges {
                    node {
                        fields {
                            slug
                        }
                        frontmatter {
                            title
                        }
                    }
                }
            }
        }
    `)
    
    const posts = res.data.allMarkdownRemark.edges
    posts.forEach(({ node }, index) => {
        createPage({
            component: blogTemplate,
            path: `/${node.fields.slug}`,
            context: {
                slug: node.fields.slug,
                prev: index === 0 ? null : posts[index - 1].node,
                next: index === posts.length - 1 ? null : posts[index + 1].node
            }
        })
    })
}