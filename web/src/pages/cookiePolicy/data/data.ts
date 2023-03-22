import { LinkModel } from "../../../interfaces/interfaces"

export const tableOfContent: LinkModel[] = [
  {
    id: "cookiePolicyContent",
    label: "Table of content",
    subRoutes: [
      {
        id: "whoAreWe",
        label: "1. Who Are We",
        route: "#whoAreWe",
      },
      {
        id: "whatIsCookie",
        label: "2. What is a cookie?",
        route: "#whatIsCookie",
      },
      {
        id: "typeOfCookies",
        label: "3. Type of cookies",
        route: "#typeOfCookies",
      },
      {
        id: "whatCookiesWeUse",
        label: "4. What cookies do we use?",
        route: "#whatCookiesWeUse",
      },
      {
        id: "manageCookies",
        label: "5. How to manage cookies on our services?",
        route: "#manageCookies",
      },
      {
        id: "thirsPartyIntTransfers",
        label: "6. Third Party and international transfers",
        route: "#thirsPartyIntTransfers",
      },
      {
        id: "additionalInfo",
        label: "7. Additional Information",
        route: "#additionalInfo",
      },
      {
        id: "contact",
        label: "8. Contact",
        route: "#contact",
      },
    ],
  },
]
export const cookiePolicyOptions = tableOfContent?.find(
  el => el?.id === "cookiePolicyContent"
)
