import * as React from "react"
import { Link } from "gatsby"
import * as styles from "./tableOfContentOptions.module.scss"
import { LinkModel } from "../../../../../interfaces/interfaces"
import cx from "classnames"

export type ITableOfContenOptionProps = {
  item: LinkModel
  open: boolean
}
const TableOfContentOptions: React.FC<ITableOfContenOptionProps> = props => {
  const { item, open } = props

  return item?.subRoutes && item?.subRoutes?.length && open ? (
    <ol className={`${styles?.tableOfContenOptions} ${cx("marginTop24")}`}>
      {item?.subRoutes?.map((subItem, index) => {
        return (
          <li className={cx("buttonSM")} key={"tableOfContent__" + index}>
            <Link to={subItem?.route || ""}>{subItem?.label}</Link>
          </li>
        )
      })}
    </ol>
  ) : null
}

export default TableOfContentOptions
