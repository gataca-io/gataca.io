import React from "react"
import { navigate } from "gatsby"
import Layout from "../../components/templates/mainLayout/MainLayout"
import PreFooterCTASection from "../../components/templates/sections/preFooterCTA/PreFooterCTA"
import FirstSection from "./sections/firstSection/FirstSection"
import IntroBlogSkeleton from "./components/introBlogSkeleton/introBlogSkeleton"
import SecondSection from "./sections/secondSection/SecondSection"
import { gatacaStudioURL } from "../../data/globalData"
import { readingMarkdownTime } from "../../utils/time"

const ArticleTemplate: React.FC = (props: any) => {
  const [blog, setBlog] = React.useState<any | undefined>()
  const blogData = blog && blog?.attributes

  React.useEffect(() => {
    getBlogData()
  }, [props?.pageContext?.slugURL])

  const getBlogData = async () => {
    await fetch(
      `${process.env.STRAPI_API_URL}/api/blogs?filters[slugURL]=${props?.pageContext?.slugURL}&populate=*`
    )
      .then(response => response.json())
      .then(jsonResponse => {
        jsonResponse &&
          jsonResponse?.data &&
          jsonResponse?.data[0] &&
          setBlog(jsonResponse?.data[0])
      })
  }

  return (
    <Layout>
      <>
        {blogData?.content ? (
          <FirstSection
            {...blogData}
            timeReading={readingMarkdownTime(blogData?.content)}
          />
        ) : (
          <IntroBlogSkeleton />
        )}
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
