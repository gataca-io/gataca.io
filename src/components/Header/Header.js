import React from "react"
import { Link } from "gatsby"
import headerStyles from "./header.module.scss"
import logo from "@images/logo.svg"

export default function Header(props) {
  return (
    <header
      className={`${headerStyles.header} ${props.page === 'info' &&
        headerStyles.info_page}`}
    >
      <nav
        className={headerStyles.header__nav}
        role="navigation"
        aria-label="main navigation"
      >
        <div className={headerStyles.header__left}>
        <Link to="/">
          <img src={logo}/>
          <h2>{props.title}</h2>
        </Link>
        </div>
        <div className={headerStyles.header__right} >
          <h3>
            <Link
              to={
                '/products'
              }
            >
              Products
            </Link>
          </h3>
          <h3>
            <Link
              to={
                '/stories'
              }
            >
              Stories
            </Link>
          </h3>
          <h3>
            <Link
              to={
                '/about'
              }
            >
              About
            </Link>
          </h3>
          <h3 className={headerStyles.header__cta}>
            <Link
              to={
                '/bookCall'
              }
            >
              Book a call
            </Link>
          </h3>
        </div>
      </nav>
    </header>
  )
}
