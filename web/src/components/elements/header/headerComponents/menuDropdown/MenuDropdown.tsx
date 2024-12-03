import * as React from "react"
import * as styles from "./menuDropdown.module.scss"
import MenuSubOption from "../menuSubOption/MenuSubOption"
import Button from "../../../../../templates/page/sections/components/generic/button/Button"

export type IMenuDropdownProps = {
  setOptionOpened: (x: string) => void
  subMenuOpenedID?: any
  open?: boolean
  button?: any
  subItem?: any
  openSubOption?: any
  list_option?: any
}

const MenuDropdown: React.FC<IMenuDropdownProps> = props => {
  const { open, button, setOptionOpened, openSubOption, list_option } = props

  return (
    <div className={styles.menuDropdownRoute}>
      <Button
        {...button}
        onMouseEnterAction={() => setOptionOpened(button?.idButton)}
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

export default MenuDropdown
