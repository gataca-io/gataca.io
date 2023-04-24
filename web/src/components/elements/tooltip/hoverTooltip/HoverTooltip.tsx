import * as React from "react"
import cx from "classnames"
import * as styles from "./hoverTooltip.module.scss"
import { images } from "../../../../images/images"

export type IHoverTooltipProps = {
  label: string
  className?: any
}

const HoverTooltip: React.FC<IHoverTooltipProps> = props => {
  const { label, className } = props
  return (
    <span
      className={`${styles?.hoverTooltip} ${cx("buttonMD")} ${
        className && className
      }`}
    >
      <img src={images.infoIcon} />
      <p className={`${styles?.hoverTooltipText} ${cx("bodyRegularXS")}`}>
        {label}
      </p>
    </span>
  )
}

export default HoverTooltip
