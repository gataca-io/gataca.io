import * as React from "react"
import * as styles from "./header.module.scss"
import MenuDropdown from "./headerComponents/menuDropdown/MenuDropdown"
import { Link } from "gatsby"
import ButtonsHeader from "./headerComponents/buttonsHeader/ButtonsHeader"
import MenuOpenMobile from "./headerComponents/buttonsHeader/menuOpenMobile/MenuOpenMobile"
import { MenuModel, PageModel } from "../../../interfaces/interfaces"
import StrapiImage from "../../atoms/images/StrapiImage"
import LocaleLink from "../../../templates/page/components/localeLink/LocaleLink"
import HeaderSkeleton from "./headerComponents/headerSkeleton/HeaderSkeleton"

const Header: React.FC = (props: any) => {
  const [subMenuOpenedID, setSubMenuOpened] = React.useState("")
  const [menuOpened, setMenuOpened] = React.useState(false)

  const [menu, setMenu] = React.useState<MenuModel | undefined>()
  const menuData = menu && menu?.attributes

  const [page, setPage] = React.useState<PageModel | undefined>()

  React.useEffect(() => {
    getMenuData()
  }, [])

  React.useEffect(() => {
    getPageData()
  }, [
    props?.pageContext?.slugURL,
    props?.pageContext?.subPath,
    props?.pageContext?.locale,
  ])

  const getMenuData = async () => {
    await fetch(`${process.env.STRAPI_API_URL}/api/menu?populate=deep,6`)
      .then(response => response.json())
      .then(jsonResponse => {
        jsonResponse &&
          jsonResponse?.data &&
          jsonResponse?.data &&
          setMenu(jsonResponse?.data)
      })
  }

  const getPageData = async () => {
    await fetch(
      `${process.env.STRAPI_API_URL}/api/pages?locale=${props?.pageContext?.locale}&filters[slugURL]=${props?.pageContext?.slugURL}&populate=deep,8`
    )
      .then(response => response.json())
      .then(jsonResponse => {
        jsonResponse &&
          jsonResponse?.data &&
          jsonResponse?.data[0] &&
          setPage(jsonResponse?.data[0])
      })
  }
  return (
    <>
      {menuData ? (
        <header className={styles?.header}>
          <Link className={styles?.header__logo} to="/">
            {menuData?.logo?.data?.attributes?.url && (
              <StrapiImage image={menuData?.logo ? menuData?.logo : null} />
            )}
          </Link>
          <div className={styles?.menuDropdown}>
            {menuData?.menuDropdown?.buttons?.data?.map(
              (item: any, index: number) => {
                const { button, list_option } = item.attributes

                const open = subMenuOpenedID === button?.idButton
                const openSubOption =
                  subMenuOpenedID ===
                  list_option?.data?.attributes?.idListOption

                return (
                  <MenuDropdown
                    key={"menuDropdownData__" + index}
                    button={button}
                    open={open}
                    setOptionOpened={setSubMenuOpened}
                    openSubOption={openSubOption}
                    subMenuOpenedID={subMenuOpenedID}
                    list_option={list_option}
                  />
                )
              }
            )}
          </div>

          <div className={styles?.buttonsDesktop}>
            {props?.children[0]?.props?.children[0]?.props?.pageContext && (
              <LocaleLink
                languageOptionES={
                  menuData?.languageOptions?.data[0]?.attributes?.label
                }
                languageOptionEN={
                  menuData?.languageOptions?.data[1]?.attributes?.label
                }
                languageButton={menuData?.languageButton}
                pageContext={
                  props?.children[0]?.props?.children[0]?.props?.pageContext
                }
              />
            )}
            <ButtonsHeader buttonGroup={menuData?.button?.buttons?.data} />
          </div>
          <MenuOpenMobile
            button={menuData?.menuDropdown?.buttons?.data}
            menuData={menuData}
            open={menuOpened}
            setMenuOpened={setMenuOpened}
            buttonGroup={menuData?.button?.buttons?.data}
            pageContext={
              props?.children[0]?.props?.children[0]?.props?.pageContext
            }
          />
        </header>
      ) : (
        <HeaderSkeleton />
      )}
    </>
  )
}

export default Header
