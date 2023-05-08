import type { PageProps } from "gatsby"
import * as React from "react"
import Layout from "../../components/templates/mainLayout/MainLayout"
import PreFooterCTASection from "../../components/templates/sections/preFooterCTA/PreFooterCTA"
import { navigate } from "gatsby"
import { gatacaStudioURL } from "../../data/globalData"
import * as styles from "./index.module.scss"
import HeaderSection from "./sections/headerSection/HeaderSection"
import UseCasesSection from "./sections/useCasesSection/UseCasesSection"
import { useState } from "react"
import UseCasesAppliedSection from "./sections/useCasesAppliedSection/UseCasesAppliedSection"
import LogosSlider from "../../components/elements/logosSlider/LogosSlider"

const UseCasesPage: React.FC<PageProps> = props => {
  const [useCasesSectorsData, setUseCasesSectors] = useState<any | undefined>()
  const [headerSectionLoaded, setHeaderSectionLoaded] = useState<boolean>(false)
  const { headerSection, useCasesSection, useCasesAppliedSection } =
    useCasesSectorsData ? useCasesSectorsData : []
  const [strapiData, setStrapiData] = useState<any | undefined>()

  React.useEffect(() => {
    if (!strapiData) {
      getStrapiData()
    }
    getUseCasesSectors()
  }, [])

  const getStrapiData = async () => {
    await fetch(
      `${process.env.STRAPI_API_URL}/api/uses-cases-and-sector?&populate=*`
    )
      .then(response => response.json())
      .then(jsonResponse => {
        const strapiData = jsonResponse?.data?.attributes
        setStrapiData(strapiData)
      })
  }

  const getUseCasesSectors = async () => {
    const json_data = require("./data/useCasesSectorsData.json")
    setUseCasesSectors(json_data?.data && json_data?.data)
  }
  return (
    <Layout seoData={strapiData?.seo}>
      <>
        <div className={styles?.useCasesSectors}>
          <HeaderSection
            title={headerSection?.title}
            description={headerSection?.description}
            setHeaderSectionLoaded={setHeaderSectionLoaded}
          />
          <UseCasesSection
            title={useCasesSection?.title}
            description={useCasesSection?.description}
            list={useCasesSection?.list}
            subOptionClickedID={
              props?.location?.hash?.substring(1) !== "otherIndustries"
                ? props?.location?.hash?.substring(1)
                : ""
            }
          />
          <UseCasesAppliedSection
            title={useCasesAppliedSection?.title}
            description={useCasesAppliedSection?.description}
            categories={useCasesAppliedSection?.categories}
            index={0}
            subOptionClickedID={props?.location?.hash?.substring(1)}
          />
        </div>
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
