import * as React from "react"
import cx from "classnames"
import * as styles from "./button.module.scss"
import { ButtonModel } from "../../../../../../interfaces/interfaces"
import StrapiImage from "../../../../../../components/atoms/images/StrapiImage"

const Button: React.FC<ButtonModel> = props => {
  const {
    idButton,
    label,
    icon,
    className,
    url,
    action,
    link,
    style,
    fillColor,
    size,
    disabled,
    outsideWeb,
    noPaddingText,
    IconComponent,
  } = props

  return (
    <>
      {link ? (
        <a
          id={idButton}
          className={`${
            style === "outlined"
              ? styles?.outlinedButton
              : style === "onlyText"
              ? styles?.onlyText
              : ""
          } ${size === "buttonSM" ? styles?.buttonSM : styles?.buttonStrapi} ${
            fillColor === "white"
              ? styles?.whiteFill
              : fillColor === "black"
              ? styles?.blackFill
              : fillColor === "grey"
              ? styles?.greyFill
              : styles?.buttonStrapi
          } ${styles.buttonStrapi} ${disabled ? styles.disabled : ""} ${
            noPaddingText ? styles.noPadding : ""
          }`}
          target={outsideWeb ? "_blank" : "_self"}
          href={url}
        >
          {label ? (
            <span className={cx(size ? size : "buttonMD")}>{label}</span>
          ) : null}

          {icon ? (
            <StrapiImage image={icon ? icon : null} url={icon ? icon : null} />
          ) : null}
          {IconComponent && IconComponent}
        </a>
      ) : (
        <button
          id={idButton}
          className={`${
            style === "outlined"
              ? styles?.outlinedButton
              : style === "onlyText"
              ? styles?.onlyText
              : ""
          } ${size === "buttonSM" ? styles?.buttonSM : styles?.buttonStrapi} ${
            fillColor === "white"
              ? styles?.whiteFill
              : fillColor === "black"
              ? styles?.blackFill
              : fillColor === "grey"
              ? styles?.greyFill
              : styles?.buttonStrapi
          } ${styles.buttonStrapi} ${disabled ? styles.disabled : ""} ${
            noPaddingText ? styles.noPadding : ""
          } ${className && className}`}
          onClick={action}
        >
          {label ? (
            <span className={cx(size ? size : "buttonMD")}>{label} </span>
          ) : null}
          {icon ? (
            <StrapiImage image={icon ? icon : null} url={icon ? icon : null} />
          ) : null}
          {IconComponent && IconComponent}
        </button>
      )}
    </>
  )
}

export default Button
