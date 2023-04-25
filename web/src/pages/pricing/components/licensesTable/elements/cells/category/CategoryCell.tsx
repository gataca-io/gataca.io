import * as React from "react"
import cx from "classnames"
import * as styles from "./categoryCell.module.scss"

export type ICategoryCellProps = {
  category: string
  rowsPan: number
}

const CategoryCell: React.FC<ICategoryCellProps> = props => {
  const { category, rowsPan } = props
  return (
    <td
      className={`${styles.categoryCell} ${cx("bodyBoldCap")}`}
      rowSpan={rowsPan}
    >
      {category}
    </td>
  )
}

export default CategoryCell
