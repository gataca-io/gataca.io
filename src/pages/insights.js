import React from "react"
import Layout from "../layouts/Layout"
import useSiteMetaData from "../static_queries/useSiteMetadata"
import MdBlogList from "../components/BlogList/MdBlogList"

export default function Insights() {
  const { infoData } = useSiteMetaData()
  return (
    <Layout>
      <section>
        <MdBlogList />
      </section>
    </Layout>
  )
}
