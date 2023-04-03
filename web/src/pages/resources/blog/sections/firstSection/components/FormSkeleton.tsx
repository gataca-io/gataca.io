import * as React from "react"
import * as styles from "./formSkeleton.module.scss"

export type IFormSkeletonProps = {}

const FormSkeleton: React.FC<IFormSkeletonProps> = props => {
  return (
    <div className={styles?.formSkeleton}>
      <div className={`${styles?.skeleton}`}></div>
      <div className={`${styles?.skeleton}`}></div>
      <div className={`${styles?.skeleton}`}></div>
      <div className={`${styles?.skeleton}`}></div>
    </div>
  )
}

export default FormSkeleton
