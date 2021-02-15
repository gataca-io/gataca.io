
const path = require("path")

module.exports.onCreateNode = ({ node, actions }) => {
  // Transform the new node here and create a new node or
  // create a new node field.
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")
    createNodeField({
      //same as node: node
      node,
      name: "slug",
      value: slug,
    })
    console.log('MD NODE SLUG => ', slug)
  }
}

module.exports.createPages = async ({ graphql, actions, reporter }) => {
  actions.createRedirect({
    fromPath: `/products/`,
    toPath: `/wallet/`,
    isPermanent: `true`,
  })
  const { createPage } = actions
  //dynamically create pages here
  //get path to template
  const blogMdTemplate = path.resolve("./src/templates/blogMd.js")
  //get slugs
  const queryPosts = await graphql(`
    query {
      allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: {fileAbsolutePath: {regex: "/posts/.*\\\\.md$/"}}
          limit: 1000
        ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
    
  `)
  
  if (queryPosts.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  
  // Create blog-list preview pages
/*  const posts = response.data.allMarkdownRemark.edges
  const postsPerPage = 6
  const numPages = Math.ceil(posts.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: blogMdTemplate,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })*/
  
  // Create new Unique pages for each post with unique slug
  queryPosts.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      component: blogMdTemplate,
      path: `/insights/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
      },
    })
    console.log('POST CREATED => ', edge.node.fields.slug)
  })
  
  const queryMdPages = await graphql(`
    query {
       allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date]},
        filter: {fileAbsolutePath: {regex: "/mdpages/.*\\\\.md$/"}}
      ) {
      edges {
        node {
          fields {
            slug
          }
        }
      }
    }
}
  `)
  
  if (queryMdPages.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  
  // Create new Unique pages for each post with unique slug
  queryMdPages.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      component: blogMdTemplate,
      path: `/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
      },
    })
    console.log('PAGE CREATED => ', edge.node.fields.slug)
  })
  
  
  //dynamically create pages here
  //get path to template
  //get slugs
  
/*  const blogWpTemplate = path.resolve("./src/templates/blog.js")
  const responseWp = await graphql(`
    query {
      allWordpressPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)*/
  
/*  // Create blog-list preview pages
  const postsWp = responseWp.data.allWordpressPost.edges
  const postsWpPerPage = 6
  const numWpPages = Math.ceil(posts.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/stories` : `/stories/${i + 1}`,
      component: blogWpTemplate,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })*/
  
  //create new pages with unique slug
/*  responseWp.data.allWordpressPost.edges.forEach(edge => {
    createPage({
      component: blogWpTemplate,
      path: `/stories/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })*/
}


