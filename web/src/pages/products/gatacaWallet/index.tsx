import type { PageProps } from "gatsby"
import * as React from "react"
import Layout from "../../../components/templates/mainLayout/MainLayout"
import PreFooterCTASection from "../../../components/templates/sections/preFooterCTA/PreFooterCTA"
import cx from "classnames"
import { marketAndroidURI, marketIosURI } from "../../../globalData/globalData"
import { images } from "../../../images/images"
import * as styles from "./gatacaWallet.module.scss"

const GatacaWalletPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <>
        <section className={styles.firstSection}>
          <div className={styles.firstSection__leftSide}>
            <h1 className={`${cx("heading1 margin10 marginBottom32")}`}>
              A master key to the Internet
            </h1>
            <p className={`${cx("bodyRegularXL margin10 marginBottom20")}`}>
              Gataca Wallet is an ID wallet in your phone than can store
              tamper-proof identity credentials securely, and lets you easily
              prove who you are when accessing online services
            </p>
            <div>
              <a
                className={`${cx(
                  "bodyRegularXL margin10 marginTop12 marginBottom8"
                )}`}
                href={marketIosURI}
                target="_blank"
              >
                <img src={images.brandAppleButton} />
              </a>
              <a
                href={marketAndroidURI}
                target="_blank"
                className={`${cx("margin10 marginTop12 marginBottom10")}`}
              >
                <img src={images.brandGoogleButton} />
              </a>
            </div>
          </div>
          <div className={styles.firstSection__rightSide}>
            {/* <div> */}
            <img
              className={styles.firstSection__image__desktop}
              src={images.mockupPhoneMain}
            />
            <img
              className={styles.firstSection__image__mobile}
              src={images.mockupPhoneMainMobile}
            />
            {/* </div> */}
          </div>
        </section>
        <PreFooterCTASection
          title={"Ready To Start?"}
          description={
            "Protect your privacy and take control of your digital identity"
          }
          storeButtons={true}
        />
      </>
    </Layout>
  )
}

export default GatacaWalletPage
