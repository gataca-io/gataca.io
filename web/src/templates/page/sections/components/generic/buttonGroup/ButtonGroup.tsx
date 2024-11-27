import * as React from "react"
import * as styles from "./buttonGroup.module.scss"
import Button from "../button/Button"
import BrandButton from "../brandButton/BrandButton"
import ButtonIcon from "../buttonIcon/ButtonIcon"

export type IButtonGroupProps = {
  buttonGroup?: any
  brandButtonGroup?: any
  buttonIconGroup?: any
  className?: string
}

const ButtonGroup: React.FC<IButtonGroupProps> = props => {
  const { buttonGroup, brandButtonGroup, buttonIconGroup, className } = props

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
              {...button}
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

          return <BrandButton key={"brandButton__" + index} {...brandButton} />
        })}

        {buttonIconGroup?.map((item: any, index: number) => {
          const { buttonIcon } = item.attributes
          return (
            <ButtonIcon
              key={"buttonIcon__" + index}
              {...buttonIcon}
              action={() =>
                window?.open(
                  buttonIcon?.url,
                  buttonIcon?.outsideWeb ? "_blank" : "_self"
                )
              }
            />
          )
        })}
      </div>
    </>
  )
}

export default ButtonGroup
