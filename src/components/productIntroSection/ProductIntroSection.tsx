import React, { useState, useEffect } from "react"

import styles from "./productIntroSection.module.scss"
import { Button } from "carbon-components-react"
import { Link } from "gatsby"
import cx from "classnames"

type IProductIntroSectionProps = {
  product?: string,
  title: string,
  subtitle?: string,
  ctaText?: string,
  ctaLink?: string,
  image: string,
  icon?: string,
  description: string,
  customCta?: any
  imageContStyles?: any
}

const ProductIntroSection: React.FC<IProductIntroSectionProps> = (props) => {

  const {
    product,
    title,
    subtitle,
    ctaText,
    ctaLink,
    image,
    icon,
    description,
    customCta,
    imageContStyles
  } = props

  useEffect(() => {

  }, [])

  return (
    <React.Fragment>
      <section className={styles.introContainer}>
        <section className={styles.subIntroContainer}>
        <div className={styles.introSection}>
          <div className={styles.informativeCont}>
            {icon && <div className={styles.selectedProductIconContainer}>
              <img src={icon} alt={product}/>
            </div>}
            {product && <p className={styles.productText}>GATACA {product}</p>}
            <h2>
              {title}
            </h2>
            {subtitle && <div className={styles.subtitle} dangerouslySetInnerHTML={{ __html: subtitle }}/>}
            {customCta ? customCta :
              (
                ctaLink && <Link to={ctaLink}>
                <Button
                  className={styles.ctaButton}
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
                > {ctaText}</Button>
              </Link>
              )
            }
          </div>
          <div className={cx(styles.mainImageContainer, imageContStyles)}>
            <img className={cx(styles.panel, "productImage")} src={image} alt={product}/>
          </div>
        </div>
        </section>
        <div
          className={styles.paragraph}
          dangerouslySetInnerHTML={{ __html: description }}/>
      </section>
    </React.Fragment>
  )
}

ProductIntroSection.defaultProps = {}

export default ProductIntroSection
