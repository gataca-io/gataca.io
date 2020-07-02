import React from "react"
import Layout from "../layouts/Layout"
import aboutStyles from "../styles/pages/about.module.scss"
// import useSiteMetaData from "../static_queries/useSiteMetadata"

/*
function IntroSection(props) {
  return (
    <div className={aboutStyles.container}>
      <h2>{props.data.title}</h2>
      <p>{props.data.description}</p>
    </div>
  )
}
*/

export default function PrivacyPolicies() {
  return (
    <Layout>
      <section className={aboutStyles.base}>
        <h2> Privacy Polcies</h2>
      </section>
    </Layout>
  )
}



