import * as React from "react"
import * as styles from "./formSkeleton.module.scss"

export type IFormSkeletonProps = {}

const FormSkeleton: React.FC<IFormSkeletonProps> = props => {
  return (
    <div className={styles?.formSkeleton}>
      <div className={styles?.formRow}>
        <div className={`${styles?.skeleton}`}></div>
        <div className={`${styles?.skeleton}`}></div>
      </div>
      <div className={styles?.formRow}>
        <div className={`${styles?.skeleton}`}></div>
      </div>
      <div className={styles?.formRow}>
        <div className={`${styles?.skeleton}`}></div>
        <div className={`${styles?.skeleton}`}></div>
      </div>
      <div className={styles?.formRow}>
        <div className={`${styles?.skeleton}`}></div>
      </div>
      <div className={styles?.formRow}>
        <div className={`${styles?.skeleton}`}></div>
      </div>
      <div className={styles?.formRow}>
        <div className={`${styles?.skeleton}`}></div>
      </div>
    </div>
  )
}

export default FormSkeleton
