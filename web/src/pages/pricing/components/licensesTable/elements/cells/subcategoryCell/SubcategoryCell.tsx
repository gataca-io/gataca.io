import * as React from "react"
import cx from "classnames"
import HoverTooltip from "../../../../../../../components/elements/tooltip/hoverTooltip/HoverTooltip"
import * as styles from "./subcategoryCell.module.scss"

export type ISubcategoryCellProps = {
  subcategory: string
  information?: string
}

const SubcategoryCell: React.FC<ISubcategoryCellProps> = props => {
  const { subcategory, information } = props
  return (
    <td className={`${styles?.subcategoryCell} ${cx("bodyRegularSM")}`}>
      <span>
        <p className={`${cx("bodyRegularSM")}`}>{subcategory}</p>
        {information?.length && information?.length > 0 ? (
          <HoverTooltip label={information} />
        ) : null}
      </span>
    </td>
  )
}

export default SubcategoryCell
