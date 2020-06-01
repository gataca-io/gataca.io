import productSelStyles from "./productsSelector.module.scss"
import React from "react"
import BulletOne from "../BulletOne"

export default function IdentifyComponent({ product }) {
  return (
    <section className={productSelStyles.base}>
      <div className={productSelStyles.introSection}>
        <div className={productSelStyles.selectedProductIconContainer}>
          <img src={product.icon} alt={product.title}/>
        </div>
        <h2>
          {product.title}
        </h2>
        <p dangerouslySetInnerHTML={{ __html: product.description }}/>
      </div>
      <div className={productSelStyles.detailContainer}>
        <div className={productSelStyles.bulletsContainer}>
          {product.bullets.map(bullet => {
            return (
              <BulletOne right data={bullet}/>
            )
          })}
        </div>
        <div className={productSelStyles.mainImage}>
          <img src={product.mainImage} alt={product.title}/>
        </div>
      </div>
    </section>
  )
}
