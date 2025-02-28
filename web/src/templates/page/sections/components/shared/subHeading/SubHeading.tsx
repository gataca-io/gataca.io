import * as React from "react"
import cx from "classnames"
import * as styles from "./subHeading.module.scss"
import { SubHeadingModel } from "../../../../../../interfaces/interfaces"
import StrapiImage from "../../../../../../components/atoms/images/StrapiImage"

const SubHeading: React.FC<SubHeadingModel> = props => {
  const {
    idSubHeading,
    size,
    align,
    icon,
    numberIconText,
    title,
    content,
    darkTheme,
  } = props

  const iconSizeStyles: Record<string, string> = {
    small: "iconSM",
    medium: "iconMD",
    large: "iconLG",
  }

  const titleSizeStyles: Record<string, string> = {
    small: "heading6 neutral1000",
    medium: "heading5 neutral1000",
    large: "heading4 neutral1000",
  }

  const contentSizeStyles: Record<string, string> = {
    small: "bodyRegularMD neutral700",
    medium: "bodyRegularLG neutral700",
    large: "bodyRegularLG neutral700",
  }

  const alignStyles: Record<string, string> = {
    center: styles?.alignCenter,
    left: styles?.alignLeft,
  }

  return (
    <div id={idSubHeading} className={`${styles?.subheading__container} `}>
      <div className={`${align ? alignStyles[align] : styles?.alignLeft}`}>
        {numberIconText ? (
          <h1
            className={cx("heading1", darkTheme ? "primary700" : "primary200")}
          >
            {numberIconText}
          </h1>
        ) : null}
        {icon?.data?.attributes?.url && (
          <div>
            <StrapiImage
              image={icon ? icon : null}
              url={icon ? icon : null}
              className={cx(size ? iconSizeStyles[size] : "iconLG")}
            />
          </div>
        )}

        {title?.length && (
          <h4
            className={cx(
              size ? titleSizeStyles[size] : "heading4 neutral1000"
            )}
          >
            {title}
          </h4>
        )}

        {content?.length && (
          <p
            className={cx(
              size ? contentSizeStyles[size] : "bodyRegularLG neutral700"
            )}
          >
            {content}
          </p>
        )}
      </div>
    </div>
  )
}

export default SubHeading
