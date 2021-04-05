//@ts-check

/**
 *
 * @type import('gatsby').GatsbyNode["createPages"]
 */
exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panic("failed to create posts", result.errors)
  }
  const posts = result.data.allMdx.nodes
  posts.forEach(post => {
    const slug = post.frontmatter.slug
    actions.createPage({
      path: `/blog/${slug}/`,
      component: require.resolve("./src/templates/PostTemplate.tsx"),
      context: {
        slug: slug,
      },
    })
  })
}
