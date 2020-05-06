import React from "react"
import Layout from "../components/Layout/Layout"
import infoStyles from "../styles/pages/info.module.scss"
import useSiteMetaData from "../static_queries/useSiteMetadata"
import BlogList from "../components/BlogList/BlogList"

export default function Insights() {
  const { infoData } = useSiteMetaData()
  return (
    <Layout>
      <section>
        <BlogList />
      </section>
    </Layout>
  )
}
