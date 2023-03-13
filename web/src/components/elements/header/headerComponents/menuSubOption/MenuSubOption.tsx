import { Link } from "gatsby"
import * as React from "react"
import * as styles from "./menuSubOption.module.scss"
import cx from "classnames"
import { images } from "../../../../../images/images"
import { LinkModel } from "../../../../../interfaces/interfaces"

export type IMenuSubOptionProps = {
  item: LinkModel
  open: boolean
  isLastDropdown?: boolean
}

const MenuSubOption: React.FC<IMenuSubOptionProps> = props => {
  const { item, open, isLastDropdown } = props

  return item?.subRoutes && item?.subRoutes?.length && open ? (
    <div className={styles.menuSubOption}>
      {item?.subRoutes?.map(subItem => {
        return (
          <Link
            className={`${styles.menuSubOptionItem} ${cx("buttonSM")}`}
            to={subItem?.route || ""}
          >
            {subItem?.label}
          </Link>
        )
      })}
    </div>
  ) : null
}

export default MenuSubOption
