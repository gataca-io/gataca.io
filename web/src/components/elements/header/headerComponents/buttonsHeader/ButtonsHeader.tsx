import * as React from "react"
import ButtonGroup from "../../../../../templates/page/sections/components/generic/buttonGroup/ButtonGroup"

export type IButtonsHeaderProps = {
  buttonGroup?: any
}
const ButtonsHeader: React.FC<IButtonsHeaderProps> = props => {
  const { buttonGroup } = props

  return (
    <>
      <ButtonGroup buttonGroup={buttonGroup} />
    </>
  )
}

export default ButtonsHeader
