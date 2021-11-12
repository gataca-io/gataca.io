import React, { useState, useEffect } from "react"
import BulletOne from "../BulletOne/BulletOne"
import styles from "./greatElements.module.scss"
import { Link } from "gatsby"
import cx from "classnames"
import { Button } from "carbon-components-react"
import ctaStyles from "../CtaSection/cta.module.scss"
import { SizeMe } from "react-sizeme"

type ICarouselBulletsSectionProps = {
  title?: string;
  bullets: [
    {
      title?: string,
      image?: string;
      description?: string;
      shortDescription?: string;
      icon?: string
      link?: string;
    }
  ],
  allCtaLink?: string,
  allCtaText?: string
}

const GreatElementsSection: React.FC<ICarouselBulletsSectionProps> = (props) => {
  const { title, bullets, allCtaText, allCtaLink } = props

  useEffect(() => {

  }, [])

  return (
    <section className={styles.mainContainer}>
      {title && <h2>{title}</h2>}
      <div className={styles.elementsContainer}>
        {
          bullets.map(((bullet, i) => {
            return (
              <SizeMe key={i}>
                {({ size }: any): any => {
                  return (
                    <div
                      className={cx(
                        styles.elementCont,
                        i % 2 !== 0 ? styles.elementLeft : styles.elementRight,
                      )}
                      key={bullet.title}
                    >

                      <div className={styles.element}>

                        {(i % 2 !== 0 || size.width <= 672) && <div className={styles.elementImgContainer}>
                          <img src={bullet.image}/>
                        </div>}

                        <div>
                          <h2>{bullet.title}</h2>
                          {bullet.description && <div dangerouslySetInnerHTML={{ __html: bullet.description }}/>}
                          {bullet.link && <Link to={bullet.link}>
                            <Button
                              className={ctaStyles.ctaButton}
                              disabled={false}
                              iconDescription="Button icon"
                              kind="primary"
                              renderIcon={undefined}
                              size="default"
                              tabIndex={0}
                              type="button"
                            >Learn more</Button>
                          </Link>}
                        </div>

                        {i % 2 === 0 && size.width >= 672 && <div className={styles.elementImgContainer}>
                          <img src={bullet.image}/>
                        </div>}

                      </div>
                    </div>
                  )
                }}
              </SizeMe>
            )
          }))
        }
      </div>
      {allCtaText && allCtaLink && <div>
        <Link to={allCtaLink} className={styles.endCta}>
          {allCtaText}
        </Link>
      </div>}
    </section>
  )
}

GreatElementsSection.defaultProps = {
}

export default GreatElementsSection
