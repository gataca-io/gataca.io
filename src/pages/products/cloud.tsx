import React, { useState, useEffect } from "react"
import Layout from "../../layouts/Layout"
import ExplainedInfographics from "../../components/ExplainedInfoGraphics/ExplainedInfographics"
import BulletOne from "../../components/BulletOne/BulletOne"
import { Button } from "carbon-components-react"
import cloud from "../../../content/data/cloud.json"

import productSelStyles from "../../components/ProductsSection/productsSelector.module.scss"

import cloudStyles from "./cloud.module.scss"

import ctaStyles from "../../components/CtaSection/cta.module.scss"
import CtaSection from "../../components/CtaSection/CtaSection"

type ICloudProps = {}

const Cloud: React.FC<ICloudProps> = ({}) => {

  useEffect(() => {

  }, [])

  return (
    <Layout>
      <section className={cloudStyles.base}>
        <div className={cloudStyles.introSection}>
          <div className={cloudStyles.selectedProductIconContainer}>
            <img src={cloud.icon} alt={cloud.title}/>
          </div>
          <h2>
            {cloud.title}
          </h2>
          <h3>
            {cloud.subtitle}
          </h3>
          <Button
            className={cloudStyles.ctaButton}
            disabled={false}
            iconDescription="Button icon"
            kind="primary"
            onClick={function noRefCheck() {
            }}
            onFocus={function noRefCheck() {
            }}
            renderIcon={undefined}
            size="default"
            tabIndex={0}
            type="button"
          > {cloud.ctaText}</Button>
        </div>

        <div className={cloudStyles.paragraph}
             dangerouslySetInnerHTML={{ __html: cloud.description }}/>

        <div className={cloudStyles.detailContainer}>
          <div className={cloudStyles.bulletsContainer}>
            {cloud.bullets_one.bullets.map(bullet => {
              return (
                <BulletOne center data={bullet}/>
              )
            })}
          </div>
        </div>

        <div className={cloudStyles.detailContainer}>
          <h2>{cloud.bulletsSection_two.title}</h2>
          <div className={cloudStyles.bulletsContainer}>
            {cloud.bulletsSection_two.bullets.map(bullet => {
              return (
                <BulletOne
                  bulletContainerStyles={cloudStyles.bulletCont}
                  center
                  data={bullet}
                />
              )
            })}
          </div>
        </div>

        <CtaSection
          ctaUrl={cloud.ctaSection.ctaUrl}
          ctaText={cloud.ctaSection.ctaText}
          title={cloud.ctaSection.title}
          description={cloud.ctaSection.description}
        />

      </section>
    </Layout>
  )
}

Cloud.defaultProps = {}

export default Cloud
