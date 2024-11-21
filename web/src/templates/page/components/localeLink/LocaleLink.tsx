import React from "react"
import cx from "classnames"
import * as styles from "./localeLink.module.scss"
import Button from "../../sections/components/generic/button/Button"

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

        return slug ? (
          <div
            key={"localeLink__" + Math.random()}
            className={`${styles?.localeLink} ${cx("containerMaxWidth")}`}
          >
            <Button
              link
              label={localeText}
              idButton={"localeLink__"}
              style={"text"}
              url={localeType === "en" ? "/es" + localeURL : localeURL}
              color={"black"}
              noPaddingText
            />
          </div>
        ) : null
      })}
    </>
  )
}

export default LocaleLink
