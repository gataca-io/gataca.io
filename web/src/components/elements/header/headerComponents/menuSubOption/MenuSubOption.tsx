import { Link } from "gatsby"
import * as React from "react"
import * as styles from "./menuSubOption.module.scss"
import cx from "classnames"
import { LinkModel } from "../../../../../interfaces/interfaces"

export type IMenuSubOptionProps = {
  item: LinkModel
  open: boolean
}

const MenuSubOption: React.FC<IMenuSubOptionProps> = props => {
  const { item, open } = props
  const categoriesAvailable = item?.categories

  return (item?.categories && item?.categories?.length) ||
    (item?.subRoutes && item?.subRoutes?.length) ||
    (item?.mainRoute && item?.mainRoute?.length) ? (
    <div
      id={item?.id}
      className={`${styles?.menuSubOption} ${
        categoriesAvailable ? styles?.menuCategoryContainer : ""
      } ${
        categoriesAvailable && categoriesAvailable?.length > 1
          ? styles?.twoCategories
          : ""
      } ${open ? styles?.subItemActive : styles?.subItemInActive}`}
    >
      {item?.mainRoute && (
        <div className={styles?.mainRoute}>
          {item?.mainRoute?.map((subItem, index) => {
            return (
              <Link
                key={"mainRoute__" + index}
                className={`${cx("buttonSM")}`}
                to={subItem?.route || ""}
              >
                {subItem?.label}
              </Link>
            )
          })}
        </div>
      )}
      {item?.categories && (
        <div className={styles?.menuCategory}>
          {item?.categories?.map((subItem, index) => {
            return (
              <div key={"menuSubOptionCategories__" + index}>
                <div
                  key={"menuSubOptionCategoryItem__" + index}
                  className={`${styles?.menuCategoryItem__title} ${cx(
                    "buttonSM"
                  )}`}
                >
                  {subItem?.label}
                </div>

                {subItem?.subRoutes?.map((item, index) => {
                  return (
                    <Link
                      key={"menuSubOption__" + index}
                      className={`${styles?.menuSubOptionItem} ${cx(
                        "buttonSM"
                      )}`}
                      to={item?.route || ""}
                    >
                      {item?.label}
                    </Link>
                  )
                })}
              </div>
            )
          })}
        </div>
      )}
      {item?.subRoutes?.map((subItem, index) => {
        return (
          <Link
            key={"menuSubOption__" + index}
            className={`${styles?.menuSubOptionItem} ${cx("buttonSM")}`}
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
