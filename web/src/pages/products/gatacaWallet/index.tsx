import type { PageProps } from "gatsby"
import * as React from "react"
import { useState } from "react"
import Layout from "../../../components/templates/mainLayout/MainLayout"
import FirstSection from "./sections/firstSection/FirstSection"
import SecondSection from "./sections/secondSection/SecondSection"
import ThirdSection from "./sections/thirdSection/ThirdSection"
import FourthSection from "./sections/fourthSection/FourthSection"
import PreFooterCTASection from "../../../components/templates/sections/preFooterCTA/PreFooterCTA"
// import FifthSection from "./sections/fifthSection/FifthSection"
import SixthSection from "./sections/sixthSection/SixthSection"

const GatacaWalletPage: React.FC<PageProps> = () => {
  const [gatacaWalletData, setGatacaWallet] = useState<any | undefined>()
  const [fistSectionLoaded, setFistSectionLoaded] = useState<boolean>(false)
  const [secondSectionLoaded, setSecondSectionLoaded] = useState<boolean>(false)
  const [strapiData, setStrapiData] = React.useState<any | undefined>()

  const {
    firstSection,
    secondSection,
    thirdSection,
    fourthSection,
    fifthSection,
    sixthSection,
  } = gatacaWalletData ? gatacaWalletData : []

  React.useEffect(() => {
    if (!strapiData) {
      getStrapiData()
    }

    getGatacaWallet()
  }, [])

  const getGatacaWallet = async () => {
    const json_data = require("./data/gatacaWalletData.json")
    setGatacaWallet(json_data?.data && json_data?.data)
  }

  const getStrapiData = async () => {
    await fetch(`${process.env.STRAPI_API_URL}/api/gataca-wallet?&populate=*`)
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
          setFistSectionLoaded={setFistSectionLoaded}
        />
        <SecondSection
          title={secondSection?.title}
          list={secondSection?.list}
          setSecondSectionLoaded={setSecondSectionLoaded}
        />
        <ThirdSection
          title={thirdSection?.title}
          description={thirdSection?.description}
          list={thirdSection?.list}
        />
        {/* Commented until animation is ready */}
        {/* <FifthSection
          title={fifthSection?.title}
          list={fifthSection?.list}
          secondSectionLoaded={secondSectionLoaded}
          fistSectionLoaded={fistSectionLoaded}
        /> */}
        <FourthSection
          title={fourthSection?.title}
          list={fourthSection?.list}
        />
        <SixthSection
          title={sixthSection?.title}
          list={sixthSection?.list}
          credentials={sixthSection?.credentials}
        />
        <PreFooterCTASection
          title={"Ready To Start?"}
          description={
            "Protect your privacy and take control of your digital identity"
          }
          storeButtons={true}
        />
      </>
    </Layout>
  )
}

export default GatacaWalletPage
