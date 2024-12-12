import React from "react"
import Layout from "../../components/templates/mainLayout/MainLayout"
import Highlight from "./sections/components/shared/Highlight/Highlight"
import { PageModel } from "../../interfaces/interfaces"
import PageSkeleton from "./components/introBlogSkeleton/PageSkeleton"
import AllSectionsTemplate from "./sections/AllSectionsTemplate"

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
      `${process.env.STRAPI_API_URL}/api/pages?locale=${props?.pageContext?.locale}&filters[slugURL]=${props?.pageContext?.slugURL}&populate=deep,7`
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
        {pageData ? (
          <AllSectionsTemplate
            {...pageData}
            location={props?.location?.hash}
            pageContext={props?.pageContext}
          />
        ) : (
          <PageSkeleton />
        )}
        {pageData?.sections?.map(item => {
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

export default PageTemplate
