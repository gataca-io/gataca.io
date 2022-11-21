import React, { FunctionComponent, SVGProps } from "react"
import { ImageModel, OptionModel } from "../../../interfaces/interfactes"
import style from "./switchButton.module.scss"

type SwitchButtonProps = {
  options?: OptionModel[]
  SvgIcon?: FunctionComponent<SVGProps<SVGSVGElement>>
  checkedValue: string
  disabled?: boolean
  type?: "button" | "submit" | "reset" | undefined
  icon?: ImageModel
  className?: string
  onChangeSwitchSelect?: ((x?: any) => void) | any
}

const SwitchButton: React.FC<SwitchButtonProps> = React.memo((props) => {
  const {
    options,
    SvgIcon,
    type,
    disabled,
    icon,
    className,
    checkedValue,
    onChangeSwitchSelect,
  } = props

  return (
    <div className={style.switchButton}>
      <div className={style.switchesContainer}>
        {options?.map((option) => {
          return (
            <input
              type="radio"
              id="switchMonthly"
              name="switchPlan"
              value={option.value}
              checked={checkedValue === option.value ? true : false}
            />
          )
        })}
        {options?.map((option) => {
          return (
            <label
              className={
                checkedValue === option.value
                  ? style.labelSelectedValue
                  : style.labelUnselectedValue
              }
              onClick={() => {
                onChangeSwitchSelect(option.value)
              }}
            >
              {option.text}
            </label>
          )
        })}
        <div className={style.switchWrapper}>
          <div className={style.switch}>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  )
})

export default SwitchButton
