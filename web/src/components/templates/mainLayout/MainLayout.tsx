import * as React from "react"
import * as styles from "./mainLayout.module.scss"
import Header from "../../elements/header/Header"
import Footer from "../../elements/footer/Footer"
import { SeoModel, StrapiImageModel } from "../../../interfaces/interfaces"
import { SeoHelmet } from "../../elements/seo/SeoHelmet"

export type ILayoutProps = {
  children: JSX.Element
  seoData?: SeoModel
}

const Layout: React.FC<ILayoutProps> = props => {
  const { seoData, children } = props

  return (
    <>
      <Header />
      {seoData && (
        <SeoHelmet
          title={seoData?.metaTitle}
          description={seoData?.metaDescription}
          rrssImg={seoData?.rrssImg}
          keywords={seoData?.keywords}
        />
      )}
      <main className={styles?.mainLayout}>{props.children}</main>
      <Footer />
    </>
  )
}

export default Layout
