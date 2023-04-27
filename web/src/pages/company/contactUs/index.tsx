import { PageProps, navigate } from "gatsby"
import * as React from "react"
import { useState } from "react"
import Layout from "../../../components/templates/mainLayout/MainLayout"
import PreFooterCTASection from "../../../components/templates/sections/preFooterCTA/PreFooterCTA"
import { gatacaStudioURL } from "../../../data/globalData"
import FirstSection from "./sections/firstSection/FirstSection"
import SecondSection from "./sections/secondSection/SecondSection"

const ContactUsPage: React.FC<PageProps> = () => {
  const [contactUsData, setcontactUs] = useState<any | undefined>()
  const { firstSection, secondSection } = contactUsData ? contactUsData : []

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
        <SecondSection
          title={secondSection?.title}
          subTitle={secondSection?.subTitle}
          info={secondSection?.info}
        />
        <PreFooterCTASection
          title={"Ready to start?"}
          description={
            "Create an account in Gataca Studio and start experiencing decentralized identity today. Fast & seamless integration"
          }
          leftButton={{
            label: "See pricing plans",
            action: () => navigate("/pricing"),
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
