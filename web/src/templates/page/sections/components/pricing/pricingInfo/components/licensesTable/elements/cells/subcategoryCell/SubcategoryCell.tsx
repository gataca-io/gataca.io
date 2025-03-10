import * as React from "react"
import cx from "classnames"

import * as styles from "./subcategoryCell.module.scss"
import HoverTooltip from "../../../../../../../../../../../components/elements/tooltip/hoverTooltip/HoverTooltip"

export type ISubcategoryCellProps = {
  subcategory: string
  information?: string
}

const SubcategoryCell: React.FC<ISubcategoryCellProps> = props => {
  const { subcategory, information } = props
  return (
    <td
      className={`${styles?.subcategoryCell} ${cx(
        "bodyRegularSM neutral1000"
      )}`}
    >
      <span>
        <p className={`${cx("bodyRegularSM neutral1000")}`}>{subcategory}</p>
        {information?.length && information?.length > 0 ? (
          <HoverTooltip label={information} />
        ) : null}
      </span>
    </td>
  )
}

export default SubcategoryCell
