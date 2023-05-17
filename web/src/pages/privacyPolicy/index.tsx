import type { PageProps } from "gatsby"
import * as React from "react"
import { Link } from "gatsby"
import * as styles from "./index.module.scss"
import cx from "classnames"
import Layout from "../../components/templates/mainLayout/MainLayout"
import TableOfContentContainer from "../../components/templates/tableOfContent/elements/tableOfContentContainer/TableOfContentContainer"
import { LinkModel } from "../../interfaces/interfaces"
import tableOfContent from "../../data/privacyPolicyData"
import { gatacaURL } from "../../data/globalData"
import Table from "./table/Table"

export type ITableOfContentProps = {
  navigationObject?: LinkModel
  className?: string
}
const PrivacyPolicy: React.FC<PageProps> = () => {
  const [tableOfContentOpenedID, setTableOfContentOpened] = React.useState("")
  const [strapiData, setStrapiData] = React.useState<any | undefined>()

  React.useEffect(() => {
    if (!strapiData) {
      getStrapiData()
    }
  }, [])

  const getStrapiData = async () => {
    await fetch(`${process.env.STRAPI_API_URL}/api/privacy-policy?&populate=*`)
      .then(response => response.json())
      .then(jsonResponse => {
        const strapiData = jsonResponse?.data?.attributes
        setStrapiData(strapiData)
      })
  }

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
            <h1 className={cx("heading1 marginBottom32")}>Privacy Policy</h1>
            <p className={cx("bodyRegularXL")}>
              Effective date: August 31, 2021
            </p>
          </div>

          <div className={styles?.sectionMain}>
            <div className={styles?.sectionMain__dataContentCol}>
              <div className={styles?.contentCol__section}>
                <p className={cx("marginBottom20")}>
                  At GATACA, we know that you care about your personal data and
                  want you to know how we will process it. With our Privacy
                  Policy (“
                  <b>Policy</b>”) we aim to explain in a clear and transparent
                  manner, how and when we collect, share and protect your
                  personal data.
                </p>
                <p className={cx("marginBottom20")}>
                  This Policy applies to the Website, Gataca Platform, the
                  Wallet and any other products and services (collectively, “
                  <b>Services</b>”) provided by GATACA.
                </p>
                <p className={cx("marginBottom20")}>
                  Please note that anonymised information or purely statistical
                  data used by GATACA will not be considered personal data.
                </p>
              </div>
              <div className={styles?.contentCol__section} id="whoAreWe__0">
                <h4 className={cx("heading4 marginBottom32")}>
                  1. Who are we?
                </h4>
                <p>
                  Gataca España S.L.U., a Spanish limited liability company,
                  with tax identification number B88524525, duly registered in
                  the Madrid Commercial Register, Volume 39832, Folio 100, Entry
                  8, Page M707679, and its affiliates (“<b>Gataca</b>” or “
                  <b>we</b>” or “<b>our</b>”) will act in the capacity of Data
                  Controller.
                </p>
              </div>
              <div className={styles?.contentCol__section} id="definitions__1">
                <h4 className={cx("heading4 marginBottom32")}>
                  2. Definitions
                </h4>
                <ul>
                  <li className={cx("marginBottom20")}>
                    <p className={cx("marginBottom20")}>
                      <b>Service/s</b>
                    </p>
                    <p>
                      Service/s means the website{" "}
                      <Link to={gatacaURL}>gataca.io</Link> (the “<b>Website</b>
                      ”), a backend platform and client applications
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
                      identified, directly or indirectly, from those data (or
                      from those and other information either in our possession
                      or likely to come into our possession).
                    </p>
                  </li>
                  <li className={cx("marginBottom20")}>
                    <p className={cx("marginBottom20")}>
                      <b>Usage Data</b>
                    </p>
                    <p>
                      Usage Data is data collected automatically either
                      generated by the use of the Service or from the Service
                      infrastructure itself (for example, the duration of a page
                      visit).
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
                      identity. The Wallet and the GATACA Platform creates on
                      your behalf one or more DIDs.
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
                      The public keys will be linked to your DIDs and published
                      on a designated blockchain network.
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
                      the purpose of this Policy, we are a Data Controller of
                      your Personal Data.
                    </p>
                  </li>
                  <li className={cx("marginBottom20")}>
                    <p className={cx("marginBottom20")}>
                      <b>Data Processors (or Service Providers)</b>
                    </p>
                    <p>
                      Data Processor (or Service Provider) means any natural or
                      legal person who processes the data on behalf of us, the
                      Data Controller. We may use the services of various
                      Service Providers in order to process your data more
                      effectively.
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
              <div
                className={styles?.contentCol__section}
                id="infoCollectionUSe__2"
              >
                <h4 className={cx("heading4 marginBottom32")}>
                  3. Information, Collection and Use
                </h4>
                <p className={cx("marginBottom20")}>
                  By reading and accepting this Policy, you are informed of the
                  circumstances in which your Personal Data will be processed in
                  relation to the Service. Furthermore, in the event that this
                  is the necessary legal basis for the processing of your data,
                  your free, informed, specific and unambiguous consent will be
                  requested so that the Personal Data that you provide through
                  the Service or any forms dependent on the Service may be
                  processed by GATACA, as well as the data derived from your
                  browsing and any other data that you may provide in the
                  future.
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
              <div
                className={styles?.contentCol__section}
                id="personalDataAccess__3"
              >
                <h4 className={cx("heading4 marginBottom32")}>
                  4. What personal data does GATACA access about You?
                </h4>
                <p className={cx("marginBottom20")}>
                  We may collect your Personal Data from different sources:
                </p>
                <p className={cx("marginBottom20 neutral1000")}>
                  <b className={cx("neutral1000")}>
                    Data that you provide to us:
                  </b>
                </p>
                <ul>
                  <li className={cx("marginBottom20")}>
                    <p className={cx("marginBottom20")}>
                      <b>Identity data:</b> your first name, last name, date of
                      birth, role, employer and country;
                    </p>
                  </li>
                  <li className={cx("marginBottom20")}>
                    <p className={cx("marginBottom20")}>
                      <b>Contact data:</b> telephone number and e-mail address;
                    </p>
                  </li>
                  <li className={cx("marginBottom20")}>
                    <p className={cx("marginBottom20")}>
                      <b>Profile data:</b> interests, preferences, feedback,
                      forms and survey responses;
                    </p>
                  </li>
                  <li className={cx("marginBottom20")}>
                    <p className={cx("marginBottom20")}>
                      <b>Correspondence data:</b> feedback, problems with the
                      Service, received customer support or otherwise
                      corresponded with us;
                    </p>
                  </li>
                  <li className={cx("marginBottom20")}>
                    <p className={cx("marginBottom20")}>
                      <b>Ordering data:</b> contracts, purchases you make
                      through the Service and billing details;
                    </p>
                  </li>
                  <li className={cx("marginBottom20")}>
                    <p className={cx("marginBottom20")}>
                      <b>Payment data:</b> your credit card number, bank account
                      number and any other payment-related information.
                    </p>
                  </li>
                </ul>

                <p className={cx("marginBottom20 neutral1000")}>
                  <b className={cx("neutral1000")}>
                    Data that we collect automatically:
                  </b>
                </p>
                <ul>
                  <li className={cx("marginBottom20")}>
                    <p className={cx("marginBottom20")}>
                      <b>Technical data:</b> your Decentralized Identifiers
                      (DIDs), public keys and your unique device identifier.
                    </p>
                  </li>
                  <li className={cx("marginBottom20")}>
                    <p className={cx("marginBottom20")}>
                      <b>Browsing data:</b> the Service may automatically detect
                      your IP address, domain name, unique device identifier,
                      device and browser type, operating system, demographic
                      information, the pages of our Sites to you browsed and the
                      time spent on those pages or features, the frequency with
                      which the Sites are used by you, search terms, the links
                      on our Sites that you clicked on and other statistics. We
                      use this information to administer the Service and we
                      analyze this information with the purpose of improving the
                      Service.
                    </p>
                  </li>
                </ul>

                <p className={cx("marginBottom20 neutral1000")}>
                  <b className={cx("neutral1000")}>
                    Information we will never collect:
                  </b>
                </p>
                <p>We will never ask you to share your Secrets.</p>
              </div>
              <div
                className={styles?.contentCol__section}
                id="thirdPartyServices__4"
              >
                <h4 className={cx("heading4 marginBottom32")}>
                  5. What Third Party Services do we use to collect and process
                  your Data?
                </h4>
                <p className={cx("marginBottom20")}>
                  We use cookies to collect Usage Data through the Website. You
                  can control the use of cookies in your browser. For more
                  information, please see our Website’s Cookies Policy.
                </p>
                <p className={cx("marginBottom20")}>
                  We use Google Analytics to collect Usage Data through the
                  Website. You can find more information about Google Analytics’
                  use of your personal data here:{" "}
                  <a href="https://marketingplatform.google.com/about/analytics/terms/us/">
                    https://marketingplatform.google.com/about/analytics/terms/us/
                  </a>
                </p>
                <p className={cx("marginBottom20")}>
                  We use HubSpot, a customer relationship management software,
                  in order to store information you provide to us. You can find
                  more information about Hubspot’s use of your Personal Data
                  here:{" "}
                  <a href="https://legal.hubspot.com/privacy-policy">
                    https://legal.hubspot.com/privacy-policy
                  </a>
                </p>
                <p className={cx("marginBottom20")}>
                  We use Holded, an accounting software, to store identity,
                  contact, ordering and payment data. You can find more
                  information about Fullstory’s use of your personal data here:{" "}
                  <a href="https://www.holded.com/privacy">
                    https://www.holded.com/privacy
                  </a>
                </p>
                <p className={cx("marginBottom20")}>
                  We use Amazon Web Services to store technical data. We only
                  use servers located in Europe. You can find more information
                  about Amazon Web Services use of your personal data here:{" "}
                  <a href="https://aws.amazon.com/privacy">
                    https://aws.amazon.com/privacy
                  </a>
                </p>
              </div>
              <div
                className={styles?.contentCol__section}
                id="processingYourData__5"
              >
                <h4 className={cx("heading4 marginBottom32")}>
                  6. What are the purposes and legal basis for the processing of
                  your data?
                </h4>
                <Table />
              </div>
              <div className={styles?.contentCol__section} id="sharedData__6">
                <h4 className={cx("heading4 marginBottom32")}>
                  7. With which recipients will your data be shared?
                </h4>
                <p className={cx("marginBottom20")}>
                  We do not share the Personal Data that you provide to us with
                  other organizations without your express consent, except as
                  described in this Policy. We disclose Personal Data to third
                  parties under the following circumstances:
                </p>
                <ul>
                  <li className={cx("marginBottom20")}>
                    <p className={cx("marginBottom20")}>
                      <b>Affiliates:</b> We may disclose your Personal Data to
                      our corporate affiliates (i.e. our family of companies
                      that are related by common ownership or control) for
                      purposes consistent with this Policy.
                    </p>
                  </li>
                  <li className={cx("marginBottom20")}>
                    <p className={cx("marginBottom20")}>
                      <b>Business Transfers:</b> We may share Personal Data when
                      we do a business deal, or negotiate a business deal,
                      involving the sale or transfer of all or a part of our
                      business or assets. These deals can include any merger,
                      financing, acquisition, or bankruptcy transaction.
                    </p>
                  </li>
                  <li className={cx("marginBottom20")}>
                    <p className={cx("marginBottom20")}>
                      <b>Compliance with Laws and Law Enforcement:</b>{" "}
                      Protection and Safety. We may share Personal Data for
                      legal, protection, and safety purposes.
                    </p>
                  </li>
                  <li className={cx("marginBottom20")}>
                    <p className={cx("marginBottom20")}>
                      <b>Professional Advisors and Service Providers:</b> We may
                      employ third party companies and individuals to facilitate
                      our Service ("Service Providers"), provide the Service on
                      our behalf, perform Service-related services or assist us
                      in analysing how our Service is used. These third parties
                      have access to your Personal Data only to perform these
                      tasks on our behalf and are obligated not to disclose or
                      use it for any other purpose.
                    </p>
                  </li>
                </ul>
              </div>
              <div
                className={styles?.contentCol__section}
                id="transferofData__7"
              >
                <h4 className={cx("heading4 marginBottom32")}>
                  8. International transfer of Data
                </h4>
                <p className={cx("marginBottom20")}>
                  Personal Data that GATACA processes may be transferred to
                  third parties based in countries outside the European Economic
                  Area (EEA). These transfers will be performed according to the
                  appropriate safeguards to ensure an equivalent degree of
                  protection as set out in the GDPR, which may include the
                  relevant Standard Contractual Clauses.
                </p>
              </div>
              <div
                className={styles?.contentCol__section}
                id="retentionData__8"
              >
                <h4 className={cx("heading4 marginBottom32")}>
                  9. Retention of Data
                </h4>
                <p className={cx("marginBottom20")}>
                  GATACA will retain your Personal Data only for as long as is
                  necessary for the purposes set out in this Policy. We will
                  retain and use your Personal Data to the extent necessary to
                  comply with our legal obligations (for example, if we are
                  required to retain your data to comply with applicable laws),
                  resolve disputes and enforce our legal agreements and
                  policies.
                </p>
                <p className={cx("marginBottom20")}>
                  GATACA will also retain Usage Data for internal analysis
                  purposes. Usage Data is generally retained for a shorter
                  period of time, except when this data is used to strengthen
                  the security or to improve the functionality of our Service,
                  or we are legally obligated to retain this data for longer
                  periods.
                </p>
              </div>
              <div className={styles?.contentCol__section} id="gdpr__9">
                <h4 className={cx("heading4 marginBottom32")}>
                  10. Your Data Protection Rights under the General Data
                  Protection Regulation (GDPR)
                </h4>
                <p className={cx("marginBottom20")}>
                  GATACA aims to take reasonable steps to allow you to correct,
                  amend, delete or limit the use of your Personal Data.
                </p>
                <p className={cx("marginBottom20")}>
                  Under GDPR you have the following data protection rights:
                </p>
                <ul>
                  <li className={cx("marginBottom20")}>
                    <p className={cx("marginBottom20")}>
                      <b></b>The right to access, update or delete the
                      information we have on you. Whenever made possible, you
                      can access, update or request deletion of your Personal
                      Data directly within your account settings section in the
                      corresponding Service. If you are unable to perform these
                      actions yourself, please contact us to assist you.
                    </p>
                  </li>
                  <li className={cx("marginBottom20")}>
                    <p className={cx("marginBottom20")}>
                      <b></b>The right of rectification. You have the right to
                      have your Personal Data rectified if that information is
                      inaccurate or incomplete.
                    </p>
                  </li>
                  <li className={cx("marginBottom20")}>
                    <p className={cx("marginBottom20")}>
                      <b></b>The right to object. You have the right to object
                      to our processing of your Personal Data.
                    </p>
                  </li>
                  <li className={cx("marginBottom20")}>
                    <p className={cx("marginBottom20")}>
                      <b></b>The right of restriction. You have the right to
                      request that we restrict the processing of your Personal
                      Data.
                    </p>
                  </li>
                  <li className={cx("marginBottom20")}>
                    <p className={cx("marginBottom20")}>
                      <b></b>The right to data portability. You have the right
                      to be provided with a copy of the Personal Data we have on
                      you in a structured, machine-readable and commonly used
                      format.
                    </p>
                  </li>
                  <li className={cx("marginBottom20")}>
                    <p className={cx("marginBottom20")}>
                      <b></b>The right to withdraw consent. You also have the
                      right to withdraw your consent at any time where GATACA
                      relied on your consent to process your Personal Data.
                    </p>
                  </li>
                </ul>
              </div>
              <div
                className={styles?.contentCol__section}
                id="changesPrivacyPolicy__10"
              >
                <h4 className={cx("heading4 marginBottom32")}>
                  11. Changes to this Privacy Policy
                </h4>
                <p className={cx("marginBottom20")}>
                  We may update our Policy from time to time.
                </p>
                <p className={cx("marginBottom20")}>
                  We will let you know via email and/or a prominent notice on
                  our Service, prior to the change becoming effective and update
                  the "effective date" at the top of this Policy.
                </p>
                <p className={cx("marginBottom20")}>
                  You are advised to review this Policy periodically for any
                  changes. Changes to this Policy are effective when they are
                  posted on this page.
                </p>
              </div>
              <div className={styles?.contentCol__section} id="contact__11">
                <h4 className={cx("heading4 marginBottom32")}>12. Contact</h4>
                <p className={cx("marginBottom20")}>
                  If you have any questions about this Policy, please contact us
                  by e-mail:{" "}
                  <a href="mailto: gdpr@gataca.io" type="email">
                    gdpr@gataca.io
                  </a>
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
      </>
    </Layout>
  )
}

export default PrivacyPolicy
