import { LinkModel } from "../interfaces/interfaces"

export const headerMenuOptions: LinkModel[] = [
  {
    id: "products",
    label: "Products",
    subRoutes: [
      {
        id: "gatacaWallet",
        label: "Gataca Wallet",
        route: "/gatacaWallet",
      },
      //   {
      //     id: "gatacaStudio",
      //     label: "Gataca Studio",
      //     route: "/gatacaStudio",
      //   },
    ],
  },
  {
    id: "useCasesSectors",
    label: "Use Cases & Sectors",
    route: "/useCases",
    subRoutes: [
      //   {
      //     id: "government",
      //     label: "Government",
      //     route: "/government",
      //   },
      //   {
      //     id: "finance",
      //     label: "Finance",
      //     route: "/finance",
      //   },
      //   {
      //     id: "education",
      //     label: "Education",
      //     route: "/education",
      //   },
      //   {
      //     id: "web3",
      //     label: "Web 3",
      //     route: "/web3",
      //   },
    ],
  },
  {
    id: "company",
    label: "Company",
    subRoutes: [
      //   {
      //     id: "aboutUs",
      //     label: "About Us",
      //     route: "/aboutUs",
      //   },
      //   {
      //     id: "careers",
      //     label: "Careers",
      //     route: "/careers",
      //   },
      //   {
      //     id: "contactUs",
      //     label: "ContactUs",
      //     route: "/contactUs",
      //   },
      //   {
      //     id: "becomeAPartner",
      //     label: "Become a Partner",
      //     route: "/becomeAPartner",
      //   },
    ],
  },
  {
    id: "resources",
    label: "Resources",
    subRoutes: [
      //   {
      //     id: "blog",
      //     label: "Blog",
      //     route: "/blog",
      //   },
      //   {
      //     id: "documentation",
      //     label: "Documentation",
      //     route: "/documentation",
      //   },
    ],
  },
]
