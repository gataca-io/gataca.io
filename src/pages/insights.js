import React from "react"
import Layout from "../layouts/Layout"
import useSiteMetaData from "../static_queries/useSiteMetadata"
import MdBlogList from "../components/BlogList/MdBlogList"
import insightsStyles from "./../styles/pages/insights.module.scss"

export default function Insights() {
  const { infoData } = useSiteMetaData()
  return (
    <Layout>
      <section className={insightsStyles.base}>
        <MdBlogList />
      </section>
    </Layout>
  )
}
