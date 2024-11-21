import { Link, PageProps } from "gatsby"
import * as React from "react"
import * as styles from "./index.module.scss"
import cx from "classnames"
import Layout from "../../components/templates/mainLayout/MainLayout"
import tableOfContent from "../../data/termsOfServiceStudio"
import { LinkModel } from "../../interfaces/interfaces"
import TableOfContentContainer from "../../components/templates/tableOfContent/elements/tableOfContentContainer/TableOfContentContainer"
import {
  cookiePolicyURL,
  gatacaURL,
  privacyPolicyURL,
  termOfServiceURL,
  pricingURL,
} from "../../data/globalData"
import Table from "./table/Table"

export type ITableOfContentProps = {
  navigationObject?: LinkModel
  className?: string
}
const TermsOfServiceStudio: React.FC<PageProps> = () => {
  const [tableOfContentOpenedID, setTableOfContentOpened] = React.useState("")
  const [strapiData, setStrapiData] = React.useState<any | undefined>()

  React.useEffect(() => {
    if (!strapiData) {
      getStrapiData()
    }
  }, [])

  const getStrapiData = async () => {
    await fetch(
      `${process.env.STRAPI_API_URL}/api/terms-of-service-studio?&populate=*`
    )
      .then(response => response.json())
      .then(jsonResponse => {
        const strapiData = jsonResponse?.data?.attributes
        setStrapiData(strapiData)
      })
  }

  return (
    <Layout seoData={strapiData?.seo}>
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
          <h1 className={cx("heading1 marginBottom32")}>
            Gataca Studio | Terms of service
          </h1>
          <p className={cx("bodyRegularXL")}>
            Effective date: September 4th, 2024
          </p>
        </div>
        <div className={styles?.sectionMain}>
          <div className={styles?.sectionMain__dataContentCol}>
            <div className={styles?.contentCol__section} id="introduction__1">
              <h4 className={cx("heading4 marginBottom32")}>1. Introduction</h4>
              <p className={cx("marginBottom20")}>
                PLEASE READ THESE TERMS CAREFULLY BEFORE STARTING TO USE GATACA
                STUDIO
              </p>
              <p className={cx("marginBottom20")}>
                Gataca Labs S.L. and its affiliates (referred to as “
                <b>Gataca</b>” or “<b>we</b>”, “<b>our</b>” or “<b>us</b>”) is a
                cybersecurity company incorporated under the laws of Spain that
                provides decentralized digital identity technology through our
                software applications, including but not limited to our
                cloud-based identity platform that facilitates the issuance and
                verification of identity credentials (“<b>Gataca Studio</b>”),
                as well as the various product extensions available through
                Gataca Studio for enhanced functionalities.
              </p>
              <p className={cx("marginBottom20")}>
                The terms “<b>you</b>”, “<b>your</b>”, and “<b>Client</b>” refer
                to you either as a legal entity or as the legal representative
                of the entity.
              </p>
              <p className={cx("marginBottom20")}>
                These specific Terms of Service (“<b>Terms</b>” or the “
                <b>Agreement</b>”) is a legal agreement between your
                organization and Gataca for the use of Gataca Studio, herein
                referred to as the “<b>Service</b>”.
              </p>
              <p className={cx("marginBottom20")}>
                The Service includes graphics, photographs, artwork, images,
                screen shots, text, digital files, trademarks, logos, product
                names, slogans, other materials, and third-party content (the “
                <b>Content</b>”) provided by Gataca or its licensors.
              </p>
              <p className={cx("marginBottom20")}>
                These Terms include by reference the following additional terms
                and policies which shall constitute a part of this Agreement:
              </p>
              <ul>
                <li className={cx("marginBottom20")}>
                  <p>
                    <b></b>Gataca's Legal Notice and Privacy Policy.
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p>
                    <b></b>Any purchase order provided by Gataca for
                    subscription to the Service and entered into via a signed
                    order form (the “<b>Order</b>”).
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p>
                    <b></b>Additional terms and conditions, which may include
                    those from third parties.
                  </p>
                </li>
              </ul>
            </div>
            <div
              className={styles?.contentCol__section}
              id="acceptanceOfTerms__2"
            >
              <h4 className={cx("heading4 marginBottom32")}>
                2. Acceptance of Terms
              </h4>
              <p className={cx("marginBottom20")}>
                YOU MUST REPRESENT A LEGAL ENTITY TO USE OUR SERVICE. YOU
                REPRESENT THAT YOU HAVE THE AUTHORITY TO BIND YOUR ORGANIZATION
                TO THIS AGREEMENT.
              </p>
              <p className={cx("marginBottom20")}>
                Subject to the foregoing and (i) by clicking “I Agree,”
                indicating acceptance electronically; (ii) by signing an Order;
                or (iii) by accessing or using our Service; you agree to a
                complete and unreserved acceptance of all the terms and
                conditions included in these Terms.
              </p>
              <p className={cx("marginBottom20")}>
                These Terms supersede all other prior agreements, understandings
                or promises made between you and Gataca orally or in writing in
                relation to the subject matter of these Terms.
              </p>
              <p className={cx("marginBottom20")}>
                These Terms shall always take precedence over the general
                contracting and/or any other conditions provided by you and/or
                used in the activity of your organization.
              </p>
              <p className={cx("marginBottom20")}>
                Specific terms specified in Orders and agreed upon by Gataca
                shall prevail over conflicting provisions with these Terms.
              </p>
            </div>
            <div
              className={styles?.contentCol__section}
              id="rightsUseOfService__3"
            >
              <h4 className={cx("heading4 marginBottom32")}>
                3. Subscription and access rights
              </h4>
              <p className={cx("marginBottom20")}>
                “<b>Subscription</b>” means a non-exclusive, non-transferable,
                non-sublicensable, revocable access and use the Service. No
                other right of use, alteration, exploitation, reproduction,
                distribution or public communication of the Service and/or its
                Content other than those expressly provided for herein is hereby
                conferred on you. Gataca reserves all other rights in the
                Service.
              </p>
              <p className={cx("marginBottom20")}>
                “<b>Subscription Tier</b>” defines the level of access to the
                Service’s features and functionalities.
              </p>
              <p className={cx("marginBottom20")}>
                “<b>Subscription Term</b>” means the initial subscription term
                and if applicable any renewal subscription term.
              </p>
              <p className={cx("marginBottom20")}>
                You may contract a Subscription for a selected Subscription Tier
                and a Subscription Term directly on our Website or agreed via an
                Order. You are only granted the right to use the Service
                according to the specific conditions of your Subscription Tier
                and Term.
              </p>
              <p className={cx("marginBottom20")}>
                The Subscription and these Terms will automatically renew upon
                the initial Subscription Term unless otherwise specified in an
                Order, or notified by you via the Service or by sending an email
                to{" "}
                <a href="mailto: legal@gataca.io" type="email">
                  legal@gataca.io
                </a>
                .
              </p>
            </div>
            <div className={styles?.contentCol__section} id="restrictions__4">
              <h4 className={cx("heading4 marginBottom32")}>
                4. Restrictions and responsibilities
              </h4>
              <p className={cx("marginBottom20")}>
                <b>Restrictions</b>. You shall not, directly or indirectly:
              </p>
              <ul>
                <li className={cx("marginBottom20")}>
                  <p>
                    <b></b>attempt to discover the source code, object code or
                    underlying structure, ideas, know-how or algorithms relevant
                    to the Service or any software, documentation or data
                    related to the Service;
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p>
                    <b></b>attempt to reverse-engineer the Service in order to
                    find limitations or vulnerabilities;
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p>
                    <b></b>attempt to gain unauthorized access to this Service
                    or to any server, computer or database related to the
                    Service.;
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p>
                    <b></b>launch or facilitate, whether intentionally or
                    unintentionally, any activity that adversely impacts the
                    availability, reliability, or stability of the Service;
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p>
                    <b></b>modify, translate, or create derivative works based
                    on the Service or its Content;
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p>
                    <b></b>interfere with any license key mechanism in the
                    Service or otherwise circumvent mechanisms in the Service
                    intended to limit the authorized use;
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p>
                    <b></b>use the Services for competitive analysis or to build
                    competitive products;
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p>
                    <b></b>rent, lease, distribute, sell, sublicense, transfer,
                    or provide access to the Services to a third party;
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p>
                    <b></b>remove any proprietary notices or labels;
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p>
                    <b></b>use the Service for purposes other than those
                    intended or otherwise for the benefit of a third party;
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p>
                    <b></b>create false identities, attestations, or other
                    attempt to use the Website for nefarious purposes;
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p>
                    <b></b>attempt to solicit information from individuals
                    without their explicit consent or under false pretenses;
                  </p>
                </li>
              </ul>
              <p className={cx("marginBottom20")}>
                Failure to comply with this clause may lead to the commission of
                offenses punishable by the applicable regulations. We will
                report any such breach to the relevant authorities and will
                cooperate with them to discover the identity of the attacker.
              </p>
              <p className={cx("marginBottom20")}>
                <b>Responsabilities</b>. You will use the Service only in
                compliance with these Terms, then in effect and all applicable
                laws and regulations. You shall also be responsible for
                maintaining the security of your account, passwords (including
                but not limited to Authorized User passwords), API keys, and
                files, and for all uses of your account.
              </p>
            </div>
            <div
              className={styles?.contentCol__section}
              id="authorizedUsers__5"
            >
              <h4 className={cx("heading4 marginBottom32")}>
                5. Clients, Authorized Users and End Users
              </h4>
              <h5 className={cx("heading4 marginBottom32")}>5.1 Clients</h5>
              <p className={cx("marginBottom20")}>
                You are granted the role of “Client” once you accept these Terms
                to access the Service, including by means of a free or trial
                Subscription Tier.
              </p>
              <p className={cx("marginBottom20")}>
                Clients must complete a client registration form with Gataca in
                order to use our Service, where information of the legal entity
                and contact information will be requested. The registration
                information must be accurate, current and complete. During the
                Subscription Term, Clients shall keep the organization data
                updated so that Gataca may send notices, statements and other
                information for the purpose of providing the Service.
              </p>
              <p className={cx("marginBottom20")}>
                In the event that the information does not conform to reality or
                there are suspicions of untruthful, inaccurate or incomplete
                information, Gataca reserves the right to suspend this
                Agreement. You will be offered the opportunity to clarify the
                issues raised by Gataca to confirm or correct the information
                provided within 3 calendar days. If you do not respond to
                Gataca's request, Gataca reserves the right to terminate this
                Agreement.
              </p>
              <h5 className={cx("heading4 marginBottom32")}>
                5.2 Authorized Users
              </h5>
              <p className={cx("marginBottom20")}>
                Clients may designate “<b>Authorized Users</b>” to configure,
                manage and administer the Service. The Client is responsible for
                the compliance of all Authorized Users with these Terms,
                including what the Authorized Users do with the Client Data (as
                defined in clause 6), and for all expenses incurred by the
                Authorized Users. Authorized Users must belong to the Client's
                organization.
              </p>
              <p className={cx("marginBottom20")}>
                You shall not allow each single Authorized User account to be
                used by more than one individual Authorized User unless it has
                been reassigned in its entirety to another Authorized User, in
                which case the prior Authorized User shall no longer have any
                right to access or use the Service.
              </p>
              <h5 className={cx("heading4 marginBottom32")}>5.3 End Users</h5>
              <p className={cx("marginBottom20")}>
                Taking into account the object and purpose of the Service (i.e.
                issue and verify identity credentials), Clients may integrate
                the Service with their own systems. Client’s own customers/users
                that view and interact with the Service via such systems are
                considered “<b>End Users</b>”.
              </p>
              <p className={cx("marginBottom20")}>
                Subject to compliance with these Terms, Clients may grant End
                Users limited rights to interact with the Service according to
                the purpose of the Service.
              </p>
              <p className={cx("marginBottom20")}>
                Clients may not allow End Users administrator, configuration or
                similar use of our Service.
              </p>
              <p className={cx("marginBottom20")}>
                Clients may not charge End Users a specific fee for the use of
                our Service, but may charge a general fee for its own offerings.
              </p>
              <p className={cx("marginBottom20")}>
                Clients are solely responsible for its own products, support
                offerings and relationships with these End Users. Gataca has no
                direct or indirect warranty, indemnification or other liability
                or obligation of any kind to these End Users.
              </p>
            </div>
            <div className={styles?.contentCol__section} id="clientData__6">
              <h4 className={cx("heading4 marginBottom32")}>6. Client Data</h4>
              <p className={cx("marginBottom20")}>6.1 DIDs</p>
              <p className={cx("marginBottom20")}>
                When setting up an account with Gataca, you acknowledge and
                consent to the creation of decentralized identifiers (“DIDs”) on
                your organization’s behalf.
              </p>
              <p className={cx("marginBottom20")}>
                Gataca may publish DIDs and associated public cryptographic keys
                on one of the supported blockchain networks to serve as onchain
                identifiers. You understand and accept that information on
                blockchain networks cannot be deleted due to the immutability
                property of such technologies.
              </p>
              <p className={cx("marginBottom20")}>6.2 Cryptographic keys</p>
              <p className={cx("marginBottom20")}>
                Gataca Studio creates on your behalf one or more cryptographic
                key pairs for each DID. Cryptographic key pairs are composed of
                one or more public key and associated private keys. The public
                keys will be linked to your DIDs and published on a designated
                blockchain network.
              </p>
              <p className={cx("marginBottom20")}>
                The private keys will be used by Gataca Studio to execute
                signing and encryption or decryption activities within the
                Service. You agree to keep your private keys confidential and to
                not share them with anyone else.
              </p>
              <p className={cx("marginBottom20")}>6.3 Verifiable Credentials</p>
              <p className={cx("marginBottom20")}>
                With Gataca Studio you can issue or verify personal information
                to/from End Users in electronic format, following the{" "}
                <a href="https://www.w3.org/TR/vc-data-model/" target="_blank">
                  Verifiable Credentials data model
                </a>{" "}
                (“<b>Verifiable Credentials</b>”). Issued and verified
                Verifiable Credentials are stored in your Gataca Studio account.
              </p>
              <p className={cx("marginBottom20")}>
                Gataca makes no representation or warranty regarding the
                veracity or accuracy of Credentials issued by you, by End Users
                or by other third parties.
              </p>
              <p className={cx("marginBottom20")}>
                You are responsible for complying with the terms and conditions
                that these third parties may impose on their issued Verifiable
                Credentials and you agree not hold Gataca liable for any
                infringement of such terms and conditions.
              </p>
              <p className={cx("marginBottom20")}>6.4 Client Data</p>
              <p className={cx("marginBottom20")}>
                Your DIDs, your cryptographic key pairs, Verifiable Credentials
                licitly obtained from End Users and stored in your Gataca Studio
                account, Verifiable Credentials licitly issued by you or to you,
                your backup files, and any other data, included but not limited
                to legal representatives and Authorized User’s Personal Data,
                billing, and legal entity data, that you provide to us are
                referred to here as “<b>Client Data</b>”. Where Client Data
                includes Personal Data, clause 11 below (Data Protection) of
                these Terms will apply.
              </p>
              <p className={cx("marginBottom20")}>
                YOU ACKNOWLEDGE AND ACCEPT THAT YOU ARE SOLELY RESPONSIBLE FOR
                THE LEGALITY, RELIABILITY, INTEGRITY, ACCURACY AND QUALITY OF
                YOUR CLIENT DATA.
              </p>
              <p className={cx("marginBottom20")}>
                You own your Client Data. You grant Gataca, its Affiliates and
                applicable contractors a worldwide, limited-term license to
                host, copy, transmit and display Client Data, as reasonably
                necessary for Gataca to provide you with the Service in
                accordance with these Terms. Subject to the limited licenses
                granted herein, Gataca acquires no right, title or interest in
                any Client Data.
              </p>
              <p className={cx("marginBottom20")}>
                You have the ability to delete all your Client Data from your
                Gataca Studio account via the Service interface. Client Data
                shall be deleted upon the termination of the Subscription Term
                on request and in accordance with any applicable data retention
                requirements.
              </p>
            </div>
            <div className={styles?.contentCol__section} id="paymentTerms__7">
              <h4 className={cx("heading4 marginBottom32")}>
                7. Payment terms
              </h4>
              <p className={cx("marginBottom20")}>
                You agree to pay fees in accordance with the rates listed in our
                Website, accessible via the Gataca Studio interface, or set
                forth in an Order. All amounts are non-refundable,
                non-cancellable, and non-creditable. Payment is required in
                advance and is a condition for the activation of the Service,
                unless otherwise stated in an Order.
              </p>
              <p className={cx("marginBottom20")}>
                If we agree that you pay in installments and fail to do so,
                Gataca may suspend or terminate the service without liability,
                without prejudice to our right to claim the outstanding amounts.
                Payment must be made within 15 days of the due date.
              </p>
              <p className={cx("marginBottom20")}>
                Gataca reserves the right to increase Service fees listed at our
                Website, on Gataca Studio interface, or upon Order renewal.
                Gataca will notify you at least 30 days prior to the date the
                change goes into effect as provided in clause 13.
              </p>
              <p className={cx("marginBottom20")}>
                You shall be responsible for and shall pay all taxes imposed on
                or with respect to your Subscription.
              </p>
              <p className={cx("marginBottom20")}>
                You are responsible for covering any extra costs, fines, or
                penalties that we may face from a government or regulatory body
                due to your violation of these Terms while using the Service.{" "}
              </p>
            </div>
            <div className={styles?.contentCol__section} id="serviceSupport__8">
              <h4 className={cx("heading4 marginBottom32")}>
                8. Service Support
              </h4>
              <p className={cx("marginBottom20")}>
                <b>8.1 Support services</b>
              </p>
              <p className={cx("marginBottom20")}>
                Gataca offers service support via a support system accessible
                through Gataca Studio Interface (“Support System”). Authorized
                Users may raise the following support requests via our Support
                System, or any other channel made available by Gataca to you:
              </p>
              <ul>
                <li className={cx("marginBottom20")}>
                  <p>
                    <b>Incidences.</b>Request for resolution of system errors or
                    malfunctions
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p>
                    <b>Technical doubts.</b>Request for IT help on topics
                    related to the Service
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p>
                    <b>Service requests.</b>Request for configuration changes,
                    new feature suggestions, or any other modification to the
                    Service or to the Client’s account
                  </p>
                </li>
              </ul>
              <p className={cx("marginBottom20")}>
                A Gataca technical team member will be assigned to each ticket,
                who will provide a response to your inquiry. In case of
                Technical Incidences, the assigned team member will classify the
                incidence based on the following severity levels.
              </p>
              <ul>
                <li className={cx("marginBottom20")}>
                  <p>
                    Level 1 (L1) <b>Application down:</b> Production application
                    down or major malfunction affecting business and high number
                    of users
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p>
                    Level 2 (L2) <b>Serious Degradation:</b> Serious degradation
                    of application performance or functionality
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p>
                    Level 3 (L3) <b>Moderate Impact:</b> Application issue that
                    has a moderate impact to the business
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p>
                    Level 4 (L4) <b>Low Impact:</b> Issue with limited business
                    impact
                  </p>
                </li>
              </ul>
              <p className={cx("marginBottom20")}>
                <b>8.2 Standard Support</b>
              </p>
              <p className={cx("marginBottom20")}>
                Unless otherwise stated in an Order, you Subscription Tier
                includes standard service support (“<b>Standard Support</b>”).
              </p>
              <p className={cx("marginBottom20")}>
                Standard Support is available via our Support System, from
                Monday to Friday from 9am to 5pm as per local time in Spain
                excluding public holidays.
              </p>
              <p className={cx("marginBottom20")}>
                <b>8.3 Premium Support</b>
              </p>
              <p className={cx("marginBottom20")}>
                Gataca offers premium support (“<b>Premium Support</b>”) for
                clients that need guaranteed support delivery times.
              </p>
              <p className={cx("marginBottom20")}>
                Premium Support can be contracted by means of an Order and
                includes:
              </p>
              <ul>
                <li className={cx("marginBottom20")}>
                  <p>A designated Client Success Team</p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p>Service Level Agreements</p>
                </li>
              </ul>
              <p className={cx("marginBottom20")}>
                Gataca will designate an individual to serve as your Solutions
                Architect to guide you during the initial configuration phase,
                and a Client Success Manager that will act as single point of
                contact througout the Term (the “Client Success Team”). We may
                designate a new Client Success Team, upon notice to you. You
                will submit all requests through the Authorized Users, and the
                Client Success Team will rely and act upon each Authorized
                Users’ instructions.
              </p>
              <p className={cx("marginBottom20")}>
                Premium Support guarantee the following service levels:
              </p>
              <p className={cx("marginBottom20")}>
                ******************TABLE*******************************
              </p>
              <p className={cx("marginBottom20")}>
                <b>Initial Response Time</b> means the amount of time taken for
                an agent to provide an initial response to a Client support
                request.
              </p>
              <p className={cx("marginBottom20")}>
                <b>Resolution Time</b> means the amount of time between when a
                Client first creates the support request and when such ticket is
                marked as “resolved”.
              </p>
              <p className={cx("marginBottom20")}>
                <b>Availability</b> means the percentage of time in a given
                monthly subscription period that the Service is available and
                accessible for use.
              </p>
              <p className={cx("marginBottom20")}>
                Service levels will be measured averaging the time across all
                the requests in a monthly subscription period.
              </p>
              <p className={cx("marginBottom20")}>
                We agree to credit you an amount equal to 5% of total monthly
                service fees (or the equivalent monthly fee for annual
                subscriptions) if performance metrics for incidence management
                or service availability are not met on a given month.
              </p>
              <p className={cx("marginBottom20")}>
                Premium Support is available via our Support System in two
                modalities:
              </p>
              <ul>
                <li className={cx("marginBottom20")}>
                  <p>
                    <b></b>8x5 Premium Support: support services will be
                    available Monday to Friday from 9am to 5pm as per local time
                    in Spain excluding public holidays.
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p>
                    <b></b>24x7 Premium Support: support services will be
                    available twenty-four hours a day, seven days a week,
                    including weekends and public holidays.
                  </p>
                </li>
              </ul>
            </div>
            <div
              className={styles?.contentCol__section}
              id="securityRisksAndDowntown__9"
            >
              <h4 className={cx("heading4 marginBottom32")}>
                9. Security Risks and Downtime
              </h4>
              <p className={cx("marginBottom20")}>
                <b>9.1 Security</b>
              </p>
              <p className={cx("marginBottom20")}>
                You acknowledge that cryptography and blockchain technologies
                are continuously evolving fields, which may pose risks to the
                Service and its Contents due to advancements in decryption,
                quantum computing, or security vulnerabilities.
              </p>
              <p className={cx("marginBottom20")}>
                Gataca takes security very seriously. Gataca will strive for
                maximum levels of protection for the Service, by continuously
                updating the code underlying the Service and incorporating new
                security measures that account for the risks of such technical
                advances.
              </p>
              <p className={cx("marginBottom20")}>
                While Gataca is committed to implementing robust security
                measures and regularly updating the Service's code to mitigate
                these risks, we cannot guarantee absolute security. By using the
                Service or accessing its Contents, you accept these inherent
                risks.
              </p>
              <p className={cx("marginBottom20")}>
                You agree to keep your device's operating system and other
                computing systems of Authorized Users up to date. Gataca is not
                liable for damages resulting from viruses or unauthorized use of
                your computer systems in connection with the Service and its
                Contents. You also agree to promptly report any security
                breaches or unauthorized use of the Service to Gataca.
              </p>
              <p className={cx("marginBottom20")}>
                <b>9.2 Downtime</b>
              </p>
              <p className={cx("marginBottom20")}>
                We strive to provide uninterrupted access to our service. There
                may be occasions where the Service may be unavailable due to
                scheduled maintenance, upgrades, or circumstances beyond our
                control such as internet outages, force majeure events, or
                hardware failures. We will make reasonable efforts to minimize
                any downtime and to promptly restore the Service to full
                functionality.
              </p>
              <p className={cx("marginBottom20")}>
                In the event of planned maintenance or upgrades, we will
                endeavor to provide advance notice to you via email or through
                the Service. You understand and acknowledge that the Service is
                subject to modifications by Gataca and that such modifications
                may require you to upgrade your hardware, software or
                integrations in order to use the Service.
              </p>
            </div>
            <div
              className={styles?.contentCol__section}
              id="warrantiesLiabilitiesIndemnity__10"
            >
              <h4 className={cx("heading4 marginBottom32")}>
                10. Warranties, Liability and Indemnity
              </h4>
              <p className={cx("marginBottom20")}>
                <b>10.1 Warranties</b>
              </p>
              <p className={cx("marginBottom20")}>
                We represent and warrant that the Service will operate in
                accordance with applicable documentation and will materially
                conform to any specifications contained therein. Except for our
                warranties set forth in this section, the Service is provided
                “As Is”. Gataca’s sole obligation, and your sole and exclusive
                remedy, in the event of any failure by us to comply with this
                section will be for us to recreate the affected Service or
                refund to you the fees you paid for the affected Service in
                accordance with the provisions of this clause.
              </p>
              <p className={cx("marginBottom20")}>
                To receive any warranty remedy, you must report any claimed
                breach of this warranty in writing to Gataca promptly, and in
                any event within ten (10) days after the first date of the
                non-conformance is identified by or becomes known to you. Gataca
                shall use commercially reasonable efforts to remedy the
                non-conformance through correction or reperformance of the
                affected Service without undue delay, at no additional charge to
                you. If Gataca is unable to correct the non-conformance, Gataca
                shall refund, on a pro-rata basis from the date Gataca received
                the written notice of the non-conformance, the amounts pre-paid
                by you that are attributable to the non-conforming portion of
                the Service.
              </p>
              <p className={cx("marginBottom20")}>
                Without limiting our express warranties and obligations
                hereunder, and to the extent permitted by Law, we hereby
                disclaim any and all other warranties, expressed or implied,
                including but not limited to warranties of merchantability,
                non-infringement, fitness for a particular purpose, safe,
                on-time, uninterrupted, virus free and error-free operation and
                warranties related to third-party equipment, material, services,
                or software, including that the Service will operate in
                combination with any other hardware, software, system or data.
                You may have other statutory rights, but the duration of
                statutorily required warranties, if any, will be limited to the
                shortest period permitted by law.
              </p>
              <p className={cx("marginBottom20")}>
                You represent and warrant that you have provided adequate
                notices and obtained the necessary permissions and consents to
                provide Client Data to us for use and disclosure pursuant to the
                Data Processing Agreement.
              </p>
              <p className={cx("marginBottom20")}>
                You represent and warrant that, when using the Service to access
                third-party services, including any blockchain ledger or other
                identity network, public or private, that you are acting in
                compliance with all the relevant service’s terms and agreements,
                and that you are authorized to do so.
              </p>
              <p className={cx("marginBottom20")}>
                <b>10.2 Liabilities</b>
              </p>
              <p className={cx("marginBottom20")}>
                Under no circumstances will Gataca be liable to you, with the
                exceptions contemplated in the legislation in force, for any
                indirect, special, incidental, consequential or punitive
                damages, including but not limited to damages that may be due to
                the lack of availability, security, continuity or quality of the
                functioning of the Service and the Content or the non-fulfilment
                of the expectation of usefulness that you may have attributed to
                the Service and the Content, such us lost profits, lost sales or
                business, work stoppage, computer failure or malfunction, or
                lost data.
              </p>
              <p className={cx("marginBottom20")}>
                Gataca’s aggregate liability arising out of or related to these
                Terms for any direct damages, costs, or liabilities will not
                exceed the amount actually paid to Gataca under these Terms in
                the twelve (12) months immediately preceding the claim. This
                section shall not limit your liability arising from your breach
                of these terms or your indemnification obligations pursuant to
                these terms.
              </p>
              <p className={cx("marginBottom20")}>
                <b>10.3 Indemnity</b>
              </p>
              <p className={cx("marginBottom20")}>
                You agree to defend, indemnify, and hold Gataca harmless,
                including its Affiliates (as defined below), and all of its
                respective officers, agents, partners, and employees, from and
                against any loss, damage, liability, claim, or demand, including
                reasonable attorneys’ fees and expenses, made by any third party
                due to or arising out of: (1) your contributions to Client Data;
                (2) your use of the Service; (3) breach of these Terms; (4) any
                breach of your representations and warranties set forth in these
                Terms; (5) your violation of the rights of a third party,
                including but not limited to intellectual property rights; or
                (6) any harmful act toward any other End User or Client of the
                Service with whom you connected via the Service.
              </p>
              <p className={cx("marginBottom20")}>
                Notwithstanding the foregoing, Gataca reserves the right, at its
                own expense, to assume exclusive defense and control of any
                matter otherwise subject to indemnification by you and, in such
                case, you agree to cooperate with Gataca in the defense of such
                matter.
              </p>
              <p className={cx("marginBottom20")}>
                “Affiliates” means any entity or person that controls Gataca, is
                controlled by Gataca, or under common control with Gataca, such
                as a subsidiary, parent company, or employee.{" "}
              </p>
              <p className={cx("marginBottom20")}>
                Gataca shall indemnify you against any liability to third
                parties resulting from the Services' infringement of copyright
                or misappropriation of trade secrets, provided Gataca receives
                prompt notification of any claims, or proceedings related
                thereto within ten (10) days after you first becoming aware of
                the infringement claim. Additionally, Gataca must be given
                reasonable assistance and the opportunity to assume sole control
                over defense and settlement. Gataca will not be liable for any
                settlement not approved in writing. These obligations do not
                apply (i) if the alleged infringement concerns to a combination
                of the Service with other products or technology, (ii) where you
                continue alleged infringing activity after notice or informed of
                modifications to avoid infringement, or (iii) where your use of
                the Service does not strictly comply with these Terms or the
                applicable Law.
              </p>
              <p className={cx("marginBottom20")}>
                If the Service is held or believed by Gataca to be infringing,
                Gataca may, at its expense, (a) make the Service non-infringing
                by modification or replacement with similar features, (b)
                procure a license for you to continue using the Services, or (c)
                if not commercially feasible, terminate these Terms. In such a
                case, your sole remedy, apart from indemnification, will be a
                pro-rata refund of any prepaid, unused fees for the Service.
              </p>
              <p className={cx("marginBottom20")}>
                <b>10.4 Force Majeure</b>
              </p>
              <p className={cx("marginBottom20")}>
                Gataca will not be liable for any failure or delay in its
                performance under the terms of these Terms due to any cause
                beyond its reasonable control, including acts of war, acts of
                God, pandemia, labor shortages or disputes, governmental acts or
                failure or degradation of the Internet or telecommunications
                services. Gataca will give you prompt notice of such cause and
                will make commercially reasonable efforts to promptly correct
                such failure or delay in performance.
              </p>
            </div>
            <div
              className={styles?.contentCol__section}
              id="dataProtection__11"
            >
              <h4 className={cx("heading4 marginBottom32")}>
                11. Data Protection
              </h4>
              <p className={cx("marginBottom20")}>
                For the purpose of this Agreement, Gataca is a Data Controller
                for personal data of the representatives, employees, or other
                natural persons acting in the name or on behalf of the Client,
                including Authorized Users and singees of this Agreement and
                associated Orders. Gataca is also Data Controller for personal
                data of End Users using the Gataca Vouch extension contracted by
                Client.
              </p>
              <p className={cx("marginBottom20")}>
                For any other features of the Service, Gataca is Data Processor
                for personal data, including personal data provided by Client to
                End User using the Service, personal data received by Client
                from End Users using the Service, and personal data of Client
                representatives, employees, or other natural persons included in
                Verifiable Credentials that are stored in the Enterprise Wallet.
              </p>
              <p className={cx("marginBottom20")}>
                <b>
                  11.1 Personal Data processed by Gataca as a Data Controller.
                </b>
              </p>
              <p className={cx("marginBottom20")}>
                In accordance with the applicable data protection regulations,
                Personal Data provided for the purpose of managing this
                Agreement, as well as, where appropriate, to comply with the
                regulatory obligations imposed by the applicable regulation
                during the term of this Agreement may be processed by Gataca as
                a Data Controller under the following provisions and those set
                forth in the{" "}
                <a href="https://gataca.io/privacy-policy" target="_blank">
                  Privacy Policy
                </a>
                .
              </p>
              <p className={cx("marginBottom20")}>
                Once the term of the Agreement has ended, the data will be kept
                (as indicated by the regulations), for the sole purpose of
                complying with the required legal obligations and for the
                formulation, exercise or defense of claims, during the period of
                prescription of the actions derived from the contractual
                relationship.
              </p>
              <p className={cx("marginBottom20")}>
                In any case, the data subjects may exercise their rights to
                access, rectification, cancelation/erasure, objection,
                restriction and portability before the corresponding party by
                sending an email to{" "}
                <a href="mailto: privacy@gataca.io" type="email"></a>. Likewise,
                if they consider that their personal data protection rights have
                been breached, they may lodge a complaint with the competent
                authority for matters concerning the protection of personal
                data.
              </p>
              <p className={cx("marginBottom20")}>
                <b>
                  11.2 Personal Data processed by Gataca as a Data Processor.
                </b>
              </p>
              <p className={cx("marginBottom20")}>
                Where Gataca acts as a Data Processor regarding the Personal
                Data of End Users and Personal Data included in your Enterprise
                Wallet, that may be processed for the performance of the Service
                under these Terms, the Data Processing Terms included as Annex A
                of these Terms shall govern the applicable terms for collection,
                processing and controlling of Personal Data.
              </p>
            </div>
            <div
              className={styles?.contentCol__section}
              id="particularConditions__12"
            >
              <h4 className={cx("heading4 marginBottom32")}>
                12. Particular conditions applicable to licenses for evaluation
                purposes
              </h4>
              <p className={cx("marginBottom20")}>
                We may grant you a limited, non-exclusive, non-transferable,
                revocable license to use the Service solely for the purpose of
                evaluating its functionality and performance.
              </p>
              <p className={cx("marginBottom20")}>
                Your evaluation of the Service pursuant to this clause shall
                commence on the date of your acceptance of the Agreement or the
                Order, and continue for a period of fifteen (15 days, or as
                otherwise agreed to in writing between you and Gataca (the “
                <b>Trial Term</b>”). Notwithstanding the foregoing, we may in
                our sole discretion suspend or terminate your evaluation license
                and access to Gataca Studio at any time, for any or no reason,
                without advanced notice.
              </p>
              <p className={cx("marginBottom20")}>
                You shall not use the Service in any production environment or
                for any commercial purpose during the Trial Term. The Software
                may only be used in a test or development environment for the
                purpose of assessing its suitability for your needs.
              </p>
              <p className={cx("marginBottom20")}>
                You acknowledge that any data entered into the Service during
                the Trial Term may be deleted or lost upon the expiration of the
                Trial Term. You are solely responsible for maintaining backup
                copies of any data entered during this period.
              </p>
              <p className={cx("marginBottom20")}>
                The Service is provided "as-is" during the Trial Term without
                any warranties or representations of any kind. We shall have no
                liability for any harm or damage arising out of or in connection
                with your use of the Service during the Trial Term.
              </p>
            </div>
            <div
              className={styles?.contentCol__section}
              id="particularConditionsVouch__13"
            >
              <h4 className={cx("heading4 marginBottom32")}>
                13. Particular conditions applicable to Gataca Vouch
              </h4>
              <p className={cx("marginBottom20")}>
                If your Subscription Tier includes access to the functionalities
                of Gataca Vouch, the specific provisions set forth in this
                clause 11 shall apply, along with the rest of the Terms of this
                Agreement.
              </p>
              <p className={cx("marginBottom20")}>
                <b>13.1 Overview</b>
              </p>
              <p className={cx("marginBottom20")}>
                Gataca Vouch is a specific extension within Gataca Studio that
                provides you with a standard OpenID Connect interface to verify
                the identity of your End Users requesting access to your
                Application (as defined below), while enabling users to provide
                their information through ID Wallets and verifiable credentials.
              </p>
              <p className={cx("marginBottom20")}>
                To use Gataca Vouch, you need to complete the required
                information in the Gataca Studio enabled extension, which may
                include, among others:
              </p>
              <ul>
                <li className={cx("marginBottom20")}>
                  <p>
                    <b></b>the URL of the website, mobile application, or the
                    unique and unequivocal identifier of the digital platform
                    where identity authentication is required “Application”;
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p>
                    <b></b>the links containing information related to the terms
                    and conditions of your Application and its privacy policy.
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p>
                    <b></b>the scope of information used to verify the identity
                    of an End User during the authentication process "Scope".
                  </p>
                </li>
              </ul>
              <p className={cx("marginBottom20")}>
                Gataca Vouch allows you to configure various proprietary
                identity credentialing Scopes.
              </p>
              <p className={cx("marginBottom20")}>
                Gataca will ask the End Users to grant their consent to share
                their identity credentials from their ID Wallets in order to
                provide you with the information required according to the
                selected Scope.
              </p>
              <p className={cx("marginBottom20")}>
                <b>13.2 Your responsibilities </b>
              </p>
              <p className={cx("marginBottom20")}>
                You must evaluate whether the accuracy provided by a specific
                Scope is sufficient for your purposes in verifying End Users
                identity information.
              </p>
              <p className={cx("marginBottom20")}>
                You are responsible for your use of Gataca Vouch and all
                consequences that arise from it, especially if it involves
                actions that breach relevant laws, the rights of third parties,
                established best practices, or these Terms. This responsibility
                also covers the actions of Authorized Users.
              </p>
              <p className={cx("marginBottom20")}>
                <b>13.3 Our responsabilities and liabilities </b>
              </p>
              <p className={cx("marginBottom20")}>
                We are responsible for ensuring that the information provided to
                you for a selected Scope results from an authentication process
                conducted with the End User by requesting all necessary
                credentials and validating their authenticity.
              </p>
              <p className={cx("marginBottom20")}>
                However, we are not liable for (a) the accuracy, effectiveness,
                or completeness of the Scope’s implementation upon which you
                based your request for verifying personal data or obtaining
                details about the End User; (b) any mistakes you make when
                entering the required information in Gataca Vouch (this includes
                any damages, costs, losses, or penalties arising from such
                mistakes, including issues related to non-functioning links or
                errors in their content); and/or (c) for the actions and
                omissions of the End User.
              </p>
              <p className={cx("marginBottom20")}>
                <b>13.4 Specifications on Personal Data processing</b>
              </p>
              <p className={cx("marginBottom20")}>
                You understand that the selected Scope may include Personal
                Data.
              </p>
              <p className={cx("marginBottom20")}>
                We become the Controller of the End User’s Personal Data to the
                extent to which the End Users used the Gataca Vouch to share
                their Personal Data, and we will process their information in
                accordance with our{" "}
                <a href="https://gataca.io/privacy-policy/" target="_blank">
                  Privacy Policy
                </a>
                .
              </p>
              <p className={cx("marginBottom20")}>
                We will provide you the obtained personal data or anonymized
                information, as required by the scope configuration. Therefore,
                you will receive only the data necessary for fulfilmen of the
                selected Sope. And, in any case, this provision of Personal Data
                will be preceded by the consent of the End User that authorizes
                the transfer of their Personal Data.
              </p>
            </div>
            <div
              className={styles?.contentCol__section}
              id="particularConditionsEWallet__14"
            >
              <h4 className={cx("heading4 marginBottom32")}>
                14. Particular conditions applicable to the Enterprise Wallet
              </h4>
              <p className={cx("marginBottom20")}>
                If your Subscription Tier includes access to the functionalities
                of Enteprise Wallet, the specific provisions set forth in this
                clause 12 shall apply, along with the rest of the Terms of this
                Agreement.
              </p>
              <p className={cx("marginBottom20")}>
                <b>14.1 Overview</b>
              </p>
              <p className={cx("marginBottom20")}>
                Enteprise Wallet is a specific extension within Gataca Studio
                that provides you with a secure vault for importing, requesting,
                and storing Verifiable Credentials and attestations associated
                to your legal entity.
              </p>
              <p className={cx("marginBottom20")}>
                <b>14.2 Your responsibilities</b>
              </p>
              <p className={cx("marginBottom20")}>
                You are responsible for ensuring that access to the Enterprise
                Wallet and its content is restricted to the appropriate
                Authorized Users.
              </p>
              <p className={cx("marginBottom20")}>
                You are responsible for your use of the Enterprise Wallet and
                all consequences that arise from it, especially if it involves
                actions that breach relevant laws, the rights of third parties,
                established best practices, or these Terms. This responsibility
                also covers the actions of Authorized Users.
              </p>
              <p className={cx("marginBottom20")}>
                <b>14.3 Liabilities</b>
              </p>
              <p className={cx("marginBottom20")}>
                We are not liable for (a) the accuracy, effectiveness, or
                completeness of the Verifiable Credentials that are stored in
                the Enterprise Wallet, unless they are issued by Gataca; (b) any
                mistakes you make when uploading the required information in the
                Entperise Wallet (this includes any damages, costs, losses, or
                penalties arising from such mistakes, including issues related
                to non-functioning links or errors in their content); and/or (c)
                for the actions and omissions of the Authorized Users.
              </p>
              <p className={cx("marginBottom20")}>
                <b>14.4 Specifications on Personal Data processing</b>
              </p>
              <p className={cx("marginBottom20")}>
                Verifiable Credentials and Attestations stored in the Entperise
                Wallet may include Personal Data of Client representatives,
                employees, or any other natural person.
              </p>
              <p className={cx("marginBottom20")}>
                In this case, we become the Processor of the Personal Data and
                the applicable terms for collection, processing and controlling
                of Personal Data are governed by the Data Processing Terms
                included as Annex A of these Terms.
              </p>
            </div>
            <div
              className={styles?.contentCol__section}
              id="publicityRights__15"
            >
              <h4 className={cx("heading4 marginBottom32")}>
                15. Publicity Rights
              </h4>
              <p className={cx("marginBottom20")}>
                By accepting these Terms, you agree that Gataca may identify
                Client as a Gataca customer in its promotional materials,
                including Gataca’s Website. Gataca will promptly stop doing so
                upon Client’s written request.
              </p>
            </div>
            <div className={styles?.contentCol__section} id="amendment__16">
              <h4 className={cx("heading4 marginBottom32")}>16. Amendment</h4>
              <p className={cx("marginBottom20")}>
                We may revise these Terms from time to time to accommodate
                changes in the Service or its operation. If we do, those revised
                Terms will supersede prior versions. Unless we say otherwise,
                revisions will be effective upon the effective date indicated at
                the top of these Terms. We will strive to provide you advance
                electronic notice of any material revisions. For other
                revisions, we will update the effective date of these Terms at
                the top of the page.
              </p>
              <p className={cx("marginBottom20")}>
                Authorized users will receive notifications via email or the
                Gataca Studio interface regarding any changes or updates to the
                Terms. It is essential to regularly check for notifications to
                stay informed about any modifications to these Terms.
              </p>
              <p className={cx("marginBottom20")}>
                We reserve the right to make any functional, technical or
                technological modifications from time to time (i) to accommodate
                changes in the Service or its operation, (ii) to maintain or
                correct any possible malfunction or anomaly that has been
                detected during the use of the Service; (iii) to accommodate
                changes in the applicable Law, and/or (iv) whenever Gataca
                deemed useful or necessary, or simply for the achievement of
                better or new functionalities. Notwithstanding the foregoing,
                Gataca shall respect those functionalities necessary for you to
                use the Service with the least possible changes.
              </p>
              <p className={cx("marginBottom20")}>
                You exonerate us from any liability for damages of any nature,
                derived/produced to you or your clients as a consequence of the
                modifications, updates and other actions that Gataca may have
                carried out by virtue of this clause.
              </p>
            </div>
            <div className={styles?.contentCol__section} id="termination__17">
              <h4 className={cx("heading4 marginBottom32")}>
                17. Termination and suspension of the Service
              </h4>
              <p className={cx("marginBottom20")}>
                These Terms shall be applicable for the duration of Service Term
                or as otherwise agreed to by Gataca in writing, unless earlier
                terminated as set forth herein.
              </p>
              <p className={cx("marginBottom20")}>
                You may terminate these Terms and access to the Service upon
                expiration of the Subscription Term by notifying us via the
                Service or by sending an email to{" "}
                <a href="mailto: legal@gataca.io" type="email">
                  legal@gataca.io
                </a>
                .
              </p>
              <p className={cx("marginBottom20")}>
                We may terminate these Terms and access to the Service upon
                expiration of the Subscription Term for any reason upon thirty
                (30) days written notice to you.
              </p>
              <p className={cx("marginBottom20")}>
                We may unilaterally suspend or terminate access to the Service
                and the Contents immediately if: (a) you commit any material
                breach of these Terms, including reference documents specified
                in section 2; (b) there is reason to believe the traffic created
                from your use of the Service or your use of the Service is
                fraudulent or negatively impacting the operating capability of
                the Service; (c) we determine, in our sole discretion, that
                providing the Service is prohibited by applicable Law, or it has
                become impractical for any legal or regulatory reason to provide
                the Service; or (d) subject to applicable Law, you become the
                subject of liquidation, bankruptcy, change of control, or any
                similar proceedings.
              </p>
              <p className={cx("marginBottom20")}>
                Gataca will, if possible, give notice of such circumstances
                (suspension or termination of access to the Contents) by
                including the information referred to through the means of
                communication it deems appropriate for its wider circulation.
              </p>
              <p className={cx("marginBottom20")}>
                <b>17.1 Consequences of termination</b>
              </p>
              <p className={cx("marginBottom20")}>
                Termination shall not relieve you of the obligation to pay any
                fees accrued or payable to Gataca for the entire duration of the
                Service Term that was active at the time of termination.
              </p>
              <p className={cx("marginBottom20")}>
                Effective immediately upon expiration of the Service Term or
                termination of these Terms: (a) all rights granted under these
                Terms will become void and revert to the granting party; (b) you
                shall cease use of the Service; and (c) neither party will have
                continuing rights to use any confidential information of the
                other, save to the extent required to discharge any and all
                obligations arising under these Terms.
              </p>
              <p className={cx("marginBottom20")}>
                Upon termination of these Terms, those provisions which by their
                very nature must remain in force shall survive, in particular
                the following clauses: 5 (Payment Terms), 9 (Data Protection)
                and 10 (Publicity Rights).
              </p>
              <p className={cx("marginBottom20")}>
                Termination of these Terms does not imply the termination of any
                document expressly referred to in section 2 above.
              </p>
            </div>
            <div
              className={styles?.contentCol__section}
              id="intellectualProperty__18"
            >
              <h4 className={cx("heading4 marginBottom32")}>
                18. Intellectual Property
              </h4>
              <p className={cx("marginBottom20")}>
                The Service and the Content are protected by copyright, trade
                secret, and other intellectual property laws.
              </p>
              <p className={cx("marginBottom20")}>
                Gataca shall remain the exclusive owner of any and all
                intellectual property rights, whether registered or not, owned,
                owned or licensed by Gataca. These Terms in no case implies the
                assignment, transfer, acquisition or license of the Gataca’s
                intellectual property over the Service, the Content, the
                software or any other information and documentation owned by
                Gataca. You are only authorized to use the Gataca’s intellectual
                property when you have an explicit and unequivocal permission,
                and only in the manner specified by Gataca in these Terms or
                Order and associated with the Service.
              </p>
              <p className={cx("marginBottom20")}>
                You shall not, and shall not permit any Authorized User or third
                party to decompile, reverse engineer, disassemble, or otherwise
                attempt to derive the source code, underlying algorithms, or
                structure of the Software; copy, reproduce, distribute, or
                publicly display the Content; or adapt, translate, or create
                derivative works based on the Software. Any unauthorized use,
                reproduction, or distribution of the Software constitutes a
                material breach of this Agreement and may result in immediate
                termination of Client's access to the Software, in addition to
                any other remedies available by law.
              </p>
              <p className={cx("marginBottom20")}>
                Any new intellectual property generated during the term of this
                Agreement and in connection with the Services, improvements,
                enhancements or modifications thereto, and all intellectual
                property rights related thereto, and/or Gataca technology shall,
                in any case, automatically and exclusively belong to Gataca.{" "}
              </p>
              <p className={cx("marginBottom20")}>
                Any ideas, questions, answers, suggestions, or comments ("
                <b>Feedback</b>") provided by you to us shall not be considered
                confidential or proprietary information. By providing us with
                Feedback, you authorize us to use it, along with any
                developments or derivatives thereof, determined at our sole
                discretion, without requiring additional permission from you or
                payment of compensation to you.
              </p>
              <p className={cx("marginBottom20")}>
                You agree that (i) by submitting unsolicited ideas to us or any
                of our representatives, you automatically forfeit your right to
                any intellectual property rights in these ideas; and (ii)
                unsolicited ideas submitted to us, our employees, or
                representatives automatically become the property of Gataca. You
                hereby assign all rights, title, and interest you have in such
                Feedback and ideas to Gataca, including all intellectual
                property rights therein.
              </p>
            </div>
            <div className={styles?.contentCol__section} id="miscellaneous__19">
              <h4 className={cx("heading4 marginBottom32")}>
                19. Miscellaneous
              </h4>
              <p className={cx("marginBottom20")}>
                If any provision of these Terms is found to be unenforceable or
                invalid, that provision will be limited or eliminated to the
                minimum extent necessary so that these Terms will otherwise
                remain in full force and effect and enforceable.
              </p>
              <p className={cx("marginBottom20")}>
                These Terms are not assignable, transferable, or sublicensable
                by you except with our prior written consent. We may transfer
                and assign any of our rights and obligations under these Terms
                without your consent.
              </p>
              <p className={cx("marginBottom20")}>
                No waiver of any term of these Terms shall be deemed a further
                or continuing waiver of such term or any other term, and any
                failure to assert any right or provision under these Terms shall
                not constitute a waiver of such term.
              </p>
              <p className={cx("marginBottom20")}>
                No agency, partnership, joint venture, or employment is created
                as a result of these Terms, and you do not have any authority of
                any kind to bind us in any respect whatsoever.
              </p>
              <p className={cx("marginBottom20")}>
                In any action or proceeding to enforce rights under these Terms,
                the prevailing party will be entitled to recover costs and
                attorneys’ fees.
              </p>
              <p className={cx("marginBottom20")}>
                There shall be no express or implied third-party beneficiaries
                capable of enforcing the terms of these Terms other than parties
                who execute these Terms.
              </p>
              <p className={cx("marginBottom20")}>
                All notices under these Terms will be in writing and will be
                deemed to have been duly given when received, if personally
                delivered; when receipt is electronically confirmed, if
                transmitted by email; and upon receipt, if sent by certified or
                registered mail, return receipt requested.
              </p>
            </div>
            <div className={styles?.contentCol__section} id="jurisdiction__20">
              <h4 className={cx("heading4 marginBottom32")}>
                20. Applicable law and jurisdiction
              </h4>
              <p className={cx("marginBottom20")}>
                All the conditions included in this document are governed by
                Spanish law. Should any dispute arise, please try contacting our
                support team first to resolve the dispute before bringing a
                formal legal case.
              </p>
              <p className={cx("marginBottom20")}>
                You agree that all disputes, controversies or situations arising
                from these Terms that cannot be resolved through our support
                team shall be resolved by the Courts and Tribunals of the city
                of Madrid.
              </p>
            </div>
            <div
              className={styles?.contentCol__section}
              id="dataProcessingTerms"
            >
              <h4 className={cx("heading4 marginBottom32")}>
                ANNEX I - Data Processing Terms
              </h4>
              <p className={cx("marginBottom20")}>
                This Data Processing Agreement (“<b>DPA</b>”) governs Gataca’s
                processing of the Client Data provided by you to Gataca through
                Gataca Studio in any modality available to the Client (the “
                <b>Service</b>”), and is hereby incorporated into the Agreement.
              </p>
              <p className={cx("marginBottom20")}>
                <b>1. Definitions</b>
              </p>
              <p className={cx("marginBottom20")}>
                <b>“Personal Data”</b> means data about identified or
                identifiable natural persons according to Art. 4 of the GDPR.
              </p>
              <p className={cx("marginBottom20")}>
                “<b>Data Controller</b>” means a natural or legal person who
                (either alone or jointly or in common with other persons)
                determines the purposes for which and the manner in which any
                personal information are, or are to be, processed.
              </p>
              <p className={cx("marginBottom20")}>
                “<b>Data Processor</b>” means any natural or legal person who
                processes the data on behalf of a Data Controller.
              </p>
              <p className={cx("marginBottom20")}>
                “<b>Data Sub-Processor</b>” means any natural or legal person
                who processes the data on behalf of a Data Processor.
              </p>
              <p className={cx("marginBottom20")}>
                <b>Gataca</b>, acting as a DATA PROCESSOR, in the course of the
                performance of the activities and Service agreed to in the
                Agreement, may access to certain Personal Data of the{" "}
                <b>Client</b>, which acts as a DATA CONTROLLER, and in order to
                establish a sufficient level of protection for personal data and
                to comply with the provisions of the applicable regulations on
                the protection of personal data, including the provisions of the
                General Data Protection Regulation (EU) 2016/679 (hereinafter, "
                <b>GDPR</b>") and any other applicable data privacy and data
                protection laws (collectively, “<b>Data Protection Laws</b>”)
                enter into this DPA.
              </p>
              <p className={cx("marginBottom20")}>
                For purposes of the Agreement and this DPA, (i) “
                <b>Personal Data</b>” has the meaning assigned to the term
                “personal data” or “personal information” under applicable Data
                Protection Laws; and (ii) “<b>Client Personal Data</b>” means
                Personal Data that you provide to Gataca and that Gataca
                processes on your behalf to provide the Services. Gataca will
                process Client Personal Data as Data Processor to provide or
                maintain the Service and for the purposes set forth in this DPA,
                the Agreement and/or in any other applicable agreements between
                you and Gataca, and especially by the provisions of the
                following clauses.
              </p>
              <p className={cx("marginBottom20")}>
                <b>2. Purpose</b>
              </p>
              <p className={cx("marginBottom20")}>
                The purpose of this DPA is to regulate the terms under which
                Gataca will process Client Personal Data under the Agreement.
              </p>
              <p className={cx("marginBottom20")}>
                This DPA is part of and subject to the terms of the Agreement.
                All capitalized terms outlined in this DPA have the same
                definitions as in the Agreement, unless specifically defined in
                this DPA.
              </p>
              <p className={cx("marginBottom20")}>
                <b>3. Content and scope of application </b>
              </p>
              <p className={cx("marginBottom20")}>
                Gataca will only process the Client Personal Data to provide the
                Services, to fulfill Gataca's obligations under the Agreement
                and this DPA and in compliance with the Client’s written
                instructions. For clarification purposes the Agreement and this
                DPA constitute the Client’s instructions to Gataca to process
                the Client Personal Data.
              </p>
              <p className={cx("marginBottom20")}>
                The details of the processing activities to be performed under
                this DPA are outlined in Exhibit A.
              </p>
              <p className={cx("marginBottom20")}>
                Gataca must document the processing operations carried out on
                behalf of the Client and keep a written record of the different
                categories of processing carried out as a result of the
                provision of the Service, in the terms required by law.
              </p>
              <p className={cx("marginBottom20")}>
                Any Gataca personnel who have access to Client Personal Data
                will be bound by appropriate confidentiality and data protection
                obligations applicable to Gataca under the Agreement and this
                DPA.
              </p>
              <p className={cx("marginBottom20")}>
                It is also expressly prohibited any form of transfer,
                communication, making available of Client Personal to third
                parties by Gataca without the express consent of the Client.
              </p>
              <p className={cx("marginBottom20")}>
                <b>4. Compliance assistance</b>
              </p>
              <p className={cx("marginBottom20")}>
                Gataca undertakes to support the Client in (i) carrying out
                prior consultations with the Supervisory Authority, (ii)
                carrying out impact assessments, where appropriate in both
                cases; and in (iii) providing information necessary to
                demonstrate compliance with the obligations set forth in this
                DPA and applicable Data Protection Laws.
              </p>
              <p className={cx("marginBottom20")}>
                If Gataca considers that any of the instructions received
                infringe the Data Protection Laws, Gataca shall immediately
                inform the Client.
              </p>
              <p className={cx("marginBottom20")}>
                <b>5. Subcontracting</b>
              </p>
              <p className={cx("marginBottom20")}>
                The Client authorises the subcontracting of any technological
                platform that may be necessary or convenient to perform the
                Service, provided that said platform complies with the
                provisions of the Data Protection Law and that it is a company
                with an excellent reputation in the market and the appropriate
                security measures. Gataca will ensure that the Sub-processor is
                subject to substantially similar data protection obligations as
                those set forth in this DPA regarding Personal Data and which
                satisfy the requirements of Data Protection Laws. Gataca will
                list its current Sub-processors for the Services in the Exhibit
                A. Gataca will remain liable for all acts or omissions of its
                Subcontractors or Sub-processors, and for any subcontracted
                obligations.
              </p>
              <p className={cx("marginBottom20")}>
                Gataca may add or remove Sub-processors from time to time.
                Gataca will inform the Client in advance of new Sub-processors
                for the applicable Services as described in the list of
                Sub-processors. If Client objects to a change, it will provide
                Gataca with notice of its objection to dpo@gataca.io including
                reasonable detail supporting the Client’s concerns within thirty
                (30) days of Gataca publishing the change. Gataca will then use
                commercially reasonable efforts to review and respond to
                Client’s objection within thirty (30) days of receipt of the
                Client’s objection. Gataca’s response to the Client’s objection
                will include, at a minimum, reasonable accommodations, if any,
                that the Client or Gataca can take to limit or prevent a new
                Sub-processor from acting as a processor of the Client Personal
                Data when the Client makes use of the Services. If Gataca does
                not respond to a Client’s objection as described above, or
                cannot reasonably accommodate Client’s objection, Client may
                terminate the Agreement by providing written notice to Gataca:
                (a) within thirty days of receipt of a Gataca response that does
                not comply with this Section; or (b) if Gataca fails to respond,
                within thirty days of the date Gataca’s response was due.
              </p>
              <p className={cx("marginBottom20")}>
                <b>6. International personal data transfers</b>
              </p>
              <p className={cx("marginBottom20")}>
                Client Personal Data is stored in servers located in the
                European Economic Area (EEA).
              </p>
              <p className={cx("marginBottom20")}>
                The Client agrees that Gataca`s Sub-processors may transfer,
                store, and process the Client Personal Data in locations other
                than the Client’s country. Gataca undertakes to establish as
                many safeguards as are required under Data Protection Laws for
                the lawful transfer of personal data to Third Countries, by
                means of the application of Binding Corporate Rules, Standard
                Contractual Clauses, or where the relevant transfer has been
                authorised by the competent supervisory authority or is
                necessary for the performance of the Agreement.
              </p>
              <p className={cx("marginBottom20")}>
                <b>7. Security measures</b>
              </p>
              <p className={cx("marginBottom20")}>
                Gataca shall respect confidentiality and adopt the technical and
                organisational measures corresponding to the category of data
                processed in order to guarantee the security of personal data
                and to prevent their alteration, loss, processing or
                unauthorised access, considering the state of technology, the
                nature of the data stored and the risks to which they are
                exposed, whether from human action or from the physical or
                natural environment.
              </p>
              <p className={cx("marginBottom20")}>
                Gataca represents that it has implemented and will maintain,
                throughout the Term, appropriate technical and organizational
                measures to ensure the security, confidentiality, integrity, and
                availability of the Personal Data. These measures shall be in
                compliance with all applicable data protection laws and industry
                standards, including but not limited to:
              </p>
              <ul>
                <li className={cx("marginBottom20")}>
                  <p>
                    <b></b>Access controls to prevent unauthorized access to
                    Personal Data;
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p>
                    <b></b>Encryption of Personal Data in transit and at rest;
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p>
                    <b></b>Regular testing, assessment, and evaluation of the
                    effectiveness of the security measures;
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p>
                    <b></b>Measures to ensure the ongoing confidentiality,
                    integrity, availability, and resilience of processing
                    systems and services;
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p>
                    <b></b>Procedures for regular testing, assessment, and
                    evaluation of the effectiveness of technical and
                    organizational measures for ensuring the security of the
                    processing.
                  </p>
                </li>
              </ul>
              <p className={cx("marginBottom20")}>
                Gataca further represents that it holds and will maintain, for
                the duration of this Agreement, the ISO/IEC 27001 (or
                equivalent) certification for Information Security Management
                Systems (ISMS).
              </p>
              <p className={cx("marginBottom20")}>
                <b>8. Notification of security breaches</b>
              </p>
              <p className={cx("marginBottom20")}>
                Gataca shall notify the Client, without undue delay, of any
                breach of security within 72 hours of Gataca becoming aware of
                it and by email, together with all relevant information in its
                possession that the Client requires to enable it to comply with
                the obligations set out in the GDPR or any other applicable
                privacy law.
              </p>
              <p className={cx("marginBottom20")}>
                A breach of security shall be understood to be any event that
                could lead to the accidental or unlawful destruction, loss or
                alteration of personal data transmitted, stored or otherwise
                processed, impossibility of access, communication or
                unauthorised access to such data that affects the Personal Data
                under the responsibility of the Data Controller.
              </p>
              <p className={cx("marginBottom20")}>
                Gataca will assist the Client in ensuring compliance with its
                obligations pursuant to GDPR or any other applicable law by
                providing relevant information which may include: (a) the nature
                of the security incident, including, where possible, the
                categories and approximate number of personal data records
                concerned; (b) the likely consequences of the security incident;
                (c) the measures taken or to be taken to address the security
                incident, including, where appropriate, the measures to mitigate
                its possible adverse effects; (d) the name and contact details
                of the contact from whom more information may be obtained; and
                (e) justifications for any delay in notification. Should it not
                be feasible for Gataca to provide all of the relevant
                information in its initial notification to the Client, Gataca
                will provide further relevant details without undue delay.
              </p>
              <p className={cx("marginBottom20")}>
                <b>9. Effects on the duration of the contract</b>
              </p>
              <p className={cx("marginBottom20")}>
                This DPA shall remain in force for as long as the data
                processing is carried out by Gataca or until the termination of
                the Agreement.
              </p>
              <p className={cx("marginBottom20")}>
                Once the contractual performance has been fulfilled or
                terminated, the Client Personal Data to which Gataca has access
                must be destroyed or returned to the Client, as well as any
                support or documents containing any Personal Data that are the
                object of the processing.
              </p>
              <p className={cx("marginBottom20")}>
                In the event that the Client chooses to return the data, it must
                be returned via secure systems that allow the confidentiality of
                the data to be preserved. If the Client opts for their
                destruction, Gataca must guarantee that this has been carried
                out confidentially and without it being possible to recover
                them.
              </p>
              <p className={cx("marginBottom20")}>
                <b>10. Responsibilities</b>
              </p>
              <p className={cx("marginBottom20")}>
                By analogy in the application of Article 82 of the GDPR, Gataca
                will only be liable for damages caused by processing when it has
                not complied with obligations specifically directed to Gataca or
                has acted outside or against the legal instructions of the
                Client. Likewise, Gataca will be exempt from liability if it
                proves that it is in no way responsible for the event that
                caused the damages.
              </p>
              <p className={cx("marginBottom20")}>
                In any event, Gataca shall not be liable to the Client for any
                loss of actual or anticipated income or profits, loss of
                contracts or for any special, indirect, or consequential losses
                or damages of any kind howsoever arising, breach of contract or
                otherwise, whether or not such loss or damage is foreseeable,
                foreseen or known. This shall not apply, however, if such
                liability is based on willful misconduct or gross negligence.
              </p>
              <p className={cx("marginBottom20")}>
                Gataca´s aggregate liability under or in connection with this
                DPA, whether arising from contract, under any indemnity or
                otherwise, will be limited to the contractual price set forth in
                the Agreement signed by and between the Parties for the
                provision of Services. This shall not apply, however, if such
                liability is based on willful misconduct or gross negligence.
              </p>
              <p className={cx("marginBottom20")}>
                The Client shall indemnify and hold harmless Gataca in case the
                Client infringes its obligations set forth in this DPA or
                established by the applicable Data Protection Law, and/or if an
                unlawful conduct results from the execution of the Instructions
                provided to Gataca by the Client, and which could not have been
                foreseen or prevented by Gataca.
              </p>
              <p className={cx("marginBottom20")}>
                <b>11. Exercise of 'Habeas data' rights</b>
              </p>
              <p className={cx("marginBottom20")}>
                When the data subjects exercise their rights to habeas data
                recognised by the Data Protection Law before the Client, the
                latter must record the request received and communicate it by
                e-mail to our Data Protection Officer at dpo@gataca.io. The
                communication must be made immediately, and in no case later
                than 7 working days following receipt of the request.
              </p>
              <p className={cx("marginBottom20")}>
                Likewise, Gataca shall inform the Client of any complaint or
                claim regarding the processing of Personal Data by any data
                subject. Gataca will provide the Client with information or
                tools that are reasonably designed to enable the Client to
                fulfill its obligations to respond to these requests through the
                functionality of the Services, taking into account the nature of
                the processing and insofar as this is possible.
              </p>
            </div>
            <div
              className={styles?.contentCol__section}
              id="processingActivities"
            >
              <h4 className={cx("heading4 marginBottom32")}>
                EXHIBIT A - DETAILS OF THE PROCESSING ACTIVITIES
              </h4>
              <p className={cx("marginBottom20")}>
                <b>Subject Matter of Processing</b>
              </p>
              <p className={cx("marginBottom20")}>
                The provision of the Service.
              </p>
              <p className={cx("marginBottom20")}>
                <b>Duration of Processing</b>
              </p>
              <p className={cx("marginBottom20")}>
                The Subscription Term and any period thereafter, until Gataca
                fully deletes the Client Personal Data in accordance with legal
                retention requirements.
              </p>
              <p className={cx("marginBottom20")}>
                <b>Categories of Data Subjects</b>
              </p>
              <p className={cx("marginBottom20")}>
                The categories of data subjects will depend upon your use of the
                Service. Client Personal Data may concern
              </p>
              <ul>
                <li className={cx("marginBottom20")}>
                  <p>
                    <b></b>Client representatives, Authorized Users, employees,
                    or agents acting on behalf of the Client
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p>
                    <b></b>End Users
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p>
                    <b></b>Any other individual whose information is stored by
                    the Client acting as controller pursuant to Article 30 of
                    the GDPR
                  </p>
                </li>
              </ul>
              <p className={cx("marginBottom20")}>
                <b>Types of Personal Data</b>
              </p>
              <p className={cx("marginBottom20")}>
                The Personal Data that will be included in the Client Data will
                depend upon the Client’s use of the Service. Client Personal
                Data may consist of
              </p>
              <ul>
                <li className={cx("marginBottom20")}>
                  <p>
                    <b></b>Identity data: first name, last name, and ID document
                    details such as document number, issuance and expiry dates,
                    gender, etc.;
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p>
                    <b></b>Contact data: telephone number, e-mail address, and
                    mailing address;
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p>
                    <b></b>Profile data: employer, role, country, academic
                    records, professional records, interests, and preferences;
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p>
                    <b></b>Correspondence data: feedback, form responses, survey
                    responses, customer support requests, or otherwise
                    corresponded with us;
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p>
                    <b></b>Ordering data: contracts, orders, and purchases you
                    make through the Services;
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p>
                    <b></b>Payment data: billing details, your credit card
                    number, bank account number and any other payment-related
                    information.
                  </p>
                </li>
              </ul>
              <p className={cx("marginBottom20")}>
                Special Category Personal Data (i.e. Biometric Data):
              </p>
              <ul>
                <li className={cx("marginBottom20")}>
                  <p>
                    <b></b>Face Images
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p>
                    <b></b>Identity Document Images
                  </p>
                </li>
              </ul>
              <p className={cx("marginBottom20")}>
                <b>Nature and Purpose of Processing</b>
              </p>
              <p className={cx("marginBottom20")}>
                To facilitate the provision of the Service by Gataca and ensure
                the Client's access to and receipt of said Service.
              </p>
              <p className={cx("marginBottom20")}>
                <b>Authorized Sub-processors</b>
              </p>
              <ul>
                <li className={cx("marginBottom20")}>
                  <p>
                    <b></b>Amazon Web Services
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p>
                    <b></b>Daon
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p>
                    <b></b>Hubspot
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p>
                    <b></b>Holded
                  </p>
                </li>
              </ul>
              <p className={cx("marginBottom20")}>
                <b>Location of Data and data transfer</b>
              </p>
              <p className={cx("marginBottom20")}>Data location: EU</p>
              <p className={cx("marginBottom20")}>
                Transfer locations only for the purpose of technical support may
                include Serbia and USA, and shall only be transferred if
                necessary for a particular support issue and shall be deleted
                once the support issue is completed.
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

export default TermsOfServiceStudio
