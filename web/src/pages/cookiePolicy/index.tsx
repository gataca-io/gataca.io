import type { PageProps } from "gatsby"
import * as React from "react"
import * as styles from "./index.module.scss"
import cx from "classnames"
import Layout from "../../components/templates/mainLayout/MainLayout"
import { tableOfContent } from "./data/data"
import { LinkModel } from "../../interfaces/interfaces"
import TableOfContentContainer from "../../components/templates/tableOfContent/tableOfContentComponents/tableOfContentContainer/TableOfContentContainer"

export type ITableOfContentProps = {
  navigationObject?: LinkModel
  className?: string
}
const CookiePolicy: React.FC<PageProps> = () => {
  const [tableOfContentOpenedID, setTableOfContentOpened] = React.useState("")
  return (
    <Layout>
      <section className={`${styles?.cookiePolicy} ${cx("containerMaxWidth")}`}>
        {tableOfContent?.map(item => {
          return (
            <TableOfContentContainer
              open={tableOfContentOpenedID === item?.id}
              item={item}
              setOptionOpened={setTableOfContentOpened}
              className={styles?.showMobile}
            />
          )
        })}

        <div className={styles?.sectionHeader}>
          <h1 className={cx("heading1 marginBottom32")}>Cookie Policy</h1>
          <p className={cx("bodyRegularXL")}>
            Effective date: September 6th, 2022
          </p>
        </div>
        <div className={styles?.sectionMain}>
          <div className={styles?.sectionMain__dataContentCol}>
            <div className={styles?.contentCol__section}>
              <p className={cx("marginBottom20")}>
                <b>
                  PLEASE READ CAREFULLY THIS COOKIE POLICY BEFORE USING THE
                  SERVICES
                </b>
              </p>
              <p className={cx("marginBottom20")}>
                In this Cookie Policy we will explain what cookies are, what
                they are used for, and how to manage them. We also aim to show
                you what types of cookies and for what purpose GATACA uses
                cookies.
              </p>
              <p className={cx("marginBottom20")}>
                This Policy applies to the Website, Gataca Studio, the Wallet
                and any other products and services (collectively, “Services”)
                provided by GATACA and defined in the GATACA Generic Terms of
                Service.
              </p>
            </div>
            <div className={styles?.contentCol__section} id="whoAreWe">
              <h4 className={cx("heading4 marginBottom32")}>1. Who are we?</h4>
              <p>
                Gataca España S.L.U. (referred to as “<b>Gataca</b>” or “
                <b>we</b>”, “<b>our</b>” or “<b>us</b>”)) in its capacity as
                Data Controller is a Spanish limited liability company with tax
                identification number B88524525 and duly registered in the
                Commercial Register of Madrid.
              </p>
            </div>
            <div className={styles?.contentCol__section} id="whatIsCookie">
              <h4 className={cx("heading4 marginBottom32")}>
                2. What is a cookie?
              </h4>
              <p className={cx("marginBottom20")}>
                Cookies are small files, downloaded on your device (such as your
                mobile, computer or tablet) when you access the Services.
                Cookies are used to guarantee the quality, usability and correct
                functionality of Services, as well as to store and recover
                information about browsing habits and to personalise their
                content and may sometimes be used to recognise the user of a
                website.
              </p>
              <p className={cx("marginBottom20")}>
                Cookies are therefore essential to the functioning of the
                Services, and in no way constitute a risk to your computer or
                your device. Moreover, they can help us to identify possible
                improvements to the Services and to detect website malfunctions.
              </p>
            </div>
            <div className={styles?.contentCol__section} id="typeOfCookies">
              <h4 className={cx("heading4 marginBottom32")}>
                3. Type of cookies
              </h4>
              <p className={cx("marginBottom20")}>
                Cookies can be classified into different types, according to
                different criteria:
              </p>
              <p className={cx("marginBottom20")}>
                <b> 3.1 Types of cookies by the entity that manages them </b>
              </p>
              <ul>
                <li className={cx("marginBottom20")}>
                  <p className={cx("marginBottom20")}>
                    <b>First-party cookies: </b>those cookies sent to users’
                    devices from a device or domain managed by the editor of the
                    Services itself and from which the Service requested by
                    users is provided.
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p className={cx("marginBottom20")}>
                    <b>Third-party cookies: </b>those cookies sent to users’
                    devices from a device or domain not managed by the editor of
                    the Services, but by another entity that processes any data
                    obtained through cookies.
                  </p>
                </li>
              </ul>
              <p className={cx("marginBottom20")}>
                <b>3.2 Types of cookies by their purpose</b>
              </p>
              <ul>
                <li className={cx("marginBottom20")}>
                  <p className={cx("marginBottom20")}>
                    <b>Functional cookies:</b> such cookies allow you to browse
                    and use the Services.
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p className={cx("marginBottom20")}>
                    <b>Analytical cookies:</b> such cookies allow the cookies
                    manager to perform follow-up and analysis of the user
                    behaviour at the Services to which such cookies are linked;
                    this includes a quantitative measurement of the impact of an
                    advertisement. Any information collected by means of this
                    type of cookies is used to measure activity on any website,
                    application or platform, for the purposes of introducing
                    improvements in function of the analysis of the data
                    regarding the Services use made by users.
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p className={cx("marginBottom20")}>
                    <b>Advertisement Cookies:</b> such cookies allow the
                    management of the advertising spaces that, where
                    appropriate, have been included on the Services.
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p className={cx("marginBottom20")}>
                    <b>Preference Cookies:</b> such cookies allow us to remember
                    information that affects the behaviour and design of the
                    website, such as your preferred language or region of
                    residence.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          {tableOfContent?.map(item => {
            return (
              <TableOfContentContainer
                open={tableOfContentOpenedID === item?.id}
                item={item}
                setOptionOpened={setTableOfContentOpened}
                className={styles?.showDesktop}
              />
            )
          })}
        </div>
      </section>
    </Layout>
  )
}

export default CookiePolicy
