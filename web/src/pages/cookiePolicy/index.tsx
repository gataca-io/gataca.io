import { PageProps } from "gatsby"
import * as React from "react"
import * as styles from "./index.module.scss"
import cx from "classnames"
import Layout from "../../components/templates/mainLayout/MainLayout"
import tableOfContent from "../../data/cookiePolicyData"
import { LinkModel } from "../../interfaces/interfaces"
import TableOfContentContainer from "../../components/templates/tableOfContent/elements/tableOfContentContainer/TableOfContentContainer"
import Table from "./table/Table"

export type ITableOfContentProps = {
  navigationObject?: LinkModel
  className?: string
}
const CookiePolicy: React.FC<PageProps> = () => {
  const [tableOfContentOpenedID, setTableOfContentOpened] = React.useState("")
  const [strapiData, setStrapiData] = React.useState<any | undefined>()

  React.useEffect(() => {
    if (!strapiData) {
      getStrapiData()
    }
  }, [])

  const getStrapiData = async () => {
    await fetch(`${process.env.STRAPI_API_URL}/api/cookie-policy?&populate=*`)
      .then(response => response.json())
      .then(jsonResponse => {
        const strapiData = jsonResponse?.data?.attributes
        setStrapiData(strapiData)
      })
  }

  return (
    <Layout seoData={strapiData?.seo}>
      <section className={`${styles?.cookiePolicy} ${cx("containerMaxWidth")}`}>
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
            <div className={styles?.contentCol__section} id="whoAreWe__0">
              <h4 className={cx("heading4 marginBottom32")}>1. Who are we?</h4>
              <p>
                Gataca España S.L.U. (referred to as “<b>Gataca</b>” or “
                <b>we</b>”, “<b>our</b>” or “<b>us</b>”)) in its capacity as
                Data Controller is a Spanish limited liability company with tax
                identification number B88524525 and duly registered in the
                Commercial Register of Madrid.
              </p>
            </div>
            <div className={styles?.contentCol__section} id="whatIsCookie__1">
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
            <div className={styles?.contentCol__section} id="typeOfCookies__2">
              <h4 className={cx("heading4 marginBottom32")}>
                3. Type of cookies
              </h4>
              <p className={cx("marginBottom20")}>
                Cookies can be classified into different types, according to
                different criteria:
              </p>
              <p className={`${cx("marginBottom20")} ${styles.mainListTitle}`}>
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
              <p className={`${cx("marginBottom20")} ${styles.mainListTitle}`}>
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
            <div
              className={styles?.contentCol__section}
              id="whatCookiesWeUse__3"
            >
              <h4 className={cx("heading4 marginBottom32")}>
                4. What cookies do we use?
              </h4>
              <p className={cx("marginBottom20")}>
                In addition to those cookies strictly necessary for the
                provisioning of the Services, our Services use analytical
                cookies and may use advertisement cookies.
              </p>
              <p className={cx("marginBottom20")}>
                First-party cookies are all cookies necessary for the Services
                to function.
              </p>
              <p className={cx("marginBottom20")}>
                Details of the characteristics of third-party cookies are
                described below:
              </p>
              <Table />
              <p className={cx("marginBottom20 marginTop32")}>
                Regarding third-party cookies, please visit the following links
                for further information:
              </p>
              <ul>
                <li className={cx("marginBottom20")}>
                  <p>
                    <b></b>Google Analytics:{" "}
                    <a href="https://marketingplatform.google.com/about/analytics/terms/us">
                      https://marketingplatform.google.com/about/analytics/terms/us
                    </a>
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p>
                    <b></b>Fullstory:{" "}
                    <a href="https://www.fullstory.com/legal/privacy-policy/">
                      https://www.fullstory.com/legal/privacy-policy/
                    </a>
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p>
                    <b></b>HubSpot:{" "}
                    <a href="https://legal.hubspot.com/privacy-policy">
                      https://legal.hubspot.com/privacy-policy
                    </a>
                  </p>
                </li>
              </ul>
            </div>
            <div className={styles?.contentCol__section} id="manageCookies__4">
              <h4 className={cx("heading4 marginBottom32")}>
                5. How to manage cookies on our services?
              </h4>
              <p className={cx("marginBottom20")}>
                The first time you visit our Services, you can accept or reject
                the use of cookies through GATACA’s Cookie Management Centre.
              </p>
              <p className={cx("marginBottom20")}>
                Once you accept our cookies, you can delete them directly
                through the cookie management options of your browser.
              </p>
              <p>
                You can allow, block or delete the cookies installed on your
                computer at any time through the options provided by your
                browser. Please note that if you disable all cookies, some of
                the functionalities or content of the Services may be affected.
              </p>
              <p className={cx("marginBottom20")}>Here's how to do it:</p>
              <ul>
                <li className={cx("marginBottom20")}>
                  <p className={cx("marginBottom20")}>
                    If you use <b>Microsoft Internet Explorer:</b>
                  </p>
                  <p>
                    <b>1. </b>Click on the Settings button in Internet Explorer
                  </p>
                  <p>
                    <b>2. </b>Then go to this location Privacy {">"} Settings{" "}
                    {">"} Advanced
                  </p>
                  <p>
                    <b>3. </b>Choose whether you want to accept, block, or be
                    prompted for first-party and third-party cookies.
                  </p>
                  <p>
                    <b>4. </b>For more information, click{" "}
                    <a href="https://support.microsoft.com/es-es/windows/eliminar-y-administrar-cookies-168dab11-0753-043d-7c16-ede5947fc64d">
                      here
                    </a>
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p className={cx("marginBottom20")}>
                    If you use <b>Firefox:</b>
                  </p>
                  <p>
                    <b>1. </b>Click on the Firefox button
                  </p>
                  <p>
                    <b>2. </b>Select Options {">"} Privacy {">"} Use custom
                    settings for history {">"} Check the Accept cookies option
                    to enable them, and uncheck it to disable them {">"} Choose
                    how long cookies will be stored {">"} OK.
                  </p>
                  <p>
                    <b>3. </b>For more information, click{" "}
                    <a href="https://support.mozilla.org/es/products/firefox/privacy-and-security">
                      here
                    </a>
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p className={cx("marginBottom20")}>
                    If you use <b>Chrome::</b>
                  </p>
                  <p>
                    <b>1. </b>Click on the Chrome menu in the browser toolbar{" "}
                    {">"} Settings {">"} Show advanced options {">"} In the
                    "Privacy" section, click on Content settings {">"} In the
                    "Cookies" section, you can manage cookies.
                  </p>
                  <p>
                    <b>2. </b>For more information, click{" "}
                    <a href="https://support.mozilla.org/es/products/firefox/privacy-and-security">
                      here
                    </a>
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p className={cx("marginBottom20")}>
                    If you use <b>Safari:</b>
                  </p>
                  <p>
                    <b>1. </b>Go to Preferences
                  </p>
                  <p>
                    <b>2. </b>Then in the Privacy panel, choose Block Cookies,
                    and select the option you prefer from those offered by the
                    browser.
                  </p>
                  <p>
                    <b>3. </b>For more information, click{" "}
                    <a href="https://support.apple.com/guide/safari/sfri11471/mac">
                      here
                    </a>
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p className={cx("marginBottom20")}>
                    If you use <b>Opera:</b>
                  </p>
                  <p>
                    <b>1. </b>Click on Settings {">"} Options {">"} Advanced{" "}
                    {">"} Cookies.
                  </p>
                  <p>
                    <b>4. </b>For more information, click{" "}
                    <a href="https://help.opera.com/en/latest/web-preferences/#cookies">
                      here
                    </a>
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p className={cx("marginBottom20")}>
                    If you use an <b>iPhone or iPad:</b>
                  </p>
                  <p>
                    <b>1. </b>From the home screen, select Settings {">"} Safari
                    and then choose your preferred configuration option.
                  </p>
                  <p>
                    <b>2. </b>For more information, click{" "}
                    <a href="https://support.apple.com/HT201265">here</a>
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p className={cx("marginBottom20")}>
                    If you use <b>Android:</b>
                  </p>
                  <p>
                    <b>1. </b>Click on Menu {">"} Settings {">"} Security and
                    Privacy {">"} activate or deactivate the "Accept cookies"
                    checkbox {">"} Restart the browser for the changes to take
                    effect.
                  </p>
                </li>
              </ul>
            </div>
            <div
              className={styles?.contentCol__section}
              id="thirsPartyIntTransfers__5"
            >
              <h4 className={cx("heading4 marginBottom32")}>
                6. Third Party and international transfers
              </h4>
              <p className={cx("marginBottom20")}>
                First-party cookies are stored in servers located in the
                European Economic Area (EEA).
              </p>
              <p className={cx("marginBottom20")}>
                Users can obtain information about transfers to third countries
                that, if any, are made by the third parties identified in this
                cookie policy in their corresponding policies.
              </p>
              <p className={cx("marginBottom20")}>
                Your data may also be communicated to competent authorities in
                the exercise of their functions.
              </p>
            </div>
            <div className={styles?.contentCol__section} id="additionalInfo__6">
              <h4 className={cx("heading4 marginBottom32")}>
                7. Additional information
              </h4>
              <p className={cx("marginBottom20")}>
                First-party cookies are stored in servers located in the
                European Economic Area (EEA).
              </p>
              <p className={cx("marginBottom20")}>
                You can find additional information about the processing of your
                data, in particular about your rights and how to exercise them,
                in GATACA's Privacy Policy, which you will find available
                through the following link{" "}
                <a href="https://gataca.io/privacy-policy">
                  https://gataca.io/privacy-policy
                </a>
              </p>
            </div>
            <div className={styles?.contentCol__section} id="contact__7">
              <h4 className={cx("heading4 marginBottom32")}>8. Contact</h4>
              <p className={cx("marginBottom20")}>
                If you have any questions about this Cookie Policy, please
                contact us by e-mail:{" "}
                <a href="mailto: gdpr@gataca.io" type="email">
                  gdpr@gataca.io
                </a>
                .
              </p>
            </div>
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
    </Layout>
  )
}

export default CookiePolicy
