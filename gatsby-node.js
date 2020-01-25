const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const labAssignment = path.resolve(`./src/templates/assignment.js`)
  const labDocument = path.resolve(`./src/templates/document.js`)

  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                classification
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }
  const allFiles = result.data.allMarkdownRemark.edges

  const posts = []
  const documents = []
  const assignments = []

  allFiles.forEach(file => {
    switch (file.node.frontmatter.classification) {
      case "week":
        // templateType = blogPost
        posts.push(file)
        break
      case "document":
        // templateType = labDocument
        documents.push(file)
        break
      case "assignment":
        // templateType = labAssignment
        assignments.push(file)
        break
    }
  })

  // Create posts.
  // const posts = result.data.allMarkdownRemark.edges

  posts.forEach((post, index) => {
    switch (post.node.frontmatter.classification) {
      case "week":
        templateType = blogPost
        break
      case "document":
        templateType = labDocument
        break
      case "assignment":
        templateType = labAssignment
        break
    }

    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.fields.slug,
      component: templateType,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
