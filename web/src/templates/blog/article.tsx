import React from "react"
import { navigate } from "gatsby"
import Layout from "../../components/templates/mainLayout/MainLayout"
import PreFooterCTASection from "../../components/templates/sections/preFooterCTA/PreFooterCTA"
import FirstSection from "./sections/firstSection/FirstSection"
import SecondSection from "./sections/secondSection/SecondSection"
import { demolandURL, gatacaStudioURL } from "../../data/globalData"
import { readingMarkdownTime } from "../../utils/time"
import IntroBlogSkeleton from "./components/introBlogSkeleton/IntroBlogSkeleton"
import { SeoHelmet } from "../../components/elements/seo/SeoHelmet"
import { BlogModel, StrapiImageModel } from "../../interfaces/interfaces"

const ArticleTemplate: React.FC = (props: any) => {
  const [blog, setBlog] = React.useState<BlogModel | undefined>()
  const blogData = blog && blog?.attributes

  React.useEffect(() => {
    getBlogData()
  }, [props?.pageContext?.slugURL])

  const getBlogData = async () => {
    await fetch(
      `${process.env.STRAPI_API_URL}/api/blogs?filters[slugURL]=${props?.pageContext?.slugURL}&populate=deep`
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
    <Layout seoData={blogData?.seo}>
      <>
        {blogData?.content ? (
          <FirstSection
            {...blogData}
            timeReading={readingMarkdownTime(blogData?.content)}
          />
        ) : (
          <IntroBlogSkeleton />
        )}
        <SecondSection {...blogData} />

        <PreFooterCTASection
          title={"Ready to start?"}
          description={
            "Create an account in Gataca Studio and start experiencing decentralized identity today. Fast & seamless integration"
          }
          leftButton={{
            label: "Contact us",
            style: "outlined",
            fillColor: "white",
            action: () => navigate("/company/contact"),
          }}
          rightButton={{
            label: "Try Demo",
            action: () => window.open(demolandURL, "_blank"),
          }}
        />
      </>
    </Layout>
  )
}

export default ArticleTemplate
