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
  const [pricingStrapiData, setStrapiData] = React.useState<any | undefined>()
  const { firstSection, secondSection } = pricingData ? pricingData : []
  const {
    faqSection,
    cloudSection,
    onPremiseSection,
  } = pricingStrapiData ? pricingStrapiData : []

  React.useEffect(() => {
    if (!pricingStrapiData) {
      getStrapiData()
    }
    getPricing()
  }, [])

  const getPricing = async () => {
    const json_data = require("./data/pricingData.json")
    setPricing(json_data?.data && json_data?.data)
  }

  const getStrapiData = async () => {
    // await fetch(`${process.env.STRAPI_API_URL}/api/pricing?&populate=*`)
    await fetch(`${process.env.STRAPI_API_URL}/api/pricing?populate%5BfaqSection%5D%5Bpopulate%5D%5Binfo%5D%5Bpopulate%5D=*&populate%5BcloudSection%5D%5Bpopulate%5D%5Btiers%5D%5Bpopulate%5D=*&populate%5BonPremiseSection%5D%5Bpopulate%5D=*`)
      .then(response => response.json())
      .then(jsonResponse => {
        const pricingStrapiData = jsonResponse?.data?.attributes
        setStrapiData(pricingStrapiData)
      })
  }

  return (
    <Layout seoData={pricingStrapiData?.seo}>
      <>
        <FirstSection
          title={pricingStrapiData?.title}
          description={pricingStrapiData?.description}
          categories={firstSection?.categories}
          index={0}
          infoToggles={firstSection?.infoToggles}
          licenses={cloudSection?.tiers.data}
          onPremise={onPremiseSection}
          subOptionClickedID={props?.location?.hash?.substring(1)}
        />

        <LogosSlider className={styles?.slider} lightLogos={true} />
        <SecondSection
          title={faqSection?.title}
          subTitle={faqSection?.subTitle}
          info={faqSection?.info}
        />
      </>
    </Layout>
  )
}

export default Pricing
