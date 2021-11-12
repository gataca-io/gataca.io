import React from "react"
import Layout from "../layouts/Layout"
// import useSiteMetaData from "../static_queries/useSiteMetadata"
import MdBlogList from "../components/BlogList/MdBlogList"
import insightsStyles from "./../styles/pages/insights.module.scss"
import { BuildHelmet } from "../components/auxiliary/HelmetBuilder"
import insightsMetaData from "../../content/data/insightsData.json"
import { Button } from "carbon-components-react"
import PressSection from "../components/PressSection/PressSection"
import ctaStyles from "../components/CtaSection/cta.module.scss"
import HeadLineSection from "../components/HeadLineSection/HeadLineSection"
import productsPage from "../../content/data/productsPage.json"

export default function Blog({location}) {
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
{/*        <div>
        
        <h2>
          {insightsMetaData.introSection.title}
        </h2>
        <p>{insightsMetaData.introSection.description}</p>
        <p>{insightsMetaData.introSection.mission}</p>
        </div>*/}
        <HeadLineSection
          big
          title={insightsMetaData.introSection.title}
          subtitle={insightsMetaData.introSection.description}
          description={insightsMetaData.introSection.mission}
        />
      </section>
      
      <section className={insightsStyles.ctaSection}>
        <div>
        <Button
          className={ctaStyles.ctaButton}
          disabled={false}
          target="_blank"
          href={insightsMetaData.cta.link}
          iconDescription="Button icon"
          kind="primary"
          renderIcon={undefined}
          size="default"
          tabIndex={0}
          type="button"
        > {insightsMetaData.cta.text}</Button>
        <p>*{insightsMetaData.cta.descripion}</p>
        </div>
      </section>
      
      <div className={insightsStyles.pressSection}>
        <PressSection/>
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
