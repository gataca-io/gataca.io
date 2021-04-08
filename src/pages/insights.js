import React from "react"
import Layout from "../layouts/Layout"
// import useSiteMetaData from "../static_queries/useSiteMetadata"
import MdBlogList from "../components/BlogList/MdBlogList"
import insightsStyles from "./../styles/pages/insights.module.scss"
import { BuildHelmet } from "../components/auxiliary/HelmetBuilder"
import insightsMetaData from "../../content/data/insightsData.json"
import { Button } from "carbon-components-react"
import Press from "../components/PressSection/Press"

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
      
      <section className={insightsStyles.introSection}>
        <h2>
          {insightsMetaData.introSection.title}
        </h2>
        <p>{insightsMetaData.introSection.description}</p>
        <p>{insightsMetaData.introSection.mission}</p>
      </section>
      
      <section className={insightsStyles.ctaSection}>
          <Button target="_blank" href={insightsMetaData.cta.link}>{insightsMetaData.cta.text}</Button>
          <p>*{insightsMetaData.cta.descripion}</p>
      </section>
      
      <div className={insightsStyles.pressSection}>
      
      <Press/>
      </div>
      
      <section className={insightsStyles.base}>
        <MdBlogList/>
      </section>
  
      <section className={insightsStyles.ctaSection}>
        <Button target="_blank" href={insightsMetaData.cta.link}>{insightsMetaData.cta.text}</Button>
        <p>*{insightsMetaData.cta.descripion}</p>
      </section>
      
    </Layout>
  )
}
