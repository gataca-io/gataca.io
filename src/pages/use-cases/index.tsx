import React, {useEffect, useState} from "react";
import useCasesData from "../../../content/data/useCasesData.json";
import useCasesPageData from "../../../content/data/useCasesPage.json";
import {BuildHelmet} from "../../components/auxiliary/HelmetBuilder";
import BigBullet from "../../components/BigBullet/BigBullet";
import Blurrycircle from "../../components/blurryCircle/blurryCircle";
import BulletCenter from "../../components/BulletCenter/BulletCenter";
import CtaSection from "../../components/CtaSection/CtaSection";
import HeadLineSection from "../../components/HeadLineSection/HeadLineSection";
import Layout from "../../layouts/Layout";
import styles from "./indexUseCases.module.scss";


type IUseCasesProps = {}

const UseCases: React.FC<IUseCasesProps> = ({}) => {

  const [useCasesList, setUseCasesList] = useState<any>(useCasesData.list.slice(1))
  useEffect(() => {

  }, [])

  return (
    <Layout>
      <BuildHelmet
        title={useCasesPageData.metas.title}
        description={useCasesPageData.metas.description}
        twitterImg={useCasesPageData.metas.twitterImage}
        facebookImg={useCasesPageData.metas.facebookImage}
        linkedInImg={useCasesPageData.metas.facebookImage}
      />

      <section className={styles.headLineContainer}>
        <div className={styles.circle2}/>
        <div className={styles.circle3}/>
        <div className={styles.circle4}/>
        <Blurrycircle size={200}/>
        <HeadLineSection
          big
          title={useCasesPageData.headline.title}
          subtitle={useCasesPageData.headline.subtitle}
        />
      </section>

      <section className={styles.sectionStyleWraps}>
        <h2>{useCasesPageData.firstSection.title}</h2>
        <div className={styles.line}/>
        <div>
          {
            useCasesPageData.firstSection.bullets.map(bullet => {
              return <BulletCenter
                bulletContainerStyles={styles.bulletStyle}
                key={bullet.title}
                data={bullet}/>
            })
          }
        </div>
      </section>

{/*      <TextBulletsSection
        title={useCasesPageData.textBulletsSection.title}
        textBullets={useCasesPageData.textBulletsSection.textBullets}
      />*/}

{/*      <GreatElementsSection
        title={useCasesPageData.bigBulletsSection.title}
        bullets={useCasesList}
      />*/}

      <section className={styles.sectionStyle}>
        <div>
          <h2>{useCasesPageData.secondSection.title}</h2>
          <h3>{useCasesPageData.secondSection.subtitle}</h3>
          {/*<div className={styles.line}/>*/}
          {
            useCasesPageData.secondSection.bullets.map((bullet: any) => {
              return <BigBullet
                bulletsStyles={styles.sectorsBulletStyle}
                key={bullet.title}
                title={bullet.title}
                description={bullet.description}
                image={bullet.image}
                ctaText={"Learn more"}
                ctaUrl={bullet.link}
              />
            })
          }
        </div>
      </section>


      <CtaSection
        ctaText={useCasesPageData.bottomSection.buttonText}
        ctaUrl={useCasesPageData.bottomSection.buttonLink}
        title={useCasesPageData.bottomSection.title}
        description={useCasesPageData.bottomSection.subtitle}
      />

    </Layout>
  )
}

UseCases.defaultProps = {}

export default UseCases
