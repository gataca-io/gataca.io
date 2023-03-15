import * as React from "react"
import * as styles from "./mainLayout.module.scss"
import Header from "../../elements/header/Header"
import Footer from "../../elements/footer/Footer"

export type ILayoutProps = {
  children: JSX.Element
}

const Layout: React.FC<ILayoutProps> = props => {
  return (
    <main className={styles?.mainLayout}>
      <>
        <Header />
        {props.children}
        <Footer />
      </>
    </main>
  )
}

export default Layout
