import React from "react"
import styles from "./WalletCtas.module.scss"

export type WalletctasProps = {
  ctaAndroidLink: string,
  ctaIosLink: string
}

export const Walletctas = (props: WalletctasProps) => {
  const { ctaAndroidLink, ctaIosLink } = props

  return (
    <React.Fragment>
      <p className={styles.textIntro}>Download GATACA's wallet:</p>
      <div className={styles.marketsContainer}>
        <a href={ctaAndroidLink}>
          <img src="/images/androidAppStoreIcon.svg" alt={"Gataca Google Play"}/>
        </a>
        <a href={ctaIosLink}>
          <img src="/images/iosAppStoreIcon.svg" alt={"Gataca Ios"}/>
        </a>
      </div>
    </React.Fragment>
  )
}

Walletctas.defaultProps = {}

export default Walletctas
