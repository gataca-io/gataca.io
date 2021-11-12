import React, { useState, useEffect } from "react"
import BulletOne from "../BulletOne/BulletOne"
import styles from "./carouselBullets.module.scss"
import { Link } from "gatsby"

type ICarouselBulletsSectionProps = {
  title?: string;
  bullets: [
    {
      title: string,
      description?: string;
      shortDescription?: string;
      icon?: string
      link?: string;
    }
  ],
  allCtaLink?: string,
  allCtaText?: string
}

const CarouselBulletsSection: React.FC<ICarouselBulletsSectionProps> = (props) => {
  const { title, bullets, allCtaText, allCtaLink } = props

  useEffect(() => {

  }, [])

  return (
    <section className={styles.mainContainer}>
      {title && <h3>{title}</h3>}
      <div className={styles.elementsContainer}>
        {
          bullets.map((bullet => {
            return <BulletOne
              key={bullet.title}
              bulletContainerStyles={styles.bulletCont}
              center
              data={{
                image: bullet.icon,
                title: bullet.title,
                description: bullet.shortDescription,
                ctaText: "Learn more",
                ctaUrl: bullet.link,
              }}/>
          }))
        }
      </div>
      {allCtaText && allCtaLink && <div>
        <Link to={allCtaLink}>{allCtaText}</Link>
      </div>}
    </section>
  )
}

CarouselBulletsSection.defaultProps = {}

export default CarouselBulletsSection
