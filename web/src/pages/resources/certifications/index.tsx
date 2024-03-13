import type { PageProps } from "gatsby"
import * as React from "react"
import { useState } from "react"
import Layout from "../../../components/templates/mainLayout/MainLayout"
import FirstSection from "./sections/firstSection/FirstSection"

const CertificationsPage: React.FC<PageProps> = () => {
  // const [certificationsData, setcertifications] = useState<any | undefined>()
  const [strapiData, setStrapiData] = React.useState<any | undefined>()
  const { headerSection, certifications } = strapiData ? strapiData : []

  React.useEffect(() => {
    if (!strapiData) {
      getStrapiData()
    }
    // getcertifications()
  }, [])
  // const getcertifications = async () => {
  //   const json_data = require("./data/certificationsData.json")
  //   setcertifications(json_data?.data && json_data?.data)
  // }

  const getStrapiData = async () => {
    await fetch(
      `${process.env.STRAPI_API_URL}/api/resources-certification?populate%5Bseo%5D=*&populate%5BheaderSection%5D%5Bpopulate%5D=*&populate%5Bcertifications%5D%5Bpopulate%5D=*`
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
        title={headerSection?.title}
        description={headerSection?.description}
        list={certifications?.data}
      />
    </Layout>
  )
}

export default CertificationsPage
