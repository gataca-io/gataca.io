import * as React from "react"
import * as styles from "./buttonGroup.module.scss"
import Button from "../button/Button"
import BrandButton from "../brandButton/BrandButton"

export type IButtonGroupProps = {
  buttonGroup?: any
  brandButtonGroup?: any
  className?: string
}

const ButtonGroup: React.FC<IButtonGroupProps> = props => {
  const { buttonGroup, brandButtonGroup, className } = props

  return (
    <>
      <div
        className={`${styles?.buttonGroup__container} ${
          className && className
        }`}
      >
        {buttonGroup?.map((item: any, index: number) => {
          const { button } = item.attributes

          return (
            <Button
              key={"button__" + index}
              idButton={button?.idButton}
              label={button?.label}
              icon={button?.icon}
              style={button?.style}
              color={button?.color}
              size={button?.size}
              noPaddingText={button?.noPaddingText}
              disabled={button?.disabled}
              link={button?.link}
              url={button?.url}
              outsideWeb={button?.outsideWeb}
              action={() =>
                window?.open(
                  button?.url,
                  button?.outsideWeb ? "_blank" : "_self"
                )
              }
            />
          )
        })}

        {brandButtonGroup?.map((item: any, index: number) => {
          const { brandButton } = item.attributes

          return (
            <BrandButton
              key={"brandButton__" + index}
              icon={brandButton?.icon}
              color={brandButton?.color}
              size={brandButton?.size}
              url={brandButton?.url}
              outsideWeb={brandButton?.outsideWeb}
            />
          )
        })}
      </div>
    </>
  )
}

export default ButtonGroup
