import type { PageProps } from "gatsby"
import * as React from "react"
import Layout from "../components/templates/mainLayout/MainLayout"

const ResourcesPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <main>
        <h1>Resources</h1>
      </main>
    </Layout>
  )
}

export default ResourcesPage
