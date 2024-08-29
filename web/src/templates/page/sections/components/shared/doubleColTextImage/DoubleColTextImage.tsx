import * as React from "react"
import cx from "classnames"
import * as styles from "./doubleColTextImage.module.scss"
import { InsideSectionsModel } from "../../../../../../interfaces/interfaces"
import StrapiImage from "../../../../../../components/atoms/images/StrapiImage"

const DoubleColTextImage: React.FC<InsideSectionsModel> = props => {
  const { id, title, description, hero } = props

  return (
    <section
      key={`doubleColTextImage_` + id}
      className={`${styles.doubleColTextImage} ${cx("containerMaxWidth")}`}
    >
      <div className={styles?.doubleColTextImage__container}>
        <div className={styles?.doubleColTextImage__leftSide}>
          <h3 className={cx("heading3 marginBottom24")}>{title}</h3>
          <p
            className={`${styles?.description} ${cx(
              "bodyRegularXL neutral700"
            )}`}
          >
            {description}
          </p>
        </div>
        <div className={styles.doubleColTextImage__rightSide}>
          <StrapiImage
            className={styles.doubleColTextImage__imageContainer}
            image={hero ? hero : null}
          />
        </div>
      </div>
    </section>
  )
}

export default DoubleColTextImage
