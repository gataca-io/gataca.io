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
              Effective date: September 4th, 2024
            </p>
          </div>
          <div className={styles?.sectionMain}>
            <div className={styles?.sectionMain__dataContentCol}>
              <div className={styles?.contentCol__section}>
                <p className={cx("marginBottom20")}>
                  <b>
                    PLEASE READ CAREFULLY THIS PRIVACY POLICY BEFORE USING THE
                    SERVICES.
                  </b>
                </p>
              </div>
              <div className={styles?.contentCol__section} id="introduction__1">
                <h4 className={cx("heading4 marginBottom32")}>
                  1. Introduction
                </h4>
                <p>
                  This is the Privacy Policy (“<b>Policy</b>”) of Gataca Labs
                  S.L.U. (referred to as "<b>Gataca</b>", "<b>we</b>", "
                  <b>our</b>", or "<b>us</b>") in its capacity as Data
                  Controller.
                </p>
                <p>
                  At Gataca we take your privacy very seriously. This Policy
                  explains in a clear and transparent manner, how and when we
                  collect, share and protect your personal data.
                </p>
                <p>
                  This Policy applies to the website, Gataca Studio (including
                  the product extensions Vouch and Enterprise Wallet), Gataca
                  Wallet, and any other products and services (collectively, the
                  “<b>Services</b>”) provided by Gataca and defined in each
                  Terms of Service. Please note that anonymized information or
                  purely statistical data used by Gataca will not be considered
                  personal data.
                </p>
              </div>
              <div className={styles?.contentCol__section} id="definitions__2">
                <h4 className={cx("heading4 marginBottom32")}>
                  2. Definitions
                </h4>
                <ul>
                  <li className={cx("marginBottom20")}>
                    <p className={cx("marginBottom20")}>
                      <b>Client: </b>Any organizations that purchases a software
                      subscription for any of the licensed products within
                      Gataca Studio.
                    </p>
                  </li>
                  <li className={cx("marginBottom20")}>
                    <p className={cx("marginBottom20")}>
                      <b>End User: </b>Any natural person that uses the Gataca
                      Wallet, or Clients’ own customers/users that view and
                      interact with our Services as part of the Client’s
                      contracted Services.
                    </p>
                  </li>
                  <li className={cx("marginBottom20")}>
                    <p className={cx("marginBottom20")}>
                      <b>Data Subjects:</b>Any individual who does not fall
                      under the definitions of Client or End User and who may
                      share information with Gataca. This includes, for example,
                      job applicants or potential clients.
                    </p>
                  </li>
                  <li className={cx("marginBottom20")}>
                    <p className={cx("marginBottom20")}>
                      <b>Authorized User: </b>Any natural person authorized by a
                      Client to configure, manage and administer the Services on
                      Client’s behalf.
                    </p>
                  </li>
                  <li className={cx("marginBottom20")}>
                    <p className={cx("marginBottom20")}>
                      <b>Personal Data: </b>Data about identified or
                      identifiable natural persons according to Art. 4 of the
                      GDPR.
                    </p>
                  </li>
                  <li className={cx("marginBottom20")}>
                    <p className={cx("marginBottom20")}>
                      <b>User Data: </b>End User’s DIDs, Cryptographic Keys,
                      Verifiable Credentials licitly obtained and stored in the
                      Wallet, and backup files associated to the End User, and
                      any other data, included but not limited to End User
                      Personal Data that the End User provides to us or our
                      Clients.
                    </p>
                  </li>
                  <li className={cx("marginBottom20")}>
                    <p className={cx("marginBottom20")}>
                      <b>Client Data: </b>Client’s DIDs, Client’s Cryptographic
                      Keys, Verifiable Credentials licitly obtained from
                      Client’s End Users and stored in Client’s Gataca Studio
                      account, Verifiable Credentials licitly issued by Client
                      or to Client, Client’s backup files, Personal Data related
                      to Client’s representatives or Authorized Users, and any
                      other data, included but not limited to personal data,
                      billing, and legal entity data, that Client provide to us.
                    </p>
                  </li>
                  <li className={cx("marginBottom20")}>
                    <p className={cx("marginBottom20")}>
                      <b>Usage Data: </b>Data collected automatically either
                      generated by the use of the Services or from the Services
                      infrastructure itself (for example, the duration of a page
                      visit).
                    </p>
                  </li>
                  <li className={cx("marginBottom20")}>
                    <p className={cx("marginBottom20")}>
                      <b>DIDs: </b>As per the{" "}
                      <a href="https://www.w3.org/TR/did-core/#dfn-decentralized-identifiers">
                        W3C recommendation
                      </a>
                      , DIDs are globally unique persistent identifiers that do
                      not require a centralized registration authority and are
                      often generated and/or registered cryptographically.
                    </p>
                  </li>
                  <li className={cx("marginBottom20")}>
                    <p className={cx("marginBottom20")}>
                      <b>Verifiable Credentials (VCs): </b>As per the{" "}
                      <a href="https://www.w3.org/TR/vc-data-model/">
                        W3C recommendation
                      </a>
                      , VCs are tamper-proof digital credentials whose
                      authorship can be cryptographically verified.
                    </p>
                  </li>
                  <li className={cx("marginBottom20")}>
                    <p className={cx("marginBottom20")}>
                      <b>Cryptographic Keys: </b> Cryptographic material
                      associated with DIDs and used by the Services to execute
                      signing and encryption or decryption activities on End
                      User’s or Client’s behalf.
                    </p>
                  </li>
                  <li className={cx("marginBottom20")}>
                    <p className={cx("marginBottom20")}>
                      <b>Data Controller: </b>A natural or legal person who
                      (either alone or jointly or in common with other persons)
                      determines the purposes for which and the manner in which
                      any personal information are, or are to be, processed.
                    </p>
                    <p className={cx("marginBottom20")}>
                      For the purpose of this Policy, <b>we</b> are a Data
                      Controller for
                    </p>
                    <ul>
                      <li className={cx("marginBottom20")}>
                        <p className={cx("marginBottom20")}>
                          <b>Client Data</b>, except for User Data shared by End
                          Users with our Clients via our cloud-based Gataca
                          Studio
                        </p>
                      </li>
                      <li className={cx("marginBottom20")}>
                        <p className={cx("marginBottom20")}>
                          <b>User Data</b>, when End Users share it directly
                          with Gataca
                        </p>
                      </li>
                    </ul>
                    <p className={cx("marginBottom20")}>
                      For the purpose of this Policy, <b>our Clients</b> are
                      Data Controllers for
                    </p>
                    <ul>
                      <li className={cx("marginBottom20")}>
                        <p className={cx("marginBottom20")}>
                          <b>User Data</b>, when End Users share them with our
                          Clients via our cloud-based Gataca Studio.
                        </p>
                      </li>
                    </ul>
                  </li>
                  <li className={cx("marginBottom20")}>
                    <p className={cx("marginBottom20")}>
                      <b>Data Processor: </b>Any natural or legal person who
                      processes the data on behalf of a Data Controller.
                    </p>
                    <p className={cx("marginBottom20")}>
                      We are Data Processors for:
                    </p>
                    <ul>
                      <li className={cx("marginBottom20")}>
                        <p className={cx("marginBottom20")}>
                          <b>User Data</b>, when End Users share them with our
                          Clients via our cloud-based Gataca Studio.
                        </p>
                      </li>
                    </ul>
                    <p className={cx("marginBottom20")}>
                      The data processing conditions where Gataca acts as a Data
                      Processor are regulated in the{" "}
                      <a href="https://gataca.io/terms-of-service-studio/">
                        Gataca Studio Terms of Service
                      </a>
                      .
                    </p>
                  </li>
                </ul>
              </div>
              <div
                className={styles?.contentCol__section}
                id="infoCollectionUSe__3"
              >
                <h4 className={cx("heading4 marginBottom32")}>
                  3. Information, Collection and Use
                </h4>
                <p className={cx("marginBottom20")}>
                  By reading and accepting this Policy, you are informed of the
                  circumstances in which Personal Data will be processed in
                  relation to the Services. Furthermore, in the event that this
                  is the necessary legal basis for the processing of your data,
                  your free, informed, specific and unambiguous consent will be
                  requested so that the Personal Data that you provide through
                  the Services or any forms dependent on the Services may be
                  processed by Gataca, as well as the data derived from your use
                  of the Services and any other data that you may provide in the
                  future.
                </p>
              </div>
              <div
                className={styles?.contentCol__section}
                id="personalDataAccess__4"
              >
                <h4 className={cx("heading4 marginBottom32")}>
                  4. What Personal Data does Gataca access about Clients,
                  Authorized Users and End Users?
                </h4>
                <p className={cx("marginBottom20")}>
                  The processing of data is dependent on the products, services
                  or functionalities that are being utilized at any given time.
                  The Personal Data in question is derived from a number of
                  different sources:
                </p>
                <p className={cx("marginBottom20 neutral1000")}>
                  <b className={cx("neutral1000")}>
                    Data that Clients may provide directly to us:
                  </b>
                </p>
                <ul>
                  <li className={cx("marginBottom20")}>
                    <p className={cx("marginBottom20")}>
                      <b>
                        Identity data of Client’s representatives and Authorized
                        Users:{" "}
                      </b>
                      first name, last name, role, and employer;
                    </p>
                  </li>
                  <li className={cx("marginBottom20")}>
                    <p className={cx("marginBottom20")}>
                      <b>Contact data: </b>telephone number, e-mail address, and
                      mailing address;
                    </p>
                  </li>
                  <li className={cx("marginBottom20")}>
                    <p className={cx("marginBottom20")}>
                      <b>Profile data: </b>country, interests, and preferences;
                    </p>
                  </li>
                  <li className={cx("marginBottom20")}>
                    <p className={cx("marginBottom20")}>
                      <b>Correspondence data: </b>feedback, form responses,
                      survey responses, customer support requests, or otherwise
                      corresponded with us;
                    </p>
                  </li>
                  <li className={cx("marginBottom20")}>
                    <p className={cx("marginBottom20")}>
                      <b>Ordering data: </b>contracts, orders, and purchases you
                      make through the Services;
                    </p>
                  </li>
                  <li className={cx("marginBottom20")}>
                    <p className={cx("marginBottom20")}>
                      <b>Payment data: </b>billing details, your credit card
                      number, bank account number and any other payment-related
                      information.
                    </p>
                  </li>
                </ul>
                <p className={cx("marginBottom20 neutral1000")}>
                  <b className={cx("neutral1000")}>
                    Data that End Users may provide directly to us:
                  </b>
                </p>
                <ul>
                  <li className={cx("marginBottom20")}>
                    <p className={cx("marginBottom20")}>
                      <b> Identifying data: </b>portrait images, copies of your
                      identification document (ID card), and physical
                      characteristics of an individual that enable or ensure
                      their unique identification.
                    </p>
                  </li>
                  <li className={cx("marginBottom20")}>
                    <p className={cx("marginBottom20")}>
                      <b>Contact data: </b>telephone number, e-mail address, and
                      mailing address;
                    </p>
                  </li>
                  <li className={cx("marginBottom20")}>
                    <p className={cx("marginBottom20")}>
                      <b>Profile data: </b>country and age threshold
                    </p>
                  </li>
                  <li className={cx("marginBottom20")}>
                    <p className={cx("marginBottom20")}>
                      <b>Correspondence data: </b>feedback, form responses,
                      survey responses, customer support requests, or otherwise
                      corresponded with us.
                    </p>
                  </li>
                </ul>
                <p className={cx("marginBottom20 neutral1000")}>
                  <b className={cx("neutral1000")}>
                    Data that End Users provide to our Clients:
                  </b>
                </p>
                <ul>
                  <li className={cx("marginBottom20")}>
                    <p className={cx("marginBottom20")}>
                      <b>Any User Data </b>that End Users consent to share with
                      our Clients via our cloud-based Gataca Studio.
                    </p>
                  </li>
                </ul>
                <p className={cx("marginBottom20 neutral1000")}>
                  <b className={cx("neutral1000")}>
                    Data that other Data Subjects may provide to us (e.g.
                    prospect employees, representatives of prospect Clients):
                  </b>
                </p>
                <ul>
                  <li className={cx("marginBottom20")}>
                    <p className={cx("marginBottom20")}>
                      <b>Identity data: </b>first name, last name, role and
                      employer;
                    </p>
                  </li>
                  <li className={cx("marginBottom20")}>
                    <p className={cx("marginBottom20")}>
                      <b>Contact data: </b>telephone number, e-mail address, and
                      mailing address;
                    </p>
                  </li>
                  <li className={cx("marginBottom20")}>
                    <p className={cx("marginBottom20")}>
                      <b>Profile data: </b>country, interests, preferences,
                      curriculum vitaes, letters of interest, etc;
                    </p>
                  </li>
                  <li className={cx("marginBottom20")}>
                    <p className={cx("marginBottom20")}>
                      <b>Correspondence data: </b>feedback, form responses,
                      survey responses, or otherwise corresponded with us
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
                      <b>Technical data: </b>Decentralized Identifiers (DIDs),
                      public keys.
                    </p>
                  </li>
                  <li className={cx("marginBottom20")}>
                    <p className={cx("marginBottom20")}>
                      <b>Usage data: </b>the Services may automatically detect
                      IP address, domain name, unique device identifier, device
                      and browser type, operating system, demographic
                      information, the pages of our Services that you browsed
                      and the time spent on those pages or features, the
                      frequency with which the Services are used by you, search
                      terms, the links on our Services that you clicked on and
                      other statistics. We use this information exclusively to
                      administer the Services and we analyze this information
                      with the sole purpose of improving the Service.
                    </p>
                  </li>
                </ul>
              </div>
              <div className={styles?.contentCol__section} id="purposes__5">
                <h4 className={cx("heading4 marginBottom32")}>
                  5. What are the purposes and legal basis for the processing of
                  your data?
                </h4>
                <p className={cx("marginBottom20")}>
                  <b>
                    5.1 To provide you with access to our Services and to
                    perform the activities associated with our Services
                  </b>
                </p>
                <p className={cx("marginBottom20")}>
                  The primary objective of our data processing is to facilitate
                  access to, offer and execute the contracts that govern our
                  Services. The processing of your data is legally based on the
                  execution of the terms that regulate the use of our Services.
                </p>
                <p className={cx("marginBottom20")}>
                  To ensure utmost transparency and accuracy, it is essential to
                  note that the purposes and the categories of data processing
                  may vary depending on the specific Service accessed.
                </p>
                <p className={cx("marginBottom20")}>
                  <h5>5.1.1 Gataca Wallet</h5>
                </p>
                <p className={cx("marginBottom20")}>
                  The ID Wallet allows the storage of digital documents to
                  facilitate identity verification when accessing online
                  services. In this context, Gataca does not have access to
                  Personal Data stored in your ID Wallet, unless:
                </p>
                <ul>
                  <li className={cx("marginBottom20")}>
                    <p className={cx("marginBottom20")}>
                      <b></b>You have proactively and with explicit consent
                      shared with Gataca one or more Verifiable Credentials from
                      your ID Wallet containing Personal Data.
                    </p>
                  </li>
                  <li className={cx("marginBottom20")}>
                    <p className={cx("marginBottom20")}>
                      <b></b>The Verifiable Credentials containing Personal Data
                      and stored in the Wallet have been issued by Gataca via
                      Gataca Attest, in which case the data processing
                      conditions where Gataca acts as a Data Controller are
                      regulated in the{" "}
                      <a href="https://gataca.io/terms-of-service-wallet/">
                        Gataca Wallet Terms of Service{" "}
                      </a>
                      and this Privacy Policy.
                    </p>
                  </li>
                  <li className={cx("marginBottom20")}>
                    <p className={cx("marginBottom20")}>
                      <b></b>The Verifiable Credentials containing Personal Data
                      and stored in the Wallet have been issued directly by our
                      Clients leveraging our cloud-based Gataca Studio service.
                      The data processing conditions where Gataca acts as a Data
                      Processor are regulated in the{" "}
                      <a href="https://gataca.io/terms-of-service-gataca-studio">
                        Gataca Studio Terms of Service
                      </a>
                      .
                    </p>
                  </li>
                </ul>
                <p className={cx("marginBottom20")}>
                  The sole purpose of this processing is to provide you with the
                  Wallet Service. Additionally, we may process your data to
                  improve our services and to respond to inquiries you may have.
                  This includes providing customer support and detecting,
                  preventing, and addressing technical issues related to the
                  Service.
                </p>
                <p className={cx("marginBottom20")}>
                  The processing of your data is legally based on the execution
                  of the Gataca Wallet Terms of Service, as well as to fulfill
                  our legal obligations.
                </p>
                <p className={cx("marginBottom20")}>
                  <h5>5.1.2 Gataca Attest</h5>
                </p>
                <p className={cx("marginBottom20")}>
                  Gataca Attest is a service available via the Gataca Wallet
                  that allows End Users to request the issuance of specific
                  Verifiable Credentials by Gataca to End Users. Gataca acts as
                  Data Controller of the End User’s Personal Data that may be
                  processed to issue Verifiable Credentials.
                </p>
                <p className={cx("marginBottom20")}>
                  When an End User requests Gataca to issue a Verifiable
                  Credential, Gataca will collect Personal Data. In addition, we
                  may process image data (portrait pictures and copies of your
                  ID documents) and biometric data, for the sole purpose of
                  producing the requested Verifiable Credential.
                </p>
                <p className={cx("marginBottom20")}>
                  The processing of your data is based on your consent for the
                  provisioning of the Service requested by you to issue a
                  Verifiable Credential.
                </p>
                <p className={cx("marginBottom20")}>
                  <h5>5.1.3 Gataca Studio</h5>
                </p>
                <p className={cx("marginBottom20")}>
                  Gataca will act as Data Controller of Client Data, except for
                  End User Personal Data. Gataca utilizes this data to manage
                  the legal relationship established under the{" "}
                  <a href="https://gataca.io/terms-of-service-studio/">
                    Gataca Studio Terms of Service
                  </a>
                  . This encompasses the management of administrative, fiscal,
                  and accounting activities, as well as the evaluation and
                  monitoring of provided services. We collect various types of
                  data, including identity, contact, technical, usage, order,
                  and payment data from our Clients, their representatives,
                  employees, or other natural persons acting on behalf of the
                  Client.
                </p>
                <p className={cx("marginBottom20")}>
                  The legal basis for this processing includes the contractual
                  relationship, compliance with legal obligations as stipulated
                  by applicable regulations during the term of the agreement
                  with our Clients, and our legitimate interest in ensuring
                  efficient Service delivery and compliance.
                </p>
                <p className={cx("marginBottom20")}>
                  Furthermore, Gataca Studio may process data in a manner that
                  varies depending on the sub-products in use. For this reason,
                  the specifics of Gataca SSI functionalities, and the product
                  extensions Gataca Vouch and the Enterprise Wallet, are
                  outlined below.
                </p>
                <p className={cx("marginBottom20")}>
                  <h5>5.1.4 Gataca SSI</h5>
                </p>
                <p className={cx("marginBottom20")}>
                  Gataca SSI is the core product within Gataca Studio that helps
                  Clients issue and verify Verifiable Credentials to/from End
                  Users.
                </p>
                <p className={cx("marginBottom20")}>
                  Gataca will acts as a Data Processor when you share Personal
                  Data with our Clients that leverage our Gataca Studio SSI
                  capabilities. In these cases, the conditions under which we
                  process data are governed by the{" "}
                  <a href="https://gataca.io/terms-of-service-studio/">
                    Gataca Studio Terms of Service
                  </a>
                  .
                </p>
                <p className={cx("marginBottom20")}>
                  <h5>5.1.5 Gataca Vouch</h5>
                </p>
                <p className={cx("marginBottom20")}>
                  Gataca Vouch is an add-on product extension within Gataca
                  Studio designed to facilitate secure information exchange
                  between an End User and a Client, with Gataca acting as a
                  trusted intermediary. It uses standard authentication
                  protocols for Clients and allows End Users to provide their
                  information through ID Wallets, to ensure that Personal Data
                  remain private and under their exclusive control.
                </p>
                <p className={cx("marginBottom20")}>
                  Gataca becomes the Data Controller of your Personal Data to
                  the extent that you use Gataca Vouch to request that we
                  transfer your Personal Data to a third party. We will process
                  your Personal Data in accordance with this Privacy Policy.
                </p>
                <p className={cx("marginBottom20")}>
                  When you access a third-party service that uses Vouch for
                  authentication, you will need to consent to the transfer of
                  your required information to the third party. Additionally,
                  you must agree to share the necessary Verifiable Credentials
                  from your Wallet with us, allowing us to send the
                  authentication response to the third party.
                </p>
                <p className={cx("marginBottom20")}>
                  Sometimes, this process requires us to request Verifiable
                  Credentials from your ID Wallet that involves Personal Data.
                  In this process we will clearly inform you about the
                  Verifiable Credentials we need you to share with us in order
                  to deliver a response to the third party, and which specific
                  information will then be transferred to the third party.
                </p>
                <p className={cx("marginBottom20")}>
                  We will only request the minimum set of Verifiable Credentials
                  necessary to provide the response to the third party, and we
                  will only share the minimum information necessary to provide
                  the response.
                </p>
                <p className={cx("marginBottom20")}>
                  After sending the response to the third party, we will delete
                  all Verifiable Credentials received. We will only keep proof
                  of your consent, which includes your DID. We will not store
                  any information about your identity, location, IP address,
                  relationship with the third party you shared information with,
                  type of device used, language, or any other information that
                  can identify you.
                </p>
                <p className={cx("marginBottom20")}>
                  This processing will be based solely on your consent.
                </p>
                <p className={cx("marginBottom20")}>
                  <h5>5.1.6 Enterprise Wallet</h5>
                </p>
                <p className={cx("marginBottom20")}>
                  The Enterprise Wallet is an add-on product extension within
                  Gataca Studio that helps Clients store and manage Verifiable
                  Credentials associated to the legal entity.
                </p>
                <p className={cx("marginBottom20")}>
                  Gataca will acts as a Data Processor to the extent such
                  Verifiable Credentials include Personal Data of Client
                  representatives, employees, or agents. In these cases, the
                  conditions under which we process data are governed by the
                  <a href="https://gataca.io/terms-of-service-studio/">
                    Gataca Studio Terms of Service
                  </a>
                  .
                </p>
                <p className={cx("marginBottom20")}>
                  <b>5.2 To respond to any inquiry and customer support</b>
                </p>
                <p className={cx("marginBottom20")}>
                  Gataca may process your data to address inquiries submitted
                  through our customer service channels, such as the ‘Contact
                  Us’, and similar forms on our website, and to provide support
                  while detecting, preventing, and addressing technical issues
                  related to our Services. In these instances, we will only
                  process the personal data that is strictly necessary to manage
                  or resolve your inquiry or request. This may include
                  collecting identification, contact, profile, technical and
                  usage data and correspondence data.
                </p>
                <p className={cx("marginBottom20")}>
                  For handling these inquiries or requests, we consider that we
                  have a legitimate interest in responding to the submissions
                  made to us. For questions or issues related to our Services
                  that you have purchased, the processing will be based on the
                  execution of the applicable Terms of Service. Lastly, if your
                  inquiry relates to your data protection rights (further
                  information can be found in section 9 of this Privacy Policy),
                  we will process your data in compliance with our legal
                  obligations.
                </p>
                <p className={cx("marginBottom20")}>
                  <b>5.3 To improve our Services</b>
                </p>
                <p className={cx("marginBottom20")}>
                  Gataca will use technical and usage data to enhance the
                  services we provide and to identify areas for improvement. The
                  legal basis for this processing is our legitimate interest in
                  improving user experience and delivering higher quality
                  services to you.
                </p>
                <p className={cx("marginBottom20")}>
                  <b>
                    5.4 To provide you with news, special offers and general
                    information
                  </b>
                </p>
                <p className={cx("marginBottom20")}>
                  We will process data to provide you with updates, special
                  offers, and general information about other goods, services,
                  and events similar to those you have already purchased.
                </p>
                <p className={cx("marginBottom20")}>
                  Our legal basis for this is our legitimate interest in
                  marketing our products and services to our Clients.
                </p>
                <p className={cx("marginBottom20")}>
                  This applies unless you have opted out of receiving such
                  information, or we are specifically relying on your consent.
                </p>
                <p className={cx("marginBottom20")}>
                  <b>
                    5.5 In order to process your application for possible
                    employment vacancies
                  </b>
                </p>
                <p className={cx("marginBottom20")}>
                  Gataca may process your personal data through applications
                  received in the Careers section of our website, as well as any
                  applications received through offers available on specialized
                  portals such as LinkedIn. In order to process your
                  application, Gataca will process the information you provide
                  as the Data Controller.
                </p>
                <p className={cx("marginBottom20")}>
                  The purpose of this processing is to include your information
                  in Gataca's database of candidates for future selection
                  processes in which your profile may be a suitable fit. The
                  processing is carried out on the basis of the company's
                  intention to establish an employment relationship. In the
                  event of your being hired, the legitimate basis for processing
                  your data will become the performance of a contract to which
                  you, as a data subject, are a party.
                </p>
                <p className={cx("marginBottom20")}>
                  The data collected during the recruitment process will remain
                  active in our candidate database for a period of two years.
                  Once the aforementioned period has elapsed and the candidate
                  wishes to remain engaged in the selection processes of the
                  manager, we kindly request that you submit an updated CV.
                </p>
              </div>
              <div className={styles?.contentCol__section} id="recipients__6">
                <h4 className={cx("heading4 marginBottom32")}>
                  6. With which recipients will your data be shared?
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
                      <b>Affiliates: </b>We may disclose your Personal Data to
                      our corporate affiliates (i.e. our family of companies
                      that are related by common ownership or control) for
                      purposes consistent with this Policy.
                    </p>
                  </li>
                  <li className={cx("marginBottom20")}>
                    <p className={cx("marginBottom20")}>
                      <b>Business Transfers: </b>We may share Personal Data when
                      we do a business deal, or negotiate a business deal,
                      involving the sale or transfer of all or a part of our
                      business or assets. These deals can include any merger,
                      financing, acquisition, or bankruptcy transaction.
                    </p>
                  </li>
                  <li className={cx("marginBottom20")}>
                    <p className={cx("marginBottom20")}>
                      <b>Compliance with Laws and Law Enforcement: </b>
                      Protection and Safety. We may share Personal Data for
                      legal, protection, and safety purposes.
                    </p>
                  </li>
                  <li className={cx("marginBottom20")}>
                    <p className={cx("marginBottom20")}>
                      <b>Third Parties: </b> We may share your Personal Data
                      with your explicit consent when you use some of our
                      Services, such as Gataca Vouch.
                    </p>
                  </li>
                </ul>
              </div>
              <div
                className={styles?.contentCol__section}
                id="transferofData__7"
              >
                <h4 className={cx("heading4 marginBottom32")}>
                  7. International transfer of Data
                </h4>
                <p className={cx("marginBottom20")}>
                  User Data, whereas provided directly to us or to our Clients
                  via Gataca Studio, is stored in servers located in the
                  European Economic Area (EEA).
                </p>
                <p className={cx("marginBottom20")}>
                  Any other Personal Data that Gataca processes may be
                  transferred to third parties based in countries outside the
                  European Economic Area (EEA). These transfers will be
                  performed according to the appropriate safeguards to ensure an
                  equivalent degree of protection as set out in the GDPR.
                </p>
              </div>
              <div
                className={styles?.contentCol__section}
                id="retentionData__8"
              >
                <h4 className={cx("heading4 marginBottom32")}>
                  8. Retention of Data
                </h4>
                <p className={cx("marginBottom20")}>
                  Gataca will retain Personal Data only to the extent necessary
                  to comply with our purposes, including our legal obligations
                  (for example, if we are required to retain your data to comply
                  with applicable laws), resolve disputes and enforce our legal
                  agreements and policies.
                </p>
                <p className={cx("marginBottom20")}>
                  Gataca will also retain anonymized Usage Data for internal
                  analysis purposes.
                </p>
              </div>
              <div className={styles?.contentCol__section} id="gdpr__9">
                <h4 className={cx("heading4 marginBottom32")}>
                  9. Your Data Protection Rights
                </h4>
                <p className={cx("marginBottom20")}>
                  Under the applicable data protection regulations you have the
                  following data protection rights:
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
                      right to withdraw your consent at any time where Gataca
                      relied on your consent to process your Personal Data.
                    </p>
                  </li>
                </ul>
                <p className={cx("marginBottom20")}>
                  To exercise your rights, you may (i) log in to your User
                  profile or Settings section on the Services; or (ii) send an
                  email to{" "}
                  <a href="mailto: dpo@gataca.io" type="email">
                    dpo@gataca.io
                  </a>
                  .
                </p>
                <p className={cx("marginBottom20")}>
                  You have the right to file a complaint before a Data
                  Protection Authority about our collection and use of your
                  Personal Data. For more information, please contact your local
                  data protection authority.
                </p>
              </div>
              <div
                className={styles?.contentCol__section}
                id="changesPrivacyPolicy__10"
              >
                <h4 className={cx("heading4 marginBottom32")}>
                  10. Changes to this Privacy Policy
                </h4>
                <p className={cx("marginBottom20")}>
                  We may update our Policy from time to time.
                </p>
                <p className={cx("marginBottom20")}>
                  We will let you know via email and/or a prominent notice on
                  our Services and update the "effective date" at the top of
                  this Policy.
                </p>
                <p className={cx("marginBottom20")}>
                  You are advised to review this Policy periodically for any
                  changes. Changes to this Policy are effective when they are
                  posted on this page.
                </p>
              </div>
              <div className={styles?.contentCol__section} id="contact__11">
                <h4 className={cx("heading4 marginBottom32")}>11. Contact</h4>
                <p className={cx("marginBottom20")}>
                  If you have any questions about this Policy, please contact
                  our Data Protection Officer at:{" "}
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
      </>
    </Layout>
  )
}

export default PrivacyPolicy
