import React from "react"
import Layout from "../../layouts/Layout"
import aboutStyles from "../../styles/pages/about.module.scss"
// import useSiteMetaData from "../static_queries/useSiteMetadata"
import aboutData from "../../../content/data/aboutData.json"
import TeamSection from "../../components/TeamSection/TeamSection"
import { BuildHelmet } from "../../components/auxiliary/HelmetBuilder"
import styles from "../use-cases/education.module.scss"
import data from "../../../content/data/education.json"
import BigBullet from "../../components/BigBullet/BigBullet"
import Clients from "../../components/ClientsSection/Clients"
import HeadLineSection from "../../components/HeadLineSection/HeadLineSection"
import GreatElementsSection from "../../components/GreatElementsSection/GreatElementsSection"
import homeData from "../../../content/data/homeData.json"

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
                    <img src={award.photo.publicURL} alt={award.title}/>
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

const defaultProps = {

}

const About = () => {
  // const { infoData } = useSiteMetaData()
  return (
    <Layout>
      <BuildHelmet
        title={aboutData.metas.title}
        description={aboutData.metas.description}
      />
      
      <section className={aboutStyles.headlineContainer}>
        <div className={styles.circle2}/>
        <div className={styles.circle3}/>
        <div className={styles.circle4}/>
        <div className={styles.circle5}/>
        <HeadLineSection
          big
          title={aboutData.bigBulletsSection.title}
        />
      </section>
      <section>
        <GreatElementsSection
          bullets={aboutData.bigBulletsSection.bullets}
        />
      </section>
      
      <section className={aboutStyles.base}>
      
{/*
        <section className={styles.sectionStyle}>
          <div>
            {
              aboutData.bigBulletsSection.bullets.map((bullet, i) => {
                return <BigBullet
                  right={i % 2 === 0}
                  imgSize={"xl"}
                  key={bullet.title}
                  title={bullet.title}
                  description={bullet.description}
                  image={bullet.image}/>
              })
            }
          </div>
        </section>
*/}

        {/*<IntroSection data={aboutData.introSection}/>*/}
        {/*<TeamSection data={aboutData.teamDataSection}/>*/}
        
        <TeamSection/>
        <Clients/>
        <AwardsSection data={aboutData.awardsDataSection}/>
      </section>
    </Layout>
  )
}

About.defaultProps = defaultProps;

export default About;
