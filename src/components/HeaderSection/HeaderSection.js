import React, { Fragment } from "react"
import { Link } from "gatsby"
import headerStyles from "./header.module.scss"
import logo from "@images/logo.svg"
import HeaderContainer from "carbon-components-react/lib/components/UIShell/HeaderContainer";
import configMetaData from "./../../../content/data/configMetaData.json"

import {
  Header,
  HeaderMenuButton,
  SideNav,
  SideNavItems,
  SideNavLink,
} from "carbon-components-react/lib/components/UIShell";

export default function HeaderSection(props) {
  return (
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <Fragment>
          <Header aria-label="Open menu" className={headerStyles.header}>
  
            <div className={headerStyles.nav}>
              
              <div className={headerStyles.left}>
                <Link to="/">
                  <img src={logo} alt={'Gataca'}/>
                  <h2>{props.title}</h2>
                </Link>
              </div>
              
              <HeaderMenuButton
                aria-label="Open menu"
                onClick={onClickSideNavExpand}
                isActive={isSideNavExpanded}
              />
  
              <div className={headerStyles.right} >
                  <Link
                    to={
                      '/products/'
                    }
                  >
                <h3>
                    Products
                </h3>
                  </Link>
                  <Link
                    to={
                      '/insights/'
                    }
                  >
                <h3>
                    Insights
                </h3>
                  </Link>
                  <Link
                    to={
                      '/about/'
                    }
                  >
                <h3>
                    About
                </h3>
                </Link>
                  <a href={configMetaData.bookACallUrl} rel="noreferrer" target="_blank" >
                    <h3 className={headerStyles.header__cta}>
                        Book a demo
                    </h3>
                  </a>
              </div>
              
            </div>
            
            <SideNav
               className={headerStyles.sideNav}
               aria-label="Side navigation"
               expanded={isSideNavExpanded}>
              
              <SideNavItems>
                  <SideNavLink href="/products/">
                    Products
                  </SideNavLink>
                  <SideNavLink href="/insights/">
                    Insights
                  </SideNavLink>
                  <SideNavLink href="/about/">
                    About
                  </SideNavLink>
                <SideNavLink href={configMetaData.bookACallUrl} target="_blank" rel="noreferrer">
                  Book a call
                </SideNavLink>
              </SideNavItems>
              
            </SideNav>

          </Header>
        </Fragment>
      )}
    />
  )
}
