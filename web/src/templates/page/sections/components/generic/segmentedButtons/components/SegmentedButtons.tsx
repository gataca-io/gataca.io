import * as React from "react"
import Button from "../../button/Button"
import { SegmentedButtonModel } from "../../../../../../../interfaces/interfaces"

const SegmentedButtons: React.FC<SegmentedButtonModel> = props => {
  const {
    id,
    label,
    icon,
    index,
    color,
    size,
    noPaddingText,
    disabled,
    selected,
    link,
    url,
    showItem,
  } = props

  return (
    <>
      <Button
        idButton={id}
        label={label}
        icon={icon}
        style={selected ? "" : "text"}
        color={color}
        size={size}
        link={link}
        url={url}
        noPaddingText={noPaddingText}
        disabled={disabled}
        action={() => !selected && showItem(index)}
      />
    </>
  )
}

export default SegmentedButtons
