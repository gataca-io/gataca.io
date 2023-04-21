import type { PageProps } from "gatsby"
import * as React from "react"
import { useState } from "react"
import Layout from "../../../components/templates/mainLayout/MainLayout"
import FirstSection from "./sections/firstSection/FirstSection"
import SecondSection from "./sections/secondSection/SecondSection"

const CareersPage: React.FC<PageProps> = () => {
  const [careersData, setCareers] = useState<any | undefined>()
  const { firstSection, secondSection } = careersData ? careersData : []

  React.useEffect(() => {
    getCareers()
  }, [])
  const getCareers = async () => {
    const json_data = require("./data/careersData.json")
    setCareers(json_data?.data && json_data?.data)
  }

  return (
    <Layout>
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
      </>
    </Layout>
  )
}

export default CareersPage
