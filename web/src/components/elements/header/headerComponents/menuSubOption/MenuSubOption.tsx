import { Link } from "gatsby"
import * as React from "react"
import * as styles from "./menuSubOption.module.scss"
import cx from "classnames"
import { LinkModel } from "../../../../../interfaces/interfaces"

export type IMenuSubOptionProps = {
  item: LinkModel
  open: boolean
  isLastDropdown?: boolean
}

const MenuSubOption: React.FC<IMenuSubOptionProps> = props => {
  const { item, open, isLastDropdown } = props
  const categoriesLength = item?.categories?.length
  return (item?.categories && item?.categories?.length && open) ||
    (item?.subRoutes && item?.subRoutes?.length && open) ? (
    <div
      className={`${styles.menuSubOption} ${
        categoriesLength > 1 ? styles.menuCategory : ""
      }`}
    >
      {item?.categories?.map(subItem => {
        return (
          <div className={styles.menuCategoryItem}>
            <div
              className={`${styles.menuCategoryItem__title} ${cx("buttonSM")}`}
            >
              {subItem?.label}
            </div>
            {subItem?.subRoutes?.map(item => {
              return (
                <Link
                  className={`${styles.menuSubOptionItem} ${cx("buttonSM")}`}
                  to={item?.route || ""}
                >
                  {item?.label}
                </Link>
              )
            })}
          </div>
        )
      })}
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
