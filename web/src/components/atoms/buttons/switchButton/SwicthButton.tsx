import React from "react"
import * as styles from "./switchButton.module.scss"
import { OptionModel } from "../../../../interfaces/interfaces"
import cx from "classnames"

type SwitchButtonProps = {
  options: OptionModel[]
  rightLabel: string
  checkedValue: string
  className?: string
  onChangeSwitchSelect?: ((x?: any) => void) | any
}

const SwitchButton: React.FC<SwitchButtonProps> = React.memo(props => {
  const { className, options, checkedValue, onChangeSwitchSelect, rightLabel } =
    props

  return (
    <div className={`${styles?.switchButton} ${className && className}`}>
      <input
        defaultChecked={checkedValue === options[1]?.value}
        className={styles.periodCheckbox}
        type="checkbox"
        id="switch"
      />
      <label
        onClick={e =>
          onChangeSwitchSelect(
            checkedValue === options[1]?.value
              ? options[0]?.value
              : options[1]?.value
          )
        }
        className={styles.periodCheckboxLabel}
      ></label>
      <span className={`${cx("bodyRegularMD")}`}>{rightLabel}</span>
    </div>
  )
})

export default SwitchButton
