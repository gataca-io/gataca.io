import * as React from "react"
import cx from "classnames"
import * as styles from "./pageSkeleton.module.scss"

const PageSkeleton: React.FC = () => {
  return (
    <section
      className={`${styles.pageSkeleton__container} ${cx("containerMaxWidth")}`}
    >
      <div className={`${styles.skeleton}`}></div>
      <div className={`${styles.skeleton}`}></div>
      <div className={`${styles.skeleton}`}></div>
      <div className={`${styles.skeleton}`}></div>
      <div className={`${styles.skeleton}`}></div>
    </section>
  )
}

export default PageSkeleton
