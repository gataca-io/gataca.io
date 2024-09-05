import { LinkModel } from "../interfaces/interfaces"

const tableOfContent: LinkModel[] = [
  {
    id: "legalNoticeContent",
    label: "Table of content",
    subRoutes: [
      {
        id: "introduction",
        label: "1. Introduction",
        route: "#introduction__1",
      },
      {
        id: "acceptanceTerms",
        label: "2. Acceptance of Terms",
        route: "#acceptanceTerms__2",
      },
      {
        id: "accessRights",
        label: "3. Access Rights",
        route: "#accessRights__3",
      },
      {
        id: "responsibleUse",
        label: "4. Responsible Use",
        route: "#responsibleUse__4",
      },
      {
        id: "intellectualPropertyRights",
        label: "5. Intellectual property rights",
        route: "#intellectualPropertyRights__5",
      },
      {
        id: "warranties",
        label: "6. Warranties, liabilities, and indemnity",
        route: "#warranties__6",
      },
      {
        id: "dataProtection",
        label: "7. Data protection",
        route: "#dataProtection__7",
      },
      {
        id: "linksOtherSites",
        label: "8. Links to other sites",
        route: "#linksOtherSites__8",
      },
      {
        id: "communications",
        label: "9. Communications",
        route: "#communications__9",
      },
      {
        id: "amendment",
        label: "10. Amendment",
        route: "#amendment__10",
      },
      {
        id: "jurisdiction",
        label: "11. Applicable law and jurisdiction",
        route: "#jurisdiction__11",
      },
      {
        id: "contact",
        label: "12. Contact",
        route: "#contact__12",
      },
    ],
  },
]

export default tableOfContent
