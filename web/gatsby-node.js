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

const redirects = require("./redirects.json")

exports.createPages = ({ actions, graphql }) => {
  const { createPage, createRedirect } = actions

  redirects.forEach(redirect =>
    createRedirect({
      fromPath: redirect.fromPath,
      toPath: redirect.toPath,
      redirectInBrowser: true,
      isPermanent: true,
    })
  )
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
        path: `/blog/${node?.slugURL}`,
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

const FilterWarningsPlugin = require("webpack-filter-warnings-plugin")

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    plugins: [
      new FilterWarningsPlugin({
        exclude:
          /mini-css-extract-plugin[^]*Conflicting order. Following module has been added:/,
      }),
    ],
  })
}
