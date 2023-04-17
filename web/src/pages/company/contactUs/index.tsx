import type { PageProps } from "gatsby"
import * as React from "react"
import { useState } from "react"
import Layout from "../../../components/templates/mainLayout/MainLayout"
import PreFooterCTASection from "../../../components/templates/sections/preFooterCTA/PreFooterCTA"
import { gatacaStudioURL } from "../../../data/globalData"
import FirstSection from "./sections/firstSection/FirstSection"

const ContactUsPage: React.FC<PageProps> = () => {
  const [contactUsData, setcontactUs] = useState<any | undefined>()
  const { firstSection } = contactUsData ? contactUsData : []

  React.useEffect(() => {
    getcontactUs()
  }, [])
  const getcontactUs = async () => {
    const json_data = require("./data/contactUsData.json")
    setcontactUs(json_data?.data && json_data?.data)
  }
  return (
    <Layout>
      <>
        <FirstSection
          title={firstSection?.title}
          description={firstSection?.description}
          list={firstSection?.list}
        />
        <PreFooterCTASection
          title={"Ready to start?"}
          description={
            "Create an account in Gataca Studio and start experiencing decentralized identity today. Fast & seamless integration"
          }
          leftButton={{
            label: "See pricing plans",
            // TODO: Add navigation for pricing
            action: () => console.log("hola"),
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

export default ContactUsPage
