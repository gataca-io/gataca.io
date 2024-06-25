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
import SixthSection from "./sections/sixthSection/SixthSection"

const AboutUsPage: React.FC<PageProps> = () => {
  const [strapiData, setStrapiData] = React.useState<any | undefined>()
  const {
    headerSection,
    ourStorySection,
    missionDescription,
    valuesSection,
    employeeSection,
    awardsSection,
    fundingDescription,
  } = strapiData ? strapiData : []

  React.useEffect(() => {
    if (!strapiData) {
      getStrapiData()
    }
    // getaboutUs()
  }, [])
  // const getaboutUs = async () => {
  //   const json_data = require("./data/aboutUsData.json")
  //   setaboutUs(json_data?.data && json_data?.data)
  // }

  const getStrapiData = async () => {
    await fetch(
      `${process.env.STRAPI_API_URL}/api/company-about-us?&populate[headerSection][populate]=*&populate[ourStorySection][populate]=*&populate[employeeSection][populate]=*&populate[awardsSection][populate]=*&populate[valuesSection][populate]=*&populate[seo]=*`
    )
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
          titleHeader={headerSection?.title}
          descriptionHeader={headerSection?.subtitle}
          title={ourStorySection?.title}
          descriptionParagraphs={[ourStorySection?.firstParagraph, ourStorySection?.secondParagraph, ourStorySection?.thirdParagraph]}
        />
        <SecondSection description={missionDescription} />
        <ThirdSection title={valuesSection?.title} list={valuesSection?.values.data} />
        <FourthSection
          title={employeeSection?.title}
          description={employeeSection?.description}
          button={employeeSection?.button}
          list={employeeSection?.employees?.data}
        />
        <FifthSection title={awardsSection?.title} list={awardsSection?.awards.data} />
        <SixthSection description={fundingDescription} />
        <PreFooterCTASection
          title={"Ready to start?"}
          description={
            "Create an account in Gataca Studio and start experiencing decentralized identity today. Fast & seamless integration"
          }
          leftButton={{
            label: "Contact us",
            action: () => navigate("/company/contact"),
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
