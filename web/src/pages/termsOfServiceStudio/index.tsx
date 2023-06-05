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
          <p className={cx("bodyRegularXL")}>Effective date: August 19, 2022</p>
        </div>
        <div className={styles?.sectionMain}>
          <div className={styles?.sectionMain__dataContentCol}>
            <div className={styles?.contentCol__section} id="introduction__1">
              <h4 className={cx("heading4 marginBottom32")}>1. Introduction</h4>

              <p className={cx("marginBottom20")}>
                These specific Terms of Service (“<b>Terms</b>”) is a legal
                agreement between you and Gataca for the use of our cloud-based
                identity platform Gataca Studio, herein referred to as the (“
                <b>Service</b>”).
              </p>
              <p className={cx("marginBottom20")}>
                For generic Terms of Services related to all Gataca’s offerings,
                please refer to{" "}
                <Link to={"https://gataca.io/generic-terms-of-service"}>
                  Generic Terms of Service
                </Link>
                .
              </p>
              <p className={cx("marginBottom20")}>
                The Service includes code, images, text, and other materials,
                and third-party content (collectively the “<b>Contents</b>”).
              </p>
            </div>
            <div
              className={styles?.contentCol__section}
              id="acceptanceOfTerms__2"
            >
              <h4 className={cx("heading4 marginBottom32")}>
                2. Acceptance of Terms
              </h4>
              <p className={cx("marginBottom20")}>
                YOU MUST REPRESENT A LEGAL ENTITY TO USE OUR SERVICE.
              </p>
              <p className={cx("marginBottom20")}>
                To use the Service, you must review and accept these terms of
                service (“ the <b>Terms</b>”). By clicking “I Agree”, indicating
                acceptance electronically, or by accessing or using our Service,
                you agree to a full, complete and unreserved acceptance of each
                and every one of the terms and conditions included in these
                Terms.
              </p>
              <p className={cx("marginBottom20")}>
                This Agreement includes by reference:
              </p>
              <ul>
                <li className={cx("marginBottom20")}>
                  <p>
                    Gataca’s{" "}
                    <Link to={termOfServiceURL}> Generic Terms of Service</Link>
                    : includes generic definitions and clauses common to all
                    Gataca’s products and services, including the Service
                    subject matter of these Terms.
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p>
                    Gataca's <Link to={privacyPolicyURL}>Privacy Policy</Link>
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p>
                    Gataca’s <Link to={cookiePolicyURL}>Cookies Policy</Link>
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p>
                    Any terms provided separately to you for the Service,
                    including product terms, payment terms, data processing
                    agreements, etc. <Link to={""}></Link>
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p>
                    Additional terms and conditions, which may include those
                    from third parties.
                    <Link to={""}></Link>
                  </p>
                </li>
              </ul>
              <p className={cx("marginBottom20")}>
                <b>
                  IF YOU DO NOT AGREE TO ALL THESE TERMS, YOU SHALL REFRAIN FROM
                  USING THE SERVICE.
                </b>
              </p>
            </div>
            <div
              className={styles?.contentCol__section}
              id="rightsUseOfService__3"
            >
              <h4 className={cx("heading4 marginBottom32")}>
                3. Your rights to use the service
              </h4>
              <p className={cx("marginBottom20")}>
                The Service is protected by copyright, trade secret, and other
                intellectual property laws. You are only granted the right to
                use the Service.
              </p>
              <p className={cx("marginBottom20")}>
                Until termination of these Terms and as long as you meet any
                applicable payment obligations and comply with these Terms,
                Gataca grants to you a non-exclusive, non-transferable,
                revocable license to access the Service. No other right of use,
                alteration, exploitation, reproduction, distribution or public
                communication of the Service and/or its Contents other than
                those expressly provided for herein is hereby conferred on you.
                Gataca reserves all other rights in the Service.
              </p>
              <p className={cx("marginBottom20")}>
                You and your affiliates will be able to use the Service.
              </p>
              <p className={cx("marginBottom20")}>
                Your affiliates mean any entity or person that controls you, is
                controlled by you, or under common control with you, such as a
                subsidiary, parent company, or employee. Your affiliates may use
                the Service pursuant to these Terms, provided that these Terms
                apply to your affiliates. You and your affiliates that use the
                Service will be jointly and severally responsible for the acts
                and omissions of your affiliates, including, but not limited to,
                their breach of these Terms. Any claim from any of your
                affiliates that use the Service pursuant to these Terms may only
                be brought against us by you on your affiliates’ behalf.
              </p>
            </div>
            <div
              className={styles?.contentCol__section}
              id="authorizedUsers__4"
            >
              <h4 className={cx("heading4 marginBottom32")}>
                4. Clients, Authorized Users and End Users
              </h4>
              <p className={cx("marginBottom20")}>
                You are granted the role of Client if you purchase a software
                subscription, including the free version, to access the Service.
              </p>
              <p className={cx("marginBottom20")}>
                Clients must complete a Client registration form with Gataca in
                order to access our Service, where information of the legal
                entity and contact information will be requested. The
                registration information must be accurate, current and complete.
                During the term of these Terms, Clients shall keep the
                registration data updated so that Gataca may send notices,
                statements and other information for the purpose of providing
                the Service.
              </p>
              <p className={cx("marginBottom20")}>
                Clients may designate Authorized Users to configure, manage and
                administer the Service. The Client is responsible for the
                compliance of all Authorized Users with these Terms, including
                what the Authorized Users do with the Client's data, and for all
                expenses incurred by the Authorized Users. Authorized Users must
                belong to the Client's organization or its Affiliates.
              </p>
              <p className={cx("marginBottom20")}>
                Clients may use our Service as part of the Client’s resources to
                develop Client applications. Subject to compliance with these
                Terms, Clients may grant their own customers/users limited
                rights to use our Service solely to view and interact with such
                resource through your Client Applications. Client’s own
                customers/users that view and interact with such resources are
                considered End Users.
              </p>
              <p className={cx("marginBottom20")}>
                Clients may not allow End Users to use our Service for purposes
                unrelated to supporting Client’s own offerings nor grant End
                Users administrator, configuration or similar use of our
                Service. Clients may not charge End Users a specific fee for the
                use of our Service, but may charge a general fee for its own
                offerings. Clients are solely responsible for its own products,
                support offerings and relationships with these End Users
                (including End Users’ use of our Service). Gataca has no direct
                or indirect warranty, indemnification or other liability or
                obligation of any kind to these End Users.
              </p>
            </div>
            <div className={styles?.contentCol__section} id="paymentTerms__5">
              <h4 className={cx("heading4 marginBottom32")}>
                5. Payment terms
              </h4>
              <p className={cx("marginBottom20")}>
                You agree to pay fees in accordance with the rates listed at
                <Link to={pricingURL}>Pricing</Link>, or accessible via the
                Gataca Studio interface unless otherwise set forth in an order
                form or order confirmation between the parties.
              </p>
              <p className={cx("marginBottom20")}>
                You shall be responsible for and shall pay all taxes imposed on
                or with respect to the Service that is the subject of these
                Terms. If you are exempt from any such taxes for any reason, we
                will exempt you from such taxes on a going-forward basis once
                you deliver a duly executed and dated valid exemption
                certificate to our compliance department.
              </p>
              <p className={cx("marginBottom20")}>
                You agree to pay any and all additional costs, fines, or
                penalties, without limit, we incur from a governmental or
                regulatory body as a result of your use of the Service in
                violation of these Terms.
              </p>
              <p className={cx("marginBottom20")}>
                If you are overdue on any payment of undisputed fees and fail to
                pay within 10 business days of a written notice of your overdue
                payment, then we may apply a late fee of either 1.5% per month
                or the maximum allowed by applicable law, whichever is less. We
                reserve the right to suspend the Service until you pay the
                undisputed fees plus any late fees.
              </p>
              <p className={cx("marginBottom20")}>
                If we suspend the Service pursuant to this section, then we will
                have no liability for any damage, liabilities, losses (including
                any loss of data or profits) or any other consequences that you
                may incur with connection with any such suspension.
              </p>
            </div>
            <div
              className={styles?.contentCol__section}
              id="securityRisksAndDowntown__6"
            >
              <h4 className={cx("heading4 marginBottom32")}>
                6. Security Risks and Downtime
              </h4>
              <p className={cx("marginBottom20")}>
                <b>6.1 Security</b>
              </p>
              <p className={cx("marginBottom20")}>
                You understand and agree that cryptography and blockchain
                technologies are progressive fields. Technical advances in
                decryption, quantum computing, or security flaws exploitation
                may present risks to the Service or the Contents.
              </p>
              <p className={cx("marginBottom20")}>
                Gataca takes security very seriously. Gataca will strive for
                maximum levels of protection for the Service, by continuously
                updating the code underlying the Service and incorporating new
                security measures that account for the risks of such technical
                advances. Security risks may not be avoided despite our best
                efforts. As such, Gataca does not guarantee or otherwise warrant
                security of the Service. By using the Service or accessing the
                Contents, you acknowledge these inherent risks.
              </p>
              <p className={cx("marginBottom20")}>
                You agree to regularly update the operating system of your
                device and of any other computing system of the Authorized Users
                that interact with the Service. Gataca is not responsible for
                possible damages that may be caused as a consequence of the
                presence of a virus or an unauthorized use in the computer
                system used by you, End Users and Authorized Users for the
                connection to the Service and the Contents.
              </p>
              <p className={cx("marginBottom20")}>
                You agree to notify Gataca of any breach of security or
                unauthorized use to the Service.
              </p>
              <p className={cx("marginBottom20")}>
                You shall not attempt to gain unauthorized access to this
                Service or to any server, computer or database related to the
                Service. You agree not to attack the Service through a denial of
                service attack or a distributed denial of service attack.
                Failure to comply with this clause may lead to the commission of
                offenses punishable by the applicable regulations. We will
                report any such breach to the relevant authorities and will
                co-operate with them to discover the identity of the attacker.
              </p>
              <p className={cx("marginBottom20")}>
                <b>6.2 Downtime</b>
              </p>
              <p className={cx("marginBottom20")}>
                Gataca does not guarantee the non-existence of interruptions or
                errors in the Service or its Contents. We will make all
                commercially reasonable efforts to keep the Service available to
                you 100% of the time.
              </p>
              <p className={cx("marginBottom20")}>
                Gataca will have no liability for any damage, liabilities,
                losses (including any loss of Client Data – as defined below- or
                profits) or any other consequences that you may incur due to
                downtime of the Service.
              </p>
              <p className={cx("marginBottom20")}>
                Gataca, in an effort to mitigate risk inherent to Service errors
                or to improve Gataca Studio capabilities, will release from time
                to time, with or without notice, new releases of the Service.
                You understand and acknowledge that the Service is subject to
                modifications by Gataca and that such modifications may require
                you to upgrade your hardware, software or integrations in order
                to use the Service.
              </p>
              <p className={cx("marginBottom20")}>
                Although we try to avoid making changes to the Service that are
                not backwards compatible, if any such changes become necessary,
                we will use reasonable efforts to let you know at least thirty
                (30) days prior to implementing those changes.
              </p>
            </div>
            <div className={styles?.contentCol__section} id="serviceLevels__7">
              <h4 className={cx("heading4 marginBottom32")}>
                7. Service Levels
              </h4>
              <p className={cx("marginBottom20")}></p>
              <p className={cx("marginBottom20")}></p>
              <p className={cx("marginBottom20")}></p>
              <p className={cx("marginBottom20")}></p>
              <p className={cx("marginBottom20")}></p>
              <p className={cx("marginBottom20")}></p>
              <p className={cx("marginBottom20")}></p>
              <p className={cx("marginBottom20")}></p>
              <p className={cx("marginBottom20")}></p>
            </div>
            <div
              className={styles?.contentCol__section}
              id="warrantiesLiabilitiesIndemnity__8"
            >
              <h4 className={cx("heading4 marginBottom32")}>
                8. Warranties, Liability and Indemnity
              </h4>
              <p className={cx("marginBottom20")}>
                <b>8.1 Warranties</b>
              </p>
              <p className={cx("marginBottom20")}>
                We represent and warrant that the Service will operate in
                accordance with applicable documentation and will materially
                conform to any specifications contained therein. Except for our
                warranties set forth in this section, the Service is provided
                “As Is”. Gataca’s sole obligation, and your sole and exclusive
                remedy, in the event of any failure by us to comply with this
                section will be for us to recreate the affected Service or
                refund to you the fees you paid for the affected Service.
              </p>
              <p className={cx("marginBottom20")}>
                Without limiting our express warranties and obligations
                hereunder, we hereby disclaim any and all other warranties,
                expressed or implied, including but not limited to warranties of
                merchantability, non-infringement, fitness for a particular
                purpose, and warranties related to third-party equipment,
                material, services, or software.
              </p>
              <p className={cx("marginBottom20")}>
                You represent and warrant that you have provided adequate
                notices and obtained the necessary permissions and consents to
                provide Client Data (as defined below) to us for use and
                disclosure pursuant to our{" "}
                <Link to={privacyPolicyURL}>Privacy Policy</Link>.
              </p>
              <p className={cx("marginBottom20")}>
                You represent and warrant that, when using the Service to access
                third-party services including any blockchain ledger, or other
                identity network, public or private, that you are acting in
                compliance with all the relevant service’s terms and agreements,
                and that you are authorized to do so.
              </p>
              <p className={cx("marginBottom20")}>
                <b>8.2 Liabilities</b>
              </p>
              <p className={cx("marginBottom20")}>
                Under no circumstances will Gataca be liable to you, with the
                exceptions contemplated in the legislation in force, for any
                indirect, special, incidental, consequential or punitive
                damages, including but not limited to damages that may be due to
                the lack of availability, security, continuity or quality of the
                functioning of the Service and the Contents or the
                non-fulfilment of the expectation of usefulness that you may
                have attributed to the Service and the Contents, such us lost
                profits, lost sales or business, work stoppage, computer failure
                or malfunction, or lost data.
              </p>
              <p className={cx("marginBottom20")}>
                Gataca’s aggregate liability arising out of or related to these
                Terms for any direct damages, costs, or liabilities will not
                exceed the amount actually paid or payable by Client to Gataca
                under these Terms in the twelve (12) months immediately
                preceding the claim. This section shall not limit your liability
                arising from your breach of these terms or your indemnification
                obligations pursuant to these terms.
              </p>

              <p className={cx("marginBottom20")}>
                <b>8.3 Indemnity</b>
              </p>
              <p className={cx("marginBottom20")}>
                You agree to defend, indemnify, and hold Gataca harmless,
                including its subsidiaries, affiliates, and all of its
                respective officers, agents, partners, and employees, from and
                against any loss, damage, liability, claim, or demand, including
                reasonable attorneys’ fees and expenses, made by any third party
                due to or arising out of: (1) your contributions; (2) use of the
                Service; (3) breach of these Terms; (4) any breach of your
                representations and warranties set forth in these Terms; (5)
                your violation of the rights of a third party, including but not
                limited to intellectual property rights; or (6) any harmful act
                toward any other End User or Client of the Service with whom you
                connected via the Service. Notwithstanding the foregoing, Gataca
                reserves the right, at its own expense, to assume exclusive
                defense and control of any matter otherwise subject to
                indemnification by you and, in such case, you agree to cooperate
                with Gataca in the defense of such matter.
              </p>
              <p className={cx("marginBottom20")}>
                <b>8.4 Force Majeure</b>
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
            <div className={styles?.contentCol__section} id="clientData__9">
              <h4 className={cx("heading4 marginBottom32")}>9. Client Data</h4>
              <p className={cx("marginBottom20")}>
                Your DIDs, your cryptographic key pairs, Credentials licitly
                obtained from End Users and stored in your Gataca Studio
                account, Credentials licitly issued by you or to you, your
                backup files, and any other data, included but not limited to
                Authorized User’s Personal Data, billing, and legal entity data,
                that you provide to us are referred to here as “
                <b>Client Data</b>” Where Client Data includes Personal Data,
                clause 9 below (Data Protection) of these Terms will apply.
              </p>
              <p className={cx("marginBottom20")}>
                YOU ACKNOWLEDGE AND ACCEPT THAT YOU ARE SOLELY RESPONSIBLE FOR
                THE LEGALITY, RELIABILITY, INTEGRITY, ACCURACY AND QUALITY OF
                YOUR CLIENT DATA.
              </p>
              <p className={cx("marginBottom20")}>
                You have the ability to delete all your Client Data from your
                Gataca Studio account via the Service interface.
              </p>
              <p className={cx("marginBottom20")}>
                <b>9.1 DIDs</b>
              </p>
              <p className={cx("marginBottom20")}>
                When setting up an account with Gataca, you acknowledge and
                consent to the creation of decentralized identifiers (“
                <b>DIDs</b>”) on your behalf.
              </p>
              <p className={cx("marginBottom20")}>
                Gataca publishes DIDs and associated public cryptographic keys
                on one of the supported blockchain networks to serve as on-chain
                identifiers. You understand and accept that information on
                blockchain networks cannot be deleted due to the immutability
                property of such technologies.
              </p>
              <p className={cx("marginBottom20")}>
                <b>9.2 Cryptographic Keys</b>
              </p>
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
                not share it with anyone else.
              </p>
              <p className={cx("marginBottom20")}>
                <b>9.3 Verifiable Credentials</b>
              </p>
              <p className={cx("marginBottom20")}>
                With Gataca Studio you can issue or verify personal information
                to/from End Users in electronic format, following the{" "}
                <Link to={"https://www.w3.org/TR/vc-data-model/"}>
                  Verifiable Credentials data model
                </Link>
                . Issued and verified Verifiable Credentials are stored in your
                Gataca Studio account.
              </p>
              <p className={cx("marginBottom20")}>
                Gataca makes no representation or warranty regarding the
                veracity or accuracy of Credentials issued by YOU, BY End Users
                or BY OTHER Third Parties.
              </p>
              <p className={cx("marginBottom20")}>
                You are responsible for complying with the terms and conditions
                that these third parties may impose on their Credentials and you
                agree not hold Gataca liable for any infringement of such terms
                and conditions.
              </p>
            </div>
            <div
              className={styles?.contentCol__section}
              id="dataProtection__10"
            >
              <h4 className={cx("heading4 marginBottom32")}>
                10. Amendment and Termination
              </h4>
              <p className={cx("marginBottom20")}>
                <b>
                  10.1 Personal Data processed by Gataca as a Data Controller
                </b>
              </p>
              <p className={cx("marginBottom20")}>
                In accordance with the applicable data protection regulations,
                Personal Data provided while using the Service may be processed
                by Gataca as a Data Controller under the provisions of the{" "}
                <Link to={privacyPolicyURL}>Privacy Policy</Link>
                and, where applicable, the{" "}
                <Link to={cookiePolicyURL}>Cookies Policy</Link>. By using the
                Service, you acknowledge and accept the processing of such
                Personal Data and declare that all information or data provided
                is true, current and corresponds to reality.
              </p>
              <p className={cx("marginBottom20")}>
                <b>
                  10.2 Personal Data processed by Gataca as a Data Processor
                </b>
              </p>
              <p className={cx("marginBottom20")}>
                Where Gataca acts as a Data Processor or a Data Sub-Processor
                (as defined in Annex I) regarding the Personal Data that may be
                processed for the performance of the Service under these Terms,
                the Data Processing Terms (included as Annex I of these Terms)
                shall govern the applicable terms for collection, processing and
                controlling of Personal Data.
              </p>
            </div>
            <div
              className={styles?.contentCol__section}
              id="publicityRights__11"
            >
              <h4 className={cx("heading4 marginBottom32")}>
                11. Publicity Rights
              </h4>
              <p className={cx("marginBottom20")}>
                By accepting these Terms, you agree that Gataca may identify
                Client as a Gataca customer in its promotional materials,
                including Gataca’s Website. Gataca will promptly stop doing so
                upon Client’s written request.
              </p>
            </div>
            <div
              className={styles?.contentCol__section}
              id="amendmentAndTermination__12"
            >
              <h4 className={cx("heading4 marginBottom32")}>
                12. Amendment and termination
              </h4>
              <p className={cx("marginBottom20")}>
                We may revise these Terms from time to time. If we do, those
                revised Terms will supersede prior versions. Unless we say
                otherwise, revisions will be effective upon the effective date
                indicated at the top of these Terms. We will strive to provide
                you advance electronic notice of any material revisions. For
                other revisions, we will update the effective date of these
                Terms at the top of the page.
              </p>
              <p className={cx("marginBottom20")}>
                We encourage you to check the effective date of these Terms
                whenever you use the Service. Your continued access or use of
                the Service constitutes your acceptance of any revisions. If you
                do not agree to the revisions, you should stop using the
                Service.
              </p>
              <p className={cx("marginBottom20")}>
                We may terminate these Terms and access to the Service for any
                reason upon thirty (30) days written notice to you.
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
                Upon termination of these Terms, the following clauses will
                survive: 5 (Payment Terms), 9 (Data Protection) and 10
                (Publicity Rights).
              </p>
              <p className={cx("marginBottom20")}>
                Termination of these Terms does not imply the termination of any
                document expressly referred to in section 2 above.
              </p>
            </div>
            <div
              className={styles?.contentCol__section}
              id="agreementEntirety__13"
            >
              <h4 className={cx("heading4 marginBottom32")}>
                13. Agreement in its entirety
              </h4>
              <p className={cx("marginBottom20")}>
                These Terms and any document expressly referred to constitute
                the integral agreement between you and Gataca in relation to the
                subject matter of these Terms and supersede all other prior
                agreements, understandings or promises made between you and
                Gataca orally or in writing in relation to the subject matter of
                these Terms.
              </p>
              <p className={cx("marginBottom20")}>
                In the case of any conflict between the{" "}
                <Link to={termOfServiceURL}>Generic Terms of Service</Link> and
                these Terms, the latter shall prevail.
              </p>
            </div>
            <div
              className={styles?.contentCol__section}
              id="applicableLawAndJurisdiction__14"
            >
              <h4 className={cx("heading4 marginBottom32")}>
                14. Applicable law and jurisdiction
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
                <b>1. Definitions</b>
              </p>
              <p className={cx("marginBottom20")}>
                In these Data Processing Terms, the capitalized terms set out
                below shall have the following meanings:
              </p>
              <p className={cx("marginBottom20")}>
                <b>Personal Data:</b> Data about identified or identifiable
                natural persons according to Art. 4 of the GDPR.
              </p>
              <p className={cx("marginBottom20")}>
                <b>Data Controller:</b> A natural or legal person who (either
                alone or jointly or in common with other persons) determines the
                purposes for which and the manner in which any personal
                information are, or are to be, processed.
              </p>
              <p className={cx("marginBottom20")}>
                <b>Data Processor:</b> Any natural or legal person who processes
                the data on behalf of a Data Controller.
              </p>
              <p className={cx("marginBottom20")}>
                <b>Data Sub-Processor:</b> Any natural or legal person who
                processes the data on behalf of a Data Processor.
              </p>
              <p className={cx("marginBottom20")}>
                <b>
                  2. Purpose, nature, and data subjects of the data processing
                </b>
              </p>
              <p className={cx("marginBottom20")}>
                Gataca, as a Data Processor or a Data Sub-Processor, acting in
                the name and on <b>your</b> behalf (as a Data Controller or,
                where appropriate, a Data Processor) may access Personal Data in
                order to provide the Service set out in the Terms. Gataca will
                access and process the Personal Data in compliance with the data
                protection regulations applicable from time to time.
              </p>
              <p className={cx("marginBottom20")}>
                The categories of data subjects and Personal Data to which
                Gataca will have access will be those necessary for the purposes
                of the Service performance.
              </p>
              <p className={cx("marginBottom20")}>
                In particular, the categories of data subjects will be:
              </p>
              <p className={cx("marginBottom20")}>
                End Users (when their data is shared with the Client for the
                purpose of providing the Service)
              </p>
              <p className={cx("marginBottom20")}>
                Gataca will perform any processing operations necessary to
                deliver the Service to you.
              </p>
              <p className={cx("marginBottom20")}>
                <b>3. Term</b>
              </p>
              <p className={cx("marginBottom20")}>
                These Data Processing Terms will apply during the performance of
                the Services.
              </p>
              <p className={cx("marginBottom20")}>
                Once the Services are performed, Gataca will upon your written
                request immediately delete or return all Personal Data, along
                with all existing copies, unless Union or Member State law
                requires storage of the Personal Data, in which case Gataca will
                inform you.
              </p>
              <p className={cx("marginBottom20")}>
                <b>4. Your obligations</b>
              </p>
              <p className={cx("marginBottom20")}>
                As the Data Controller, you undertake to:
              </p>
              <p className={cx("marginBottom20")}>
                4.1 Deliver to Gataca the Personal Data referred to in clause 2
                of these Data Processing Terms.
              </p>
              <p className={cx("marginBottom20")}>
                4.2 Where appropriate, perform impact assessments on the
                protection of Personal Data processed by Gataca.
              </p>
              <p className={cx("marginBottom20")}>
                4.3 Conduct prior consultations when necessary.
              </p>
              <p className={cx("marginBottom20")}>
                4.4 Ensure, previously and during the processing, that Gataca
                complies with the GDPR or any applicable data protection
                regulations.
              </p>
              <p className={cx("marginBottom20")}>
                4.5 Monitor the processing, including but not limited to
                inspections and audits.
              </p>
              <p className={cx("marginBottom20")}>
                4.6 Authorise Gataca to, if it is necessary to render the
                Service, process the Personal Data outside the European Economic
                Area, complying with the guarantees required by applicable laws.
              </p>
              <p className={cx("marginBottom20")}>
                <b>5. Obligations of Gataca</b>
              </p>
              <p className={cx("marginBottom20")}>
                Gataca, as a Data Processor or Sub-Processor, and all its
                personnel, undertakes to:
              </p>
              <p className={cx("marginBottom20")}>
                5.1 Process the Personal Data only according to the instructions
                set out in these Data Processing Terms and those received from
                you in writing. In this regard, Gataca must immediately inform
                you if, in our opinion, an instruction infringes the GDPR or any
                other data protection provision.
              </p>
              <p className={cx("marginBottom20")}>
                5.2 If it is required to process the Personal Data for any other
                purposes, inform you of this legal requirement prior to the
                processing, unless that law prohibits such information on
                important grounds of public interest.
              </p>
              <p className={cx("marginBottom20")}>
                5.3 Process the Personal Data in accordance with the security
                requirements imposed by Article 32 of the GDPR. Gataca will
                follow and implement the necessary or appropriate technical and
                organisational security measures to ensure the confidentiality,
                secrecy, and integrity of the Personal Data to which Gataca has
                access.
              </p>
              <p className={cx("marginBottom20")}>
                5.4 Keep the Personal Data that Gataca accesses to while
                performing the Service and those resulting from the processing
                confidential.
              </p>
              <p className={cx("marginBottom20")}>
                5.5 Notify you of any Personal Data breach that must be
                communicated in accordance with Articles 33 and 34 of the GDPR.
              </p>
              <p className={cx("marginBottom20")}>
                5.6 Considering the nature of the processing, assist you by
                appropriate technical and organisational measures, insofar as
                this is possible, for the fulfilment of the Data Controller’s
                obligation to respond to requests for exercising the data
                subject's rights laid down in Chapter III of the GDPR.
              </p>
              <p className={cx("marginBottom20")}>
                5.7 Assist you in ensuring compliance with your obligations
                pursuant to Articles 32 to 36 considering the nature of
                processing and the information available to Gataca.
              </p>
              <p className={cx("marginBottom20")}>
                5.8 Keep a record of all the categories of processing activities
                that Gataca carries out on behalf of Client in compliance with
                Article 30.2 of the GDPR.
              </p>
              <p className={cx("marginBottom20")}>
                5.9 Make available to you all information necessary to
                demonstrate compliance with the obligations laid down in these
                Data Processing Terms.
              </p>
              <p className={cx("marginBottom20")}>
                5.10 Where appropriate and required by law, appoint a Data
                Protection Officer (DPO) and communicate his/her name and
                contact details or provide you with the contact details of the
                person in charge of data protection.
              </p>
              <p className={cx("marginBottom20")}>
                5.11 Comply and ensure that our own subcontractors or any person
                acting under its authority or on its behalf comply with the
                applicable data protection laws and with these Data Processing
                Terms.
              </p>
              <p className={cx("marginBottom20")}>
                5.12 Provide all necessary assistance and cooperation to you in
                ensuring compliance with legal and contractual data protection
                requirements, including enabling inspection, control and audit
                by a Supervisory Authority.
              </p>
              <p className={cx("marginBottom20")}>
                <b>6. Subcontracting</b>
              </p>
              <p className={cx("marginBottom20")}>
                Gataca may disclose Personal Data to subcontractors only for
                purposes of providing the Services (“
                <b>Gataca Sub-Processors</b>”), provided that Gataca will impose
                comparable obligations on the Gataca Sub-Processors regarding
                the security and confidentiality of Personal Data as those set
                forth in these Data Processing Terms.
              </p>
              <p className={cx("marginBottom20")}>
                Gataca will make available a list of its Sub-Processors to you
                upon previous written request.
              </p>
              <p className={cx("marginBottom20")}>
                For the avoidance of doubt, where a Gataca Sub-Processor fails
                to fulfil its obligations under any sub-processing agreement or
                any applicable data protection laws, Gataca will remain fully
                liable to the you for the fulfilment or the performance of that
                Gataca Sub-Processor's obligations.
              </p>
              <p className={cx("marginBottom20")}>
                <b>7. Confidentiality</b>
              </p>
              <p className={cx("marginBottom20")}>
                Gataca grants full confidentiality regarding the documentation,
                information and Personal Data that may access under these Data
                Processing Terms.
              </p>
              <p className={cx("marginBottom20")}>
                Gataca must take the necessary measures to ensure that the
                information received is only distributed to persons within our
                own organizational group who are affected by the purpose of
                these Terms. Gataca must ensure that all employees, consultants,
                subcontractors and others who report to Gataca and who process
                personal data, are bound by an appropriate confidentiality
                agreement and that they are informed about how Personal Data
                processing may occur. Gataca is responsible for ensuring that
                individuals who have access to Personal Data are informed about
                how they may process Personal Data in accordance with the
                instructions received from the Client.
              </p>
              <p className={cx("marginBottom20")}>
                <b>8. Liabilities</b>
              </p>
              <p className={cx("marginBottom20")}>
                You and Gataca will be individually responsible for complying
                with their respective obligations regarding Personal Data
                protection. They will be responsible for and hold the other
                harmless against damages of any kind that it may suffer owing to
                the breaching one’s infringement of its obligations under
                applicable law or those set forth in these Data Processing
                Terms.
              </p>
              <p className={cx("marginBottom20")}>
                <b>9. Miscellaneous</b>
              </p>
              <p className={cx("marginBottom20")}>
                In the event of any conflict or inconsistency between the
                provisions of the Terms and the Data Processing Terms, the
                latter shall prevail in relation to its subject matter.
              </p>
            </div>
            <div className={styles?.contentCol__section} id="contact__15">
              <h4 className={cx("heading4 marginBottom32")}>Contact</h4>
              <p className={cx("marginBottom20")}>
                If you have any questions, comments or suggestions regarding the
                Terms, please send such comments, suggestions and queries to{" "}
                <a href="mailto: legal@gataca.io" type="email">
                  legal@gataca.io
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

export default TermsOfServiceStudio
