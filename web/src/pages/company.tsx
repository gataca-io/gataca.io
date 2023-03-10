import type { PageProps } from "gatsby"
import * as React from "react"
import Layout from "../components/templates/mainLayout/MainLayout"

const CompanyPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <main>
        <h1>Company</h1>
      </main>
    </Layout>
  )
}

export default CompanyPage
