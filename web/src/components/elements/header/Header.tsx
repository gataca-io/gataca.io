import * as React from "react"
import * as styles from "./header.module.scss"
import { headerMenuOptions } from "../../../data/globalData"
import MenuDropdown from "./headerComponents/menuDropdown/MenuDropdown"
import { images } from "../../../images/images"
import { Link } from "gatsby"
import ButtonsHeader from "./headerComponents/buttonsHeader/ButtonsHeader"
import MenuOpenMobile from "./headerComponents/buttonsHeader/menuOpenMobile/MenuOpenMobile"
import cx from "classnames"

const Header: React.FC = () => {
  const [subMenuOpenedID, setSubMenuOpened] = React.useState("")
  const [menuOpened, setMenuOpened] = React.useState(false)

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
          <a
            className={cx("buttonMD", styles?.demoLink)}
            href={`https://gataca.io/demo`}
            target="_blank"
          >
            Demo
          </a>
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
