// const path = require("path")

// exports.createPages = async ({ graphql, actions, reporter }) => {
//   const { createPage } = actions

//   // Define a template for blog post
//   const articlePost = path.resolve("./src/components/templates/article.js")

//   const result = await graphql(
//     `
//       {
//         allStrapiBlog {
//           nodes {
//             title
//             slugURL
//             id
//           }
//         }
//       }
//     `
//   )

//   if (result.errors) {
//     reporter.panicOnBuild(
//       `There was an error loading your Strapi articles`,
//       result.errors
//     )

//     return
//   }

//   const articles = result.data.allStrapiArticle.nodes

//   if (articles.length > 0) {
//     articles.forEach(article => {
//       createPage({
//         path: `/blog/${article.id}`,
//         component: articlePost,
//         context: {
//           id: article.id,
//         },
//       })
//     })
//   }
// }

const path = require(`path`)

const makeRequest = (graphql, request) =>
  new Promise((resolve, reject) => {
    // Query for nodes to use in creating pages.
    resolve(
      graphql(request).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        return result
      })
    )
  })

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const getArticles = makeRequest(
    graphql,
    `
    {
      allStrapiBlog {
        edges {
          node {
            id,
            title,
            slugURL,
          }
        }
      }
    }
    `
  ).then(result => {
    // Create pages for each article.
    result.data.allStrapiBlog.edges.forEach(({ node }) => {
      createPage({
        path: `/blog/${node.slugURL}`,
        component: path.resolve(`src/templates/blog/article.tsx`),
        context: {
          id: node.id,
          slugURL: node.slugURL,
          title: node.title,
        },
      })
    })
  })

  // Query for articles nodes to use in creating pages.
  return getArticles
}
