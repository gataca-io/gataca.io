import React from "react"
import Layout from "../layouts/Layout"
import productStyles from "../styles/pages/products.module.scss"
import useSiteMetaData from "../static_queries/useSiteMetadata"
import productsData  from "./../../content/data/productsData.json"
import faqData  from "./../../content/data/faqData.json"
import ProductsSelector from "../components/ProductsSection/ProductsSelector"
import BulletCenter from "../components/BulletCenter"
import FaqSection from "../components/faqSection/FaqSection"
import HeadLineSection from "../components/HeadLineSection/HeadLineSection"
import LayoutProducts from "../layouts/LayoutProducts"
import productSelStyles from "../components/ProductsSection/productsSelector.module.scss"
import { Tab, Tabs } from "carbon-components-react"
import IdentifyComponent from "../components/ProductsSection/IdentifyComponent"
import credentials from "../../content/data/credentials.json"
import identify from "../../content/data/identify.json"
import connect from "../../content/data/connect.json"
import CredentialsComponent from "../components/ProductsSection/CredentialsComponent"
import ConnectComponent from "../components/ProductsSection/ConnectComponent"


export default function Identify(props) {
  const { infoData } = useSiteMetaData()
  console.log('PRODUCTS PAGE DATA => ',props.data);
  return (
    <LayoutProducts>
      <Tab
        href={"/" + credentials.title}
        id={credentials.title}
        label="crendentials"
        className="tabStyle"
        role="presentation"
        selected={false}
        tabIndex={0}
      >
        <CredentialsComponent product={credentials}/>
      </Tab>
      <Tab
        href={"/" + identify.title}
        id={identify.title}
        label="identify"
        className="tabStyle"
        role="presentation"
        selected={false}
        tabIndex={1}
      >
        <IdentifyComponent product={identify}/>
      </Tab>
      <Tab
        href={"/" + connect.title}
        id={connect.title}
        label="connect"
        className="tabStyle"
        role="presentation"
        selected={false}
        tabIndex={2}
      >
        <ConnectComponent product={connect}/>
      </Tab>
    </LayoutProducts>
  )
}
