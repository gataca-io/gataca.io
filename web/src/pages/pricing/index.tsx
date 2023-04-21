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

const UseCasesPage: React.FC<PageProps> = () => {
  const [pricingData, setPricing] = useState<any | undefined>()
  const [headerSectionLoaded, setHeaderSectionLoaded] = useState<boolean>(false)
  const { headerSection, useCasesSection, useCasesAppliedSection } = pricingData
    ? pricingData
    : []
  // const onPremiseData =
  //   useCasesAppliedSection?.categories[1] &&
  //   ({ title, paragraphs, button } = useCasesAppliedSection?.categories[1])
  React.useEffect(() => {
    getPricing()
  }, [])

  const getPricing = async () => {
    const json_data = require("./data/pricingData.json")
    setPricing(json_data?.data && json_data?.data)
  }
  return (
    <Layout>
      <>
        <div className={styles?.useCasesSectors}>
          <UseCasesAppliedSection
            title={useCasesAppliedSection?.title}
            description={useCasesAppliedSection?.description}
            categories={useCasesAppliedSection?.categories}
            index={0}
            licenses={useCasesAppliedSection?.categories[0].list}
            onPremise={useCasesAppliedSection?.categories[1]}
          />
        </div>
        <LogosSlider className={styles.slider} />
      </>
    </Layout>
  )
}

export default UseCasesPage
