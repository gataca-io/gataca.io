import { PageProps, navigate } from "gatsby"
import * as React from "react"
import Layout from "../../../components/templates/mainLayout/MainLayout"
import PreFooterCTASection from "../../../components/templates/sections/preFooterCTA/PreFooterCTA"
import FirstSection from "./sections/firstSection/FirstSection"
import SecondSection from "./sections/secondSection/SecondSection"
import ThirdSection from "./sections/thirdSection/ThirdSection"
import FourthSection from "./sections/fourthSection/FourthSection"
import FifthSection from "./sections/fifthSection/FifthSection"
import SixthSection from "./sections/sixthSection/SixthSection"
import { demolandURL } from "../../../data/globalData"

const GatacaStudioPage: React.FC<PageProps> = () => {
  const [gatacaStudioData, setGatacaStudioData] = React.useState<
    any | undefined
  >()
  const [strapiData, setStrapiData] = React.useState<any | undefined>()
  const {
    headerSection,
    featureSection,
    adSection,
    whyStudioSection,
    howWorksSection,
    tierSection,
  } = strapiData ? strapiData : []

  React.useEffect(() => {
    if (!strapiData) {
      getStrapiData()
    }
    // getGatacaStudioData()
  }, [])

  // const getGatacaStudioData = async () => {
  //   const json_data = await require("./data/gatacaStudioData.json")
  //   setGatacaStudioData(json_data?.data && json_data?.data)
  // }

  const getStrapiData = async () => {
    await fetch(
      `${process.env.STRAPI_API_URL}/api/gataca-studio?populate[seo]=*&populate[featureSection][populate]=*&populate[whyStudioSection][populate]=*&populate[howWorksSection][populate]=*&populate[tierSection][populate][tiers][populate]=*&populate[headerSection][populate]=*&populate[adSection][populate]=*`
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
          button={headerSection?.cta}
        />
        <SecondSection
          title={featureSection?.title}
          list={featureSection?.features?.data}
          description={featureSection?.description}
        />
        <ThirdSection
          title={adSection?.title}
          list={adSection?.ad_features?.data}
        />
        <FourthSection
          title={whyStudioSection?.title}
          description={whyStudioSection?.description}
          advantages={whyStudioSection?.advantages?.data}
        />
        <FifthSection
          title={howWorksSection?.title}
          description={howWorksSection?.description}
        />
        <SixthSection
          title={tierSection?.title}
          subTitle={tierSection?.subtitle}
          description={tierSection?.description}
          list={tierSection?.tiers.data}
        />
        <PreFooterCTASection
          title={"Ready to start?"}
          description={
            "Create an account in Gataca Studio and start experiencing decentralized identity today. Fast & seamless integration"
          }
          leftButton={{
            label: "Contact us",
            style: "outlined",
            fillColor: "white",
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

export default GatacaStudioPage
