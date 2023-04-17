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
import { gatacaStudioURL } from "../../../data/globalData"

const GatacaStudioPage: React.FC<PageProps> = () => {
  const [gatacaStudioData, setGatacaStudioData] = React.useState<
    any | undefined
  >()
  const {
    firstSection,
    secondSection,
    thirdSection,
    fourthSection,
    fifthSection,
    sixthSection,
  } = gatacaStudioData ? gatacaStudioData : []

  React.useEffect(() => {
    getGatacaStudioData()
  }, [])

  const getGatacaStudioData = async () => {
    const json_data = await require("./data/gatacaStudioData.json")
    setGatacaStudioData(json_data?.data && json_data?.data)
  }

  return (
    <Layout>
      <>
        <FirstSection
          title={firstSection?.title}
          description={firstSection?.description}
          button={firstSection?.button}
        />
        <SecondSection
          title={secondSection?.title}
          list={secondSection?.list}
          description={secondSection?.description}
        />
        <ThirdSection title={thirdSection?.title} list={thirdSection?.list} />
        <FourthSection
          title={fourthSection?.title}
          description={fourthSection?.description}
          advantages={fourthSection?.advantages}
        />
        <FifthSection
          title={fifthSection?.title}
          description={fifthSection?.description}
        />
        <SixthSection
          title={sixthSection?.title}
          subTitle={sixthSection?.subTitle}
          description={sixthSection?.description}
          list={sixthSection?.list}
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

export default GatacaStudioPage
