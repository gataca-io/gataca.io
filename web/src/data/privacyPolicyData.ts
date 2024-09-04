import { LinkModel } from "../interfaces/interfaces"

const tableOfContent: LinkModel[] = [
  {
    id: "privacyPolicyContent",
    label: "Table of content",
    subRoutes: [
      {
        id: "introduction",
        label: "1. Introduction",
        route: "#introduction__1",
      },
      {
        id: "definitions",
        label: "2. Definitions",
        route: "#definitions__2",
      },
      {
        id: "infoCollectionUSe",
        label: "3. Information, Collection and Use",
        route: "#infoCollectionUSe__3",
      },
      {
        id: "personalDataAccess",
        label:
          "4. What Personal Data does Gataca access about Clients, Authorized Users and End Users?",
        route: "#personalDataAccess__4",
      },
      {
        id: "purposes",
        label:
          "5. What are the purposes and legal basis for the processing of your data?",
        route: "#purposes__5",
      },
      {
        id: "recipients",
        label: "6. With which recipients will your data be shared?",
        route: "#recipients__6",
      },
      {
        id: "transferofData",
        label: "7. International transfer of Data",
        route: "#transferofData__7",
      },
      {
        id: "retentionData",
        label: "8. Retention of Data",
        route: "#retentionData__8",
      },
      {
        id: "gdpr",
        label: "9. Your Data Protection Rights",
        route: "#gdpr__9",
      },
      {
        id: "changesPrivacyPolicy",
        label: "10. Changes to this Privacy Policy",
        route: "#changesPrivacyPolicy__10",
      },
      {
        id: "contact",
        label: "11. Contact",
        route: "#contact__11",
      },
    ],
  },
]

export default tableOfContent
