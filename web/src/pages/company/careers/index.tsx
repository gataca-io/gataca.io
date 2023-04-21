import type { PageProps } from "gatsby"
import * as React from "react"
import { useState } from "react"
import Layout from "../../../components/templates/mainLayout/MainLayout"
import FirstSection from "./sections/firstSection/FirstSection"

const CareersPage: React.FC<PageProps> = () => {
  const [careersData, setCareers] = useState<any | undefined>()
  const { firstSection } = careersData ? careersData : []

  React.useEffect(() => {
    getaboutUs()
  }, [])
  const getaboutUs = async () => {
    const json_data = require("./data/careersData.json")
    setCareers(json_data?.data && json_data?.data)
  }

  return (
    <Layout>
      <FirstSection
        title={firstSection?.title}
        descriptionParagraphs={firstSection?.descriptionParagraphs}
      />
    </Layout>
  )
}

export default CareersPage
