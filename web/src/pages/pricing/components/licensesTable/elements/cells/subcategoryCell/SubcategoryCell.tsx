import * as React from "react"
import cx from "classnames"
import * as styles from "./subcategoryCell.module.scss"

export type ISubcategoryCellProps = {
  subcategory: string
}

const SubcategoryCell: React.FC<ISubcategoryCellProps> = props => {
  const { subcategory } = props
  return (
    <td className={`${styles.subcategoryCell} ${cx("bodyRegularSM")}`}>
      {subcategory}
    </td>
  )
}

export default SubcategoryCell
