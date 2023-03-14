import { Link } from "gatsby"
import * as React from "react"
import * as styles from "./menuDropdown.module.scss"
import cx from "classnames"
import { images } from "../../../../../images/images"
import { LinkModel } from "../../../../../interfaces/interfaces"
import MenuSubOption from "../menuSubOption/MenuSubOption"
import { useRef } from "react"

export type IMenuDropdownProps = {
  item: LinkModel
  open: boolean
  setOptionOpened: (x: string) => void
}

const MenuDropdown: React.FC<IMenuDropdownProps> = props => {
  const { item, open, setOptionOpened } = props

  return item?.route ? (
    <div className={styles.menuDropdownNoRoute}>
      <Link
        className={`${styles.dropdownLabel} ${cx("buttonMD")}`}
        to={item?.route}
      >
        {item?.label}
      </Link>
      <img
        onClick={() => setOptionOpened(!open ? item?.id : "")}
        src={images.chevronDown}
      />
      <MenuSubOption item={item} open={open} />
    </div>
  ) : (
    <div
      className={styles.menuDropdownRoute}
      onClick={() => setOptionOpened(!open ? item?.id : "")}
    >
      <p className={`${styles.dropdownLabel} ${cx("buttonMD")}`}>
        {item?.label}
      </p>
      <img src={images.chevronDown} />
      <MenuSubOption item={item} open={open} />
    </div>
  )
}

export default MenuDropdown
