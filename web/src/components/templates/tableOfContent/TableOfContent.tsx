import type { PageProps } from "gatsby"
import * as React from "react"
import { Link } from "gatsby"
import * as styles from "./tableOfContent.module.scss"
import { tableOfContentOptions } from "../../../pages/privacyPolicy/data/data"
import { LinkModel } from "../../../../../interfaces/interfaces"
import cx from "classnames"

export type ITableOfContent = {
  navigationObject?: LinkModel
  className?: string
}
const TableOfContent: React.FC<ITableOfContent> = props => {
  return props.navigationObject ? (
    <div className={styles?.sectionMain__tableContentCol}>
      <div>
        <p id={props.navigationObject?.id} className={styles?.title}><b>{props.navigationObject?.label}</b></p>
        <ol>
          {props.navigationObject?.subRoutes?.map(item => {
            return (
              <li className={cx("buttonSM")}>
                <Link
                  id={item.id}
                  to={item.route || ""}
                >
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ol>
      </div>
    </div>
  ) : null
}

export default TableOfContent
