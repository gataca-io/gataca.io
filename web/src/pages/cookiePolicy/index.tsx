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
            Effective date: September 4th, 2024
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
            </div>
            <div className={styles?.contentCol__section} id="introduction__1">
              <h4 className={cx("heading4 marginBottom32")}>1. Introduction</h4>
              <p>
                Gataca Labs S.L.U. and its affiliates (referred to as “Gataca”
                or “we”, “our” or “us”) is a cybersecurity company incorporated
                under the laws of Spain that provides decentralized digital
                identity technology through our software applications, including
                but not limited to our cloud-based identity platform for the
                issuance and verification of identity credentials (“
                <b>Gataca Studio</b>”), our mobile ID wallet (the “Wallet”), our
                website https://gataca.io (the “<b>Website</b>”) and our
                knowledge site https://docs.gataca.io (“
                <b>Document Knowledge Base</b>”), jointly referred to here as
                “Services”.
              </p>
              <p>
                In this Cookie Policy we explain what cookies are, what they are
                used for, and how to manage them. This policy also defines what
                types and for what purpose Gataca uses cookies.
              </p>
              <p>This Cookie Policy applies to the Website.</p>
            </div>
            <div className={styles?.contentCol__section} id="whatIsCookie__2">
              <h4 className={cx("heading4 marginBottom32")}>
                2. What is a cookie?
              </h4>
              <p>
                Cookies are small files, downloaded on your device (such as your
                mobile, computer or tablet) when you access the Services.
                Cookies are used to guarantee the quality, usability and correct
                functionality of Services, as well as to store and recover
                information about browsing habits and to personalize their
                content and may sometimes be used to recognize the user of a
                website.
              </p>
              <p>
                Cookies are therefore essential to the functioning of the
                Services, and in no way constitute a risk to your computer or
                your device. Moreover, they can help us to identify possible
                improvements to the Services and to detect website malfunctions.
              </p>
            </div>
            <div className={styles?.contentCol__section} id="typeOfCookies__3">
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
                    Service itself and from which the Service requested by users
                    is provided.
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
                    <b>Necessary functional cookies: </b>These cookies are
                    essential for our website to function normally or to access
                    particular features, such as the ability to sign in,
                    purchase subscriptions, or filling in forms.
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p className={cx("marginBottom20")}>
                    <b>Analytics and web optimization cookies: </b>Cookies used
                    for analytic purposes to understand how users interact with
                    our service, for the purposes of introducing service
                    improvements.
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p className={cx("marginBottom20")}>
                    <b>User Preference cookies: </b>Cookies that remember
                    choices you make, like a language or region, to provide a
                    personalized experience.
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p className={cx("marginBottom20")}>
                    <b>Advertising Cookies: </b>Such cookies allow the
                    management of the advertising spaces that, where
                    appropriate, have been included on the Services.
                  </p>
                </li>
              </ul>
            </div>
            <div
              className={styles?.contentCol__section}
              id="whatCookiesWeUse__4"
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
                First-party cookies are all technical cookies.
              </p>
              <p className={cx("marginBottom20")}>
                Details of the characteristics of third-party cookies are
                described below.
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
                    <b></b>HubSpot:{" "}
                    <a href="https://legal.hubspot.com/privacy-policy">
                      https://legal.hubspot.com/privacy-policy
                    </a>
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p>
                    <b></b>Stripe:{" "}
                    <a href="https://stripe.com/en-es/legal/privacy-center">
                      https://stripe.com/en-es/legal/privacy-center
                    </a>
                  </p>
                </li>
              </ul>
            </div>
            <div className={styles?.contentCol__section} id="manageCookies__5">
              <h4 className={cx("heading4 marginBottom32")}>
                5. How to manage cookies on our services?
              </h4>
              <p className={cx("marginBottom20")}>
                The first time you visit our Services, you can accept or reject
                the use of cookies through Gataca’s Cookie Management Centre.
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
                    If you use <b>Microsoft Internet Explorer:</b> click on the
                    Settings button in Internet Explorer and then Privacy {">"}{" "}
                    Settings {">"} Advanced and choose whether you want to
                    accept, block, or be prompted for first-party and
                    third-party cookies. For more information, click{" "}
                    <a
                      href="https://support.microsoft.com/es-es/help/17442/windows-internet-explorer-delete-manage-cookies"
                      target="_blank"
                    >
                      here
                    </a>
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p className={cx("marginBottom20")}>
                    If you use <b>Firefox:</b> click on the Firefox button and
                    select Options {">"} Privacy {">"} Use custom settings for
                    history {">"} Check the Accept cookies option to enable
                    them, and uncheck it to disable them {">"} Choose how long
                    cookies will be stored {">"} OK. For more information, click{" "}
                    <a
                      href="https://support.mozilla.org/es/products/firefox/privacy-and-security"
                      target="_blank"
                    >
                      here
                    </a>
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p className={cx("marginBottom20")}>
                    If you use <b>Chrome:</b> click on the Chrome menu in the
                    browser toolbar {">"} Settings {">"} Show advanced options{" "}
                    {">"} In the "Privacy" section, click on Content settings{" "}
                    {">"} In the "Cookies" section, you can manage cookies. For
                    more information, click{" "}
                    <a
                      href="https://support.google.com/chrome/answer/95647?hl=es"
                      target="_blank"
                    >
                      here
                    </a>
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p className={cx("marginBottom20")}>
                    If you use <b>Safari:</b> go to Preferences and, in the
                    Privacy panel, choose Block Cookies, and select the option
                    you prefer from those offered by the browser. For more
                    information, click{" "}
                    <a
                      href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
                      target="_blank"
                    >
                      here
                    </a>
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p className={cx("marginBottom20")}>
                    If you use <b>Opera:</b> click on Settings {">"} Options{" "}
                    {">"} Advanced {">"} Cookies. For more information, click
                    <a
                      href="https://help.opera.com/en/latest/web-preferences/#cookies"
                      target="_blank"
                    >
                      here
                    </a>
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p className={cx("marginBottom20")}>
                    If you use an <b>iPhone or iPad:</b> from the home screen,
                    select Settings {">"} Safari and then choose your preferred
                    configuration option. For more information, click{" "}
                    <a
                      href="https://support.apple.com/es-es/HT201265"
                      target="_blank"
                    >
                      here
                    </a>
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p className={cx("marginBottom20")}>
                    If you use <b>Android:</b> click on Menu {">"} Settings{" "}
                    {">"} Security and Privacy {">"} activate or deactivate the
                    "Accept cookies" checkbox {">"} Restart the browser for the
                    changes to take effect.
                  </p>
                </li>
              </ul>
            </div>
            <div
              className={styles?.contentCol__section}
              id="thirsPartyIntTransfers__6"
            >
              <h4 className={cx("heading4 marginBottom32")}>
                6. Third Party and international transfers
              </h4>
              <p className={cx("marginBottom20")}>
                First-party cookies are stored in servers located in the
                European Economic Area (EEA). Users can obtain information about
                transfers to third countries that, if any, are made by the third
                parties identified in this cookie policy in their corresponding
                policies.
              </p>
              <p className={cx("marginBottom20")}>
                Your data may also be communicated to competent authorities in
                the exercise of their functions.
              </p>
            </div>
            <div className={styles?.contentCol__section} id="additionalInfo__7">
              <h4 className={cx("heading4 marginBottom32")}>
                7. Additional information
              </h4>
              <p className={cx("marginBottom20")}>
                You can find additional information about the processing of your
                data, in particular about your rights and how to exercise them,
                in Gataca's Privacy Policy, which you will find available
                through the following link{" "}
                <a href="https://gataca.io/privacy-policy">
                  https://gataca.io/privacy-policy
                </a>
              </p>
            </div>
            <div className={styles?.contentCol__section} id="contact__8">
              <h4 className={cx("heading4 marginBottom32")}>8. Contact</h4>
              <p className={cx("marginBottom20")}>
                If you have any questions about this Cookie Policy, please
                contact our Data Protection Officer at{" "}
                <a href="mailto: dpo@gataca.io" type="email">
                  dpo@gataca.io
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
