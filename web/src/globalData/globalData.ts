import { LinkModel } from "../interfaces/interfaces"

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

// URLs/URIs
export const marketAndroidURI =
  "https://play.google.com/store/apps/details?id=com.gataca.identity"
export const marketIosURI = "https://apps.apple.com/us/app/gataca/id1498607616"
export const gatacaStudioURL = "https://studio.gataca.io"
