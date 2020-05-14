import productSelStyles from "./productsSelector.module.scss"
import { Tab, Tabs } from "carbon-components-react"
import React from "react"
import BulletCenter from "../BulletCenter"
import BulletOne from "../BulletOne"

export default function ProductsSelector(props) {
  return (
    <section className={productSelStyles.container}>
      <Tabs
        ariaLabel="listbox"
        className="some-class"
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
              id="tab-1"
              label={product.title}
              // onClick={}
              // onKeyDown={""}
              // renderContent={""}
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
                <p>{product.description}</p>
              </div>
              <div className={productSelStyles.detailContainer}>
                <div className={productSelStyles.bulletsContainer}>
                  {product.bullets.map(bullet => {
                    return (
                      <BulletOne data={bullet}/>
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
    </section>
  )
}
