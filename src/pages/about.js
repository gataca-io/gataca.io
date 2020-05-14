import React from "react"
import Layout from "../layouts/Layout"
import aboutStyles from "../styles/pages/about.module.scss"
import useSiteMetaData from "../static_queries/useSiteMetadata"
import aboutData  from "./../../content/data/aboutData.json"

function IntroSection(props) {
  return (
    <div className={aboutStyles.container}>
      <h2>{props.data.title}</h2>
      <p>{props.data.description}</p>
    </div>
  )
}

export default function About() {
  const { infoData } = useSiteMetaData()
  return (
      <Layout>
        <section className={aboutStyles.base}>
          <IntroSection data={aboutData.introSection}/>
          <div>
            <h1>Awards & Milestones</h1>
          </div>
          <div>
            <h1>Team</h1>
          </div>
        </section>
    </Layout>
  )
}



