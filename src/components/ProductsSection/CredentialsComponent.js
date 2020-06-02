import credentialsStyles from "./credentialsComponent.module.scss"
import React from "react"
import BulletOne from "../BulletOne"
import connectStyles from "./connectComponent.module.scss"
import productSelStyles from "./productsSelector.module.scss"

export default function CredentialsComponent({ product }) {
  return (
    <section className={productSelStyles.base}>
      <div className={credentialsStyles.introSection}>
        <div className={credentialsStyles.selectedProductIconContainer}>
          <img src={product.icon} alt={product.title}/>
        </div>
        <h2>
          {product.title}
        </h2>
        <div dangerouslySetInnerHTML={{ __html: product.description }}/>
      </div>
      <div className={credentialsStyles.detailContainer}>
        <div className={credentialsStyles.bulletsContainer}>
          {product.bullets.map(bullet => {
            return (
              <BulletOne center data={bullet}/>
            )
          })}
        </div>
        <div className={credentialsStyles.mainImage}>
          <img className={connectStyles.panel} src={product.mainImage} alt={product.title}/>
          <div className={credentialsStyles.sectionOne}>
            <BulletOne left data={product.bulletOne}/>
            
            <svg width="10" height="164" viewBox="0 0 10 164" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.00001 2.00011L5 155.569" stroke="#181B5E" stroke-width="2"/>
              <circle cx="5" cy="2" r="2" fill="#181B5E"/>
              <path d="M5 155L5 162M5 162L9 158.231M5 162L0.999999 158.231" stroke="#181B5E" stroke-width="2"/>
            </svg>
          </div>
  
          <img src={product.secondImage} alt={product.title}/>
  
          <div className={credentialsStyles.sectionTwo}>
            <BulletOne right data={product.bulletTwo}/>
            
          <svg width="10" height="164" viewBox="0 0 10 164" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.00001 2.00011L5 155.569" stroke="#181B5E" stroke-width="2"/>
            <circle cx="5" cy="2" r="2" fill="#181B5E"/>
            <path d="M5 155L5 162M5 162L9 158.231M5 162L0.999999 158.231" stroke="#181B5E" stroke-width="2"/>
          </svg>
          </div>
  
          <div className={credentialsStyles.thirdImageContainer}>
            <img src={product.thirdImage} alt={product.title}/>
          </div>

        </div>
      </div>
    </section>
  )
}
