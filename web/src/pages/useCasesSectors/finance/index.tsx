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

const FinancePage: React.FC<PageProps> = () => {
  const [financeData, setFinanceData] = React.useState<any | undefined>()
  const {
    firstSection,
    secondSection,
    thirdSection,
    fourthSection,
    fifthSection,
  } = financeData ? financeData : []

  React.useEffect(() => {
    getFinanceData()
  }, [])
  const getFinanceData = async () => {
    const json_data = require("./data/financeData.json")
    setFinanceData(json_data?.data && json_data?.data)
  }

  return (
    <Layout>
      <main>
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
      </main>
    </Layout>
  )
}

export default FinancePage
