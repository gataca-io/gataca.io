import React, { useState } from "react"
import Layout from "../layouts/Layout"
import homeStyles from "./../styles/pages/home.module.scss"
import homeData from "./../../content/data/homeData.json"
import configMetaData from "./../../content/data/configMetaData.json"
import { BuildHelmet } from "../components/auxiliary/HelmetBuilder"
import BigCtaSection from "../components/bigCtaSection/BigCtaSection"
import RotatingCard from "../components/RotatingCard/RotatingCard"
import RelatedPosts from "../components/RelatedPosts/RelatedPosts"
import { Link } from "gatsby"
import PreLaunchModal from "../components/modals/PreLaunchModal/PreLaunchModal"
import LaunchModal from "../components/modals/LaunchModal/LaunchModal"
import preLaunchModaldata from "../../content/data/prelaunchModalData.json"
import launchModaldata from "../../content/data/launchModalData.json"

export default function IndexPage() {
  let preLaunchModalSeen
  let launchModalSeen

  const [showPreLaunchModal, setPreLaunchModal] = useState(false)
  const [showLaunchModal, setLaunchModal] = useState(false)

  if (typeof window !== "undefined") {
    window.onload = function () {
      preLaunchModalSeen = sessionStorage?.getItem("prelaunchSeen") || false
      launchModalSeen = sessionStorage?.getItem("launchSeen") || false
      setPreLaunchModal(!preLaunchModalSeen)
      setLaunchModal(!launchModalSeen)
    }
  }

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
        {/* Modals */}
        {showPreLaunchModal && preLaunchModaldata?.active ? (
          <PreLaunchModal hideModal={setPreLaunchModal} />
        ) : null}
        {showLaunchModal && launchModaldata?.active ? (
          <LaunchModal hideModal={setLaunchModal} />
        ) : null}

        {/* Intro section */}
        <BigCtaSection />

        {/* Enable 1-click onboarding */}
        <section className={homeStyles.firstSection}>
          <h2>{homeData.firstSection.title}</h2>
          <div>
            {homeData.firstSection.bullets.map((bullet) => {
              return (
                <div className={homeStyles.bullet}>
                  <h4>{bullet.title}</h4>

                  <div className={homeStyles.bulletIcon}>
                    <img src={bullet.image} alt={bullet.title} />
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* The easiest way to get started */}
        <section className={homeStyles.secondSectionStyle}>
          <h2 className={homeStyles.title}>{homeData.secondSection.title}</h2>
          <img
            src={homeData.secondSection.image}
            alt={homeData.secondSection.title}
          />
          <div className={homeStyles.actionCardsContainer}>
            {homeData.secondSection.actions.map((action) => {
              return (
                <div className={homeStyles.actionCard}>
                  <h3>{action.title}</h3>
                  <p>{action.descriptionFirstParagraph}</p>
                  <p>{action.descriptionSecondParagraph}</p>
                </div>
              )
            })}
          </div>
          <Link
            className={homeStyles.ctaButton}
            target="_blank"
            to={homeData.secondSection.ctaUrl}
          >
            {homeData.secondSection.ctaText}
          </Link>
        </section>

        {/* Designed for all industries */}
        <section className={homeStyles.fourthSectionStyle}>
          <h2 className={homeStyles.title}>{homeData.fourthSection.title}</h2>
          <p>{homeData.fourthSection.description}</p>

          <div className={homeStyles.sectorCardsContainer}>
            {homeData.fourthSection.sectors.map((sector) => {
              return <RotatingCard data={sector} />
            })}
          </div>
        </section>

        {/* Grow with GATACA */}
        <section className={homeStyles.fifthSection}>
          <h2>{homeData.fifthSection.title}</h2>
          <p>{homeData.fifthSection.description}</p>
          <div className={homeStyles.fifthSection__panelsContainer}>
            {homeData.fifthSection.panels.map((panel) => {
              return (
                <div className={homeStyles.panel}>
                  <div className={homeStyles.panelContent}>
                    <p className={homeStyles.title}>{panel.firstTitle}</p>
                    <p className={homeStyles.description}>
                      {panel.firstDescription}
                    </p>
                    <p className={homeStyles.title}>{panel.secondTitle}</p>
                    <p className={homeStyles.description}>
                      {panel.secondDescription}
                    </p>
                    <p className={homeStyles.title}>{panel.thirdTitle}</p>
                    <p className={homeStyles.description}>
                      {panel.thirdDescription}
                    </p>
                  </div>
                  <div className={homeStyles.panelImage}>
                    <img src={panel.image} alt={panel.title} />
                  </div>
                </div>
              )
            })}
          </div>
          <h3>{homeData.fifthSection.subtitle}</h3>
          <div>
            {homeData.fifthSection.trustedBy.map((item) => {
              return <img src={item.image} alt={item.alt} />
            })}
          </div>
        </section>

        {/* Posts */}
        <RelatedPosts />
      </article>
    </Layout>
  )
}
