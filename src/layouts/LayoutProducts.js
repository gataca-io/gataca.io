import React from "react"
import HeaderSection from "../components/HeaderSection/HeaderSection"
import Helmet from "react-helmet"
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
import { Tab, Tabs } from "carbon-components-react"
import IdentifyComponent from "../components/ProductsSection/IdentifyComponent"

export default function LayoutProducts(props) {
  const { metaTitle, metaDescription, title } = useSiteMetadata()
  
  return (
    <section
      className={`${layoutStyles.layout} ${
        props.page === "info" &&
        layoutStyles.info_page}`}
      style={{
        backgroundColor: props.bgColor,
      }}
    >
      
      <Helmet>
        <html lang="en" />
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png"/>
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png"/>
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png"/>
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png"/>
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png"/>
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"/>
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png"/>
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>
        <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/manifest.json"/>
        <meta name="msapplication-TileColor" content="#ffffff"/>
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
        <meta name="theme-color" content="#ffffff"/>
      </Helmet>
      
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
