import { Link } from "gatsby"
import * as React from "react"
import * as styles from "./menuDropdown.module.scss"
import cx from "classnames"
import { LinkModel } from "../../../../../interfaces/interfaces"
import MenuSubOption from "../menuSubOption/MenuSubOption"
import CrevronDownSVG from "../../../../../images/icons/ChevronDownSVG"

export type IMenuDropdownProps = {
  item: LinkModel
  open: boolean
  setOptionOpened: (x: string) => void
}

const MenuDropdown: React.FC<IMenuDropdownProps> = props => {
  const { item, open, setOptionOpened } = props
  const [openItem, setOpenItem] = React.useState<number>(1)
  return item?.route ? null : (
    <div
      className={styles.menuDropdownRoute}
      onClick={() => setOptionOpened(!open ? item?.id : "")}
    >
      <div className={`${styles.dropdownLabel} ${cx("buttonMD")}`}>
        {item?.label}
        <CrevronDownSVG />
      </div>

      <MenuSubOption
        item={item}
        open={open}
        selected={openItem}
        showItem={index => {
          const element = document.getElementById("listItem__" + (index - 1))
          setOpenItem(index)
        }}
      />
    </div>
  )
}

export default MenuDropdown
