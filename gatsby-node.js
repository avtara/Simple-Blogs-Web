const path = require(`path`)
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const BlogPostTemplate = path.resolve("./src/templates/blog-post.js")
  const result = await graphql(`
  {
    allInternalBlogs(filter: {status: {eq: 1}}) {
      edges {
        node {
          alternative_id
          authorid
          content
          createdat(fromNow: true)
          title
          tags
          status
          updateat(fromNow: true)
        }
      }
    }
  }
`)
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  const BlogPosts = result.data.allInternalBlogs.edges
  BlogPosts.forEach(blog => {
    {createPage({
        path: `/blog/${blog.node.alternative_id}`,
        component: BlogPostTemplate,
        context: {
            slug: blog.node.alternative_id,
            id: blog.node.alternative_id,
            authorid:blog.node.authorid,
            content:blog.node.content,
            status:blog.node.status,
            tags:blog.node.tags,
            title:blog.node.title,
        },
      })}
    

  })
  const blogListLayout = path.resolve(`./src/templates/blog-list.js`)
  const postsPerPage = 4
  const postsWithoutFeatured = BlogPosts.filter(({ node }) => {
    return node.status === 1
  })
  const numPages = Math.ceil(postsWithoutFeatured.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blogs` : `/blogs/page/${i + 1}`,
      component: blogListLayout,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        currentPage: i + 1,
        numPages,
      },
    })
  })
}

