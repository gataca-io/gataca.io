import * as React from "react"
import cx from "classnames"
import * as styles from "./introBlogSkeleton.module.scss"

const IntroBlogSkeleton: React.FC = () => {
  return (
    <div
      className={styles.introBlogSkeleton__container}
      style={{ position: "relative" }}
    >
      <section
        className={`${styles.introBlogSkeleton} ${cx("containerMaxWidth")}`}
      >
        <div className={styles.introBlogSkeleton__leftSide}>
          <div className={styles.introBlogSkeleton__leftSide__header}>
            <div
              className={`${cx("marginBottom32")} ${styles.topic} ${
                styles.skeleton
              }`}
            ></div>
            <div
              className={`${cx("marginBottom32")} ${styles.timeReading} ${
                styles.skeleton
              }`}
            ></div>
          </div>
          <div
            className={`${cx("marginBottom32")} ${styles.title} ${
              styles.skeleton
            }`}
          ></div>
          <div className={`${styles.date} ${styles.skeleton}`}></div>
        </div>
        <div
          className={`${styles.introBlogSkeleton__rightSide} ${styles.skeleton}`}
        ></div>
      </section>
    </div>
  )
}

export default IntroBlogSkeleton
