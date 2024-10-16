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
import { demolandURL, gatacaStudioURL } from "../data/globalData"
import SeventhSection from "./home/sections/seventhSection/SeventhSection"

const IndexPage: React.FC<PageProps> = () => {
  const [blogsItems, setBlogsItems] = React.useState<any | undefined>()
  const [homeStrapiData, setHomeStrapiData] = useState<any | undefined>()

  const {
    firstSection,
    thirdSection,
    fourthSection,
    fifthSection,
    sixthSection,
    seventhSection,
    eighthSection,
  } = homeStrapiData ? homeStrapiData : []

  React.useEffect(() => {
    getHomeStrapiData()
    if (!blogsItems) {
      getBlogsData()
    }
  }, [])

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
    await fetch(
      `${process.env.STRAPI_API_URL}/api/entry?&populate[seo][populate]=*&populate[firstSection][populate]=*&populate[thirdSection][populate]=*&populate[fourthSection][populate]=*&populate[fifthSection][populate]=*&populate[sixthSection][populate]=*&populate[seventhSection][populate]=*&populate[eighthSection][populate]=*&populate[localizations][populate]=*`
    )
      .then(response => response.json())
      .then(jsonResponse => {
        const homeStrapiData = jsonResponse?.data?.attributes
        setHomeStrapiData(homeStrapiData)
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
          list={thirdSection?.useCases}
        />
        <FourthSection
          title={fourthSection?.title}
          description={fourthSection?.description}
          advantages={fourthSection?.advantages}
        />
        <FifthSection
          title={fifthSection?.title}
          subTitle={fifthSection?.subtitle}
          description={fifthSection?.description}
        />
        <SixthSection
          title={sixthSection?.title}
          subTitle={sixthSection?.subtitle}
          description={sixthSection?.description}
          list={sixthSection?.useCases}
          learnMoreButton={sixthSection?.learnMoreButton}
        />
        <SeventhSection
          title={seventhSection?.title}
          subTitle={seventhSection?.subtitle}
          description={seventhSection?.description}
          feedback={seventhSection?.feedbacks}
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
            style: "outline",
            color: "white",
            action: () => navigate("/company/contact"),
          }}
          rightButton={{
            label: "Try Demo",
            action: () => window.open(demolandURL, "_blank"),
          }}
        />
      </>
    </Layout>
  )
}

export default IndexPage
