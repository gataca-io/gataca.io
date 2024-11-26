import * as React from "react"
import cx from "classnames"
import * as styles from "./headerSkeleton.module.scss"

const HeaderSkeleton: React.FC = () => {
  return (
    <section className={`${styles.headerSkeleton__container}`}>
      <div className={`${styles.skeleton}`}></div>
      <div className={`${styles.skeleton}`}></div>
      <div className={`${styles.skeleton}`}></div>
    </section>
  )
}

export default HeaderSkeleton
