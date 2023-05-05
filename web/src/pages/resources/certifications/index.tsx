import type { PageProps } from "gatsby"
import * as React from "react"
import { useState } from "react"
import Layout from "../../../components/templates/mainLayout/MainLayout"
import FirstSection from "./sections/firstSection/FirstSection"

const CertificationsPage: React.FC<PageProps> = () => {
  const [certificationsData, setcertifications] = useState<any | undefined>()
  const [strapiData, setStrapiData] = React.useState<any | undefined>()
  const { firstSection } = certificationsData ? certificationsData : []

  React.useEffect(() => {
    if (!strapiData) {
      getStrapiData()
    }
    getcertifications()
  }, [])
  const getcertifications = async () => {
    const json_data = require("./data/certificationsData.json")
    setcertifications(json_data?.data && json_data?.data)
  }

  const getStrapiData = async () => {
    await fetch(
      `${process.env.STRAPI_API_URL}/api/resources-certification?&populate=*`
    )
      .then(response => response.json())
      .then(jsonResponse => {
        const strapiData = jsonResponse?.data?.attributes
        setStrapiData(strapiData)
      })
  }

  return (
    <Layout seoData={strapiData?.seo}>
      <FirstSection
        title={firstSection?.title}
        description={firstSection?.description}
        list={firstSection?.list}
      />
    </Layout>
  )
}

export default CertificationsPage
