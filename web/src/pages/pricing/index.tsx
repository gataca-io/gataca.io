import * as React from "react"
import { useState } from "react"
import Layout from "../../components/templates/mainLayout/MainLayout"
import LogosSlider from "../../components/elements/logosSlider/LogosSlider"
import FirstSection from "./sections/firstSection/FirstSection"
import SecondSection from "./sections/secondSection/SecondSection"
import * as styles from "./index.module.scss"
import { PageProps } from "gatsby"

const Pricing: React.FC<PageProps> = props => {
  const [pricingData, setPricing] = useState<any | undefined>()
  const [strapiData, setStrapiData] = React.useState<any | undefined>()
  const { firstSection, secondSection } = pricingData ? pricingData : []

  React.useEffect(() => {
    if (!strapiData) {
      getStrapiData()
    }
    getPricing()
  }, [])

  const getPricing = async () => {
    const json_data = require("./data/pricingData.json")
    setPricing(json_data?.data && json_data?.data)
  }

  const getStrapiData = async () => {
    await fetch(`${process.env.STRAPI_API_URL}/api/pricing?&populate=*`)
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
          categories={firstSection?.categories}
          index={0}
          infoToggles={firstSection?.infoToggles}
          licenses={firstSection?.categories[0].list}
          onPremise={firstSection?.categories[1]}
          subOptionClickedID={props?.location?.hash?.substring(1)}
        />
        <LogosSlider className={styles?.slider} lightLogos={true} />
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
