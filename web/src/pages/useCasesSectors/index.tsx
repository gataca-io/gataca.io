import type { PageProps } from "gatsby"
import * as React from "react"
import Layout from "../../components/templates/mainLayout/MainLayout"
import PreFooterCTASection from "../../components/templates/sections/preFooterCTA/PreFooterCTA"
import { navigate } from "gatsby"
import { gatacaStudioURL } from "../../data/globalData"
import HeaderSection from "./sections/headerSection/HeaderSection"
import UseCasesSection from "./sections/useCasesSection/UseCasesSection"
import { useState } from "react"
import UseCasesAppliedSection from "./sections/useCasesAppliedSection/UseCasesAppliedSection"
import LogosSlider from "../../components/elements/logosSlider/LogosSlider"

const UseCasesPage: React.FC<PageProps> = props => {
  const [useCasesSectorsData, setUseCasesSectors] = useState<any | undefined>()
  const [headerSectionLoaded, setHeaderSectionLoaded] = useState<boolean>(false)
  const [strapiData, setStrapiData] = useState<any | undefined>()
  const { header,
          useCasesSection,
          industriesSection } =
          strapiData ? strapiData : []

  React.useEffect(() => {
    if (!strapiData) {
      getStrapiData()
    }
  }, [])

  const getStrapiData = async () => {
    await fetch(
      `${process.env.STRAPI_API_URL}/api/uses-cases-and-sector?populate[header]=*&populate[industriesSection][populate][categories][populate]=*&populate[useCasesSection][populate]=*`
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
        <HeaderSection
          title={header?.title}
          description={header?.description}
          setHeaderSectionLoaded={setHeaderSectionLoaded}
        />
        <UseCasesSection
          title={useCasesSection?.title}
          description={useCasesSection?.description}
          list={useCasesSection?.use_cases?.data}
          subOptionClickedID={
            props?.location?.hash?.substring(1) !== "otherIndustries"
              ? props?.location?.hash?.substring(1)
              : ""
          }
        />
        <UseCasesAppliedSection
          title={industriesSection?.title}
          description={industriesSection?.subtitle}
          categories={industriesSection?.categories}
          index={0}
          subOptionClickedID={props?.location?.hash?.substring(1)}
        />
        <LogosSlider />
        <PreFooterCTASection
          title={"Ready To Start?"}
          description={
            "Create an account in Gataca Studio and start experiencing user-centric identity solutions today. Fast & seamless integration."
          }
          leftButton={{
            label: "Contact Us",
            outlined: true,
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

export default UseCasesPage
