import { Link } from "gatsby"
import * as React from "react"
import cx from "classnames"
import * as styles from "./menuOpenMobile.module.scss"
import { images } from "../../../../../../images/images"
import { headerMenuOptions } from "../../../../../../data/globalData"
import MenuDropdownMobile from "../../menuDropdownMobile/MenuDropdownMobile"
import ButtonsHeader from "../ButtonsHeader"

export type IMenuDropdownProps = {
  open: boolean
  setMenuOpened: (x: boolean) => void
}

const MenuOpenMobile: React.FC<IMenuDropdownProps> = props => {
  const { open, setMenuOpened } = props
  const [subMenuOpenedID, setSubMenuOpened] = React.useState("")
  const refMenuMobile = React.useRef<HTMLDivElement>(null)
  const refMenuMobileHeader = React.useRef<HTMLDivElement>(null)
  const refMenuMobileOptions = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const contentRefs = [
      refMenuMobileHeader?.current,
      refMenuMobileOptions?.current,
    ]
    open
      ? (setOpacityToZero(contentRefs),
        setTimeout(() => {
          refMenuMobile?.current?.classList?.add(styles.opened)
          setOpacityToOne(contentRefs)
        }, 200))
      : refMenuMobile?.current?.classList?.remove(styles.opened)
  }, [open])

  const setOpacityToZero = (elements: any[]) => {
    elements && elements?.length
      ? elements?.map(element =>
          element && element?.style ? (element.style.opacity = "0") : ""
        )
      : null
  }

  const setOpacityToOne = (elements: any[]) => {
    elements && elements?.length
      ? elements?.map(element =>
          element && element?.style ? (element.style.opacity = "1") : ""
        )
      : null
  }

  return (
    <div className={`${styles.mobileMenu}`} ref={refMenuMobile}>
      <div
        ref={refMenuMobileHeader}
        className={`${styles.mobileMenu__header} ${open ? styles.opened : ""}`}
      >
        {open && (
          <>
            {!subMenuOpenedID && (
              <div
                className={`${styles.logo} ${
                  !subMenuOpenedID && open
                    ? styles.visibleLogo
                    : styles.hiddenLogo
                } ${open ? styles.menuContentVisible : ""}`}
              >
                <Link to="/">
                  <img src={images.gatacIconAndText} />
                </Link>
              </div>
            )}
            {subMenuOpenedID && (
              <div
                onClick={() => setSubMenuOpened("")}
                className={`${styles.backLink} ${
                  subMenuOpenedID ? styles.visibleBackLink : ""
                } ${open ? styles.menuContentVisible : ""}`}
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
        <div
          className={styles.menuIconContainer}
          onClick={() => {
            setMenuOpened(!open), setSubMenuOpened("")
          }}
        >
          <img src={open ? images.closeMenuIcon : images.menuIcon}></img>
        </div>
      </div>
      {open && (
        <div ref={refMenuMobileOptions}>
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
            <div className={styles.demoLink__mobile}>
              <a
                className={cx("buttonSM")}
                href={`https://gataca.io/demo`}
                target="_blank"
              >
                Demo
              </a>
            </div>
            <div className={styles.buttonsContainer}>
              <ButtonsHeader />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MenuOpenMobile
