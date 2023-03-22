import type { PageProps } from "gatsby"
import * as React from "react"
import { Link } from "gatsby"
import * as styles from "./index.module.scss"
import cx from "classnames"
import Layout from "../../components/templates/mainLayout/MainLayout"
import { tableOfContent, gatacaURL } from "../../globalData/globalData"
import TableOfContentContainer from "../../components/templates/tableOfContent/tableOfContentComponents/tableOfContentContainer/TableOfContentContainer"
import { LinkModel } from "../../interfaces/interfaces"

export type ITableOfContentProps = {
  navigationObject?: LinkModel
  className?: string
}
const PrivacyPolicy: React.FC<PageProps> = () => {
  const [tableOfContentOpenedID, setTableOfContentOpened] = React.useState("")
  return (
    <Layout>
      <section
        className={`${styles?.privacyPolicy} ${cx("containerMaxWidth")}`}
      >
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
          <h1 className={cx("heading1 marginBottom32")}>Privacy Policy</h1>
          <p className={cx("bodyRegularXL")}>Effective date: August 31, 2021</p>
        </div>
        <div className={styles?.sectionMain}>
          <div className={styles?.sectionMain__dataContentCol}>
            <div className={styles?.contentCol__section}>
              <p className={cx("marginBottom20")}>
                At GATACA, we know that you care about your personal data and
                want you to know how we will process it. With our Privacy Policy
                (“
                <b>Policy</b>”) we aim to explain in a clear and transparent
                manner, how and when we collect, share and protect your personal
                data.
              </p>
              <p className={cx("marginBottom20")}>
                This Policy applies to the Website, Gataca Platform, the Wallet
                and any other products and services (collectively, “
                <b>Services</b>”) provided by GATACA.
              </p>
              <p className={cx("marginBottom20")}>
                Please note that anonymised information or purely statistical
                data used by GATACA will not be considered personal data.
              </p>
            </div>
            <div className={styles?.contentCol__section} id="whoAreWe">
              <h4 className={cx("heading4 marginBottom32")}>1. Who are we?</h4>
              <p>
                Gataca España S.L.U., a Spanish limited liability company, with
                tax identification number B88524525, duly registered in the
                Madrid Commercial Register, Volume 39832, Folio 100, Entry 8,
                Page M707679, and its affiliates (“<b>Gataca</b>” or “<b>we</b>”
                or “<b>our</b>”) will act in the capacity of Data Controller.
              </p>
            </div>
            <div className={styles?.contentCol__section} id="definitions">
              <h4 className={cx("heading4 marginBottom32")}>2. Definitions</h4>
              <ul>
                <li className={cx("marginBottom20")}>
                  <p className={cx("marginBottom20")}>
                    <b>Service/s</b>
                  </p>
                  <p>
                    Service/s means the website{" "}
                    <Link to={gatacaURL}>www.gataca.io</Link> (the “
                    <b>Website</b>”), a backend platform and client applications
                    (collectively, “<b>Gataca Platform</b>”) a mobile
                    application called GATACA Wallet (the “Wallet”) and any
                    other online products and services provided by GATACA.
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p className={cx("marginBottom20")}>
                    <b>Personal Data</b>
                  </p>
                  <p>
                    Personal Data means data about natural persons who can be
                    identified, directly or indirectly, from those data (or from
                    those and other information either in our possession or
                    likely to come into our possession).
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p className={cx("marginBottom20")}>
                    <b>Usage Data</b>
                  </p>
                  <p>
                    Usage Data is data collected automatically either generated
                    by the use of the Service or from the Service infrastructure
                    itself (for example, the duration of a page visit).
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p className={cx("marginBottom20")}>
                    <b>Cookies</b>
                  </p>
                  <p>
                    Cookies are small files that may be stored on your device
                    (computer or mobile device).
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p className={cx("marginBottom20")}>
                    <b>DIDs</b>
                  </p>
                  <p>
                    Decentralized IDentifiers (DIDs) are a new type of
                    identifiers that enable verifiable, decentralized digital
                    identity. The Wallet and the GATACA Platform creates on your
                    behalf one or more DIDs.
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p className={cx("marginBottom20")}>
                    <b>Cryptographic keys</b>
                  </p>
                  <p>
                    The GATACA Wallet creates on your behalf one or more
                    cryptographic key pairs for each DID. Cryptographic key
                    pairs are composed of one public key and one private key.
                    The public keys will be linked to your DIDs and published on
                    a designated blockchain network.
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p className={cx("marginBottom20")}>
                    <b>Secrets</b>
                  </p>
                  <p>
                    Secrets are any private key or security code chosen by you
                    or automatically generated by the Service.
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p className={cx("marginBottom20")}>
                    <b>Data Controller</b>
                  </p>
                  <p>
                    Data Controller means the natural or legal person who
                    (either alone or jointly or in common with other persons)
                    determines the purposes for which and the manner in which
                    any personal information are, or are to be, processed. For
                    the purpose of this Policy, we are a Data Controller of your
                    Personal Data.
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p className={cx("marginBottom20")}>
                    <b>Data Processors (or Service Providers)</b>
                  </p>
                  <p>
                    Data Processor (or Service Provider) means any natural or
                    legal person who processes the data on behalf of us, the
                    Data Controller. We may use the services of various Service
                    Providers in order to process your data more effectively.
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p className={cx("marginBottom20")}>
                    <b>Data Subject (or User)</b>
                  </p>
                  <p>
                    Data Subject is any living individual who is using our
                    Service and is the subject of Personal Data.
                  </p>
                </li>
              </ul>
            </div>
            <div className={styles?.contentCol__section} id="infoCollectionUSe">
              <h4 className={cx("heading4 marginBottom32")}>
                3. Information, Collection and Use
              </h4>
              <p className={cx("marginBottom20")}>
                By reading and accepting this Policy, you are informed of the
                circumstances in which your Personal Data will be processed in
                relation to the Service. Furthermore, in the event that this is
                the necessary legal basis for the processing of your data, your
                free, informed, specific and unambiguous consent will be
                requested so that the Personal Data that you provide through the
                Service or any forms dependent on the Service may be processed
                by GATACA, as well as the data derived from your browsing and
                any other data that you may provide in the future. 
              </p>
              <p className={cx("marginBottom20")}>
                The data requested through the Service are generally mandatory
                (unless otherwise specified in the required field) in order to
                fulfil the purposes for which they are being collected.
              </p>
              <p className={cx("marginBottom20")}>
                Therefore, if your Personal Data is not provided or is not
                provided correctly, the Service cannot be fulfilled, without
                prejudice to the fact that you may freely view the content of
                the Service.
              </p>
              <p className={cx("marginBottom20")}>
                Please read this Policy carefully before using the Service.
              </p>
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

export default PrivacyPolicy
