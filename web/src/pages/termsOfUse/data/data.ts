import { LinkModel } from "../../../interfaces/interfaces"

// URLs/URIs
export const legalGatacaEmail = "legal@gataca.io"
export const gatacaURL = "https://gataca.io"
export const privacyPolicyURL = "/privacyPolicy"
export const cookiePolicyURL = "/cookiePolicy"

export const tableOfContent: LinkModel[] = [
  {
    id: "termsOfUse",
    label: "Table of content",
    subRoutes: [
      {
        id: "introduction",
        label: "1. Introduction",
        route: "#introduction",
      },
      {
        id: "acceptanceOfTerms",
        label: "2. Acceptance of Terms",
        route: "#acceptanceOfTerms",
      },
      {
        id: "rightsUseOfService",
        label: "3. Your rights to use the Services",
        route: "#rightsUseOfService",
      },
      {
        id: "definition",
        label: "4. Definition",
        route: "#definition",
      },
      {
        id: "responsibleUse",
        label: "5. Responsible Use",
        route: "#responsibleUse",
      },
      {
        id: "intellectualPropertyRights",
        label: "6. Intellectual property rights",
        route: "#intellectualPropertyRights",
      },
      {
        id: "warrantiesLiabilitiesIndemnity",
        label: "7. Warranties, liabilities, and indemnity",
        route: "#warrantiesLiabilitiesIndemnity",
      },
      {
        id: "dataProtection",
        label: "8. Data protection",
        route: "#dataProtection",
      },
      {
        id: "linksOtherSites",
        label: "9. Links to other sites",
        route: "#linksOtherSites",
      },
      {
        id: "communications",
        label: "10. Communications",
        route: "#communications",
      },
      {
        id: "amendmentTermination",
        label: "11. Amendment and termination",
        route: "#amendmentTermination",
      },
      {
        id: "agreementEntirety",
        label: "12. Agreement in its entirety",
        route: "#agreementEntirety",
      },
      {
        id: "lawJurisdiction",
        label: "13. Applicable law and jurisdiction",
        route: "#lawJurisdiction",
      },
      {
        id: "contact",
        label: "14. Contact",
        route: "#contact",
      },
    ],
  },
]
