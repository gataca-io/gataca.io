import * as React from "react"
import cx from "classnames"
import * as styles from "./logo.module.scss"
import StrapiImage from "../../../../../../../components/atoms/images/StrapiImage"

export type ILogoProps = {
  className?: string
  idItem?: string
  image?: any
  title?: string
}

const LogoComponent: React.FC<ILogoProps> = props => {
  const { className, idItem, image, title } = props

  return (
    <div
      id={idItem}
      className={`${styles?.logo__container} ${className && className}`}
    >
      {image?.data?.attributes?.url ? (
        <div className={styles?.imageContainer}>
          <StrapiImage image={image ? image : null} />{" "}
        </div>
      ) : null}
      {title?.length && <p className={cx("bodyBoldLG")}>{title}</p>}
    </div>
  )
}

export default LogoComponent
