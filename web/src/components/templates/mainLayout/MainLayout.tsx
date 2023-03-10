import { Link } from "gatsby"
import * as React from "react"
import * as styles from "./mainLayout.module.scss"
import cx from "classnames"

export type ILayoutProps = {
  children: JSX.Element
}

const Layout: React.FC<ILayoutProps> = props => {
  return (
    <main>
      <>
        <header className={styles?.header}>
          <div className={styles.headerNavigationItem}>
            <Link className={cx("heading7")} to="/">
              Home
            </Link>
          </div>
          <div className={styles.headerNavigationItem}>
            <Link to="/products">Products</Link>
          </div>
          <div className={styles.headerNavigationItem}>
            <Link to="/useCases">Use Cases and Sectors</Link>
          </div>
          <div className={styles.headerNavigationItem}>
            <Link to="/company">Company</Link>
          </div>
          <div className={styles.headerNavigationItem}>
            <Link to="/resources">Resources</Link>
          </div>
        </header>
        {props.children}
      </>
    </main>
  )
}

export default Layout
