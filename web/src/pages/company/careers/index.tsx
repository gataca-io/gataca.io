import type { PageProps } from "gatsby"
import * as React from "react"
import { useState } from "react"
import Layout from "../../../components/templates/mainLayout/MainLayout"
import FirstSection from "./sections/firstSection/FirstSection"
import SecondSection from "./sections/secondSection/SecondSection"
import ThirdSection from "./sections/thirdSection/ThirdSection"

const CareersPage: React.FC<PageProps> = () => {
  const [careersData, setCareers] = useState<any | undefined>()
  const [strapiData, setStrapiData] = React.useState<any | undefined>()
  const { firstSection, secondSection, thirdSection } = careersData
    ? careersData
    : []

  React.useEffect(() => {
    getStrapiData()
    getCareers()
  }, [])
  const getCareers = async () => {
    const json_data = require("./data/careersData.json")
    setCareers(json_data?.data && json_data?.data)
  }

  const getStrapiData = async () => {
    await fetch(`${process.env.STRAPI_API_URL}/api/company-careers?&populate=*`)
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
        />
        <SecondSection
          title={secondSection?.title}
          description={secondSection?.description}
          list={secondSection?.list}
        />
        <ThirdSection
          title={thirdSection?.title}
          subTitle={thirdSection?.subTitle}
          description={thirdSection?.description}
        />
      </>
    </Layout>
  )
}

export default CareersPage
