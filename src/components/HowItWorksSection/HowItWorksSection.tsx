import React, { useState, useEffect } from "react"

import styles from "./howitworks.module.scss"

type IHowItWorksSectionProps = {
  title?: string;
  description?: string;
  steps: Array<{
    image: string,
    text: string;
  }>
}

const HowItWorksSection: React.FC<IHowItWorksSectionProps> = (props) => {

  const { title, description, steps } = props
  useEffect(() => {

  }, [])

  return (
    <section className={styles.baseSection}>
      <div>
        <div className={styles.heading}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className={styles.stepsContainer}>
          {steps.map(step => {
            return (
              <div className={styles.step}>
                <img src={step.image} alt={step.text}/>
                <p>{step.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

HowItWorksSection.defaultProps = {}

export default HowItWorksSection
