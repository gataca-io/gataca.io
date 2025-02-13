import * as React from "react"
import cx from "classnames"
import * as styles from "./list.module.scss"
import { ListModel } from "../../../../../../../interfaces/interfaces"
import StrapiImage from "../../../../../../../components/atoms/images/StrapiImage"
import Button from "../../../generic/button/Button"

const ListComponent: React.FC<ListModel> = props => {
  const {
    idList,
    size,
    title,
    leadingIcon,
    extraInfo,
    color,
    url,
    classNameButton,
    noPaddingText,
  } = props

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

  const titleSizeStyles: Record<string, string> = {
    small: "heading7 neutral1000",
    medium: "heading6 neutral1000",
    large: "heading6 neutral1000",
    xlarge: "heading5 neutral1000",
  }

  const colorStyles: Record<string, string> = {
    black: "neutral1000",
    grey: "neutral700",
  }

  const buttonSizeStyles: Record<string, string> = {
    small: "buttonSM",
    medium: "buttonMD",
    large: "buttonMD",
    xlarge: "buttonMD",
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
          <h5
            className={cx(
              size ? titleSizeStyles[size] : "heading5 neutral1000"
            )}
          >
            {title}
          </h5>
        )}

        {url?.length ? (
          <Button
            label={extraInfo}
            style={"text"}
            size={cx(size ? buttonSizeStyles[size] : "buttonMD")}
            color={color}
            noPaddingText={noPaddingText}
            url={url}
            link={true}
            action={() => window?.open(url, "_self")}
            className={`${classNameButton} ${styles?.list__button}`}
          />
        ) : extraInfo?.length ? (
          <p
            className={`${cx(
              size ? extraInfoSizeStyles[size] : "bodyRegularXL"
            )} ${cx(color ? colorStyles[color] : "neutral1000")}`}
          >
            {extraInfo}
          </p>
        ) : null}
      </div>
    </div>
  )
}

export default ListComponent
