import type { PageProps } from "gatsby"
import * as React from "react"
import Layout from "../../../components/templates/mainLayout/MainLayout"
import PreFooterCTASection from "../../../components/templates/sections/preFooterCTA/PreFooterCTA"
import { navigate } from "gatsby"
import { useState } from "react"
import FirstSection from "./sections/firstSection/FirstSection"
import SecondSection from "./sections/secondSection/SecondSection"

const GovernmentPage: React.FC<PageProps> = () => {
  const [governmentData, setGovernment] = useState<any | undefined>()
  const { firstSection, secondSection } = governmentData ? governmentData : []

  React.useEffect(() => {
    getGovernment()
  }, [])
  const getGovernment = async () => {
    const json_data = require("./data/governmentData.json")
    setGovernment(json_data?.data && json_data?.data)
  }
  return (
    <Layout>
      <>
        <main>
          <FirstSection
            title={firstSection?.title}
            description={firstSection?.description}
            contactButton={firstSection?.contactButton}
          />
          <SecondSection steps={secondSection?.steps} />
          <PreFooterCTASection
            title={"Want to know more?"}
            description={
              "Get to know our expertise and case studies working with entities in the public sector"
            }
            rightButton={{
              label: "Contact us",
              action: () => navigate("/company/contactUs"),
            }}
          />
        </main>
      </>
    </Layout>
  )
}

export default GovernmentPage
