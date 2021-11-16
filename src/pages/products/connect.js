import React from "react"
import connect from "../../../content/data/connect.json"
import Layout from "../../layouts/Layout"
import productSelStyles from "../../components/ProductsSection/productsSelector.module.scss"
import styles from "./connect.module.scss"
import ProductIntroSection from "../../components/productIntroSection/ProductIntroSection"
import ExplainedInfographics from "../../components/ExplainedInfoGraphics/ExplainedInfographics"
import CtaSection from "../../components/CtaSection/CtaSection"
import TextHightlightSection from "../../components/TextHighlightSection/TextHightlightSection"
import ProductHeadline from "../../components/ProductHeadline"
import data from "../../../content/data/government.json"

export default function Connect(props) {
  return (
    <Layout>
      <article className={styles.base}>
        
        <section className={styles.introSectionContainer}>
          <ProductIntroSection
            subtitle={connect.subtitle}
            ctaText={connect.ctaText}
            ctaLink={connect.ctaLink}
            image={connect.mainImage}
            product={connect.product}
            title={connect.title}
            description={connect.description}
          />
        </section>
        
        {/*
        <section className={styles.sectionAllinOne}>
          <ExplainedInfographics
            imgFirst
            title={connect.explainSection_one.title}
            infographic={connect.explainSection_one.infographic}
            bullets={connect.explainSection_one.bullets}
          />
        </section>
        */}
        
        <section className={styles.chipsSection}>
          <div>
            <h3>{connect.explainSection_one.title}</h3>
            <div className={styles.chipsContainer}>
              {connect.explainSection_one.bullets.map(el => {
                return (
                  <div className={styles.chip}>
                    <p>{el.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
        
        <section className={styles.growthSection}>
        
        <div className={styles.line}/>
          <ExplainedInfographics
            title={connect.explainSection.title}
            infographic={connect.explainSection.infographic}
            bullets={connect.explainSection.bullets}
          />
        </section>
        
        <CtaSection
          title={connect.ctaSection.title}
          ctaUrl={connect.ctaSection.ctaUrl}
          ctaText={connect.ctaSection.ctaText}/>
      
      </article>
    </Layout>
  )
}
