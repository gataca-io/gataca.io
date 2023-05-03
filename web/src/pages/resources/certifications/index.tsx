import type { PageProps } from "gatsby"
import * as React from "react"
import { useState } from "react"
import Layout from "../../../components/templates/mainLayout/MainLayout"
import FirstSection from "./sections/firstSection/FirstSection"

const CertificationsPage: React.FC<PageProps> = () => {
  const [certificationsData, setcertifications] = useState<any | undefined>()
  const { firstSection } = certificationsData ? certificationsData : []

  React.useEffect(() => {
    getcertifications()
  }, [])
  const getcertifications = async () => {
    const json_data = require("./data/certificationsData.json")
    setcertifications(json_data?.data && json_data?.data)
  }

  return (
    <Layout>
      <FirstSection
        title={firstSection?.title}
        description={firstSection?.description}
        list={firstSection?.list}
      />
    </Layout>
  )
}

export default CertificationsPage
