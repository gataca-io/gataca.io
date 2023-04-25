import type { PageProps } from "gatsby"
import * as React from "react"
import { useState } from "react"
import Layout from "../../../components/templates/mainLayout/MainLayout"
import FirstSection from "./sections/firstSection/FirstSection"
import SecondSection from "./sections/secondSection/SecondSection"
import ThirdSection from "./sections/thirdSection/ThirdSection"

const BecomeAPartnerPage: React.FC<PageProps> = () => {
  const [becomeAPartnerData, setBecomeAPartner] = useState<any | undefined>()
  const { firstSection, secondSection, thirdSection } = becomeAPartnerData
    ? becomeAPartnerData
    : []

  React.useEffect(() => {
    getBecomeAPartner()
  }, [])
  const getBecomeAPartner = async () => {
    const json_data = require("./data/BecomeAPartnerData.json")
    setBecomeAPartner(json_data?.data && json_data?.data)
  }

  return (
    <Layout>
      <>
        <FirstSection
          title={firstSection?.title}
          descriptionParagraphs={firstSection?.descriptionParagraphs}
          button={firstSection?.button}
        />
        <SecondSection
          title={secondSection?.title}
          subTitle={secondSection?.subTitle}
          linkLabel={secondSection?.linkLabel}
          linkRoute={secondSection?.linkRoute}
          description={secondSection?.description}
          list={secondSection?.list}
        />
        <ThirdSection
          title={thirdSection?.title}
          description={thirdSection?.description}
          list={thirdSection?.list}
        />
        <hr></hr>
      </>
    </Layout>
  )
}

export default BecomeAPartnerPage
