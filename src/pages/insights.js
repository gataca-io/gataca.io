import React from "react"
import Layout from "../layouts/Layout"
// import useSiteMetaData from "../static_queries/useSiteMetadata"
import MdBlogList from "../components/BlogList/MdBlogList"
import insightsStyles from "./../styles/pages/insights.module.scss"
import { BuildHelmet } from "../components/auxiliary/HelmetBuilder"
import insightsMetaData from "../../content/data/insightsData.json"

export default function Insights() {
  return (
    <Layout>
      <BuildHelmet
        title={insightsMetaData.metas.title}
        description={insightsMetaData.metas.description}
        facebookImg={insightsMetaData.metas.facebookImage}
        twitterImg={insightsMetaData.metas.twitterImage}
        linkedInImg={insightsMetaData.metas.linkedInImage}
      />
      <section className={insightsStyles.base}>
        <MdBlogList />
      </section>
    </Layout>
  )
}
