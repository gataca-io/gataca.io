import React from "react"
import Layout from "../layouts/Layout"
import aboutStyles from "../styles/pages/about.module.scss"
import useSiteMetaData from "../static_queries/useSiteMetadata"
import aboutData  from "./../../content/data/aboutData.json"
import { Accordion, AccordionItem } from "carbon-components-react"
import partnersStyles from "../components/PartnersSection/partners.module.scss"

function IntroSection(props) {
  return (
    <div className={aboutStyles.introContainer}>
      <div className={`bx--grid`}>
        <h2>{props.data.title}</h2>
        <p>{props.data.description}</p>
      </div>
    </div>
  )
}

function TeamSection({ data }) {
  return(
    <section className={`bx--grid ${ aboutStyles.teamContainer }`}>
      
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      <div className={`bx--row ${ aboutStyles.row }`}>
          {data.team.map(gato => {
            return (
              <div className={`bx--col-sm-16 ${ aboutStyles.personContainer }`}>
                <img src={gato.photo}/>
                <p>{gato.name}</p>
                <p>{gato.bio}</p>
                <div>
                  {gato.links.map(link=>{
                    return <div>
                  
                    </div>
                  })}
                </div>
              </div>
            )
          })}
      </div>
      
    </section>
  )
}

function AwardsSection({data}) {
  return (
    <section className={aboutStyles.awardsContainer}>
      <div>
        <h2>{data.title}</h2>
        <div >
          {data.awards.map(award => {
            return (
              <p>
                {award.title}
              </p>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default function About() {
  const { infoData } = useSiteMetaData()
  return (
      <Layout>
        <section className={aboutStyles.base}>
          <IntroSection data={aboutData.introSection}/>
          <TeamSection data={aboutData.teamDataSection}/>
          <AwardsSection data={aboutData.awardsDataSection}/>
        </section>
    </Layout>
  )
}



