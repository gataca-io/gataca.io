import { Tooltip } from "carbon-components-react"
import cx from "classnames"
import React from "react" // we need this to make JSX compile
import {
  ButtonModel,
  TooltipPositionModel,
} from "../../../interfaces/interfaces"
import LightButton from "../../buttons/LightButton/LightButton"
import styles from "./regularTooltip.module.scss"

type IRegularTooltipProps = {
  label: React.ReactNode | string
  info: string
  clear?: boolean
  blue?: boolean
  index?: number
  opened?: number
  position?: TooltipPositionModel
  positionMobile?: TooltipPositionModel
  customMobileContainer?: boolean
  extraTranslationParams?: Object
  button?: ButtonModel
  className?: string
  link?: {
    label: string
    url: string
  }
  buttonFunction?: (x?: any) => void
  onHandleChange?: (x: any) => void
}

const RegularTooltip: React.FC<IRegularTooltipProps> = (props) => {
  const {
    clear,
    blue,
    index,
    label,
    className,
    info,
    extraTranslationParams,
    customMobileContainer,
    button,
    link,
    onHandleChange,
    opened,
    position,
    positionMobile,
  } = props
  let show = opened ? opened === index : false

  const toggleButton = (index: any) => {
    if (onHandleChange) {
      onHandleChange(index)
    }
    show = !show
  }

  return (
    <div
      onBlur={() => {
        show = false
      }}
      className={className ? className : ""}
    >
      <Tooltip
        open={onHandleChange ? show : undefined}
        tooltipId={clear ? styles.clearTooltip : blue ? styles.blueTooltip : ""}
        align={position?.align || "start"}
        direction={position?.direction || "bottom"}
        triggerClassName={`${styles.regularTooltip} ${styles.regularTooltipDesktop}`}
        triggerText={label}
        onChange={() => toggleButton(index)}
      >
        {link ? (
          <>
            <p className={styles.linkText}>
              {info}
              <a
                className={styles.linkText}
                href={
                  "https://www.w3.org/TR/did-core/#dfn-decentralized-identifiers"
                }
                target="_blank"
              >
                {link.label}
              </a>
              .
            </p>
          </>
        ) : (
          { info }
        )}
        {button ? (
          <LightButton
            className={cx("margin-top", styles.tooltipButton)}
            text={button.label}
            disabled={false}
            functionality={button.function ? button.function : null}
          />
        ) : null}
      </Tooltip>

      <Tooltip
        open={onHandleChange ? show : undefined}
        tooltipId={
          clear
            ? styles.clearTooltipMobile
            : blue
            ? styles.blueTooltipMobile
            : ""
        }
        align={positionMobile?.align || "start"}
        direction={positionMobile?.direction || "top"}
        triggerClassName={`${styles.regularTooltip} ${styles.regularTooltipMobile}`}
        triggerText={label}
        onChange={() => toggleButton(index)}
      >
        {info}
        {button ? (
          <LightButton
            className={cx("margin-top", styles.tooltipButton)}
            text={button.label}
            disabled={false}
            functionality={button.function ? button.function : null}
          />
        ) : null}
      </Tooltip>
    </div>
  )
}

export default RegularTooltip
