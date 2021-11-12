import React, { useState, useEffect } from "react"
import data from "../../../content/data/government.json"
import BigBullet, { IBigBulletProps } from "../BigBullet/BigBullet"

import styles from "./bigBullet.module.scss"

type IBigBulletsSectionProps = {
  title?: string,
  description?: string,
  bullets: IBigBulletProps[];
}

const BigBulletsSection: React.FC<IBigBulletsSectionProps> = (props) => {

  const { bullets, title, description } = props

  useEffect(() => {

  }, [])

  return (
    <section className={styles.mainContainer}>
      <div className={styles.subContainer}>
        {title && <h2>{title}</h2>}
        {description && <h2>{description}</h2>}
        {
          bullets.map(bullet => {
            return <BigBullet
              key={bullet.title}
              title={bullet.title}
              description={bullet.description}
              image={bullet.image}/>
          })
        }
      </div>
    </section>
  )
}

BigBulletsSection.defaultProps = {}

export default BigBulletsSection
