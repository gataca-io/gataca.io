import React from "react"
// import useSiteMetaData from "../static_queries/useSiteMetadata"
import identify  from "./../../content/data/identify.json"
import credentials  from "./../../content/data/credentials.json"
import connect  from "./../../content/data/connect.json"
import LayoutProducts from "../layouts/LayoutProducts"
import { Tab } from "carbon-components-react"
import IdentifyComponent from "../components/ProductsSection/IdentifyComponent"
import ConnectComponent from "../components/ProductsSection/ConnectComponent"
import CredentialsComponent from "../components/ProductsSection/CredentialsComponent"

export default function Products(props) {
  // const { infoData } = useSiteMetaData()
  console.log('PRODUCTS PAGE DATA => ',props.data);
  return (
    <LayoutProducts>
        <Tab
          href={"/" + credentials.title}
          id={credentials.title}
          label={credentials.title}
          className="tabStyle"
          role="presentation"
          selected={false}
          tabIndex={-2}
        >
          <CredentialsComponent product={credentials}/>
        </Tab>
          <Tab
            href={"/" + identify.title}
            id={identify.title}
            label={identify.title}
            className="tabStyle"
            role="presentation"
            selected={false}
            tabIndex={-1}
          >
            <IdentifyComponent product={identify}/>
          </Tab>
        <Tab
          href={"/" + connect.title}
          id={connect.title}
          label={connect.title}
          className="tabStyle"
          role="presentation"
          selected={false}
          tabIndex={0}
        >
          <ConnectComponent product={connect}/>
        </Tab>
    </LayoutProducts>
  )
}
