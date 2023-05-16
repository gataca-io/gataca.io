import { LinkModel } from "../interfaces/interfaces"

const tableOfContent: LinkModel[] = [
  {
    id: "privacyPolicyContent",
    label: "Table of content",
    subRoutes: [
      {
        id: "whoAreWe",
        label: "1. Who Are We",
        route: "#whoAreWe__0",
      },
      {
        id: "definitions",
        label: "2. Definitions",
        route: "#definitions__1",
      },
      {
        id: "infoCollectionUSe",
        label: "3. Information, Collection and Use",
        route: "#infoCollectionUSe__2",
      },
      {
        id: "personalDataAccess",
        label: "4. What personal data does GATACA access about You?",
        route: "#personalDataAccess__3",
      },
      {
        id: "thirdPartyServices",
        label:
          "5. What Third Party Services do we use to collect and process your Data?",
        route: "#thirdPartyServices__4",
      },
      {
        id: "processingYourData",
        label:
          "6. What are the purposes and legal basis for the processing of your data?",
        route: "#processingYourData__5",
      },
      {
        id: "sharedData",
        label: "7. With which recipients will your data be shared?",
        route: "#sharedData__6",
      },
      {
        id: "transferofData",
        label: "8. International transfer of Data",
        route: "#transferofData__7",
      },
      {
        id: "retentionData",
        label: "9. Retention of Data",
        route: "#retentionData__8",
      },
      {
        id: "gdpr",
        label:
          "10. Your Data Protection Rights under the General Data Protection Regulation (GDPR)",
        route: "#gdpr__9",
      },
      {
        id: "changesPrivacyPolicy",
        label: "11. Changes to this Privacy Policy",
        route: "#changesPrivacyPolicy__10",
      },
      {
        id: "contact",
        label: "12. Contact",
        route: "#contact__11",
      },
    ],
  },
]

export default tableOfContent
