import * as React from "react"
import * as styles from "./mainLayout.module.scss"
import Header from "../../elements/header/Header"
import Footer from "../../elements/footer/Footer"
import { Provider, useSelector } from "react-redux"
import store from "../../../state/store"
import { getActiveSubroute } from "../../../pages/appStore/appSelectors"

export type ILayoutProps = {
  children: any
}

const Layout: React.FC<ILayoutProps> = props => {
  return (
    <React.StrictMode>
      <Provider store={store()}>
        <main className={styles?.mainLayout}>
          <>
            <Header />
            {props.children}
            <Footer />
          </>
        </main>
      </Provider>
    </React.StrictMode>
  )
}

export default Layout
