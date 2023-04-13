import type { PageProps } from "gatsby"
import * as React from "react"
import Layout from "../../../components/templates/mainLayout/MainLayout"
import PreFooterCTASection from "../../../components/templates/sections/preFooterCTA/PreFooterCTA"
import { navigate } from "gatsby"
import { gatacaStudioURL } from "../../../data/globalData"
import FirstSection from "./sections/firstSection/FirstSection"
import SecondSection from "./sections/secondSection/SecondSection"
import FourthSection from "./sections/fourthSection/FourthSection"
import FifthSection from "./sections/fifthSection/FifthSection"
import ThirdSection from "./sections/thirdSection/ThirdSection"

const FinancePage: React.FC<PageProps> = () => {
  const [financeDate, setFinanceDate] = React.useState<any | undefined>()
  const {
    firstSection,
    secondSection,
    thirdSection,
    fourthSection,
    fifthSection,
  } = financeDate ? financeDate : []

  React.useEffect(() => {
    getFinanceDate()
  }, [])
  const getFinanceDate = async () => {
    const json_data = require("./data/financeData.json")
    setFinanceDate(json_data?.data && json_data?.data)
  }

  return (
    <Layout>
      <>
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
      </>
    </Layout>
  )
}

export default FinancePage
