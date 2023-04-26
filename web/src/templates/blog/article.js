import React from "react"
import { Link, graphql } from "gatsby"
// import Img from "gatsby-image"
// import Layout from "../components/layout"

const ArticleTemplate = ({ data }) => (
  // <Layout>
  <h1>{data.strapiBlog.title}</h1>

  // </Layout>
)

export default ArticleTemplate

export const query = graphql`
  query ArticleTemplate($id: String!) {
    strapiBlog(id: { eq: $id }) {
      title
      slugURL
    }
  }
`

// export const query = graphql`
//   query ArticleTemplate($id: String!) {
//     strapiBlog(id: { eq: $id }) {
//       title
//       content
//       image {
//         childImageSharp {
//           fixed(width: 200, height: 125) {
//             ...GatsbyImageSharpFixed
//           }
//         }
//       }
//       author {
//         id
//         username
//       }
//     }
//   }
// `
