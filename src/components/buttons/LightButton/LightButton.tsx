import React, { FunctionComponent, SVGProps } from "react"
import { ImageModel } from "../../../interfaces/interfaces"
import GaImage from "../../Image/Image"
import style from "./lightButton.module.scss"

type LightButtonProps = {
  text: string
  SvgIcon?: FunctionComponent<SVGProps<SVGSVGElement>>
  disabled: boolean
  type?: "button" | "submit" | "reset" | undefined
  icon?: ImageModel
  className?: string
  functionality?: ((x?: any) => void) | any
}

const LightButton: React.FC<LightButtonProps> = React.memo((props) => {
  const { text, SvgIcon, type, disabled, icon, className, functionality } =
    props

  return (
    <button
      className={`${style.lightButton} ${className} ${
        disabled ? style.lightButtonInActive : style.lightButtonActive
      }`}
      onClick={functionality}
      disabled={disabled}
      type={type || "button"}
    >
      {text}
      {SvgIcon ? (
        <SvgIcon
          className={`${style.lightButton__icon} ${
            disabled
              ? style.lightButtonIconInActive
              : style.lightButtonIconActive
          }`}
        />
      ) : icon ? (
        <GaImage className={style.lightButton__icon} image={icon} />
      ) : null}
    </button>
  )
})

export default LightButton
