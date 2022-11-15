import React, { FunctionComponent, SVGProps } from "react"
import { ImageModel } from "../../../interfaces/interfactes"
import GaImage from "../../Image/Image"
import style from "./darkButton.module.scss"

type DarkButtonProps = {
  text: string
  SvgIcon?: FunctionComponent<SVGProps<SVGSVGElement>>
  disabled: boolean
  color?: string
  type?: "button" | "submit" | "reset" | undefined
  icon?: ImageModel
  className?: string
  functionality?: ((x?: any) => void) | any
}

const DarkButton: React.FC<DarkButtonProps> = React.memo((props) => {
  const {
    text,
    SvgIcon,
    color,
    type,
    disabled,
    icon,
    className,
    functionality,
  } = props

  return (
    <button
      className={`${style.darkButton} ${className} ${
        disabled ? style.darkButtonInActive : style.darkButtonActive
      }`}
      onClick={functionality}
      disabled={disabled}
      type={type || "button"}
    >
      {text}
      {SvgIcon ? (
        <SvgIcon
          className={`${style.darkButton__icon} ${
            disabled ? style.darkButtonIconInActive : style.darkButtonIconActive
          }`}
        />
      ) : icon ? (
        <GaImage className={style.darkButton__icon} image={icon} />
      ) : null}
    </button>
  )
})

export default DarkButton
