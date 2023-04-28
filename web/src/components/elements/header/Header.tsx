import * as React from "react"
import * as styles from "./header.module.scss"
import { headerMenuOptions } from "../../../data/globalData"
import MenuDropdown from "./headerComponents/menuDropdown/MenuDropdown"
import { images } from "../../../images/images"
import { Link } from "gatsby"
import ButtonsHeader from "./headerComponents/buttonsHeader/ButtonsHeader"
import MenuOpenMobile from "./headerComponents/buttonsHeader/menuOpenMobile/MenuOpenMobile"

const Header: React.FC = () => {
  const [subMenuOpenedID, setSubMenuOpened] = React.useState("")
  const [menuOpened, setMenuOpened] = React.useState("")

  return (
    <>
      <header className={styles?.header}>
        <Link className={styles?.header__logo} to="/">
          <img src={images.gatacIconAndText} />
        </Link>
        <div>
          {headerMenuOptions?.map((item, index) => {
            return (
              <MenuDropdown
                key={"menuDropdown__" + index}
                open={subMenuOpenedID === item?.id}
                item={item}
                setOptionOpened={setSubMenuOpened}
              />
            )
          })}
        </div>
        <div className={styles?.buttonsDesktop}>
          <ButtonsHeader />
        </div>
        <MenuOpenMobile open={menuOpened} setMenuOpened={setMenuOpened} />
      </header>
    </>
  )
}

export default Header
