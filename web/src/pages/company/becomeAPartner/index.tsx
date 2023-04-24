import type { PageProps } from "gatsby"
import * as React from "react"
import { useState } from "react"
import Layout from "../../../components/templates/mainLayout/MainLayout"
import FirstSection from "./sections/firstSection/FirstSection"

const BecomeAPartnerPage: React.FC<PageProps> = () => {
  const [becomeAPartnerData, setBecomeAPartner] = useState<any | undefined>()
  const { firstSection } = becomeAPartnerData ? becomeAPartnerData : []

  React.useEffect(() => {
    getBecomeAPartner()
  }, [])
  const getBecomeAPartner = async () => {
    const json_data = require("./data/BecomeAPartnerData.json")
    setBecomeAPartner(json_data?.data && json_data?.data)
  }

  return (
    <Layout>
      <FirstSection
        title={firstSection?.title}
        descriptionParagraphs={firstSection?.descriptionParagraphs}
        button={firstSection?.button}
      />
      <hr></hr>
    </Layout>
  )
}

export default BecomeAPartnerPage
