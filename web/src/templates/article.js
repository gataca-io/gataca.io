// import React from "react"

// // const ArticlePage = ({ data }) => {
// //   const article = data.strapiBlog

// //   const seo = {
// //     metaTitle: article.title,
// //     metaDescription: article.description,
// //     shareImage: article.cover,
// //   }

// //   return <p>HOLA</p>
// // }

// // export default ArticlePage

// import React from "react"

// export const getStaticPaths = async () => {
//   let result = await fetch(`${process.env.STRAPI_API_URL}/blogs`)
//   result = await result.json()
//   return {
//     paths: result.data.map(result => ({
//       params: { id: result.id.toString() },
//     })),
//     fallback: false,
//   }
// }

// export const getStaticProps = async ({ params }) => {
//   const res = await fetch(`${process.env.STRAPI_API_URL}/blogs/${params.id}`)
//   const markdownWithMeta = await res.json()
//   const parsedMarkdown = fm(markdownWithMeta.data.attributes.draft)
//   const htmlString = marked(parsedMarkdown.body)
//   const image = markdownWithMeta.data.attributes.imageUrl
//   return {
//     props: {
//       image,
//       htmlString,
//       data: parsedMarkdown.attributes,
//     },
//   }
// }

// export default function Post({ image, htmlString, data }) {
//   return (
//     <>
//       <p>hola</p>
//     </>
//   )
// }

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
