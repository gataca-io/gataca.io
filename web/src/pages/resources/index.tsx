import type { PageProps } from "gatsby"
import * as React from "react"
import Layout from "../../components/templates/mainLayout/MainLayout"
import PreFooterCTASection from "../../components/templates/sections/preFooterCTA/PreFooterCTA"
import { navigate } from "gatsby"
import FirstSection from "./sections/firstSection/FirstSection"
import SecondSection from "./sections/secondSection/SecondSection"

const BlogPage: React.FC<PageProps> = () => {
  const [resourcesData, setResourcesData] = React.useState<any | undefined>()
  const { firstSection, secondSection } = resourcesData ? resourcesData : []
  const [strapiData, setStrapiData] = React.useState<any | undefined>()

  React.useEffect(() => {
    getStrapiData()
    getResourcesData()
  })

  const getResourcesData = async () => {
    const json_data = await require("./data/resourcesData.json")
    setResourcesData(json_data?.data && json_data?.data)
  }

  const getStrapiData = async () => {
    await fetch(`${process.env.STRAPI_API_URL}/api/resources?&populate=*`)
      .then(response => response.json())
      .then(jsonResponse => {
        const strapiData = jsonResponse?.data?.attributes
        setStrapiData(strapiData)
      })
  }

  return (
    <Layout seoData={strapiData?.seo}>
      <>
        <FirstSection
          title={firstSection?.title}
          description={firstSection?.description}
          resources={firstSection?.resources}
        />
        <SecondSection
          title={secondSection?.title}
          description={secondSection?.description}
          entries={secondSection?.entries}
        />

        <PreFooterCTASection
          title={"We're here to help!"}
          description={
            "If you can't find the answer to your question, don't worry – our support team is here to assist you"
          }
          rightButton={{
            label: "Contact us",
            action: () => navigate("/company/contactUs"),
          }}
        />
      </>
    </Layout>
  )
}

export default BlogPage
