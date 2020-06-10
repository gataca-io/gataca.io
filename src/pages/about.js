import React from "react"
import Layout from "../layouts/Layout"
import aboutStyles from "../styles/pages/about.module.scss"
import useSiteMetaData from "../static_queries/useSiteMetadata"
import aboutData  from "./../../content/data/aboutData.json"
import { Accordion, AccordionItem } from "carbon-components-react"
import partnersStyles from "../components/PartnersSection/partners.module.scss"
import linkedInIcon from "../../static/images/linkedin.svg"
import TeamSection from "../components/TeamSection/TeamSection"
import { BuildHelmet } from "../components/auxiliary/HelmetBuilder"
import productsData from "../../content/data/productsData.json"
import LayoutProducts from "../layouts/LayoutProducts"

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

// function TeamSection({ data }) {
//   return(
//     <section className={`bx--grid ${ aboutStyles.teamContainer }`}>
//
//       <h2>{data.title}</h2>
//       <p dangerouslySetInnerHTML={{ __html: data.description }}/>
//
//       <div className={`bx--row ${ aboutStyles.teamSection }`}>
//           {data.team.map(gato => {
//             return (
//               <div className={`bx--col-sm-16 ${ aboutStyles.personContainer }`}>
//                 <img src={gato.photo}/>
//                 <div className={aboutStyles.infoPerson}>
//                   <h3>{gato.name}</h3>
//                   <p>{gato.bio}</p>
//                   <div className={aboutStyles.rrssSection}>
//                     {gato.links.map(link=>{
//                       return <a href={link.url}>
//                           <img src={link.icon}/>
//                       </a>
//                     })}
//                   </div>
//                 </div>
//               </div>
//             )
//           })}
//       </div>
//
//     </section>
//   )
// }

function AwardsSection({data}) {
  return (
    <section className={aboutStyles.awardsContainer}>
      <div>
        <h2>{data.title}</h2>
        <div className={aboutStyles.awards}>
          {data.awards.map(award => {
            return (
                <a href={award.link} target="_blank">
              <div className={aboutStyles.award}>
                
                <div className={aboutStyles.photoContainer}>
                  <img src={award.photo}/>
                </div>
                <h3>
                  {award.title}
                </h3>
                <div dangerouslySetInnerHTML={{__html:award.description}}>
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
  const { infoData } = useSiteMetaData()
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



