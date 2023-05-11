import { LinkModel } from "../interfaces/interfaces"

const tableOfContent: LinkModel[] = [
  {
    id: "cookiePolicyContent",
    label: "Table of content",
    subRoutes: [
      {
        id: "whoAreWe",
        label: "1. Who Are We",
        route: "#whoAreWe__0",
      },
      {
        id: "whatIsCookie",
        label: "2. What is a cookie?",
        route: "#whatIsCookie__1",
      },
      {
        id: "typeOfCookies",
        label: "3. Type of cookies",
        route: "#typeOfCookies__2",
      },
      {
        id: "whatCookiesWeUse",
        label: "4. What cookies do we use?",
        route: "#whatCookiesWeUse__3",
      },
      {
        id: "manageCookies",
        label: "5. How to manage cookies on our services?",
        route: "#manageCookies__4",
      },
      {
        id: "thirsPartyIntTransfers",
        label: "6. Third Party and international transfers",
        route: "#thirsPartyIntTransfers__5",
      },
      {
        id: "additionalInfo",
        label: "7. Additional Information",
        route: "#additionalInfo__6",
      },
      {
        id: "contact",
        label: "8. Contact",
        route: "#contact__7",
      },
    ],
  },
]

export default tableOfContent
