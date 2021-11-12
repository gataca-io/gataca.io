import React, { useState } from "react"
import Layout from "../layouts/Layout"
import homeStyles from "./../styles/pages/home.module.scss"
import homeData from "./../../content/data/homeData.json"
import useCasesData from "./../../content/data/useCasesData.json"
import configMetaData from "./../../content/data/configMetaData.json"
import { BuildHelmet } from "../components/auxiliary/HelmetBuilder"
import CtaSection from "../components/CtaSection/CtaSection"
import PressSection from "../components/PressSection/PressSection"
import productsData from "../../content/data/productsData.json"
import BulletCenter from "../components/BulletCenter/BulletCenter"
import CarouselBulletsSection from "../components/CarouselBulletsSection/CarouselBulletsSection"
import ImagesPlusCta from "../components/ImagePlusCtaSection/ImagePlusCta"
import BigCtaSection from "../components/bigCtaSection/BigCtaSection"
import RelatedPosts from "../components/RelatedPosts/RelatedPosts"
import { useEffect } from "@storybook/addons"
import developersPageData from "../../content/data/developersPage.json"
import styles from "../components/bigCtaSection/bigcta.module.scss"
import BulletOne from "../components/BulletOne/BulletOne"
import { Link } from "gatsby"
import GreatElementsSection from "../components/GreatElementsSection/GreatElementsSection"
import data from "../../content/data/government.json"

export default function IndexPage() {
  
  const [useCasesList, setUseCasesList] = useState(useCasesData.list.slice(1))
  const [productsList, setProductsList] = useState(productsData.products.slice(1))
  
  console.log(useCasesList)
  
  // useEffect(() => {
  //
  //   return () => {
  //   }
  // }, [])
  
  
  return (
    <Layout>
      
      <BuildHelmet
        title={configMetaData.metaTitle}
        description={configMetaData.description}
        twitterImg={configMetaData.twitterImage}
        facebookImg={configMetaData.facebookImage}
        linkedInImg={configMetaData.linkedInImage}
      />
      
      <article className={homeStyles.home}>
        
        <BigCtaSection/>
        
        <section className={homeStyles.sectionPress}>
          <PressSection/>
        </section>
        
        <section className={homeStyles.sectionWallet}>
          <ImagesPlusCta
            data={homeData.introSection}
            link={configMetaData.bookACallUrl}
          />
        </section>
        
        {/* CTA Solutions */}
        
        {/* Go to products */}
        <section className={homeStyles.productsSectionStyle}>
          <h2 className={homeStyles.title}>{productsData.title}</h2>
          <div className={homeStyles.line}/>
          <div className={homeStyles.productBulletsContainer}>
            {
              productsList.map(bullet => {
                return <BulletCenter
                  bulletContainerStyles={homeStyles.productBullet}
                  data={{
                    key: bullet.title,
                    title: bullet.title,
                    image: bullet.icon,
                    subtitle: bullet.subtitle,
                    description: bullet.description,
                  }}
                />
              })
            }
          </div>
          <Link className={homeStyles.ctaButton} to={"/products"}>
            Find your solution
          </Link>
        </section>
        
        {/* World class user experience */}
        {/*        <CtaSection
          backgroundColor={"var(--bg-grey)"}
          title={homeData.ctaSection_two.title}
          ctaUrl={homeData.ctaSection_two.ctaUrl}
          ctaText={homeData.ctaSection_two.ctaText}
        />*/}
        
        {/* Carousel bullets */}
        {/*        <CarouselBulletsSection
          title={homeData.carrousel.title}
          bullets={useCasesList}
          allCtaText={homeData.carrousel.ctaText}
          allCtaLink={homeData.carrousel.ctaUrl}
        />*/}
        
        <GreatElementsSection
          title={homeData.carrousel.title}
          bullets={homeData.carrousel.list}
          allCtaText={homeData.carrousel.ctaText}
          allCtaLink={homeData.carrousel.ctaUrl}
        />
  
{/*        USE CASES
        <section className={homeStyles.chipsSection}>
          <div>
            <h3>{data.useCases.title}</h3>
            <div className={homeStyles.line}/>
            <div className={homeStyles.chipsContainer}>
              {data.useCases.elements.map(el => {
                return (
                  <div className={homeStyles.chip}>
                    <p>{el}</p>
                  </div>
                )
              })}
            </div>
            <h1>...</h1>
          </div>
        </section>
  */}
  
        {/* For developers */}
        <CtaSection
          backgroundColor={"var(--bg-grey)"}
          title={homeData.ctaSection_three.title}
          icon={homeData.ctaSection_three.icon}
          description={homeData.ctaSection_three.description}
          ctaUrl={homeData.ctaSection_three.ctaUrl}
          ctaText={homeData.ctaSection_three.ctaText}
        />
        
        {/*
          <BulletsSection
            bullets={homeData.bulletsSection.elements}
            title={homeData.bulletsSection.title}
            icon={homeData.bulletsSection.icon}
            mainDescription={homeData.bulletsSection.description}
          />
        */}
        
        {/*
          <BulletsPlusGraph data={homeData.bulletsEnhancedSection}/>
        */}
        
        <RelatedPosts/>
      </article>
    </Layout>
  )
}
