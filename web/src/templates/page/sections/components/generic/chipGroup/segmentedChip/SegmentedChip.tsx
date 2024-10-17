import * as React from "react"
import { SegmentedChipModel } from "../../../../../../../interfaces/interfaces"
import Chip from "../../chip/Chip"

const SegmentedChip: React.FC<SegmentedChipModel> = props => {
  const {
    id,
    index,
    text,
    type,
    form,
    color,
    leadingIcon,
    trailingIcon,
    chipSize,
    disabled,
    selected,
    showItem,
  } = props

  return (
    <>
      <Chip
        idChip={id}
        text={text}
        type={type}
        form={form}
        disabled={disabled}
        color={color}
        chipSize={chipSize}
        leadingIcon={leadingIcon}
        trailingIcon={trailingIcon}
        action={() => !selected && showItem(index)}
      />
    </>
  )
}

export default SegmentedChip
