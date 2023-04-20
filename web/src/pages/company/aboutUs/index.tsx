import type { PageProps } from "gatsby"
import * as React from "react"
import { useState } from "react"
import Layout from "../../../components/templates/mainLayout/MainLayout"
import PreFooterCTASection from "../../../components/templates/sections/preFooterCTA/PreFooterCTA"
import { navigate } from "gatsby"
import { gatacaStudioURL } from "../../../data/globalData"
import FirstSection from "./sections/firstSection/FirstSection"
import SecondSection from "./sections/secondSection/SecondSection"
import ThirdSection from "./sections/thirdSection/ThirdSection"
import FourthSection from "./sections/fourthSection/FourthSection"
import FifthSection from "./sections/fifthSection/FifthSection"

const AboutUsPage: React.FC<PageProps> = () => {
  const [aboutUsData, setaboutUs] = useState<any | undefined>()
  const {
    firstSection,
    secondSection,
    thirdSection,
    fourthSection,
    fifthSection,
  } = aboutUsData ? aboutUsData : []

  React.useEffect(() => {
    getaboutUs()
  }, [])
  const getaboutUs = async () => {
    const json_data = require("./data/aboutUsData.json")
    setaboutUs(json_data?.data && json_data?.data)
  }

  return (
    <Layout>
      <>
        <FirstSection
          titleHeader={firstSection?.titleHeader}
          descriptionHeader={firstSection?.descriptionHeader}
          title={firstSection?.title}
          descriptionParagraphs={firstSection?.descriptionParagraphs}
        />
        <SecondSection description={secondSection?.description} />
        <ThirdSection title={thirdSection?.title} list={thirdSection?.list} />
        <FourthSection
          title={fourthSection?.title}
          description={fourthSection?.description}
          button={fourthSection?.button}
          list={fourthSection?.list}
        />
        <FifthSection title={fifthSection?.title} list={fifthSection?.list} />
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

export default AboutUsPage
