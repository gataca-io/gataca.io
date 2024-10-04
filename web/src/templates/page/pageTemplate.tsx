import React from "react"
import { navigate } from "gatsby"
import Layout from "../../components/templates/mainLayout/MainLayout"
import PreFooterCTASection from "../../components/templates/sections/preFooterCTA/PreFooterCTA"
import { PageModel } from "../../interfaces/interfaces"
import PageSkeleton from "./components/introBlogSkeleton/PageSkeleton"
import AllSectionsTemplate from "./sections/AllSectionsTemplate"
import * as styles from "./pageTemplate.module.scss"
import LocaleLink from "./components/localeLink/LocaleLink"

const PageTemplate: React.FC = (props: any) => {
  const [page, setPage] = React.useState<PageModel | undefined>()
  const pageData = page && page?.attributes

  React.useEffect(() => {
    getPageData()
  }, [
    props?.pageContext?.slugURL,
    props?.pageContext?.subPath,
    props?.pageContext?.locale,
  ])

  const getPageData = async () => {
    await fetch(
      `${process.env.STRAPI_API_URL}/api/pages?locale=${props?.pageContext?.locale}&filters[slugURL]=${props?.pageContext?.slugURL}&populate=deep,6`
    )
      .then(response => response.json())
      .then(jsonResponse => {
        jsonResponse &&
          jsonResponse?.data &&
          jsonResponse?.data[0] &&
          setPage(jsonResponse?.data[0])
      })
  }

  return (
    <Layout seoData={pageData?.seo}>
      <>
        <LocaleLink pageContext={props?.pageContext} />
        {pageData ? <AllSectionsTemplate {...pageData} /> : <PageSkeleton />}
        {pageData?.sections?.map(item => {
          const { __component, title, description, rightButton, leftButton } =
            item

          return (
            <>
              {__component === "generic.prefooter" && (
                <PreFooterCTASection
                  className={styles.prefooter}
                  title={title}
                  description={description}
                  rightButton={{
                    label: rightButton?.label,
                    action: () => navigate(rightButton?.url),
                  }}
                  leftButton={{
                    label: leftButton?.label,
                    action: () => navigate(leftButton?.url),
                  }}
                />
              )}
            </>
          )
        })}
      </>
    </Layout>
  )
}

export default PageTemplate
