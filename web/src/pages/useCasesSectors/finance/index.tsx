import type { PageProps } from "gatsby"
import * as React from "react"
import Layout from "../../../components/templates/mainLayout/MainLayout"
import { navigate } from "gatsby"
import { demolandURL, gatacaStudioURL } from "../../../data/globalData"
import PreFooterCTASection from "../../../components/templates/sections/preFooterCTA/PreFooterCTA"
import FirstSection from "./sections/firstSection/FirstSection"
import SecondSection from "./sections/secondSection/SecondSection"
import ThirdSection from "./sections/thirdSection/ThirdSection"
import FourthSection from "./sections/fourthSection/FourthSection"
import FifthSection from "./sections/fifthSection/FifthSection"

const FinancePage: React.FC<PageProps> = () => {
  const [strapiData, setStrapiData] = React.useState<any | undefined>()
  const { headerSection, stepSection, useCaseSection, whySection, howSection } =
    strapiData ? strapiData : []

  React.useEffect(() => {
    if (!strapiData) {
      getStrapiData()
    }
  }, [])

  const getStrapiData = async () => {
    await fetch(
      `${process.env.STRAPI_API_URL}/api/sectors-finance?populate[headerSection][populate]=*&populate[stepSection][populate]=*&populate[useCaseSection][populate]=*&populate[whySection][populate][advantages][populate]=*&populate[howSection]=*`
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
          contactButton={headerSection?.cta}
        />
        <SecondSection steps={stepSection?.steps?.data} />
        <ThirdSection
          title={useCaseSection?.title}
          description={useCaseSection?.description}
          list={useCaseSection?.use_cases?.data}
        />
        <FourthSection
          title={whySection?.title}
          description={whySection?.description}
          list={whySection?.advantages?.data}
        />
        <FifthSection
          title={howSection?.title}
          description={howSection?.description}
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

export default FinancePage
