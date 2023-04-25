import { HeadFC, PageProps, graphql, navigate } from "gatsby"
import * as React from "react"
import { useState } from "react"
import ReactMarkdown from "react-markdown"
import Layout from "../components/templates/mainLayout/MainLayout"
import PreFooterCTASection from "../components/templates/sections/preFooterCTA/PreFooterCTA"
import LogosSlider from "../components/elements/logosSlider/LogosSlider"
import { sortByDate } from "../utils/sort"
import { gatacaStudioURL } from "../data/globalData"
import EighthSection from "./home/sections/eighthSection/EighthSection"
import SixthSection from "./home/sections/sixthSection/SixthSection"
import FifthSection from "./home/sections/fifthSection/FifthSection"
import FourthSection from "./home/sections/fourthSection/FourthSection"
import ThirdSection from "./home/sections/thirdSection/ThirdSection"
import FirstSection from "./home/sections/firstSection/FirstSection"
import * as styles from "./home/home.module.scss"

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

export type IStrapiBlog = {
  data: {
    allStrapiBlog: {
      edges: {
        node: {
          id: string
          title: string
          slugURL: string
        }
      }
    }
  }
}
const IndexPage: React.FC<IStrapiBlog> = props => {
  console.log("DATA", props, props?.data?.allStrapiBlog?.edges)
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

  React.useEffect(() => {
    // getHomeData()
    // if (!blogsItems) {
    //   getBlogsData()
    // }
  }, [props])

  const getHomeData = async () => {
    const json_data = await require("./home/data/homeData.json")
    setHomeData(json_data?.data && json_data?.data)
  }

  // const getHomeData = async () => {
  //   await fetch("https://strapi.dev.gataca.io//api/entry?populate=*")
  //     .then(response => response.json())
  //     .then(jsonResponse => {
  //       setHomeData(jsonResponse?.data)
  //     })
  //     .catch((error: any) => {
  //       console.error(error)
  //     })
  // }

  const getBlogsData = async () => {
    await fetch(`${process.env.STRAPI_API_URL}/api/blogs?&populate=*`)
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
          blogs={props?.data?.allStrapiBlog?.edges}
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

export const pageQuery = graphql`
  query allStrapiBlog {
    edges {
      node {
        id
        title
        slugURL
      }
    }
  }
`
