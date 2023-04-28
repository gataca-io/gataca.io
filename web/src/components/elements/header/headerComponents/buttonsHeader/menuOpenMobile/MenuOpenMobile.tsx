import { Link } from "gatsby"
import * as React from "react"
import cx from "classnames"
import * as styles from "./menuOpenMobile.module.scss"
import { images } from "../../../../../../images/images"
import { headerMenuOptions } from "../../../../../../data/globalData"
import MenuDropdownMobile from "../../menuDropdownMobile/MenuDropdownMobile"
import ButtonsHeader from "../ButtonsHeader"
import { LinkModel } from "../../../../../../interfaces/interfaces"

export type IMenuDropdownProps = {
  item: LinkModel
  open: string
  setMenuOpened: (x: string) => void
  setOptionOpened: (x: string) => void
}

const MenuOpenMobile: React.FC<IMenuDropdownProps> = props => {
  const { item, open, setMenuOpened, setOptionOpened } = props
  const [subMenuOpenedID, setSubMenuOpened] = React.useState("")

  return (
    <div className={`${styles.mobileMenu} ${open ? styles.opened : ""}`}>
      <div
        className={`${styles.mobileMenu__header} ${open ? styles.opened : ""}`}
      >
        {open && (
          <>
            {!subMenuOpenedID && (
              <div>
                <Link to="/">
                  <img src={images.gatacIconAndText} />
                </Link>
              </div>
            )}
            {subMenuOpenedID && (
              <div
                onClick={() => setSubMenuOpened(!open ? item?.id : "")}
                className={styles?.backLink}
              >
                <span>
                  <img src={images.chevronLeftIcon}></img>
                </span>
                <span
                  className={`${styles?.backLink__text} ${cx(
                    "buttonRgularMD"
                  )}`}
                >
                  Back
                </span>
              </div>
            )}
          </>
        )}
        <div onClick={() => setMenuOpened(!open)}>
          <img src={open ? images.closeMenuIcon : images.menuIcon}></img>
        </div>
      </div>
      {open && (
        <>
          <div className={styles.mobileMenu__Content}>
            {headerMenuOptions?.map((item, index) => {
              return (
                <MenuDropdownMobile
                  key={"menuDropdown__" + index}
                  open={subMenuOpenedID === item?.id}
                  item={item}
                  setOptionOpened={setSubMenuOpened}
                />
              )
            })}
            <div className={styles.buttonsContainer}>
              <ButtonsHeader />
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default MenuOpenMobile
