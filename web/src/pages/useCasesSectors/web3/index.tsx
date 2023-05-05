import type { PageProps } from "gatsby"
import * as React from "react"
import Layout from "../../../components/templates/mainLayout/MainLayout"
import { navigate } from "gatsby"
import { gatacaStudioURL } from "../../../data/globalData"
import PreFooterCTASection from "../../../components/templates/sections/preFooterCTA/PreFooterCTA"
import FirstSection from "./sections/firstSection/FirstSection"
import SecondSection from "./sections/secondSection/SecondSection"
import ThirdSection from "./sections/thirdSection/ThirdSection"
import FourthSection from "./sections/fourthSection/FourthSection"
import FifthSection from "./sections/fifthSection/FifthSection"

const Web3Page: React.FC<PageProps> = () => {
  const [web3Data, setWeb3Data] = React.useState<any | undefined>()
  const [strapiData, setStrapiData] = React.useState<any | undefined>()
  const {
    firstSection,
    secondSection,
    thirdSection,
    fourthSection,
    fifthSection,
  } = web3Data ? web3Data : []

  React.useEffect(() => {
    getStrapiData()
    getWeb3Data()
  }, [])

  const getWeb3Data = async () => {
    const json_data = require("./data/web3Data.json")
    setWeb3Data(json_data?.data && json_data?.data)
  }

  const getStrapiData = async () => {
    await fetch(`${process.env.STRAPI_API_URL}/api/sectors-web3?&populate=*`)
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
          contactButton={firstSection?.contactButton}
        />
        <SecondSection steps={secondSection?.steps} />
        <ThirdSection
          title={thirdSection?.title}
          description={thirdSection?.description}
          list={thirdSection?.list}
        />
        <FourthSection
          title={fourthSection?.title}
          description={fourthSection?.description}
          list={fourthSection?.list}
        />
        <FifthSection
          title={fifthSection?.title}
          description={fifthSection?.description}
        />
        <PreFooterCTASection
          title={"Ready to start?"}
          description={
            "Create an account in Gataca Studio and start experiencing decentralized identity today. Fast & seamless integration"
          }
          leftButton={{
            label: "Contact us",
            action: () => navigate("/company/contactUs"),
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

export default Web3Page
