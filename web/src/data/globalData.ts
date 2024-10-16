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
export const discordURL = "https://discord.com/invite/2EgQFAc926"
export const legalGatacaEmail = "legal@gataca.io"
export const gatacaURL = "https://gataca.io"
export const privacyPolicyURL = "/privacy-policy"
export const cookiePolicyURL = "/cookie-policy"
export const termOfServiceURL = "/generic-terms-of-service"
export const pricingURL = "/pricing"
export const gdprGatacaEmail = "gdpr@gataca.io"
// TODO: Update TW @ when new account is created
export const twitterHandler = "@gataca_id"
export const demolandURL = "https://demo.gataca.io"

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
        route: "/products/wallet",
      },
      {
        id: "gatacaVouch",
        label: "Gataca Vouch",
        route: "/products/gataca-vouch",
      },
    ],
  },
  {
    id: "useCasesSectors",
    label: "Use Cases & Sectors",
    mainRoute: [
      {
        id: "discoverAllUseCases",
        label: "Discover All Use Cases & Sectors",
        route: "/use-cases",
      },
    ],
    categories: [
      {
        id: "useCases",
        label: "Use Cases",
        subRoutes: [
          {
            id: "customerOnboarding",
            label: "Customer onboarding (KYC / KYB)",
            route: "/use-cases/#customerOnboarding",
          },
          {
            id: "userAuthentication",
            label: "User authentication (SSO)",
            route: "/use-cases/#userAuthentication",
          },
          {
            id: "physicalAccessControl",
            label: "Physical Access Control",
            route: "/use-cases/#physicalAccessControl",
          },
          {
            id: "issuanceIdentityCredentials",
            label: "Issuance of identity credentials",
            route: "/use-cases/#issuanceIdentityCredentials",
          },
          {
            id: "signatureContractsDocuments",
            label: "Signature of contracts & documents",
            route: "/use-cases/#signatureContractsDocuments",
          },
          {
            id: "electronicVoting",
            label: "Electronic voting",
            route: "/use-cases/#electronicVoting",
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
            route: "/use-cases/government",
          },
          {
            id: "education",
            label: "Education",
            route: "/use-cases/education",
          },
          {
            id: "finance",
            label: "Finance",
            route: "/use-cases/finance",
          },
          {
            id: "web3",
            label: "Web3",
            route: "/use-cases/web3",
          },
          {
            id: "otherIndustries",
            label: "Other industries",
            route: "/use-cases/#otherIndustries",
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
        route: "/company/about",
      },
      {
        id: "careers",
        label: "Careers",
        route: "/company/jobs",
      },
      {
        id: "contactUs",
        label: "Contact Us",
        route: "/company/contact",
      },
      {
        id: "becomeAPartner",
        label: "Become a Partner",
        route: "/company/partnership",
      },
    ],
  },
  {
    id: "resources",
    label: "Resources",
    // mainRoute: [
    //   {
    //     id: "discoverAllResources",
    //     label: "Discover All Resources",
    //     route: "/resources/",
    //   },
    // ],
    // categories: [
    //   {
    //     id: "otherResources",
    //     label: "Other resources",
    subRoutes: [
      // {
      //   id: "documentation",
      //   label: "Documentation",
      //   route: "/resources/documentation",
      // },
      // {
      //   id: "ssiBasics",
      //   label: "SSI Basics",
      //   route: "/resources/ssiBasics",
      // },
      {
        id: "blog",
        label: "Blog",
        route: "/resources/blog",
      },
      {
        id: "certifications",
        label: "Certifications",
        route: "/resources/certifications",
      },
    ],
    //   },
    // ],
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
        label: "Gataca Wallet",
        route: "/products/wallet",
      },
      {
        id: "gatacaVouch",
        label: "Gataca Vouch",
        route: "/products/gataca-vouch",
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
        route: "/use-cases/#customerOnboarding",
      },
      {
        id: "userAuthentication",
        label: "User authentication",
        route: "/use-cases/#userAuthentication",
      },
      {
        id: "physicalAccessControl",
        label: "Physical Access Control",
        route: "/use-cases/#physicalAccessControl",
      },
      {
        id: "issuanceIdentityCredentials",
        label: "Issuance of identity credentials",
        route: "/use-cases/#issuanceIdentityCredentials",
      },
      {
        id: "signatureContracts",
        label: "Signature of contracts and other documents",
        route: "/use-cases/#signatureContractsDocuments",
      },
      {
        id: "electronicVoting",
        label: "Electronic voting",
        route: "/use-cases/#electronicVoting",
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
        route: "/use-cases/government",
      },
      {
        id: "education",
        label: "Education",
        route: "/use-cases/education",
      },
      {
        id: "finance",
        label: "Finance",
        route: "/use-cases/finance",
      },
      {
        id: "web3",
        label: "Web 3.0",
        route: "/use-cases/web3",
      },
      {
        id: "otherIndustries",
        label: "Other industries",
        route: "/use-cases/#otherIndustries",
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
        route: "/company/about",
      },
      {
        id: "careers",
        label: "Careers",
        route: "/company/jobs",
      },
      {
        id: "contactUs",
        label: "Contact Us",
        route: "/company/contact",
      },
      {
        id: "becomeAPartner",
        label: "Become a Partner",
        route: "/company/partnership",
      },
    ],
  },
  {
    id: "resources",
    label: "Resources",
    subRoutes: [
      // {
      //   id: "documentation",
      //   label: "Documentation",
      //   route: "/resources/documentation",
      // },
      // {
      //   id: "ssiBasics",
      //   label: "SSI Basics",
      //   route: "/resources/ssiBasics/",
      // },
      {
        id: "blog",
        label: "Blog",
        route: "/resources/blog",
      },
      {
        id: "certifications",
        label: "Certifications",
        route: "/resources/certifications",
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
        route: "/privacy-policy",
      },
      {
        id: "cookiesPolicy",
        label: "Cookies Policy",
        route: "/cookie-policy",
      },
      {
        id: "legalNotice",
        label: "Legal Notice",
        route: "/legal-notice",
      },
      /*
      {
        id: "termsOfUseWallet",
        label: "Wallet | Terms of Service",
        route: "/terms-of-service-wallet",
      },
      {
        id: "termsOfServiceStudio",
        label: "Studio | Terms of Service",
        route: "/terms-of-service-studio",
      },
      */
    ],
  },
  {
    id: "rightsReservedGataca",
    label: "© 2024 - Gataca",
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
  // {
  //   id: "twitter",
  //   alt: "Twitter Logo",
  //   icon: images.gatacaTwitterLink,
  //   route: twitterURL,
  // },
  {
    id: "discord",
    alt: "Discord Logo",
    icon: images.gatacaDiscordLink,
    route: discordURL,
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
    id: "idemia",
    alt: "Idemia logo",
    icon: images.logoIdema,
  },
  {
    id: "roviraIVirgili",
    alt: "Universitat Rovira i Virgili logo",
    icon: images.logoUniversitat,
  },
  {
    id: "earlyAdoptersProgramSpain",
    alt: "Early Adopters Program Spain logo",
    icon: images.earlyAdoptersSpainLogo,
  },
  {
    id: "unaEuropa",
    alt: "Una Europa logo",
    icon: images.unaEuropalogo,
  },
  {
    id: "europeanCommision",
    alt: "European Commision logo",
    icon: images.logoEuropeanCommision,
  },
  {
    id: "erua",
    alt: "ERUA logo",
    icon: images.eruaLogo,
  },
]

export const clientsClearLogos: IconModel[] = [
  {
    id: "redES",
    alt: "red.es logo",
    icon: images.redesClearLogo,
  },
  {
    id: "bankinter",
    alt: "Bankinter logo",
    icon: images.bankinterClearLogo,
  },
  {
    id: "idemia",
    alt: "Idemia logo",
    icon: images.idemiaClearLogo,
  },
  {
    id: "roviraIVirgili",
    alt: "Universitat Rovira i Virgili logo",
    icon: images.roviraIVirgiliClearLogo,
  },
  {
    id: "earlyAdoptersProgramSpain",
    alt: "Early Adopters Program Spain logo",
    icon: images.earlyAdoptersSpainClearLogo,
  },
  {
    id: "unaEuropa",
    alt: "Una Europa logo",
    icon: images.unaEuropaClearLogo,
  },
  {
    id: "europeanCommision",
    alt: "European Commision logo",
    icon: images.europeanComissionClearLogo,
  },
  {
    id: "erua",
    alt: "ERUA logo",
    icon: images.eruaClearLogo,
  },
]
