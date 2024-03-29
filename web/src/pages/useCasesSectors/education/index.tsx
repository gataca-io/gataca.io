import type { PageProps } from "gatsby"
import * as React from "react"
import Layout from "../../../components/templates/mainLayout/MainLayout"
import { navigate } from "gatsby"
import { useState } from "react"
import FirstSection from "./sections/firstSection/FirstSection"
import SecondSection from "./sections/secondSection/SecondSection"
import PreFooterCTASection from "../../../components/templates/sections/preFooterCTA/PreFooterCTA"
import ThirdSection from "./sections/thirdSection/ThirdSection"
import FifthSection from "./sections/fifthSection/FifthSection"
import FourthSection from "./sections/fourthSection/FourthSection"
import { gatacaStudioURL } from "../../../data/globalData"

const EducationPage: React.FC<PageProps> = () => {
  const [educationData, setEducation] = useState<any | undefined>()
  const [strapiData, setStrapiData] = useState<any | undefined>()
  const {
    firstSection,
    secondSection,
    thirdSection,
    fourthSection,
    fifthSection,
  } = educationData ? educationData : []

  React.useEffect(() => {
    if (!strapiData) {
      getStrapiData()
    }
    getEducation()
  }, [])

  const getEducation = async () => {
    const json_data = require("./data/educationData.json")
    setEducation(json_data?.data && json_data?.data)
  }

  const getStrapiData = async () => {
    await fetch(
      `${process.env.STRAPI_API_URL}/api/sectors-education?&populate=*`
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
          title={firstSection?.title}
          description={firstSection?.description}
          tryForFreeButton={firstSection?.tryForFreeButton}
        />
        <SecondSection steps={secondSection?.steps} />
        <ThirdSection
          title={thirdSection?.title}
          description={thirdSection?.description}
          list={thirdSection?.list}
        />
        <FourthSection
          title={fourthSection?.title}
          description={fourthSection?.description}
          list={fourthSection?.list}
        />
        <FifthSection
          title={fifthSection?.title}
          stories={fifthSection?.stories}
          list={fifthSection?.list}
        />
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

export default EducationPage
