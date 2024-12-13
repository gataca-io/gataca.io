import * as React from "react"
import * as styles from "./preFooterCTA.module.scss"
import { ButtonModel } from "../../../../interfaces/interfaces"
import cx from "classnames"
import Button from "../../../../templates/page/sections/components/generic/button/Button"

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
          {(leftButton?.label || leftButton?.icon?.length) && (
            <Button {...leftButton} />
          )}
          {(rightButton?.label || rightButton?.icon?.length) && (
            <Button {...rightButton} />
          )}
        </div>
      ) : null}
    </section>
  )
}

export default PreFooterCTASection
