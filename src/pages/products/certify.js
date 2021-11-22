import React from "react"
import certify from "../../../content/data/certify.json"
import Layout from "../../layouts/Layout"
import productSelStyles from "../../components/ProductsSection/productsSelector.module.scss"
import credentialsStyles from "./certify.module.scss"
import BulletOne from "../../components/BulletOne/BulletOne"
import ExplainedInfographics from "../../components/ExplainedInfoGraphics/ExplainedInfographics"
import styles from "./certify.module.scss"
import ProductIntroSection from "../../components/productIntroSection/ProductIntroSection"
import HowItWorksSection from "../../components/HowItWorksSection/HowItWorksSection"
import CtaSection from "../../components/CtaSection/CtaSection"
import ProductHeadline from "../../components/ProductHeadline"
import connectStyles from "../../components/ProductsSection/connectComponent.module.scss"
import { SizeMe } from "react-sizeme"

export default function Certify(props) {
  return (
    <Layout>
      <section className={productSelStyles.base}>
        
        {/*<ProductHeadline text={certify.product}/>*/}
        
        <section className={styles.introWrapper}>
          <ProductIntroSection
            subtitle={certify.subtitle}
            ctaText={certify.ctaText}
            ctaLink={certify.ctaLink}
            image={certify.mainImage}
            product={certify.product}
            title={certify.title}
            imageContStyles={styles.imageContainer}
            description={certify.description}
          />
        </section>
        
        {/*
        <section className={credentialsStyles.detailContainer}>
          <h2>{certify.bulletsSection.title}</h2>
          <div>
            <div className={credentialsStyles.bulletsContainer}>
              {certify.bulletsSection.bullets.map(bullet => {
                return (
                  <BulletOne
                    center
                    data={bullet}
                  />
                )
              })}
            </div>
          </div>
        </section>*/}
        
        <section className={credentialsStyles.sectionStyle}>
          <div>
            <h2>{certify.bulletsSection_two.title}</h2>
            <div className={credentialsStyles.bulletsContainer}>
              {certify.bulletsSection_two.bullets.map(bullet => {
                return (
                  <BulletOne
                    bulletContainerStyles={credentialsStyles.bulletCont}
                    center
                    data={{
                      title: bullet.title,
                      description: bullet.description,
                    }}
                  />
                )
              })}
            </div>
          </div>
        </section>
        
        <SizeMe >{({ size }) => {
          return (<section className={credentialsStyles.detailContainer}>
          <h2>{certify.stepsSection.title}</h2>
          <div className={credentialsStyles.line}/>
          <div className={credentialsStyles.mainImage}>
            <img className={connectStyles.panel} src={certify.stepsSection.mainImage} alt={certify.stepsSection.title}/>
            <div className={credentialsStyles.sectionOne}>
              <BulletOne left data={certify.stepsSection.bulletOne}/>
              
              <svg width="10" height="164" viewBox="0 0 10 164" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.00001 2.00011L5 155.569" stroke="#181B5E" stroke-width="2"/>
                <circle cx="5" cy="2" r="2" fill="#181B5E"/>
                <path d="M5 155L5 162M5 162L9 158.231M5 162L0.999999 158.231" stroke="#181B5E" stroke-width="2"/>
              </svg>
            </div>
            
            <img src={certify.stepsSection.secondImage} alt={certify.stepsSection.title}/>
            
            <div className={credentialsStyles.sectionTwo}>
              <BulletOne left={size.width < 675} right={size.width > 675} data={certify.stepsSection.bulletTwo}/>
              
              
              <svg width="10" height="164" viewBox="0 0 10 164" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.00001 2.00011L5 155.569" stroke="#181B5E" stroke-width="2"/>
                <circle cx="5" cy="2" r="2" fill="#181B5E"/>
                <path d="M5 155L5 162M5 162L9 158.231M5 162L0.999999 158.231" stroke="#181B5E" stroke-width="2"/>
              </svg>
            </div>
            
            <div className={credentialsStyles.thirdImageContainer}>
              <img src={certify.stepsSection.thirdImage} alt={certify.stepsSection.title}/>
            </div>
          
          </div>
        </section>)}
        }
        </SizeMe>
        
        {/*                <HowItWorksSection
          steps={certify.stepsSection.steps}
          title={certify.stepsSection.title}
        />*/}
        
        <CtaSection
          ctaUrl={certify.ctaSection.ctaUrl}
          title={certify.ctaSection.title}
          ctaText={certify.ctaSection.ctaText}
          backgroundColor={"var(--bg-grey)"}
        />
      
      </section>
    </Layout>
  )
}
