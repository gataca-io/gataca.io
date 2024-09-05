import { LinkModel } from "../interfaces/interfaces"

const tableOfContent: LinkModel[] = [
  {
    id: "cookiePolicyContent",
    label: "Table of content",
    subRoutes: [
      {
        id: "introduction",
        label: "1. Introduction",
        route: "#introduction__1",
      },
      {
        id: "whatIsCookie",
        label: "2. What is a cookie?",
        route: "#whatIsCookie__2",
      },
      {
        id: "typeOfCookies",
        label: "3. Type of cookies",
        route: "#typeOfCookies__3",
      },
      {
        id: "whatCookiesWeUse",
        label: "4. What cookies do we use?",
        route: "#whatCookiesWeUse__4",
      },
      {
        id: "manageCookies",
        label: "5. How to manage cookies on our services?",
        route: "#manageCookies__5",
      },
      {
        id: "thirsPartyIntTransfers",
        label: "6. Third Party and international transfers",
        route: "#thirsPartyIntTransfers__6",
      },
      {
        id: "additionalInfo",
        label: "7. Additional Information",
        route: "#additionalInfo__7",
      },
      {
        id: "contact",
        label: "8. Contact",
        route: "#contact__8",
      },
    ],
  },
]

export default tableOfContent
