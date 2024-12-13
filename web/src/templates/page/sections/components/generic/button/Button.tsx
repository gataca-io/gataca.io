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
    color,
    size,
    disabled,
    outsideWeb,
    noPaddingText,
    IconComponent,
    onMouseEnterAction,
    fullWidth,
  } = props

  const buttonStyles: Record<string, string> = {
    outline: styles?.outlineButton,
    text: styles?.text,
  }

  const sizeStyles: Record<string, string> = {
    buttonSM: styles?.buttonSM,
  }

  const colorStyles: Record<string, string> = {
    white: styles?.whiteColor,
    black: styles?.blackColor,
    grey: styles?.greyColor,
  }

  return (
    <>
      {link ? (
        <a
          id={idButton}
          className={`${style ? buttonStyles[style] : styles?.buttonStrapi} ${
            size ? sizeStyles[size] : styles?.buttonStrapi
          } ${color ? colorStyles[color] : styles?.buttonStrapi} ${
            styles.buttonStrapi
          } ${disabled ? styles.disabled : ""} ${
            noPaddingText ? styles.noPadding : ""
          } ${fullWidth ? styles?.fullWidthButton : ""} ${
            className && className
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
          className={`
            ${style ? buttonStyles[style] : styles?.buttonStrapi} ${
            size ? sizeStyles[size] : styles?.buttonStrapi
          } ${color ? colorStyles[color] : styles?.buttonStrapi} ${
            styles.buttonStrapi
          } ${disabled ? styles.disabled : ""} ${
            noPaddingText ? styles.noPadding : ""
          } ${fullWidth ? styles?.fullWidthButton : ""} ${
            className && className
          }`}
          onClick={action}
          onMouseEnter={onMouseEnterAction}
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
