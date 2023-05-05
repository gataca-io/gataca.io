import type { PageProps } from "gatsby"
import * as React from "react"
import { useState } from "react"
import Layout from "../../../components/templates/mainLayout/MainLayout"
import FirstSection from "./sections/firstSection/FirstSection"
import SecondSection from "./sections/secondSection/SecondSection"
import ThirdSection from "./sections/thirdSection/ThirdSection"
import FourthSection from "./sections/fourthSection/FourthSection"
import FifthSection from "./sections/fifthSection/FifthSection"

const BecomeAPartnerPage: React.FC<PageProps> = () => {
  const [becomeAPartnerData, setBecomeAPartner] = useState<any | undefined>()
  const [strapiData, setStrapiData] = React.useState<any | undefined>()
  const {
    firstSection,
    secondSection,
    thirdSection,
    fourthSection,
    fifthSection,
  } = becomeAPartnerData ? becomeAPartnerData : []

  React.useEffect(() => {
    getStrapiData()
    getBecomeAPartner()
  }, [])

  const getBecomeAPartner = async () => {
    const json_data = require("./data/becomeAPartnerData.json")
    setBecomeAPartner(json_data?.data && json_data?.data)
  }

  const getStrapiData = async () => {
    await fetch(
      `${process.env.STRAPI_API_URL}/api/company-partners?&populate=*`
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
        <FourthSection
          title={fourthSection?.title}
          description={fourthSection?.description}
          list={fourthSection?.list}
        />
        <FifthSection
          title={fifthSection?.title}
          description={fifthSection?.description}
        />
      </>
    </Layout>
  )
}

export default BecomeAPartnerPage
