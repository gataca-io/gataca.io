import React from "react"
// import useSiteMetaData from "../static_queries/useSiteMetadata"
import wallet from "../../../content/data/wallet.json"
import Layout from "../../layouts/Layout"
import styles from "./wallet.module.scss"
import BulletOne from "../../components/BulletOne/BulletOne"
import Headline_Plus_Bullets from "../../components/Headline_Bullets/Headline_Plus_Bullets"
import CtaSection from "../../components/CtaSection/CtaSection"
import ProductIntroSection from "../../components/productIntroSection/ProductIntroSection"
import certify from "../../../content/data/certify.json"
import ProductHeadline from "../../components/ProductHeadline"
import data from "../../../content/data/government.json"
import BulletCenter from "../../components/BulletCenter/BulletCenter"
import Credential from "../../components/Credential/Credential"

export default function Wallet(props) {
  // const { infoData } = useSiteMetaData()
  // console.log("PRODUCTS PAGE DATA => ", props.data)
  const walletCtas = (
    <>
      <div className={styles.marketsContainer}>
        <a href={wallet.ctaAndroidLink}>
          <img src={wallet.androidMarketImage} alt={"Gataca Google Play"}/>
        </a>
        <a href={wallet.ctaIosLink}>
          <img src={wallet.iosMarketImage} alt={"Gataca Ios"}/>
        </a>
      </div>
    </>
  )
  return (
    <Layout>
      <section className={styles.base}>
        
        {/*<ProductHeadline text={wallet.product}/>*/}
        <section className={styles.introContainer}>
          <ProductIntroSection
            title={wallet.title}
            subtitle={wallet.subtitle}
            ctaText={wallet.ctaText}
            // icon={wallet.icon}
            image={wallet.mainImage}
            product={wallet.product}
            description={wallet.description}
            imageContStyles={styles.walletImageContainer}
            customCta={
              walletCtas
            }
          />
        </section>
        
        {/*CREDENTIALS*/}
        <section className={styles.chipsSection}>
          <div>
            <h2>{wallet.credentials.title}</h2>
            <div className={styles.chipsContainer}>
              <div>
              {wallet.credentials.list.map(cred => {
                return (
                  <div className={styles.chip}>
                    <Credential cred={cred}/>
                  </div>
                )
              })}
              </div>
            </div>
          </div>
        </section>
        
        
        {/*BULLETS*/}
        <div className={styles.detailContainer}>
          <h2>{wallet.bullets.title}</h2>
          <p>{wallet.bullets.subtitle}</p>
          {/*<div className={styles.line}/>*/}
          <div className={styles.bulletsContainer}>
            {wallet.bullets.list.map(bullet => {
              return (
                <BulletCenter
                  bulletContainerStyles={styles.bulletStyle}
                  data={bullet}/>
              )
            })}
          </div>
        </div>
        
        {/*DISCOVER - WALLET IMAGES*/}
        <div className={styles.mainImagesContainer}>
          <h2>{wallet.imageCarrousel.title}</h2>
          <div className={styles.imagesContainer}>
            {wallet.imageCarrousel.list.map(i => {
              return <div className={styles.mainImage}>
                <p>{i.text}</p>
                <img src={i.image} alt={i.alt}/>
              </div>
            })}
          </div>
        </div>
        
        {/*
        <Headline_Plus_Bullets
          headline={wallet.headlineblock.headline}
          bullets={wallet.headlineblock.bullets}
        />
        */}
        
        <section className={styles.ctaWrapper}>
          
          <CtaSection
            ctaUrl={""}
            ctaText={wallet.ctaSection.ctaText}
            customCta={walletCtas}
            title={wallet.ctaSection.title}/>
        </section>
      
      </section>
    </Layout>
  )
}
