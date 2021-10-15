const { resolve } = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(
    `
    query {
      allTwitterConversation {
        nodes {
          id
          text
        }
      }
    }
    `
  )

  const blogPostTemplate = resolve(`src/templates/blog-post.js`)
  result.data.allTwitterConversation.nodes.forEach((node) => {
    const path = `/threads/${node.id}`
    createPage({
      path,
      component: blogPostTemplate,
      context: {
        id: node.id,
      },
    })
  })
}