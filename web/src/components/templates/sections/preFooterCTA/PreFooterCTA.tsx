import * as React from "react"
import * as styles from "./preFooterCTA.module.scss"
import { ButtonModel } from "../../../../interfaces/interfaces"
import cx from "classnames"
import Button from "../../../../templates/page/sections/components/shared/button/Button"

export type IPreFooterCTAProps = {
  title: string
  description: string
  storeButtons?: boolean
  leftButton?: ButtonModel
  rightButton?: ButtonModel
  className?: string
}

const PreFooterCTASection: React.FC<IPreFooterCTAProps> = props => {
  const { title, description, leftButton, rightButton, className } = props
  return (
    <section className={`${styles?.preFooterCTA} ${className && className}`}>
      <h6 className={`${cx("heading1 marginBottom24")}`}>{title}</h6>
      <p className={`${cx("bodyRegularXL marginBottom24")}`}>{description}</p>
      {leftButton || rightButton ? (
        <div>
          {(leftButton?.label || leftButton?.icon?.length)  && (
            <Button
              idButton={leftButton?.idButton}
              label={leftButton?.label}
              icon={leftButton?.icon}
              style={leftButton?.style}
              fillColor={leftButton?.fillColor}
              size={leftButton?.size}
              fileName={leftButton?.fileName}
              noPaddingText={leftButton?.noPaddingText}
              disabled={leftButton?.disabled}
              link={leftButton?.link}
              url={leftButton?.url}
              outsideWeb={leftButton?.outsideWeb}
              action={leftButton?.action}
            />
          )}
          {(rightButton?.label || rightButton?.icon?.length) && (
            <Button
              idButton={rightButton?.idButton}
              label={rightButton?.label}
              icon={rightButton?.icon}
              style={rightButton?.style}
              fillColor={rightButton?.fillColor}
              size={rightButton?.size}
              fileName={rightButton?.fileName}
              noPaddingText={rightButton?.noPaddingText}
              disabled={rightButton?.disabled}
              link={rightButton?.link}
              url={rightButton?.url}
              outsideWeb={rightButton?.outsideWeb}
              action={rightButton?.action}
            />
          )}
        </div>
      ) : null}
    </section>
  )
}

export default PreFooterCTASection
