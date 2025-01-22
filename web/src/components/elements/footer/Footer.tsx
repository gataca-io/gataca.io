import { Link } from "gatsby"
import * as React from "react"
import * as styles from "./footer.module.scss"
import cx from "classnames"
import SocialMediaContent from "./footerComponents/socialMediaContent/SocialMediaContent"
import { FooterModel, PageModel } from "../../../interfaces/interfaces"
import StrapiImage from "../../atoms/images/StrapiImage"
import ButtonGroup from "../../../templates/page/sections/components/generic/buttonGroup/ButtonGroup"
import LocaleLink from "../../../templates/page/components/localeLink/LocaleLink"
import ListGroup from "../../../templates/page/sections/components/shared/list/listGroup/ListGroup"

const Footer: React.FC = (props: any) => {
  const [footer, setFooter] = React.useState<FooterModel | undefined>()
  const footerData = footer && footer?.attributes

  const [page, setPage] = React.useState<PageModel | undefined>()

  React.useEffect(() => {
    getFooterData()
  }, [])

  React.useEffect(() => {
    getPageData()
  }, [
    props?.pageContext?.slugURL,
    props?.pageContext?.subPath,
    props?.pageContext?.locale,
  ])

  const getFooterData = async () => {
    await fetch(`${process.env.STRAPI_API_URL}/api/footer?populate=deep,6`)
      .then(response => response.json())
      .then(jsonResponse => {
        jsonResponse &&
          jsonResponse?.data &&
          jsonResponse?.data &&
          setFooter(jsonResponse?.data)
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
    <footer className={styles?.footer}>
      <section
        className={`${styles?.mainSectionFooter} ${cx("containerMaxWidth")}`}
      >
        <div
          className={`${styles?.iconsContainer} ${styles?.mainSectionFooter__column}`}
        >
          <div className={styles?.iconsContainer__items}>
            <div className={styles?.logo}>
              <Link to="/">
                {footerData?.logo?.data?.attributes?.url && (
                  <StrapiImage
                    image={footerData?.logo ? footerData?.logo : null}
                  />
                )}
              </Link>
            </div>
            <div className={`${styles?.showDesktop}`}>
              <SocialMediaContent
                socialMediaButtonIcon={
                  footerData?.socialMediaButton?.button_icons?.data
                }
              />
            </div>
          </div>

          {props?.children[0]?.props?.children[0]?.props?.pageContext && (
            <div className={`${styles?.showDesktop}`}>
              <LocaleLink
                languageOptionES={
                  footerData?.languageOptions?.data[0]?.attributes?.label
                }
                languageOptionEN={
                  footerData?.languageOptions?.data[1]?.attributes?.label
                }
                languageButton={footerData?.languageButton}
                pageContext={
                  props?.children[0]?.props?.children[0]?.props?.pageContext
                }
              />
            </div>
          )}
        </div>
        <div className={`${styles?.footerSections}`}>
          {footerData?.linksList?.list_options?.data?.length > 0 && (
            <ListGroup
              listOptions={footerData?.linksList?.list_options?.data}
              listRow
            />
          )}
        </div>
        <div
          className={`${styles?.socialMediaLanguage__container} ${styles?.showMobile}`}
        >
          <SocialMediaContent
            socialMediaButtonIcon={
              footerData?.socialMediaButton?.button_icons?.data
            }
          />
          {props?.children[0]?.props?.children[0]?.props?.pageContext && (
            <LocaleLink
              languageOptionES={
                footerData?.languageOptions?.data[0]?.attributes?.label
              }
              languageOptionEN={
                footerData?.languageOptions?.data[1]?.attributes?.label
              }
              languageButton={footerData?.languageButton}
              pageContext={
                props?.children[0]?.props?.children[0]?.props?.pageContext
              }
            />
          )}
        </div>
      </section>
      <hr></hr>
      <section
        className={`${styles?.secondarySectionFooter} ${cx(
          "containerMaxWidth"
        )}`}
      >
        {footerData?.certificationImage?.data?.attributes?.url && (
          <div>
            <StrapiImage
              image={
                footerData?.certificationImage
                  ? footerData?.certificationImage
                  : null
              }
            />
          </div>
        )}

        <div>
          <div>
            <ButtonGroup buttonGroup={footerData?.termsButton?.buttons?.data} />

            <div
              className={`${styles?.rightsReserved} ${cx(
                "buttonMD neutral700"
              )}`}
              id={"rightsReservedGataca"}
            >
              {footerData?.rightsReserved}
            </div>
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer
