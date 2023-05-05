import type { PageProps } from "gatsby"
import * as React from "react"
import Layout from "../../../components/templates/mainLayout/MainLayout"

const DocumentationPage: React.FC<PageProps> = () => {
  const [strapiData, setStrapiData] = React.useState<any | undefined>()

  React.useEffect(() => {
    getStrapiData()
  }, [])

  const getStrapiData = async () => {
    await fetch(
      `${process.env.STRAPI_API_URL}/api/resources-documentation?&populate=*`
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
        <h1>Documentation</h1>
      </>
    </Layout>
  )
}

export default DocumentationPage
