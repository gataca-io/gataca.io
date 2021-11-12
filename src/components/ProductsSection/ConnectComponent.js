import connectStyles from "./connectComponent.module.scss"
import React from "react"
import BulletOne from "../BulletOne/BulletOne"
import productSelStyles from "./productsSelector.module.scss"

export default function ConnectComponent({ product }) {
  return (
    <section className={productSelStyles.base}>
      <div className={connectStyles.introSection}>
        <div className={connectStyles.selectedProductIconContainer}>
          <img src={product.icon} alt={product.title}/>
        </div>
        <h2>
          {product.title}
        </h2>
        <div dangerouslySetInnerHTML={{ __html: product.description }}/>
      </div>
      <div className={connectStyles.detailContainer}>
        <div className={connectStyles.bulletsContainer}>
          {product.bullets.map(bullet => {
            return (
              <BulletOne center data={bullet}/>
            )
          })}
        </div>
        <div className={connectStyles.mainImage}>
          <img className={connectStyles.panel} src={product.mainImage} alt={product.title}/>
        </div>
        <div className={connectStyles.secondaryDescription} dangerouslySetInnerHTML={{ __html: product.secondaryDescription }}>
        </div>
      </div>
    </section>
  )
}
