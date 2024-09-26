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
import { demolandURL, gatacaStudioURL } from "../../../data/globalData"

const EducationPage: React.FC<PageProps> = () => {
  const [strapiData, setStrapiData] = useState<any | undefined>()
  const {
    headerSection,
    stepsSection,
    useCasesSection,
    whySection,
    successSection,
  } = strapiData ? strapiData : []

  React.useEffect(() => {
    if (!strapiData) {
      getStrapiData()
    }
  }, [])

  const getStrapiData = async () => {
    await fetch(
      `${process.env.STRAPI_API_URL}/api/sectors-education?populate[headerSection][populate]=*&populate[stepsSection][populate]=*&populate[useCasesSection][populate]=*&populate[whySection][populate][advantages][populate]=*&populate[successSection][populate][success_stories][populate][link]=*&populate[successSection][populate][success_stories][populate][credentials]=*`
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
          title={headerSection?.title}
          description={headerSection?.description}
          tryForFreeButton={headerSection?.cta}
        />
        <SecondSection steps={stepsSection?.steps?.data} />
        <ThirdSection
          title={useCasesSection?.title}
          description={useCasesSection?.description}
          list={useCasesSection?.use_cases?.data}
        />
        <FourthSection
          title={whySection?.title}
          description={whySection?.description}
          list={whySection?.advantages?.data}
        />
        <FifthSection
          title={successSection?.title}
          stories={successSection?.success_stories.data}
          list={successSection?.list}
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
            label: "Try Demo",
            action: () => window.open(demolandURL, "_blank"),
          }}
        />
      </>
    </Layout>
  )
}

export default EducationPage
