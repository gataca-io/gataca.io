import { PageProps, navigate } from "gatsby"
import * as React from "react"
import { useState } from "react"
import Layout from "../components/templates/mainLayout/MainLayout"
import PreFooterCTASection from "../components/templates/sections/preFooterCTA/PreFooterCTA"
import LogosSlider from "../components/elements/logosSlider/LogosSlider"
import EighthSection from "./home/sections/eighthSection/EighthSection"
import SixthSection from "./home/sections/sixthSection/SixthSection"
import FifthSection from "./home/sections/fifthSection/FifthSection"
import FourthSection from "./home/sections/fourthSection/FourthSection"
import ThirdSection from "./home/sections/thirdSection/ThirdSection"
import FirstSection from "./home/sections/firstSection/FirstSection"
import * as styles from "./home/home.module.scss"
import { sortByDate } from "../utils/sort"
import { gatacaStudioURL } from "../data/globalData"
import SeventhSection from "./home/sections/seventhSection/SeventhSection"

const IndexPage: React.FC<PageProps> = () => {
  const [blogsItems, setBlogsItems] = React.useState<any | undefined>()
  const [homeData, setHomeData] = useState<any | undefined>()
  const [homeStrapiData, setHomeStrapiData] = useState<any | undefined>()

  const {
    firstSection,
    thirdSection,
    fourthSection,
    fifthSection,
    sixthSection,
    seventhSection,
    eighthSection,
  } = homeData ? homeData : []

  React.useEffect(() => {
    getHomeStrapiData()
    getHomeData()
    if (!blogsItems) {
      getBlogsData()
    }
  }, [])

  const getHomeData = async () => {
    const json_data = await require("./home/data/homeData.json")
    setHomeData(json_data?.data && json_data?.data)
  }

  const getBlogsData = async () => {
    await fetch(
      `${process.env.STRAPI_API_URL}/api/blogs?sort[0]=date%3Aasc&populate=*`
    )
      .then(response => response.json())
      .then(jsonResponse => {
        const blogs = jsonResponse?.data
        const sorteredBlogs = sortByDate(blogs)
        setBlogsItems(sorteredBlogs)
      })
  }

  const getHomeStrapiData = async () => {
    await fetch(`${process.env.STRAPI_API_URL}/api/entry?&populate=*`)
      .then(response => response.json())
      .then(jsonResponse => {
        const homeData = jsonResponse?.data?.attributes
        setHomeStrapiData(homeData)
      })
  }

  return (
    <Layout seoData={homeStrapiData?.seo}>
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
        <SeventhSection
          title={seventhSection?.title}
          subTitle={seventhSection?.subTitle}
          description={seventhSection?.description}
          feedback={seventhSection?.feedback}
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
            action: () => navigate("/company/contact"),
          }}
          rightButton={{
            label: "Try for free",
            action: () => window.open(gatacaStudioURL, "_blank"),
          }}
        />
      </>
    </Layout>
  )
}

export default IndexPage
