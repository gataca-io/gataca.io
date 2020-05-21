import React, { Fragment } from "react"
import { Link } from "gatsby"
import headerStyles from "./header.module.scss"
import logo from "@images/logo.svg"
import Search20 from "@carbon/icons-react/lib/search/20";
import Notification20 from "@carbon/icons-react/lib/notification/20";
import AppSwitcher20 from "@carbon/icons-react/lib/app-switcher/20";
import HeaderContainer from "carbon-components-react/lib/components/UIShell/HeaderContainer";
import {
  Content,
  Header,
  HeaderMenuButton,
  HeaderName,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  SideNav,
  SideNavItems,
  SideNavLink,
  SideNavMenu,
  SideNavMenuItem
} from "carbon-components-react/lib/components/UIShell";

const Fade16 = () => (
  <svg
    width="16"
    height="16"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    aria-hidden="true"
  >
    <path d="M8.24 25.14L7 26.67a14 14 0 0 0 4.18 2.44l.68-1.88a12 12 0 0 1-3.62-2.09zm-4.05-7.07l-2 .35A13.89 13.89 0 0 0 3.86 23l1.73-1a11.9 11.9 0 0 1-1.4-3.93zm7.63-13.31l-.68-1.88A14 14 0 0 0 7 5.33l1.24 1.53a12 12 0 0 1 3.58-2.1zM5.59 10L3.86 9a13.89 13.89 0 0 0-1.64 4.54l2 .35A11.9 11.9 0 0 1 5.59 10zM16 2v2a12 12 0 0 1 0 24v2a14 14 0 0 0 0-28z" />
  </svg>
);

export default function HeaderSection(props) {
  return (
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <Fragment>
          <Header className={headerStyles.header}>
  
            <div className={headerStyles.nav}>
              <div className={headerStyles.left}>
                <Link to="/">
                  <img src={logo}/>
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
                      '/products'
                    }
                  >
                <h3>
                    Products
                </h3>
                  </Link>
                  <Link
                    to={
                      '/insights'
                    }
                  >
                <h3>
                    Insights
                </h3>
                  </Link>
                  <Link
                    to={
                      '/about'
                    }
                  >
                <h3>
                    About
                </h3>
                  </Link>
                  <a href={props.link.bookACallUrl} target="_blank">
                    <h3 className={headerStyles.header__cta}>
                        Book a call
                    </h3>
                  </a>
              </div>
              
            </div>
            
            <SideNav className={headerStyles.sideNav}
                     aria-label="Side navigation" expanded={isSideNavExpanded}>
              <SideNavItems>
                <Link to={'/products'}>
                  <SideNavLink href="">
                    Products
                  </SideNavLink>
                </Link>
                <Link to={'/about'}>
                  <SideNavLink href="">
                    About
                  </SideNavLink>
                </Link>
                <a href={props.link.bookACallUrl} target="_blank">
                  <SideNavLink href="">
                    Book a call
                  </SideNavLink>
                </a>
              </SideNavItems>
            </SideNav>

          </Header>
        </Fragment>
      )}
    />
  )
}
