import { Link } from "gatsby"
import * as React from "react"
import * as styles from "./menuSubOption.module.scss"
import cx from "classnames"
import { LinkModel } from "../../../../../interfaces/interfaces"
import { setActiveSubroute } from "../../../../../pages/appStore/appActions"
import { useDispatch } from "react-redux"

export type IMenuSubOptionProps = {
  item: LinkModel
  open: boolean
  isLastDropdown?: boolean
  selected: boolean
  showItem: (x: number) => void
}

const MenuSubOption: React.FC<IMenuSubOptionProps> = props => {
  const { item, open, isLastDropdown, selected, showItem } = props
  const categoriesLength = item?.categories?.length
  const dispatch = useDispatch()

  const setActiveRoute = (item, index) => {
    !selected && showItem(index),
      item.id && dispatch(setActiveSubroute(item.id))
  }

  return (item?.categories && item?.categories?.length && open) ||
    (item?.subRoutes && item?.subRoutes?.length && open) ? (
    <div
      className={`${styles.menuSubOption} ${
        categoriesLength > 1 ? styles.menuCategory : ""
      }`}
    >
      {item?.categories?.map((subItem, index) => {
        return (
          <div key={"menuSubOptionCategories__" + index}>
            <div
              key={"menuSubOptionCategoryItem__" + index}
              className={`${styles.menuCategoryItem__title} ${cx("buttonSM")}`}
            >
              {subItem?.label}
            </div>
            {subItem?.subRoutes?.map((item, index) => {
              return (
                <Link
                  key={"menuSubOption__" + index}
                  className={`${styles.menuSubOptionItem} ${cx("buttonSM")}`}
                  to={item?.route || ""}
                  onClick={() => setActiveRoute(item, index)}
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
