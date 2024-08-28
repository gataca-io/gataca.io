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
  const getPages = makeRequest(
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
      },
      allStrapiPage {
        edges {
          node {
            id
            slugURL
            subPath
            sections {
              ... on STRAPI__COMPONENT_GENERIC_HEADER {
                id
                title
                description
              }
              ... on STRAPI__COMPONENT_SHARED_DOUBLE_COL_TEXT_IMAGE {
                id
                description
                title
              }
            }
          }
        }
      }
    }
    `
  ).then(result => {
    // Create landing for each article.
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
    }),
      // Create landing for each page.
      result.data.allStrapiPage.edges.forEach(({ node }) => {
        createPage({
          path: `${node?.subPath}${node?.slugURL}`,
          component: path.resolve(`src/templates/page/pageTemplate.tsx`),
          context: {
            id: node.id,
            slugURL: node.slugURL,
            subPath: node.subPath || null,
            sections: {
              id: node.id,
              description: node.description,
              title: node.title,
            },
          },
        })
      })
  })

  // Query for pages nodes to use in creating pages.
  return getPages
}
