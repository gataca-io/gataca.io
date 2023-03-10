import type { PageProps } from "gatsby"
import * as React from "react"
import Layout from "../components/templates/mainLayout/MainLayout"

const UseCasesPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <main>
        <h1>UseCases</h1>
      </main>
    </Layout>
  )
}

export default UseCasesPage
