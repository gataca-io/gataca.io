import type { PageProps } from "gatsby"
import * as React from "react"
import Layout from "../../../components/templates/mainLayout/MainLayout"

const DocumentationPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <main>
        <h1>Documentation</h1>
      </main>
    </Layout>
  )
}

export default DocumentationPage
