import * as React from "react"
import cx from "classnames"
import * as styles from "./list.module.scss"
import { ListModel } from "../../../../../../../interfaces/interfaces"
import StrapiImage from "../../../../../../../components/atoms/images/StrapiImage"

const ListComponent: React.FC<ListModel> = props => {
  const { idList, size, title, leadingIcon, extraInfo, color } = props

  const iconSizeStyles: Record<string, string> = {
    small: styles?.smallIcon,
    medium: styles?.mediumIcon,
    large: styles?.largeIcon,
    xlarge: "iconSM",
  }

  const extraInfoSizeStyles: Record<string, string> = {
    small: "bodyRegularSM",
    medium: "bodyRegularMD",
    large: "bodyRegularLG",
    xlarge: "bodyRegularXL",
  }

  const colorStyles: Record<string, string> = {
    black: "neutral1000",
    grey: "neutral700",
  }

  return (
    <div id={idList} className={`${styles?.list__container} `}>
      {leadingIcon && (
        <StrapiImage
          className={cx(size ? iconSizeStyles[size] : "iconSM")}
          image={leadingIcon ? leadingIcon : null}
        />
      )}

      <div className={styles.contentContainer}>
        {title?.length && (
          <h5 className={cx("heading5 neutral1000")}>{title}</h5>
        )}
        {extraInfo?.length && (
          <p
            className={`${cx(
              size ? extraInfoSizeStyles[size] : "bodyRegularXL"
            )} ${cx(color ? colorStyles[color] : "neutral1000")}`}
          >
            {extraInfo}
          </p>
        )}
      </div>
    </div>
  )
}

export default ListComponent
