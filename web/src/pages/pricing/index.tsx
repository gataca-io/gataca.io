import type { PageProps } from "gatsby"
import * as React from "react"
import Layout from "../../components/templates/mainLayout/MainLayout"
import { useState } from "react"
import LogosSlider from "../../components/elements/logosSlider/LogosSlider"
import SecondSection from "./sections/secondSection/SecondSection"
import FirstSection from "./sections/firstSection/FirstSection"
import * as styles from "./index.module.scss"

const Pricing: React.FC<PageProps> = () => {
  const [pricingData, setPricing] = useState<any | undefined>()
  const { firstSection, secondSection } = pricingData ? pricingData : []

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
        <FirstSection
          title={firstSection?.title}
          description={firstSection?.description}
          categories={firstSection?.categories}
          index={0}
          infoToggles={firstSection?.infoToggles}
          licenses={firstSection?.categories[0].list}
          onPremise={firstSection?.categories[1]}
        />
        <LogosSlider className={styles.slider} />
        <SecondSection
          title={secondSection?.title}
          subTitle={secondSection?.subTitle}
          info={secondSection?.info}
        />
      </>
    </Layout>
  )
}

export default Pricing
