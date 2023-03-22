import { images } from "../images/images"
import { LinkModel, IconModel } from "../interfaces/interfaces"

// URLs/URIs
export const marketAndroidURI =
  "https://play.google.com/store/apps/details?id=com.gataca.identity"
export const marketIosURI = "https://apps.apple.com/us/app/gataca/id1498607616"
export const gatacaStudioURL = "https://studio.gataca.io"
export const linkedinURL = "https://www.linkedin.com/company/gataca/"
export const twitterURL = "https://twitter.com/gataca_id"
export const youtubeURL =
  "https://www.youtube.com/channel/UCcjJqmCa1UmbbS8ZpM8kkAQ"
export const gdprGatacaEmail = "gdpr@gataca.io"
export const gatacaURL = "https://gataca.io"

export const headerMenuOptions: LinkModel[] = [
  {
    id: "products",
    label: "Products",
    subRoutes: [
      {
        id: "gatacaWallet",
        label: "Gataca Wallet",
        route: "/products/gatacaWallet",
      },
      {
        id: "gatacaStudio",
        label: "Gataca Studio",
        route: "/products/gatacaStudio",
      },
    ],
  },
  {
    id: "useCasesSectors",
    label: "Use Cases & Sectors",
    route: "/useCasesSectors",
    subRoutes: [
      {
        id: "government",
        label: "Government",
        route: "/useCasesSectors/government",
      },
      {
        id: "finance",
        label: "Finance",
        route: "/useCasesSectors/finance",
      },
      {
        id: "education",
        label: "Education",
        route: "/useCasesSectors/education",
      },
      {
        id: "web3",
        label: "Web 3",
        route: "/useCasesSectors/web3",
      },
    ],
  },
  {
    id: "company",
    label: "Company",
    subRoutes: [
      {
        id: "aboutUs",
        label: "About Us",
        route: "/company/aboutUs",
      },
      {
        id: "careers",
        label: "Careers",
        route: "/company/careers",
      },
      {
        id: "contactUs",
        label: "ContactUs",
        route: "/company/contactUs",
      },
      {
        id: "becomeAPartner",
        label: "Become a Partner",
        route: "/company/becomeAPartner",
      },
    ],
  },
  {
    id: "resources",
    label: "Resources",
    route: "/resources",
    subRoutes: [
      {
        id: "blog",
        label: "Blog",
        route: "/resources/blog",
      },
      {
        id: "documentation",
        label: "Documentation",
        route: "/resources/documentation",
      },
    ],
  },
]

export const footerMenuOptions: LinkModel[] = [
  {
    id: "products",
    label: "Products",
    subRoutes: [
      {
        id: "gatacaStudio",
        label: "Gataca Studio",
        route: "/products/gatacaStudio",
      },
      {
        id: "gatacaWallet",
        label: "Wallet",
        route: "/products/gatacaWallet",
      },
      {
        id: "pricing",
        label: "Pricing",
        route: "/",
      },
      {
        id: "logIn",
        label: "Log In",
        route: "/",
      },
    ],
  },
  {
    id: "useCases",
    label: "Use Cases",
    subRoutes: [
      {
        id: "customerOnboarding",
        label: "Customer Onboarding",
        route: "/",
      },
      {
        id: "userAuthentication",
        label: "User Authentication",
        route: "/",
      },
      {
        id: "physicalAccessControl",
        label: "Physical Access Control",
        route: "/",
      },
      {
        id: "issuanceIdentityCredentials",
        label: "Issuance of identity credentials",
        route: "/",
      },
      {
        id: "signatureContracts",
        label: "Signature of contracts and other documents",
        route: "/",
      },
      {
        id: "electronicVoting",
        label: "Electronic voting",
        route: "/",
      },
    ],
  },
  {
    id: "sectors",
    label: "Sectors",
    subRoutes: [
      {
        id: "government",
        label: "Government",
        route: "/useCasesSectors/government",
      },
      {
        id: "finance",
        label: "Finance",
        route: "/useCasesSectors/finance",
      },
      {
        id: "education",
        label: "Education",
        route: "/useCasesSectors/education",
      },
      {
        id: "web3",
        label: "Web 3",
        route: "/useCasesSectors/web3",
      },
      {
        id: "otherSectors",
        label: "Other sectors",
        route: "/",
      },
    ],
  },
  {
    id: "company",
    label: "Company",
    subRoutes: [
      {
        id: "aboutUs",
        label: "About Us",
        route: "/company/aboutUs",
      },
      {
        id: "careers",
        label: "Careers",
        route: "/company/careers",
      },
      {
        id: "contactUs",
        label: "ContactUs",
        route: "/company/contactUs",
      },
      {
        id: "becomeAPartner",
        label: "Become a Partner",
        route: "/company/becomeAPartner",
      },
    ],
  },
  {
    id: "learn",
    label: "Learn",
    subRoutes: [
      {
        id: "watchDemo",
        label: "Watch Demo",
        route: "/",
      },
      {
        id: "helpCenter",
        label: "Help Center",
        route: "/",
      },
      {
        id: "developers",
        label: "Developers",
        route: "/",
      },
      {
        id: "blog",
        label: "Blog",
        route: "/blog",
      },
    ],
  },
  {
    id: "subFooter",
    label: "subFooter",
    subRoutes: [
      {
        id: "privacyPolicy",
        label: "Privacy Policy",
        route: "/privacyPolicy",
      },
      {
        id: "cookiesPolicy",
        label: "Cookies Policy",
        route: "/",
      },
      {
        id: "termsOfUse",
        label: "Terms of Use",
        route: "/",
      },
    ],
  },
  {
    id: "rightsReservedGataca",
    label: "© 2020 - All rights reserved Gataca",
    route: "/",
  },
]

