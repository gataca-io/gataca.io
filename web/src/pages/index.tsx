import { HeadFC, PageProps, navigate } from "gatsby"
import * as React from "react"
import { useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"
import Layout from "../components/templates/mainLayout/MainLayout"
import FirstSection from "./home/sections/firstSection/FirstSection"
import LogosSlider from "../components/elements/logosSlider/LogosSlider"
import FourthSection from "./home/sections/fourthSection/FourthSection"
import PreFooterCTASection from "../components/templates/sections/preFooterCTA/PreFooterCTA"
import ThirdSection from "./home/sections/thirdSection/ThirdSection"
import { gatacaStudioURL } from "../globalData/globalData"
import FifthSection from "./home/sections/fifthSection/FifthSection"

// interface homeDataModel {
//   attributes: {
//     Body: string
//     Title: string
//     HeroImage?: {
//       data: {
//         attributes: {
//           url: string
//         }
//       }
//     }
//   }
// }

const IndexPage: React.FC<PageProps> = () => {
  // const [homeData, setHomeData] = useState<homeDataModel | undefined>()
  const [homeData, setHomeData] = useState<any | undefined>()
  const { firstSection, thirdSection, fourthSection, fifthSection } = homeData
    ? homeData
    : []

  React.useEffect(() => {
    getHomeData()
  }, [])

  const getHomeData = async () => {
    const json_data = await require("./home/data/homeData.json")
    setHomeData(json_data?.data && json_data?.data)
  }

  // const getHomeData = async () => {
  //   await fetch("http://127.0.0.1:1337/api/entry?populate=*")
  //     .then(response => response.json())
  //     .then(jsonResponse => {
  //       setHomeData(jsonResponse?.data)
  //     })
  //     .catch((error: any) => {
  //       console.error(error)
  //     })
  // }

  return (
    <Layout>
      <>
        <FirstSection
          title={firstSection?.title}
          description={firstSection?.description}
          leftButton={firstSection?.leftButton}
          rightButton={firstSection?.rightButton}
        />
        <LogosSlider />
        <ThirdSection
          title={thirdSection?.title}
          description={thirdSection?.description}
          list={thirdSection?.list}
        />
        <FifthSection
          title={fifthSection?.title}
          subTitle={fifthSection?.subTitle}
          description={fifthSection?.description}
        />
        <ReactMarkdown>
          {homeData?.attributes?.Body?.replaceAll(
            "/uploads/",
            "http://localhost:1337/uploads/"
          ) || ""}
        </ReactMarkdown>
      </>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
