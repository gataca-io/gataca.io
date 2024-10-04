import React from "react"
import cx from "classnames"
import { Link } from "gatsby"
import * as styles from "./localeLink.module.scss"

export type ILocaleLinkProps = {
  pageContext: any
}

const LocaleLink: React.FC<ILocaleLinkProps> = props => {
  const { pageContext } = props
  const localeType = pageContext?.locale
  const slugData = pageContext?.slugURL

  const slugPrivacyPolicyPage = "privacy-policy"
  const slugCookiesPolicyPage = "cookie-policy"
  const slugLegalNoticePage = "legal-notice"
  const slugTermsOfServiceWalletPage = "terms-of-service-wallet"
  const slugTermsOfServiceStudioPage = "terms-of-service-studio"

  const privacyPolicyPage = slugData === slugPrivacyPolicyPage
  const cookiesPolicyPage = slugData === slugCookiesPolicyPage
  const legalNoticePage = slugData === slugLegalNoticePage
  const termsOfServiceWalletPage = slugData === slugTermsOfServiceWalletPage
  const termsOfServiceStudioPage = slugData === slugTermsOfServiceStudioPage

  const localeText = localeType === "en" ? "View in Spanish" : "Ver en Inglés"

  const termsPages = [
    { slug: privacyPolicyPage, localeURL: "/" + slugPrivacyPolicyPage },
    { slug: cookiesPolicyPage, localeURL: "/" + slugCookiesPolicyPage },
    { slug: legalNoticePage, localeURL: "/" + slugLegalNoticePage },
    {
      slug: termsOfServiceWalletPage,
      localeURL: "/" + slugTermsOfServiceWalletPage,
    },
    {
      slug: termsOfServiceStudioPage,
      localeURL: "/" + slugTermsOfServiceStudioPage,
    },
  ]
  return (
    <>
      {termsPages?.map(item => {
        const { slug, localeURL } = item

        return (
          <>
            {slug ? (
              <div
                className={`${styles?.localeLink} ${cx("containerMaxWidth")}`}
              >
                <Link
                  id={"localeLink__"}
                  className={cx("buttonMD")}
                  to={localeType === "en" ? "/es" + localeURL : localeURL}
                >
                  {localeText}
                </Link>
              </div>
            ) : null}
          </>
        )
      })}
    </>
  )
}

export default LocaleLink
