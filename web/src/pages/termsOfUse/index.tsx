import { Link, PageProps } from "gatsby"
import * as React from "react"
import * as styles from "./index.module.scss"
import cx from "classnames"
import Layout from "../../components/templates/mainLayout/MainLayout"
import {
  tableOfContent,
  gatacaURL,
  privacyPolicyURL,
  cookiePolicyURL,
} from "./data/data"
import { LinkModel } from "../../interfaces/interfaces"
import TableOfContentContainer from "../../components/templates/tableOfContent/elements/tableOfContentContainer/TableOfContentContainer"

export type ITableOfContentProps = {
  navigationObject?: LinkModel
  className?: string
}
const TermsOfUse: React.FC<PageProps> = () => {
  const [tableOfContentOpenedID, setTableOfContentOpened] = React.useState("")
  return (
    <Layout>
      <section className={`${styles?.termsOfUse} ${cx("containerMaxWidth")}`}>
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
          <h1 className={cx("heading1 marginBottom32")}>Terms of use</h1>
          <p className={cx("bodyRegularXL")}>Effective date: August 31, 2022</p>
        </div>
        <div className={styles?.sectionMain}>
          <div className={styles?.sectionMain__dataContentCol}>
            <div className={styles?.contentCol__section} id="introduction">
              <h4 className={cx("heading4 marginBottom32")}>1. Introduction</h4>
              <p className={cx("marginBottom20")}>
                Gataca España S.L.U and its affiliates (referred to as “
                <b>Gataca</b>” or “<b>we</b>”, “<b>our</b>” or “<b>us</b>”) is a
                cybersecurity company that provides decentralized digital
                identity technology through our software applications
                (collectively, “<b>Gataca Platform</b>”), including but not
                limited to our website
                <Link to={gatacaURL}> https://gataca.io</Link> (“<b>Website</b>
                ”), a cloud-based end-to-end solution (“<b>Gataca Studio</b>”),
                our on-premise applications GATACA Certify and GATACA Connect
                and a mobile application (“
                <b>Gataca Wallet</b>”).
              </p>
              <p className={cx("marginBottom20")}>
                “<b>Services</b>” herein refer to any and all website,
                application (web, mobile, desktop, cloud-based or otherwise),
                APIs, or other services provided by GATACA.
              </p>
              <p className={cx("marginBottom20")}>
                The Services includes code, images, text, and other materials,
                and third-party content (collectively the “<b>Contents</b>”).
              </p>
              <p className={cx("marginBottom20")}>
                The terms “<b>you</b>”, “<b>your</b>”, “and “<b>Client</b>”
                refer to you, whether you are an individual or a legal entity.
                These Terms of Service (“<b>Terms</b>”) is a legal agreement
                between you and GATACA.
              </p>
            </div>
            <div className={styles?.contentCol__section} id="acceptanceOfTerms">
              <h4 className={cx("heading4 marginBottom32")}>
                2. Acceptance of Terms
              </h4>
              <p className={cx("marginBottom20")}>
                To use the Services, you must review and accept these Terms. By
                clicking “I Agree,” indicating acceptance electronically, or by
                installing, accessing or using our Services, you agree to a
                full, complete and unreserved acceptance of each and every one
                of the terms included in these Terms. Unless otherwise stated in
                the corresponding Service-specific terms, you must be over 14 to
                be able to access or use the Services.
              </p>
              <p className={cx("marginBottom20")}>
                These Terms include by reference:
              </p>
              <ul>
                <li className={cx("marginBottom20")}>
                  <p>
                    GATACA’s <Link to={privacyPolicyURL}>Privacy Policy</Link>
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p>
                    GATACA’s <Link to={cookiePolicyURL}>Cookies Policy</Link>
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p>
                    GATACA’s service-specific terms, including, but not limited
                    to, GATACA Wallet Terms of Service and GATACA Studio Terms
                    of Service, when applicable.
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p>
                    Any terms provided separately to you for specific Services,
                    including product terms, payment terms, etc.
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p>
                    Additional terms and conditions, which may include those
                    from third parties.
                  </p>
                </li>
              </ul>
              <p className={cx("marginBottom20")}>
                <b>
                  IF YOU DO NOT AGREE TO ALL THESE TERMS, YOU SHALL REFRAIN FROM
                  USING THE SERVICES.
                </b>
              </p>
            </div>
            <div
              className={styles?.contentCol__section}
              id="rightsUseOfService"
            >
              <h4 className={cx("heading4 marginBottom32")}>
                3. Your rights to use the Services
              </h4>
              <p className={cx("marginBottom20")}>
                The Services are protected by copyright, trade secret, and other
                intellectual property laws. You are only granted the right to
                use the Services. No other right of use, alteration,
                exploitation, reproduction, distribution or public communication
                of the Services and/or its Contents other than those expressly
                provided for herein is hereby conferred on you. GATACA reserves
                all other rights in the Services.
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

export default TermsOfUse
