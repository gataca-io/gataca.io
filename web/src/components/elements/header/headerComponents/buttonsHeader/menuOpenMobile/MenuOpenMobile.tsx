import { Link } from "gatsby"
import * as React from "react"
import * as styles from "./menuOpenMobile.module.scss"
import { images } from "../../../../../../images/images"
import MenuDropdownMobile from "../../menuDropdownMobile/MenuDropdownMobile"
import ButtonsHeader from "../ButtonsHeader"
import StrapiImage from "../../../../../atoms/images/StrapiImage"
import Button from "../../../../../../templates/page/sections/components/generic/button/Button"
import { ButtonModel } from "../../../../../../interfaces/interfaces"
import LocaleLink from "../../../../../../templates/page/components/localeLink/LocaleLink"

export type IMenuDropdownProps = {
  open: boolean
  setMenuOpened: (x: boolean) => void
  menuData?: any
  button?: any
  pageContext?: string
  buttonGroup?: ButtonModel
  darkTheme?: boolean
}

const MenuOpenMobile: React.FC<IMenuDropdownProps> = props => {
  const {
    open,
    setMenuOpened,
    menuData,
    button,
    pageContext,
    buttonGroup,
    darkTheme,
  } = props
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
                  {(menuData?.logo?.data?.attributes?.url ||
                    menuData?.logoDarkTheme?.data?.attributes?.url) && (
                    <StrapiImage
                      image={
                        darkTheme ? menuData?.logoDarkTheme : menuData?.logo
                      }
                    />
                  )}
                </Link>
              </div>
            )}
            {subMenuOpenedID && (
              <>
                <div
                  className={`${styles.backLink} ${
                    subMenuOpenedID ? styles.visibleBackLink : ""
                  } ${open ? styles.menuContentVisible : ""}`}
                >
                  {menuData?.iconBackButtonMobile?.data?.attributes?.url && (
                    <span>
                      <StrapiImage
                        image={
                          menuData?.iconBackButtonMobile
                            ? menuData?.iconBackButtonMobile
                            : null
                        }
                      />
                    </span>
                  )}
                  <Button
                    {...menuData?.backButtonMobile}
                    action={() => setSubMenuOpened("")}
                  />
                </div>
              </>
            )}
          </>
        )}
        <div
          className={styles.menuIconContainer}
          onClick={() => {
            setMenuOpened(!open), setSubMenuOpened("")
          }}
        >
          {darkTheme ? (
            <img
              src={
                open ? images.closeMenuIconDarkTheme : images.menuIconDarkTheme
              }
            ></img>
          ) : (
            <img src={open ? images.closeMenuIcon : images.menuIcon}></img>
          )}
        </div>
      </div>
      {open && (
        <div ref={refMenuMobileOptions}>
          <div className={styles.mobileMenu__Content}>
            {button?.map((item: any, index: number) => {
              const { button, list_option } = item.attributes

              const open = subMenuOpenedID === button?.idButton
              const openSubOption =
                subMenuOpenedID === list_option?.data?.attributes?.idListOption

              return (
                <MenuDropdownMobile
                  key={"menuDropdownMobile__" + index}
                  button={button}
                  open={open}
                  setOptionOpened={setSubMenuOpened}
                  openSubOption={openSubOption}
                  subMenuOpenedID={subMenuOpenedID}
                  menuData={menuData}
                  list_option={list_option}
                />
              )
            })}

            <LocaleLink
              languageOptionES={
                menuData?.languageOptions?.data[0]?.attributes?.label
              }
              languageOptionEN={
                menuData?.languageOptions?.data[1]?.attributes?.label
              }
              languageButton={menuData?.languageButton}
              className={styles?.mobileMenu__localeLink}
              pageContext={pageContext}
            />

            <div className={styles.buttonsContainer}>
              <ButtonsHeader buttonGroup={buttonGroup} />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MenuOpenMobile
