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
export const legalGatacaEmail = "legal@gataca.io"
export const gatacaURL = "https://gataca.io"
export const privacyPolicyURL = "/privacyPolicy"
export const cookiePolicyURL = "/cookiePolicy"
export const gdprGatacaEmail = "gdpr@gataca.io"

export const headerMenuOptions: LinkModel[] = [
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
        label: "Gataca Wallet",
        route: "/products/gatacaWallet",
      },
    ],
  },
  {
    id: "useCasesSectors",
    label: "Use Cases & Sectors",
    categories: [
      {
        id: "useCases",
        label: "Use Cases",
        subRoutes: [
          {
            id: "customerOnboarding",
            label: "Customer onboarding (KYC / KYB)",
            route: "/useCasesSectors/#customerOnboarding",
          },
          {
            id: "userAuthentication",
            label: "User authentication (SSO)",
            route: "/useCasesSectors/#userAuthentication",
          },
          {
            id: "physicalAccessControl",
            label: "Physical Access Control",
            route: "/useCasesSectors/#physicalAccessControl",
          },
          {
            id: "issuanceIdentityCredentials",
            label: "Issuance of identity credentials",
            route: "/useCasesSectors/#issuanceIdentityCredentials",
          },
          {
            id: "signatureContractsDocuments",
            label: "Signature of contracts & documents",
            route: "/useCasesSectors/#signatureContractsDocuments",
          },
          {
            id: "electronicVoting",
            label: "Electronic voting",
            route: "/useCasesSectors/#electronicVoting",
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
            id: "education",
            label: "Education",
            route: "/useCasesSectors/education",
          },
          {
            id: "finance",
            label: "Finance",
            route: "/useCasesSectors/finance",
          },
          {
            id: "web3",
            label: "Web3",
            route: "/useCasesSectors/web3",
          },
          {
            id: "otherIndustries",
            label: "Other industries",
            route: "/useCasesSectors/#otherIndustries",
          },
        ],
      },
    ],
  },
  {
    id: "company",
    label: "Company",
    subRoutes: [
      {
        id: "aboutUs",
        label: "About",
        route: "/company/aboutUs",
      },
      {
        id: "careers",
        label: "Careers",
        route: "/company/careers",
      },
      {
        id: "contactUs",
        label: "Contact Us",
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

    subRoutes: [
      {
        id: "documentation",
        label: "Documentation",
        route: "/resources/documentation",
      },
      {
        id: "ssiBasics",
        label: "SSI Basics",
        route: "/resources/ssiBasics",
      },
      {
        id: "blog",
        label: "Blog",
        route: "/resources/blog",
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
        route: "/pricing",
      },
      {
        id: "logIn",
        label: "Log In",
        route: "https://studio.gataca.io",
      },
    ],
  },
  {
    id: "useCases",
    label: "Use Cases",
    subRoutes: [
      {
        id: "customerOnboarding",
        label: "Customer onboarding",
        route: "/useCasesSectors/#customerOnboarding",
      },
      {
        id: "userAuthentication",
        label: "User authentication",
        route: "/useCasesSectors/#userAuthentication",
      },
      {
        id: "physicalAccessControl",
        label: "Physical Access Control",
        route: "/useCasesSectors/#physicalAccessControl",
      },
      {
        id: "issuanceIdentityCredentials",
        label: "Issuance of identity credentials",
        route: "/useCasesSectors/#issuanceIdentityCredentials",
      },
      {
        id: "signatureContracts",
        label: "Signature of contracts and other documents",
        route: "/useCasesSectors/#signatureContractsDocuments",
      },
      {
        id: "electronicVoting",
        label: "Electronic voting",
        route: "/useCasesSectors/#electronicVoting",
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
        id: "education",
        label: "Education",
        route: "/useCasesSectors/education",
      },
      {
        id: "finance",
        label: "Finance",
        route: "/useCasesSectors/finance",
      },
      {
        id: "web3",
        label: "Web 3.0",
        route: "/useCasesSectors/web3",
      },
      {
        id: "otherIndustries",
        label: "Other industries",
        route: "/useCasesSectors/#otherIndustries",
      },
    ],
  },
  {
    id: "company",
    label: "Company",
    subRoutes: [
      {
        id: "aboutUs",
        label: "About",
        route: "/company/aboutUs",
      },
      {
        id: "careers",
        label: "Careers",
        route: "/company/careers",
      },
      {
        id: "contactUs",
        label: "Contact Us",
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
    subRoutes: [
      {
        id: "watchDemo",
        label: "Watch Demo",
        route: "/",
      },
      {
        id: "documentation",
        label: "Documentation",
        route: "/resources/documentation",
      },
      {
        id: "ssiBasics",
        label: "SSI Basics",
        route: "/resources/ssiBasics/",
      },
      {
        id: "blog",
        label: "Blog",
        route: "/resources/blog",
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
        route: "/cookiePolicy",
      },
      {
        id: "termsOfUse",
        label: "Terms of Use",
        route: "/termsOfUse",
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
export const resourcesFooterMenu = footerMenuOptions?.find(
  el => el?.id === "resources"
)

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

export const scrollDirections = {
  up: "UP",
  right: "RIGHT",
  down: "DOWN",
  left: "LEFT",
}

export const clientsLogos: IconModel[] = [
  {
    id: "redES",
    alt: "red.es logo",
    icon: images.logoRedES,
  },
  {
    id: "bankinter",
    alt: "Bankinter logo",
    icon: images.logoBankinter,
  },
  {
    id: "idema",
    alt: "Idema logo",
    icon: images.logoIdema,
  },
  {
    id: "europeanCommision",
    alt: "European Commision logo",
    icon: images.logoEuropeanCommision,
  },
]
