import type { PageProps } from "gatsby"
import * as React from "react"
import Layout from "../components/templates/mainLayout/MainLayout"

const ProductsPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <main>
        <h1>Products</h1>
      </main>
    </Layout>
  )
}

export default ProductsPage
