import React from "react"
import Layout from "../layouts/Layout"
import infoStyles from "../styles/pages/info.module.scss"
import useSiteMetaData from "../static_queries/useSiteMetadata"

export default function About() {
  const { infoData } = useSiteMetaData()
  return (
    <Layout>
      <section>
        Products
      </section>
    </Layout>
  )
}
