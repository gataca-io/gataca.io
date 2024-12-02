import * as React from "react"
import * as styles from "./menuDropdownMobile.module.scss"
import MenuSubOption from "../menuSubOption/MenuSubOption"
import Button from "../../../../../templates/page/sections/components/generic/button/Button"

export type IMenuDropdownProps = {
  button?: any
  setOptionOpened: (x: string) => void
  menuSubOption?: any
  subMenuOpenedID?: any
  open?: boolean
  menuData?: any
  openSubOption?: any
  list_option?: any
}

const MenuDropdownMobile: React.FC<IMenuDropdownProps> = props => {
  const {
    button,
    setOptionOpened,
    openSubOption,
    list_option,
    open,
    menuData,
  } = props

  const iconButton = menuData?.iconMenuOptionsMobile?.data?.attributes?.url
  return (
    <div className={styles.menuDropdownRoute}>
      <Button
        {...button}
        className={`${styles?.dropdownLabel__button}`}
        icon={button?.url?.length ? "" : iconButton ? iconButton : button?.icon}
        action={() =>
          button?.url?.length
            ? window?.open(button?.url, button?.outsideWeb ? "_blank" : "_self")
            : setOptionOpened(!open ? button?.idButton : "")
        }
      />

      <MenuSubOption
        item={list_option?.data?.attributes}
        open={openSubOption}
      />
    </div>
  )
}

export default MenuDropdownMobile
