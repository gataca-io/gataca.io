import { LinkModel } from "../../../../interfaces/interfaces"

// URLs/URIs
export const gdprGatacaEmail = "gdpr@gataca.io"
export const gatacaURL = "www.gataca.io"

export const tableOfContentOptions: LinkModel[] = [
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
        label: "5. What Third Party Services do we use to collect and process your Data?",
        route: "#thirdPartyServices",
      },
      {
        id: "processingYourData",
        label: "6. What are the purposes and legal basis for the processing of your data?",
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
        label: "10. Your Data Protection Rights under the General Data Protection Regulation (GDPR)",
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
export const contentOptions: LinkModel[] = [
  {
    id: "firsParagraph",
    label: "At GATACA, we know that you care about your personal data and want you to know how we will process it. With our Privacy Policy (“Policy”) we aim to explain in a clear and transparent manner, how and when we collect, share and protect your personal data. This Policy applies to the Website, Gataca Platform, the Wallet and any other products and services (collectively, “Services”) provided by GATACA. Please note that anonymised information or purely statistical data used by GATACA will not be considered personal data.",
  }  
]
export const privacyPolicyOptions = tableOfContentOptions?.find(
  el => el?.id === "privacyPolicyContent"
)
