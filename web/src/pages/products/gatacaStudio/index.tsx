import type { PageProps } from "gatsby"
import * as React from "react"
import Layout from "../../../components/templates/mainLayout/MainLayout"

const GatacaStudioPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <main>
        <h1>Gataca Studio</h1>
      </main>
    </Layout>
  )
}

export default GatacaStudioPage
