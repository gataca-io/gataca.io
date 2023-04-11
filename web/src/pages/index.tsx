import { HeadFC, PageProps, navigate } from "gatsby"
import * as React from "react"
import { useState } from "react"
import ReactMarkdown from "react-markdown"
import Layout from "../components/templates/mainLayout/MainLayout"
import FirstSection from "./home/sections/firstSection/FirstSection"
import LogosSlider from "../components/elements/logosSlider/LogosSlider"
import FourthSection from "./home/sections/fourthSection/FourthSection"
import PreFooterCTASection from "../components/templates/sections/preFooterCTA/PreFooterCTA"
import ThirdSection from "./home/sections/thirdSection/ThirdSection"
import { gatacaStudioURL } from "../data/globalData"
import FifthSection from "./home/sections/fifthSection/FifthSection"
import EighthSection from "./home/sections/eighthSection/EighthSection"
import { sortByDate } from "../utils/sort"
import * as styles from "./home/home.module.scss"
import SixthSection from "./home/sections/sixthSection/SixthSection"

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
  const [blogsItems, setBlogsItems] = React.useState<any | undefined>()
  const [homeData, setHomeData] = useState<any | undefined>()
  const {
    firstSection,
    thirdSection,
    fourthSection,
    fifthSection,
    sixthSection,
    eighthSection,
  } = homeData ? homeData : []

  React.useEffect(() => {
    getHomeData()
    if (!blogsItems) {
      getBlogsData()
    }
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

  const getBlogsData = async () => {
    await fetch(`http://127.0.0.1:1337/api/blogs?&populate=*`)
      .then(response => response.json())
      .then(jsonResponse => {
        const blogs = jsonResponse?.data
        const sorteredBlogs = sortByDate(blogs)
        setBlogsItems(sorteredBlogs)
      })
      .catch((error: any) => {})
  }

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
        <FourthSection
          title={fourthSection?.title}
          description={fourthSection?.description}
          advantages={fourthSection?.advantages}
        />
        <FifthSection
          title={fifthSection?.title}
          subTitle={fifthSection?.subTitle}
          description={fifthSection?.description}
        />
        <SixthSection
          title={sixthSection?.title}
          subTitle={sixthSection?.subTitle}
          description={sixthSection?.description}
          list={sixthSection?.list}
          learnMoreButton={sixthSection?.learnMoreButton}
        />
        <EighthSection
          title={eighthSection?.title}
          description={eighthSection?.description}
          blogs={blogsItems}
          moreButton={eighthSection?.moreButton}
        />
        <PreFooterCTASection
          className={styles.prefooter}
          title={"Ready to start?"}
          description={
            "Create an account in Gataca Studio and start experiencing decentralized identity today. Fast & seamless integration"
          }
          leftButton={{
            label: "Contact us",
            action: () => navigate("/company/contactUs"),
          }}
          rightButton={{
            label: "Try for free",
            action: () => window.open(gatacaStudioURL, "_blank"),
          }}
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
