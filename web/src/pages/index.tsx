import * as React from "react"
import Layout from "../components/templates/mainLayout/MainLayout"
import Highlight from "../templates/page/sections/components/shared/Highlight/Highlight"
import AllSectionsTemplate from "../templates/page/sections/AllSectionsTemplate"
import PageSkeleton from "../templates/page/components/introBlogSkeleton/PageSkeleton"
import * as styles from "../templates/page/pageTemplate.module.scss"

const IndexPage: React.FC = (props: any) => {
  const [homeStrapiData, setHomeStrapiData] = React.useState<any | undefined>()
  const homeData = homeStrapiData && homeStrapiData

  React.useEffect(() => {
    getHomeStrapiData()
  }, [])

  const getHomeStrapiData = async () => {
    await fetch(`${process.env.STRAPI_API_URL}/api/home-index?populate=deep,7`)
      .then(response => response.json())
      .then(jsonResponse => {
        const homeStrapiData = jsonResponse?.data?.attributes
        setHomeStrapiData(homeStrapiData)
      })
  }

  const pageTheme = homeData?.darkTheme

  return (
    <Layout
      className={pageTheme ? styles?.dark__theme : styles?.light__theme}
      seoData={homeData?.seo}
    >
      <>
        {homeData ? (
          <AllSectionsTemplate
            {...homeStrapiData}
            location={props?.location?.hash}
            pageContext={props?.pageContext}
          />
        ) : (
          <PageSkeleton />
        )}
        {homeData?.sections?.map((item: any) => {
          const { __component, idItem, heading, color, align } = item

          return (
            __component === "shared.highlight" && (
              <Highlight
                key={"highlight__" + Math.random()}
                idItem={idItem}
                heading={heading?.data?.attributes}
                color={color}
                align={align}
              />
            )
          )
        })}
      </>
    </Layout>
  )
}

export default IndexPage
