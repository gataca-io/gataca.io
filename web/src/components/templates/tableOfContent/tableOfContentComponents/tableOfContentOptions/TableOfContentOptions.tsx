import * as React from "react"
import { Link } from "gatsby"
import * as styles from "./tableOfContentOptions.module.scss"
import { LinkModel } from "../../../../../interfaces/interfaces"
import cx from "classnames"

export type ITableOfContenOptionProps = {
  item: LinkModel
  open: boolean
  isLastDropdown?: boolean
}
const TableOfContentOptions: React.FC<ITableOfContentOptionProps> = props => {
  const { item, open, isLastDropdown } = props

  return item?.subRoutes && item?.subRoutes?.length && open ? (
    <ol>
      {item?.subRoutes?.map( subItem => {
        return (
          <li className={cx("buttonSM")}>
            <Link
              id={subItem?.id}
              to={subItem?.route || ""}
            >
              {subItem?.label}
            </Link>
          </li>
        )
      })}
    </ol>
  ) : null
}

export default TableOfContentOptions