export const productsFooterMenu = footerMenuOptions?.find(
  el => el?.id === "products"
)
export const useCasesFooterMenu = footerMenuOptions?.find(
  el => el?.id === "useCases"
)
export const sectorsFooterMenu = footerMenuOptions?.find(
  el => el?.id === "sectors"
)
export const companyFooterMenu = footerMenuOptions?.find(
  el => el?.id === "company"
)
export const learnFooterMenu = footerMenuOptions?.find(el => el?.id === "learn")

export const subFooterMenu = footerMenuOptions?.find(
  el => el?.id === "subFooter"
)
export const rightsReservedGataca = footerMenuOptions?.find(
  el => el?.id === "rightsReservedGataca"
)

export const socialMedia: IconModel[] = [
  {
    id: "linkedIn",
    alt: "LinkedIn Logo",
    icon: images.gatacaLinkedLink,
    route: linkedinURL,
  },
  {
    id: "twitter",
    alt: "Twitter Logo",
    icon: images.gatacaTwitterLink,
    route: twitterURL,
  },
  {
    id: "youtube",
    alt: "Youtube Logo",
    icon: images.gatacaYoutubeLink,
    route: youtubeURL,
  },
]

export const tableOfContent: LinkModel[] = [
  {
    id: "privacyPolicyContent",
    label: "Table of content",
    subRoutes: [
      {
        id: "whoAreWe",
        label: "1. Who Are We",
        route: "#whoAreWe",
      },
      {
        id: "definitions",
        label: "2. Definitions",
        route: "#definitions",
      },
      {
        id: "infoCollectionUSe",
        label: "3. Information, Collection and Use",
        route: "#infoCollectionUSe",
      },
      {
        id: "personalDataAccess",
        label: "4. What personal data does GATACA access about You?",
        route: "#personalDataAccess",
      },
      {
        id: "thirdPartyServices",
        label:
          "5. What Third Party Services do we use to collect and process your Data?",
        route: "#thirdPartyServices",
      },
      {
        id: "processingYourData",
        label:
          "6. What are the purposes and legal basis for the processing of your data?",
        route: "#processingYourData",
      },
      {
        id: "sharedData",
        label: "7. With which recipients will your data be shared?",
        route: "#sharedData",
      },
      {
        id: "transferofData",
        label: "8. International transfer of Data",
        route: "#transferofData",
      },
      {
        id: "retentionData",
        label: "9. Retention of Data",
        route: "#retentionData",
      },
      {
        id: "gdpr",
        label:
          "10. Your Data Protection Rights under the General Data Protection Regulation (GDPR)",
        route: "#gdpr",
      },
      {
        id: "changesPrivacyPolicy",
        label: "11. Changes to this Privacy Policy",
        route: "#changesPrivacyPolicy",
      },
      {
        id: "contact",
        label: "12. Contact",
        route: "#contact",
      },
    ],
  },
]
export const privacyPolicyOptions = tableOfContent?.find(
  el => el?.id === "privacyPolicyContent"
)
