import React from "react"
import HeaderSection from "../components/HeaderSection/HeaderSection"
import useSiteMetadata from "../static_queries/useSiteMetadata"
import layoutStyles from "./layout.module.scss"
import FooterSection from "../components/FooterSection/FooterSection"
import configMetaData from "../../content/data/configMetaData.json"
import footerSectionData from "../../content/data/footerSectionData.json"
import { BuildHelmet } from "../components/auxiliary/HelmetBuilder"
import productsData from "../../content/data/productsData.json"
import HeadLineSection from "../components/HeadLineSection/HeadLineSection"
import faqData from "../../content/data/faqData.json"
import FaqSection from "../components/faqSection/FaqSection"
import productSelStyles from "../components/ProductsSection/productsSelector.module.scss"
import { Tabs } from "carbon-components-react"

export default function LayoutProducts(props) {
  const { title } = useSiteMetadata()
  
  return (
    <section
      className={`${layoutStyles.layout} ${
        props.page === "info" &&
        layoutStyles.info_page}`}
      style={{
        backgroundColor: props.bgColor,
      }}
    >
      <BuildHelmet
        title={productsData.metas.title}
        description={productsData.metas.description}
        twitterImg={productsData.metas.twitterImage}
        facebookImg={productsData.metas.facebookImage}
        linkedInImg={productsData.metas.facebookImage}
      />
      <HeaderSection title={title} link={configMetaData}/>
      
      <div className={layoutStyles.content}>
        <HeadLineSection title={productsData.introProductsSection.title} description={productsData.introProductsSection.description}/>
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
              {props.children}
            </Tabs>
        <FaqSection data={faqData.faqSection}/>
      </div>
      <FooterSection data={footerSectionData}/>
    </section>
  )
}
