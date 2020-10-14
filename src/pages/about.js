import React from "react"
import Layout from "../layouts/Layout"
import aboutStyles from "../styles/pages/about.module.scss"
// import useSiteMetaData from "../static_queries/useSiteMetadata"
import aboutData from "./../../content/data/aboutData.json"
import TeamSection from "../components/TeamSection/TeamSection"
import { BuildHelmet } from "../components/auxiliary/HelmetBuilder"

function IntroSection({ data }) {
  return (
    <div className={aboutStyles.introContainer}>
      <div className={`bx--grid`}>
        <h2>{data.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: data.description }}/>
      </div>
    </div>
  )
}

function AwardsSection({ data }) {
  return (
    <section className={aboutStyles.awardsContainer}>
      <div>
        <h2>{data.title}</h2>
        <div className={aboutStyles.awards}>
          {data.awards.map(award => {
            return (
              <a href={award.link} target="_blank" rel="noreferrer">
                <div className={aboutStyles.award}>
                  <div className={aboutStyles.photoContainer}>
                    <img src={award.photo} alt={award.title}/>
                  </div>
                  <h3>
                    {award.title}
                  </h3>
                  <div dangerouslySetInnerHTML={{ __html: award.description }}>
                  </div>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default function About() {
  // const { infoData } = useSiteMetaData()
  return (
    <Layout>
      <BuildHelmet
        title={aboutData.metas.title}
        description={aboutData.metas.description}
      />
      <section className={aboutStyles.base}>
        <IntroSection data={aboutData.introSection}/>
        {/*<TeamSection data={aboutData.teamDataSection}/>*/}
        <TeamSection/>
        <AwardsSection data={aboutData.awardsDataSection}/>
      </section>
    </Layout>
  )
}



