import { PageProps, navigate } from "gatsby"
import * as React from "react"
import Layout from "../../../components/templates/mainLayout/MainLayout"
import PreFooterCTASection from "../../../components/templates/sections/preFooterCTA/PreFooterCTA"
import FirstSection from "./sections/firstSection/FirstSection"
import SecondSection from "./sections/secondSection/SecondSection"
import ThirdSection from "./sections/thirdSection/ThirdSection"
import FourthSection from "./sections/fourthSection/FourthSection"
import FifthSection from "./sections/fifthSection/FifthSection"
import SixthSection from "./sections/sixthSection/SixthSection"
import EighthSection from "./sections/eighthSection/EighthSection"
import * as styles from "./index.module.scss"
import { sortByDate } from "../../../utils/sort"
import SeventhSection from "./sections/seventhSection/SeventhSection"

const GatacaVouchPage: React.FC<PageProps> = () => {
  const [blogsItems, setBlogsItems] = React.useState<any | undefined>()
  const [homeStrapiData, setHomeStrapiData] = React.useState<any | undefined>()
  const [strapiData, setStrapiData] = React.useState<any | undefined>()
  const [faqData, setFaqData] = React.useState<any | undefined>()
  const [vouchStrapiData, setVouchStrapiData] = React.useState<
    any | undefined
  >()

  const {
    headerSection,
    featureSection,
    adSection,
    whyStudioSection,
    howWorksSection,
    tierSection,
  } = strapiData ? strapiData : []
  const { eighthSection } = homeStrapiData ? homeStrapiData : []
  const { faqSection } = faqData ? faqData : []
  // const { headerSection } = vouchStrapiData ? vouchStrapiData : []

  React.useEffect(() => {
    if (!strapiData) {
      getStrapiData()
    }
    if (!blogsItems) {
      getBlogsData()
    }
    if (!homeStrapiData) {
      getHomeStrapiData()
    }

    if (!faqData) {
      getFaqData()
    }
    if (!vouchStrapiData) {
      getVouchData()
    }
  }, [])

  const getStrapiData = async () => {
    await fetch(
      `${process.env.STRAPI_API_URL}/api/gataca-studio?populate[seo]=*&populate[featureSection][populate]=*&populate[whyStudioSection][populate]=*&populate[howWorksSection][populate]=*&populate[tierSection][populate][tiers][populate]=*&populate[headerSection][populate]=*&populate[adSection][populate]=*`
    )
      .then(response => response.json())
      .then(jsonResponse => {
        const strapiData = jsonResponse?.data?.attributes
        setStrapiData(strapiData)
      })
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
    await fetch(
      `${process.env.STRAPI_API_URL}/api/entry?&populate[seo][populate]=*&populate[eighthSection][populate]=*&populate[localizations][populate]=*`
    )
      .then(response => response.json())
      .then(jsonResponse => {
        const homeStrapiData = jsonResponse?.data?.attributes
        setHomeStrapiData(homeStrapiData)
      })
  }

  const getFaqData = async () => {
    await fetch(
      `${process.env.STRAPI_API_URL}/api/company-contact-us?populate%5Bseo%5D%5Bpopulate%5D=*&populate%5BfaqSection%5D%5Bpopulate%5D%5Bfaqs%5D%5Bpopulate%5D=*`
    )
      .then(response => response.json())
      .then(jsonResponse => {
        const faqData = jsonResponse?.data?.attributes
        setFaqData(faqData)
      })
  }

  const getVouchData = async () => {
    await fetch(
      `${process.env.STRAPI_API_URL}/api/gataca-vouch?populate[seo][populate]=*&populate[headerSection][populate]=*`
    )
      .then(response => response.json())
      .then(jsonResponse => {
        const vouchStrapiData = jsonResponse?.data?.attributes
        setVouchStrapiData(vouchStrapiData)
      })
  }

  return (
    <Layout seoData={strapiData?.seo}>
      <>
        <FirstSection
          title={headerSection?.title}
          description={headerSection?.description}
          button={headerSection?.cta}
        />
        <SecondSection
          title={featureSection?.title}
          description={featureSection?.description}
        />
        <ThirdSection
          title={adSection?.title}
          list={adSection?.ad_features?.data}
        />
        <FourthSection
          title={whyStudioSection?.title}
          description={whyStudioSection?.description}
          advantages={whyStudioSection?.advantages?.data}
        />
        <FifthSection
          title={howWorksSection?.title}
          description={howWorksSection?.description}
        />
        <SixthSection
          title={tierSection?.title}
          subTitle={tierSection?.subtitle}
          description={tierSection?.description}
          list={tierSection?.tiers.data}
        />
        <SeventhSection
          title={faqSection?.title}
          subTitle={faqSection?.subtitle}
          info={faqSection?.faqs?.data}
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
            "Confirm your users meet age requirements with absolute privacy and minimal friction using ID Wallets"
          }
          rightButton={{
            label: "Contact us",
            action: () => navigate("/company/contact"),
          }}
        />
      </>
    </Layout>
  )
}

export default GatacaVouchPage
