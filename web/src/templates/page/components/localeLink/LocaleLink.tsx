import React from "react"
import Button from "../../sections/components/generic/button/Button"
import { ButtonModel } from "../../../../interfaces/interfaces"

export type ILocaleLinkProps = {
  pageContext: any
  className?: string
  languageButton?: ButtonModel
  languageOptionES?: string
  languageOptionEN?: string
}

const LocaleLink: React.FC<ILocaleLinkProps> = props => {
  const {
    pageContext,
    languageButton,
    languageOptionES,
    languageOptionEN,
    className,
  } = props

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

  const localeText = localeType === "en" ? languageOptionES : languageOptionEN

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
            className={className && className}
            key={"localeLink__" + Math.random()}
          >
            <Button
              {...languageButton}
              label={localeText}
              url={localeType === "en" ? "/es" + localeURL : localeURL}
            />
          </div>
        ) : null
      })}
    </>
  )
}

export default LocaleLink
