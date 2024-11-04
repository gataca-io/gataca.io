import * as React from "react"
import cx from "classnames"
import * as styles from "./doubleColImageTextBg.module.scss"
import { InsideSectionsModel } from "../../../../../../interfaces/interfaces"
import StrapiImage from "../../../../../../components/atoms/images/StrapiImage"

const DoubleColImageTextBg: React.FC<InsideSectionsModel> = props => {
  const { id, title, subtitle, description, hero } = props

  return (
    <div
      key={`doubleColImageTextBg_` + id}
      className={`${styles.doubleColImageTextBg} ${cx("containerMaxWidth")}`}
    >
      <div className={styles?.doubleColImageTextBg__container}>
        <div className={styles?.doubleColImageTextBg__leftSide}>
          <StrapiImage
            className={styles.doubleColImageTextBg__imageContainer}
            image={hero ? hero : null}
          />
        </div>
        <div className={styles.doubleColImageTextBg__rightSide}>
          <h6 className={cx("heading6 marginBottom12 neutral700")}>
            {subtitle}
          </h6>
          <h4 className={cx("heading4 marginBottom12")}>{title}</h4>
          <p
            className={`${styles?.description} ${cx(
              "bodyRegularXL neutral700"
            )}`}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default DoubleColImageTextBg
