import { Tab, Tabs } from "carbon-components-react"
import React from "react"
import IdentifyComponent from "./IdentifyComponent"
import productSelStyles from "./productsSelector.module.scss"

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
        <Tab
          href={"/crendentials"}
          id="crendentials"
          label="crendentials"
          className="tabStyle"
          role="presentation"
          selected={false}
          tabIndex={0}
        >
          <IdentifyComponent product={props.data[1]}/>
        </Tab>
        <Tab
          href={"/identity"}
          id="identity"
          label="identify"
          className="tabStyle"
          role="presentation"
          selected={false}
          tabIndex={1}
        >
          <IdentifyComponent product={props.data[1]}/>
        </Tab>
        <Tab
          href={"/connect"}
          id="connect"
          label="connect"
          className="tabStyle"
          role="presentation"
          selected={false}
          tabIndex={2}
        >
          <IdentifyComponent product={props.data[1]}/>
        </Tab>
    
      </Tabs>
      </div>
    </section>
  )
}