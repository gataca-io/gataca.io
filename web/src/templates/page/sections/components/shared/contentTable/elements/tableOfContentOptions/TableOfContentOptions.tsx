import * as React from "react"
import { Link } from "gatsby"
import * as styles from "./tableOfContentOptions.module.scss"
import cx from "classnames"

export type ITableOfContenOptionProps = {
  list: {
    data: {
      attributes: {
        title: string
        idContent: string
      }
    }[]
  }
  open: boolean
}
const TableOfContentOptions: React.FC<ITableOfContenOptionProps> = props => {
  const { list, open } = props

  return open ? (
    <ol className={`${styles?.tableOfContenOptions} ${cx("marginTop24")}`}>
      {list?.data.map((item, index) => {
        const { idContent, title } = item?.attributes
        const routePath = "#" + idContent

        return (
          <li
            className={cx("buttonSM neutral1000")}
            key={"tableOfContent__" + index}
          >
            <Link to={routePath || ""}>{title}</Link>
          </li>
        )
      })}
    </ol>
  ) : null
}

export default TableOfContentOptions
