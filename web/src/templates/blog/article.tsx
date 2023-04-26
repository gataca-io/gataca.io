import React from "react"
import { Link, PageProps, graphql, navigate } from "gatsby"
import Layout from "../../components/templates/mainLayout/MainLayout"
import PreFooterCTASection from "../../components/templates/sections/preFooterCTA/PreFooterCTA"
import { gatacaStudioURL } from "../../data/globalData"
import FirstSection from "./sections/firstSection/FirstSection"
import { readingMarkdownTime } from "../../utils/time"
import ReactMarkdown from "react-markdown"
import content from "react-tiny-swiper"
import SecondSection from "./sections/secondSection/SecondSection"
// import Img from "gatsby-image"

const ArticleTemplate: React.FC = (props: any) => {
  const [blog, setBlog] = React.useState<any | undefined>()
  const blogData = blog && blog?.attributes

  React.useEffect(() => {
    // if (!blog) {
    console.log("PROPS", props?.pageContext?.slugURL)
    getBlogData()
    // }
  }, [props?.pageContext?.slugURL])

  const getBlogData = async () => {
    await fetch(
      `${process.env.STRAPI_API_URL}/api/blogs?filters[slugURL]=${props?.pageContext?.slugURL}&populate=*`
    )
      .then(response => response.json())
      .then(jsonResponse => {
        console.log("JSON", jsonResponse?.data[0])
        jsonResponse &&
          jsonResponse?.data &&
          jsonResponse?.data[0] &&
          setBlog(jsonResponse?.data[0])
      })
      .catch((error: any) => {})
  }

  return (
    <Layout>
      <>
        <FirstSection
          {...blogData}
          timeReading={readingMarkdownTime(blogData?.content)}
        />
        <SecondSection
          {...blogData}
          timeReading={readingMarkdownTime(blogData?.content)}
        />

        <PreFooterCTASection
          title={"Ready to start?"}
          description={
            "Create an account in Gataca Studio and start experiencing decentralized identity today. Fast & seamless integration"
          }
          leftButton={{
            label: "Contact us",
            action: () => navigate("/company/contactUs"),
          }}
          rightButton={{
            label: "Try for free",
            action: () => window.open(gatacaStudioURL, "_blank"),
          }}
        />
      </>
    </Layout>
  )
}

export default ArticleTemplate

// export const query = graphql`
//   query ArticleTemplate($id: String!) {
//     strapiBlog(id: { eq: $id }) {
//       title
//       slugURL
//       id
//     }
//   }
// `

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
