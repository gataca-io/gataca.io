import productSelStyles from "./productsSelector.module.scss"
import { Tab, Tabs } from "carbon-components-react"
import React from "react"
import BulletOne from "../BulletOne"

export default function ProductsSelector(props) {
  return (
    <section className={productSelStyles.base}>
      <div className={productSelStyles.container}>
      <Tabs
        ariaLabel="listbox"
        className={productSelStyles.tabs}
        iconDescription="show menu options"
        // onKeyDown={}
        // onSelectionChange={}
        role="navigation"
        selected={1}
        selectionMode="automatic"
        tabContentClassName="tab-content"
        triggerHref="#"
        type="default"
      >
        {props.data.map(product => {
          return (
            <Tab
              href={"/" + product.title}
              id={product.title}
              label={product.title}
              role="presentation"
              selected={false}
              tabIndex={0}
            >
              <div className={productSelStyles.introSection}>
                <div className={productSelStyles.selectedProductIconContainer}>
                  <img src={product.icon}/>
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
                  <img src={product.mainImage}/>
                </div>
              </div>
            </Tab>
          )
        })}
        
      </Tabs>
      </div>
    </section>
  )
}
