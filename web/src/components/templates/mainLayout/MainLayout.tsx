import * as React from "react"
import * as styles from "./mainLayout.module.scss"
import Header from "../../elements/header/Header"
import Footer from "../../elements/footer/Footer"

export type ILayoutProps = {
  children: JSX.Element
}

const Layout: React.FC<ILayoutProps> = props => {
  return (
    <>
      <Header />
      <main className={styles?.mainLayout}>{props.children}</main>
      <Footer />
    </>
  )
}

export default Layout
