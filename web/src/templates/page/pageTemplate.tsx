import React from "react"
import { navigate } from "gatsby"
import Layout from "../../components/templates/mainLayout/MainLayout"
import PreFooterCTASection from "../../components/templates/sections/preFooterCTA/PreFooterCTA"
import { PageModel } from "../../interfaces/interfaces"
import PageSkeleton from "./components/introBlogSkeleton/PageSkeleton"
import AllSectionsTemplate from "./sections/AllSectionsTemplate"

const PageTemplate: React.FC = (props: any) => {
  const [page, setPage] = React.useState<PageModel | undefined>()
  const pageData = page && page?.attributes

  React.useEffect(() => {
    getPageData()
  }, [props?.pageContext?.slugURL, props?.pageContext?.subPath])

  const getPageData = async () => {
    await fetch(
      `${process.env.STRAPI_API_URL}/api/pages?filters[slugURL]=${props?.pageContext?.slugURL}&populate=deep`
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
        {pageData?.title ? (
          <AllSectionsTemplate {...pageData} />
        ) : (
          <PageSkeleton />
        )}

        <PreFooterCTASection
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

export default PageTemplate
