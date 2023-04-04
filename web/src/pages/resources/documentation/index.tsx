import type { PageProps } from "gatsby"
import * as React from "react"
import Layout from "../../../components/templates/mainLayout/MainLayout"
import PreFooterCTASection from "../../../components/templates/sections/preFooterCTA/PreFooterCTA"
import { navigate } from "gatsby"
import FirstSection from "./sections/firstSection/FirstSection"
import SecondSection from "./sections/secondSection/SecondSection"

const BlogPage: React.FC<PageProps> = () => {
  const [resourcesData, setResourcesData] = React.useState<any | undefined>()
  const { firstSection, secondSection } = resourcesData ? resourcesData : []

  React.useEffect(() => {
    getResourcesData()
  })

  const getResourcesData = async () => {
    const json_data = await require("./data/resourcesData.json")
    setResourcesData(json_data?.data && json_data?.data)
  }

  return (
    <Layout>
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
          title={"Ready to start?"}
          description={
            "Create an account in Gataca Studio and start experiencing decentralized identity today. Fast & seamless integration"
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
