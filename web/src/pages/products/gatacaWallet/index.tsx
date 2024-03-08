import type { PageProps } from "gatsby"
import * as React from "react"
import { useState } from "react"
import Layout from "../../../components/templates/mainLayout/MainLayout"
import FirstSection from "./sections/firstSection/FirstSection"
import SecondSection from "./sections/secondSection/SecondSection"
import FourthSection from "./sections/fourthSection/FourthSection"
import PreFooterCTASection from "../../../components/templates/sections/preFooterCTA/PreFooterCTA"
import SixthSection from "./sections/sixthSection/SixthSection"
import FifthSection from "./sections/fifthSection/FifthSection"
import ThirdSection from "./sections/thirdSection/ThirdSection"

const GatacaWalletPage: React.FC<PageProps> = () => {
  const [fistSectionLoaded, setFistSectionLoaded] = useState<boolean>(false)
  const [secondSectionLoaded, setSecondSectionLoaded] = useState<boolean>(false)
  const [strapiData, setStrapiData] = React.useState<any | undefined>()

  const {
    headerSection,
    benefitSection,
    featureSection,
    walletAdFeature,
    howSection,
    credentialSection,
  } = strapiData ? strapiData : []

  React.useEffect(() => {
    if (!strapiData) {
      getStrapiData()
    }
  }, [])

  const getStrapiData = async () => {
    await fetch(`${process.env.STRAPI_API_URL}/api/gataca-wallet?populate%5Bseo%5D=*&populate%5BheaderSection%5D%5Bpopulate%5D=*&populate%5BbenefitSection%5D%5Bpopulate%5D=*&populate%5BfeatureSection%5D%5Bpopulate%5D=*&populate%5BwalletAdFeature%5D%5Bpopulate%5D=*&populate%5BhowSection%5D%5Bpopulate%5D=*&populate%5BcredentialSection%5D%5Bpopulate%5D=*`)
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
              setFistSectionLoaded={setFistSectionLoaded}
          />
          <SecondSection
              title={benefitSection?.title}
              list={benefitSection?.benefits.data}
              setSecondSectionLoaded={setSecondSectionLoaded}
          />

          <ThirdSection
              title={featureSection?.title}
              list={featureSection?.wallet_features.data}
              description={featureSection?.description}
          />
          <FourthSection
              title={walletAdFeature?.title}
              list={walletAdFeature?.wallet_ad_features.data}
          />
          <FifthSection
              title={howSection?.title}
              description={howSection?.description}
              list={howSection?.operations.data}
          />
          <SixthSection
              title={credentialSection?.title}
              list={credentialSection?.properties.data}
              credentials={credentialSection?.credentials.data}
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
