import * as React from "react"
import * as styles from "./mainLayout.module.scss"
import Header from "../../elements/header/Header"
import Footer from "../../elements/footer/Footer"

export type ILayoutProps = {
  children: JSX.Element
}

const Layout: React.FC<ILayoutProps> = props => {
  // Estado que me dice la útlima ruta a la que he clickado
  const [lastRoute, setLastRoute] = React.useState<string | undefined>()

  console.log("lastRoute", lastRoute)
  return (
    <main className={styles?.mainLayout}>
      <>
        <Header setLastRoute={setLastRoute} />
        {props.children}
        {/* {React.cloneElement(props.children, { lastRoute: lastRoute })} */}
        <Footer />
      </>
    </main>
  )
}

export default Layout
