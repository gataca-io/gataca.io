import type { PageProps } from "gatsby"
import * as React from "react"
import moment from "moment"
import * as styles from "./index.module.scss"
import cx from "classnames"
import Layout from "../../components/templates/mainLayout/MainLayout"
import TableOfContentContainer from "../../components/templates/tableOfContent/elements/tableOfContentContainer/TableOfContentContainer"
import { LegalModel, LinkModel } from "../../interfaces/interfaces"
import tableOfContent from "../../data/privacyPolicyData"
import MarkDownContent from "../../components/elements/markDownContent/MarkDownContent"

export type ITableOfContentProps = {
  navigationObject?: LinkModel
  className?: string
}

const PrivacyPolicy: React.FC<PageProps> = () => {
  const [tableOfContentOpenedID, setTableOfContentOpened] = React.useState("")
  const [strapiData, setStrapiData] = React.useState<LegalModel | undefined>()

  React.useEffect(() => {
    if (!strapiData) {
      getStrapiData()
    }
  }, [])

  const getStrapiData = async () => {
    await fetch(
      `${process.env.STRAPI_API_URL}/api/privacy-policy?&populate=deep`
    )
      .then(response => response.json())
      .then(jsonResponse => {
        const strapiData = jsonResponse?.data?.attributes
        setStrapiData(strapiData)
      })
  }

  const list = strapiData?.pageContent?.contentSectionItem
  const date = strapiData?.pageContent?.date.date

  return (
    <Layout seoData={strapiData?.seo}>
      <>
        <section
          className={`${styles?.privacyPolicy} ${cx("containerMaxWidth")}`}
        >
          {tableOfContent?.map((item, index) => {
            return (
              <TableOfContentContainer
                open={tableOfContentOpenedID === item?.id}
                item={item}
                setOptionOpened={setTableOfContentOpened}
                className={styles?.showMobile}
                key={"tableOfContent__" + index}
              />
            )
          })}

          <div className={styles?.sectionHeader}>
            <h1 className={cx("heading1 marginBottom32")}>
              {strapiData?.pageContent?.title}
            </h1>
            <p className={cx("bodyRegularXL")}>
              {strapiData?.pageContent?.date.dateText}
              {moment(date).format("LL")}
            </p>
          </div>
          <div className={styles?.sectionMain}>
            <div className={styles?.sectionMain__dataContentCol}>
              <div className={styles?.contentCol__section}>
                <MarkDownContent
                  content={strapiData?.pageContent?.introSectionText}
                />
              </div>
              {list?.map((item, index) => {
                return (
                  <div
                    key={"content__" + index}
                    className={styles?.contentCol__section}
                    id={item.idName + "__" + index}
                  >
                    <h4 className={cx("heading4 marginBottom32")}>
                      {item.title}
                    </h4>

                    <MarkDownContent content={item.description} />
                  </div>
                )
              })}
              {strapiData?.pageContent?.contentSectionItem[5].description}
            </div>
            {tableOfContent?.map((item, index) => {
              return (
                <TableOfContentContainer
                  open={tableOfContentOpenedID === item?.id}
                  item={item}
                  setOptionOpened={setTableOfContentOpened}
                  className={styles?.showDesktop}
                  key={"tableOfContent__" + index}
                />
              )
            })}
          </div>
        </section>
      </>
    </Layout>
  )
}

export default PrivacyPolicy
