import * as React from "react"
import cx from "classnames"
import * as styles from "./chip.module.scss"
import { ChipModel } from "../../../../../../interfaces/interfaces"
import StrapiImage from "../../../../../../components/atoms/images/StrapiImage"

const Chip: React.FC<ChipModel> = props => {
  const {
    className,
    idChip,
    text,
    action,
    type,
    form,
    color,
    leadingIcon,
    trailingIcon,
    chipSize,
    disabled,
  } = props

  const chipStyles: Record<string, string> = {
    outline: styles?.outlineChip,
    text: styles?.text,
  }

  const chipForm: Record<string, string> = {
    round: styles?.roundChip,
  }

  const sizeStyles: Record<string, string> = {
    xsmall: "bodyRegularXS",
    small: "buttonSM",
  }

  const colorStyles: Record<string, string> = {
    red: styles?.redColor,
    green: styles?.greenColor,
    purple: styles?.purpleColor,
    yellow: styles?.yellowColor,
    blue: styles?.blueColor,
    grey: styles?.greyColor,
    teal: styles?.tealColor,
    pink: styles?.pinkColor,
    black: styles?.blackColor,
    white: styles?.chipStrapi,
  }

  return (
    <>
      <button
        id={idChip}
        className={`
            ${type ? chipStyles[type] : styles?.chipStrapi} ${
          chipSize ? sizeStyles[chipSize] : styles?.chipStrapi
        } ${color ? colorStyles[color] : styles?.chipStrapi} ${
          styles.chipStrapi
        } ${form ? chipForm[form] : styles?.chipStrapi} ${
          disabled ? styles.disabled : styles?.chipStrapi
        } ${styles.chipStrapi} ${!action ? styles?.noAction : ""}`}
        onClick={action}
      >
        {leadingIcon ? (
          <StrapiImage image={leadingIcon ? leadingIcon : null} />
        ) : null}
        {text ? (
          <span
            className={`${cx(
              chipSize ? sizeStyles[chipSize] : "bodyRegularSM"
            )} ${className && className}`}
          >
            {text}
          </span>
        ) : null}
        {trailingIcon ? (
          <StrapiImage image={trailingIcon ? trailingIcon : null} />
        ) : null}
      </button>
    </>
  )
}

export default Chip
