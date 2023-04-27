import { Link } from "gatsby"
import * as React from "react"
import * as styles from "./menuDropdownMobile.module.scss"
import cx from "classnames"
import { LinkModel } from "../../../../../interfaces/interfaces"
import MenuSubOption from "../menuSubOption/MenuSubOption"
import CrevronRightMenuSVG from "../../../../../images/icons/ChevronRightMenuSVG"

export type IMenuDropdownProps = {
  item: LinkModel
  open: boolean
  setOptionOpened: (x: string) => void
}

const MenuDropdownMobile: React.FC<IMenuDropdownProps> = props => {
  const { item, open, setOptionOpened } = props

  return item?.route ? null : (
    <div
      className={styles.menuDropdownRoute}
      onClick={() => setOptionOpened(!open ? item?.id : "")}
    >
      <div className={`${styles.dropdownLabel} ${cx("buttonMD")}`}>
        <span>{item?.label}</span>
        <span>
          <CrevronRightMenuSVG />
        </span>
      </div>

      <MenuSubOption item={item} open={open} />
    </div>
  )
}

export default MenuDropdownMobile
