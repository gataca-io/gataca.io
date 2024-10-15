import * as React from "react"
import * as styles from "./buttonGroup.module.scss"
import Button from "../../shared/button/Button"

export type IButtonGroupProps = {
  buttonGroup: any
}

const ButtonGroup: React.FC<IButtonGroupProps> = props => {
  const { buttonGroup } = props

  return (
    <>
      <div className={styles?.buttonGroup__container}>
        {buttonGroup?.map((item: any) => {
          const { button } = item.attributes

          return (
            <Button
              idButton={button?.idButton}
              label={button?.label}
              icon={button?.icon}
              style={button?.style}
              fillColor={button?.fillColor}
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
      </div>
    </>
  )
}

export default ButtonGroup
