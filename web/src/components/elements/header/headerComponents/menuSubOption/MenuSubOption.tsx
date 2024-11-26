import * as React from "react"
import * as styles from "./menuSubOption.module.scss"
import List from "../../../../../templates/page/sections/components/shared/list/components/List"
import ListGroup from "../../../../../templates/page/sections/components/shared/list/listGroup/ListGroup"

export type IMenuSubOptionProps = {
  item: any
  open: boolean
}

const MenuSubOption: React.FC<IMenuSubOptionProps> = props => {
  const { item, open } = props
  const categoriesAvailable = item?.list_options?.data

  return (
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
      {item?.list?.map((item: any, index: number) => {
        return (
          <List
            key={"menuSubOption__" + index}
            {...item}
            classNameButton={styles?.listLink}
          />
        )
      })}
      {item?.list_options?.data?.length > 0 && (
        <div className={styles?.menuCategory}>
          <ListGroup
            listOptions={item?.list_options?.data}
            className={styles?.listOptions_link}
          />
        </div>
      )}
    </div>
  )
}

export default MenuSubOption
