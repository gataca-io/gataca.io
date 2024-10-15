import * as React from "react"
import Button from "../../../shared/button/Button"
import { SegmentedButtonModel } from "../../../../../../../interfaces/interfaces"

const SegmentedButtons: React.FC<SegmentedButtonModel> = props => {
  const {
    id,
    label,
    icon,
    index,
    fillColor,
    size,
    noPaddingText,
    disabled,
    selected,
    showItem,
  } = props

  return (
    <>
      <Button
        idButton={id}
        label={label}
        icon={icon}
        style={selected ? "" : "onlyText"}
        fillColor={fillColor}
        size={size}
        noPaddingText={noPaddingText}
        disabled={disabled}
        action={() => !selected && showItem(index)}
      />
    </>
  )
}

export default SegmentedButtons
