import * as React from "react"
import cx from "classnames"

export type IQuantityDataCellProps = {
  data: any
}

const QuantityDataCell: React.FC<IQuantityDataCellProps> = props => {
  const { data } = props
  return (
    <div className={`${cx("bodyBoldSM")}`}>
      {data === "∞" ? "Unlimited" : data}
    </div>
  )
}

export default QuantityDataCell
