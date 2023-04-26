import { Link } from "gatsby"
import * as React from "react"
import * as styles from "./menuDropdown.module.scss"
import cx from "classnames"
import { LinkModel } from "../../../../../interfaces/interfaces"
import MenuSubOption from "../menuSubOption/MenuSubOption"
import CrevronDownSVG from "../../../../../images/icons/ChevronDownSVG"
import CrevronUpSVG from "../../../../../images/icons/ChevronUpSVG"

export type IMenuDropdownProps = {
  item: LinkModel
  open: boolean
  setOptionOpened: (x: string) => void
}

const MenuDropdown: React.FC<IMenuDropdownProps> = props => {
  const { item, open, setOptionOpened } = props

  return item?.route ? null : (
    <div
      className={styles.menuDropdownRoute}
      onClick={() => setOptionOpened(!open ? item?.id : "")}
    >
      <div className={`${styles.dropdownLabel} ${cx("buttonMD")}`}>
        {item?.label}
        {open ? <CrevronUpSVG /> : <CrevronDownSVG />}
      </div>

      <MenuSubOption item={item} open={open} />
    </div>
  )
}

export default MenuDropdown
