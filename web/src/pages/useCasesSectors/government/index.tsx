import type { PageProps } from "gatsby"
import * as React from "react"
import Layout from "../../../components/templates/mainLayout/MainLayout"
import { navigate } from "gatsby"
import { useState } from "react"
import PreFooterCTASection from "../../../components/templates/sections/preFooterCTA/PreFooterCTA"
import FirstSection from "./sections/firstSection/FirstSection"
import SecondSection from "./sections/secondSection/SecondSection"
import ThirdSection from "./sections/thirdSection/ThirdSection"
import FourthSection from "./sections/fourthSection/FourthSection"
import FifthSection from "./sections/fifthSection/FifthSection"

const GovernmentPage: React.FC<PageProps> = () => {
  const [strapiData, setStrapiData] = useState<any | undefined>()
  const {
    headerSection,
    stepSection,
    useCasesSection,
    whySection,
    howSection,
  } = strapiData ? strapiData : []

  React.useEffect(() => {
    if (!strapiData) {
      getStrapiData()
    }
  }, [])

  const getStrapiData = async () => {
    await fetch(
      `${process.env.STRAPI_API_URL}/api/sectors-government?populate[headerSection][populate]=*&populate[stepSection][populate]=*&populate[useCasesSection][populate]=*&populate[whySection][populate][advantages][populate]=*&populate[howSection]=*`
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
          title={howSection?.title}
          description={howSection?.description}
        />
        <PreFooterCTASection
          title={"Want to know more?"}
          description={
            "Get to know our expertise and case studies working with entities in the public sector"
          }
          rightButton={{
            label: "Contact us",
            action: () => navigate("/company/contact"),
          }}
        />
      </>
    </Layout>
  )
}

export default GovernmentPage
