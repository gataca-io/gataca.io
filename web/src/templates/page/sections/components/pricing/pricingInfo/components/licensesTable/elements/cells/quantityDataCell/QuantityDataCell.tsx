import * as React from "react"
import cx from "classnames"

export type IQuantityDataCellProps = {
  data: any
}

const QuantityDataCell: React.FC<IQuantityDataCellProps> = props => {
  const { data } = props
  return (
    <>
      <td className={`${cx("bodyBoldSM neutral1000")}`}>
        {data === "∞" || data === -1
          ? "Unlimited"
          : data === -2
          ? "Custom"
          : new Intl.NumberFormat("en-DE").format(data)}
      </td>
    </>
  )
}

export default QuantityDataCell
