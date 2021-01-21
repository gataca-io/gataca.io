import React from "react"
import Layout from "../layouts/Layout"
import pricingStyles from "../styles/pages/pricing.module.scss"
import pricingData from "./../../content/data/pricing.json"
import { BuildHelmet } from "../components/auxiliary/HelmetBuilder"
import Img from "gatsby-image"
import { Button } from "carbon-components-react"
import teamSectionStyles from "../components/TeamSection/teamSection.module.scss"

function IntroSection({ data }) {
  return (
    <div className={pricingStyles.introContainer}>
      <div className={`bx--grid`}>
        <h2>{data.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: data.description }}/>
      </div>
    </div>
  )
}


function PricingSection({ data }) {
  return (
    <div className={pricingStyles.pricingSection}>
      <div className={`bx--grid`}>
        <div className={`bx--row ${pricingStyles.pricingContainers}`}>
          {data.map(plan => {
            return (
              <div className={`bx--col-sm-4 bx--col-lg-4 ${pricingStyles.planContainer}`}>
                <div className={pricingStyles.plan}>
                  <h3>{plan.title}</h3>
                  <div dangerouslySetInnerHTML={{ __html: plan.description }}/>
                  <div className={pricingStyles.bullets}>
                    <ul>
                      {plan.bullets.map(b => {
                        return <li>{b.bulletText}</li>
                      })}
                    </ul>
                  </div>
                </div>
                <Button href={plan.cta.link}>
                  {plan.cta.text}
                </Button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default function Pricing() {
  return (
    <Layout>
      <BuildHelmet
        title={pricingData.metas.title}
        description={pricingData.metas.description}
      />
      <section className={pricingStyles.base}>
        <IntroSection data={pricingData.introSection}/>
        <PricingSection data={pricingData.pricingSlots}/>
      </section>
    </Layout>
  )
}



