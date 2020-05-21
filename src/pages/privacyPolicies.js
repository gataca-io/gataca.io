import React from "react"
import Layout from "../layouts/Layout"
import aboutStyles from "../styles/pages/about.module.scss"
import useSiteMetaData from "../static_queries/useSiteMetadata"
import aboutData  from "./../../content/data/aboutData.json"
import { Accordion, AccordionItem } from "carbon-components-react"

function IntroSection(props) {
  return (
    <div className={aboutStyles.container}>
      <h2>{props.data.title}</h2>
      <p>{props.data.description}</p>
    </div>
  )
}

export default function PrivacyPolicies() {
  const { infoData } = useSiteMetaData()
  return (
    <Layout>
      <section className={aboutStyles.base}>
        <h2> Privacy Polcies</h2>
      </section>
    </Layout>
  )
}



