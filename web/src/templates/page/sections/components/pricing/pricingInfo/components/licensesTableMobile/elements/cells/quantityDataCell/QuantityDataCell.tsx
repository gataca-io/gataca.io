import * as React from "react"
import cx from "classnames"

export type IQuantityDataCellProps = {
  data: any
}

const QuantityDataCell: React.FC<IQuantityDataCellProps> = props => {
  const { data } = props
  return (
    <div className={`${cx("bodyBoldSM neutral1000")}`}>
      {data === "∞" || data === -1
        ? "Unlimited"
        : new Intl.NumberFormat("en-DE").format(data)}
    </div>
  )
}

export default QuantityDataCell
