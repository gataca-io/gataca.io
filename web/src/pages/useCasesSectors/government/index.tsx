import type { PageProps } from "gatsby"
import * as React from "react"
import Layout from "../../../components/templates/mainLayout/MainLayout"
import { navigate } from "gatsby"
import { useState } from "react"
import PreFooterCTASection from "../../../components/templates/sections/preFooterCTA/PreFooterCTA"
import FirstSection from "./sections/firstSection/FirstSection"
import SecondSection from "./sections/secondSection/SecondSection"
import ThirdSection from "./sections/thirdSection/ThirdSection"
import FourthSection from "./sections/fourthSection/FourthSection"
import FifthSection from "./sections/fifthSection/FifthSection"

const GovernmentPage: React.FC<PageProps> = () => {
  const [governmentData, setGovernment] = useState<any | undefined>()
  const {
    firstSection,
    secondSection,
    thirdSection,
    fourthSection,
    fifthSection,
  } = governmentData ? governmentData : []

  React.useEffect(() => {
    getGovernment()
  }, [])
  const getGovernment = async () => {
    const json_data = require("./data/governmentData.json")
    setGovernment(json_data?.data && json_data?.data)
  }
  return (
    <Layout>
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
          title={"Want to know more?"}
          description={
            "Get to know our expertise and case studies working with entities in the public sector"
          }
          rightButton={{
            label: "Contact us",
            action: () => navigate("/company/contactUs"),
          }}
        />
      </>
    </Layout>
  )
}

export default GovernmentPage
