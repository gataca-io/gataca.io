import { Link, PageProps } from "gatsby"
import * as React from "react"
import * as styles from "./index.module.scss"
import cx from "classnames"
import Layout from "../../components/templates/mainLayout/MainLayout"
import tableOfContent from "../../data/termsOfUseWallet"
import { LinkModel } from "../../interfaces/interfaces"
import TableOfContentContainer from "../../components/templates/tableOfContent/elements/tableOfContentContainer/TableOfContentContainer"
import {
  cookiePolicyURL,
  gatacaURL,
  privacyPolicyURL,
  termOfServiceURL,
} from "../../data/globalData"

export type ITableOfContentProps = {
  navigationObject?: LinkModel
  className?: string
}
const TermsOfUseWallet: React.FC<PageProps> = () => {
  const [tableOfContentOpenedID, setTableOfContentOpened] = React.useState("")
  const [strapiData, setStrapiData] = React.useState<any | undefined>()

  React.useEffect(() => {
    if (!strapiData) {
      getStrapiData()
    }
  }, [])

  const getStrapiData = async () => {
    await fetch(
      `${process.env.STRAPI_API_URL}/api/terms-of-service-wallet?&populate=*`
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
            Gataca Wallet | Terms of service
          </h1>
          <p className={cx("bodyRegularXL")}>Effective date: August 19, 2022</p>
        </div>
        <div className={styles?.sectionMain}>
          <div className={styles?.sectionMain__dataContentCol}>
            <div className={styles?.contentCol__section} id="introduction__1">
              <h4 className={cx("heading4 marginBottom32")}>1. Introduction</h4>

              <p className={cx("marginBottom20")}>
                These specific Terms of Service (“<b>Agreement</b>”) is a legal
                agreement between you and Gataca for the use of our Wallet.
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
                The Wallet and its electronic interactions with any products and
                services provided by Gataca, such as the Website or the Gataca
                Platform, are referred to here as (collectively the “
                <b>Contents</b>”).
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
                To use the Service, you must review and accept these Terms. By
                clicking on “Create Wallet,” or “Open your Wallet”, indicating
                acceptance electronically, or by accessing or using our Service,
                you agree to a full, complete and unreserved acceptance of each
                and every one of the terms included in this Agreement.
              </p>
              <p className={cx("marginBottom20")}>
                This Agreement includes by reference:
              </p>
              <ul>
                <li className={cx("marginBottom20")}>
                  <p>
                    Gataca’s{" "}
                    <Link to={termOfServiceURL}> Generic Terms of Service</Link>
                    : includes generic clauses and clauses common to all
                    products and services, including the Service subject matter
                    of this Agreement.
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
                use the Service and only for the purposes described by Gataca.
              </p>
              <p className={cx("marginBottom20")}>
                Until termination of this Agreement and as long as you meet any
                applicable payment obligations and comply with this Agreement,
                Gataca grants to you a non-exclusive, non-transferable,
                revocable license to you for the purpose of using the Wallet, at
                your election and without obligation. Gataca reserves all other
                rights in the Service.
              </p>
            </div>
            <div
              className={styles?.contentCol__section}
              id="accountRegistration__4"
            >
              <h4 className={cx("heading4 marginBottom32")}>
                4. Account Registration and User Data
              </h4>
              <p className={cx("marginBottom20")}>
                <b>4.1 Account Registration</b>
              </p>
              <p className={cx("marginBottom20")}>
                During the Gataca Wallet registration process, you shall provide
                an email address. Upon successful registration, you will have in
                your Wallet two Credentials issued by Gataca, one created from
                the email address you provided, and another Credential with your
                Device ID automatically retrieved from your mobile device.
              </p>
              <p className={cx("marginBottom20")}>
                The email address provided during the registration process is
                used as a User account identifier. Gataca will store both your
                email address and Device ID with the sole purpose of providing
                the Service and sending you communications related to the
                Service.
              </p>
              <p className={cx("marginBottom20")}>
                <b>4.2 User Data</b>
              </p>
              <p className={cx("marginBottom20")}>
                Your DIDs, your cryptographic key pairs, Credentials licitly
                obtained and stored in your Wallet, and your backup files and
                any other data, included but not limited to End User Personal
                Data that the End User provides to us or to our Clients, are
                referred to here as “User Data”.
              </p>
              <p className={cx("marginBottom20")}>
                YOU ACKNOWLEDGE AND ACCEPT THAT YOU ARE SOLELY RESPONSIBLE FOR
                THE CUSTODY OF YOUR USER DATA.
              </p>
              <p className={cx("marginBottom20")}>
                You have the ability to delete all User Data from your device
                via the Wallet interface.
              </p>
              <p className={cx("marginBottom20")}>
                You acknowledge and accept that deleting the App from your
                device does not delete the User Data from your device.
              </p>
              <p className={cx("marginBottom20")}>
                To obtain further information about the processing of the User
                Data, please visit our{" "}
                <Link to={privacyPolicyURL}>Privacy Policy</Link>
              </p>

              <p className={cx("marginBottom20")}>
                <b>4.2.1 DIDs</b>
              </p>
              <p className={cx("marginBottom20")}>
                When setting up a Wallet account with Gataca, you acknowledge
                and consent to the creation of decentralized identifiers (“
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
                <b>4.2.2 Cryptographic keys</b>
              </p>
              <p className={cx("marginBottom20")}>
                The Gataca Wallet creates on your behalf one or more
                cryptographic key pairs for each DID. Cryptographic key pairs
                are composed of one or more public key and associated private
                keys. The public keys will be linked to your DIDs and published
                on a designated blockchain network.
              </p>
              <p className={cx("marginBottom20")}>
                The private keys will be used by the Wallet to execute signing
                and encryption or decryption activities within the Wallet. The
                private keys are stored in the secure enclave of your device and
                are only accessible by the Wallet using your biometric
                information (fingerprint or face ID) enabled by hardware-based
                device capabilities. You shall have biometric capabilities in
                your device for the use of the Service.
              </p>
              <p className={cx("marginBottom20")}>
                You agree to (a) keep your private keys confidential and to not
                share it with anyone else and (b) to not enable biometric
                information from other individuals in your device where the
                Wallet is installed.
              </p>
              <p className={cx("marginBottom20")}>
                <b>4.2.3 Verifiable Credentials</b>
              </p>
              <p className={cx("marginBottom20")}>
                With the Wallet you can download, create, store, share and
                manage personal information in electronic format, following the
                Verifiable Credentials data model specified by the W3C
                (“Credentials”). You may (a) download Credentials into your
                Wallet that contain claims about you and are attested by Gataca
                or third-parties, (b) create your own Credentials from the
                limited set of Credential types offered in the Wallet and (c)
                share any of the Credentials stored in your Wallet with third
                parties that have Credential validation capabilities.
              </p>
              <p className={cx("marginBottom20")}>
                GATACA DOES NOT HAVE ACCESS TO, NOR COLLECTS DATA ABOUT
                DOWNLOADED CREDENTIALS ATTESTED BY THIRD PARTIES OR
                SELF-ATTESTED CREDENTIALS THAT ARE NOT VALIDATED BY Gataca, OR
                HOW CREDENTIALS ARE USED OR SHARED WITH THIRD PARTIES.
              </p>
              <p className={cx("marginBottom20")}>
                Gataca makes no representation or warranty regarding the
                veracity or accuracy of Credentials issued by you or Third
                Parties, or regarding the use of any or all of your Credentials
                in your relationship with Third Parties. You are responsible for
                complying with the Terms and Conditions that these Third Parties
                may impose on Credentials ISSUED TO YOU or on your use of their
                Services and you agree not hold Gataca liable for any
                infringement of such Terms and Conditions.
              </p>
              <p className={cx("marginBottom20")}>
                Notwithstanding the foregoing, you acknowledge and accept that
                Gataca stores information (a) about Credentials that are issued
                by Gataca, for the sole purpose of providing the Service and (b)
                about Credentials that you explicitly consent to sharing with
                Gataca for the purpose of accessing other services provided by
                Gataca.
              </p>
              <p className={cx("marginBottom20")}>
                <b>4.2.4 Backup services</b>
              </p>
              <p className={cx("marginBottom20")}>
                Gataca also provides backup and recovery services for the
                content of your Wallet. The backup file generated by the Wallet
                includes all your User Data and any other User-specific
                information. The backup file is stored in a cloud storage system
                provided by you in any of the cloud services that Gataca
                supports. The backup file is protected by (a) a 6-digit security
                code chosen by you and (b) a recovery code consisting of 44
                case-sensitive letters provided by the Wallet (collectively, the
                “<b>Secrets</b>”).
              </p>
              <p className={cx("marginBottom20")}>
                Gataca will not have access to or store any of your Secrets.
              </p>
              <p className={cx("marginBottom20")}>
                You acknowledge and agree that you will be responsible for
                keeping your Secrets and backup file secure, private,
                confidential and to not share it with anyone else.
              </p>
            </div>
            <div className={styles?.contentCol__section} id="responsibleUse__5">
              <h4 className={cx("heading4 marginBottom32")}>
                5. Responsible Use
              </h4>
              <p className={cx("marginBottom20")}>
                You are obliged and undertake to use the Service and its
                Contents, including the Contents in accordance with the
                regulations applicable at all times, following the provisions of
                these Terms and any other notice or instructions made known to
                you, either by means of this document or any other means within
                the Contents that are part of the Service, as well as complying
                with the generally accepted rules of coexistence, respect,
                morality and good customs.
              </p>
              <p className={cx("marginBottom20")}>
                You are obliged and undertake not to use the Service and its
                Contents for illicit purposes or effects, prohibited in this
                document or by the applicable regulations, including but not
                limited to actions that: (a) violates any third-party right,
                including any copyright, trademark, patent, trade secret, moral
                right, privacy right, right of publicity, or any other
                intellectual property or proprietary right; (b) is harassing,
                abusive, threatening, harmful, invasive of another’s privacy,
                defamatory, false, intentionally misleading, pornographic,
                patently offensive, promotes hatred or physical harm of any kind
                against any group or individual or is otherwise objectionable;
                (c) is in violation of any law, regulation, or obligations or
                restrictions imposed by any third party; (d) attempts to bypass
                or break any security mechanism on the Service which could pose
                a security or service risk to us, other CLIENTS or END USERS;
                (e) attempts to reverse-engineer the Service in order to find
                limitations, vulnerabilities, or steal our Intellectual Property
                including trade secrets, and copyrighted works; (f) launches or
                facilitates, whether intentionally or unintentionally, any
                activity that adversely impacts the availability, reliability,
                or stability of the Services; (g) transmits any material or data
                that contains viruses, Trojan horses, spyware, works, or any
                other malicious or harmful program; (h) engages in any
                unsolicited advertising, marketing, or other activities
                prohibited by applicable law or regulation covering anti-spam,
                data protection, or privacy legislation in any relevant
                jurisdiction; (i) attempts to solicit information from
                individuals without their explicit consent or under false
                pretenses; (j) creates false identities, DIDs, credentials, or
                any other attempt to use the Service for nefarious purposes.{" "}
              </p>
            </div>
            <div
              className={styles?.contentCol__section}
              id="intellectualPropertyRights__6"
            >
              <h4 className={cx("heading4 marginBottom32")}>
                6. Intellectual property rights
              </h4>
              <p className={cx("marginBottom20")}>
                All trademarks, trade names, distinctive signs of any kind and
                any intellectual property rights over the Service and its
                Contents are the property of Gataca or, where appropriate, of
                third parties.
              </p>
              <p className={cx("marginBottom20")}>
                Under no circumstances does access to the Service imply any kind
                of permission, waiver, transmission, license or total or partial
                transfer of said rights.
              </p>
              <p className={cx("marginBottom20")}>
                The unauthorised use of the information contained in this
                Service, as well as any breach of the intellectual or industrial
                property rights of Gataca or of third parties who have licensed
                or assigned part of the Content, will give rise to the legally
                established responsibilities.
              </p>
              <p className={cx("marginBottom20")}>
                All copyrights of this document are also reserved by the
                regulations and international treaties of intellectual property
                that are applicable. Copying, reproduction or dissemination, in
                whole or in part, by any means whatsoever, is expressly
                prohibited.
              </p>
            </div>
            <div
              className={styles?.contentCol__section}
              id="securityRisksAndDowntime__7"
            >
              <h4 className={cx("heading4 marginBottom32")}>
                7. Security Risks & Downtime
              </h4>
              <p className={cx("marginBottom20")}>
                <b>7.1 Security</b>
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
                You agree to (a) regularly update the operating system of your
                device and of any other computing system of the User that
                interacts with the Service, and (b) to keep the Wallet always
                updated with the last available version. Gataca is not
                responsible for possible damages that may be caused as a
                consequence of the presence of a virus or an unauthorized use in
                the computer system used by you for the connection to the
                Service and the Contents.
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
                <b>7.2 Downtime</b>
              </p>
              <p className={cx("marginBottom20")}>
                Gataca does not guarantee the non-existence of interruptions or
                errors in the Service or its Contents. We will make all
                commercially reasonable efforts to keep the Service available to
                you 100% of the time.
              </p>
              <p className={cx("marginBottom20")}>
                Gataca will have no liability for any damage, liabilities,
                losses (including any loss of data or profits) or any other
                consequences that you may incur due to downtime of the Services.{" "}
              </p>
              <p className={cx("marginBottom20")}>
                Gataca, in an effort to mitigate risk inherent to Service errors
                or to improve the Wallet capabilities, will release from time to
                time, with or without notice, new releases of the Wallet. You
                understand and acknowledge that such modifications may require
                you to upgrade your hardware or software in order to use the
                Wallet.
              </p>

              <p className={cx("marginBottom20")}>
                <b>7.3 Loss of User data</b>
              </p>
              <p className={cx("marginBottom20")}>
                You acknowledge and accept that in the event of loss, damage or
                stolen mobile device, or due to Service errors, you may
                experience a total/partial loss of User Data.
              </p>
              <p className={cx("marginBottom20")}>
                You may regain access to your User Data by recovering it from a
                backup file, but you are responsible for the generation and
                provisioning of said file and the necessary Secrets.
              </p>
              <p className={cx("marginBottom20")}>
                Gataca will not be held liable for any total/partial loss of
                User Data.
              </p>
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
                YOU UNDERSTAND AND AGREE THAT YOUR USE OF THE SERVICE IT AT YOUR
                SOLE RISK. Gataca makes no warranties of any kind, including but
                not limited to with respect to the Service and the Contents,
                whether express, implied, statutory, of merchantability,
                non-infringement or otherwise.
              </p>
              <p className={cx("marginBottom20")}>
                <b>8.2 Liabilities</b>
              </p>
              <p className={cx("marginBottom20")}>
                Gataca excludes, with the exceptions contemplated in the
                legislation in force, any liability for damages of any nature,
                including but not limited to damages that may be due to the lack
                of availability, security, continuity or quality of the
                functioning of the Service and the Contents, and the
                non-fulfilment of the expectation of usefulness that you may
                have attributed to the Service and the Contents.
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
                toward any other User of the Service with whom you connected via
                the Service. Notwithstanding the foregoing, Gataca reserves the
                right, at its own expense, to assume exclusive defense and
                control of any matter otherwise subject to indemnification by
                you and, in such case, you agree to cooperate with Gataca in the
                defense of such matter.
              </p>
            </div>
            <div
              className={styles?.contentCol__section}
              id="linksOtherSites__9"
            >
              <h4 className={cx("heading4 marginBottom32")}>
                9. Links to other sites
              </h4>
              <p className={cx("marginBottom20")}>
                Our Service may contain links to other sites that are not
                operated by Gataca. If you click a third-party link, you will be
                directed to that third party's site. We strongly advise you to
                review the Privacy Policy of every site you visit.
              </p>
              <p className={cx("marginBottom20")}>
                We have no control over and assume no responsibility for the
                content, privacy policies or practices of any third-party sites
                or services.
              </p>
            </div>
            <div
              className={styles?.contentCol__section}
              id="amendmentTermination__10"
            >
              <h4 className={cx("heading4 marginBottom32")}>
                10. Amendment and Termination
              </h4>
              <p className={cx("marginBottom20")}>
                Gataca advises Users to read this document carefully each time
                they access the Contents and/or Service hosted and reproduced.
              </p>
              <p className={cx("marginBottom20")}>
                Gataca reserves the right to unilaterally modify these Terms at
                any time, in whole or in part. The modification shall take
                effect as soon as it is published in the permanent link or in
                the conditions associated with the registration. If you do not
                agree to the modifications introduced, you shall refrain from
                using the Service.
              </p>
              <p className={cx("marginBottom20")}>
                Gataca may choose to unilaterally interrupt, suspend or
                terminate access to the Service and the Contents, regardless of
                the provisions of the conditions governing the provision of the
                Service and/or Contents provided. Such situations shall not
                alter the validity of the prohibitions on the use of the
                Contents set forth herein.
              </p>
              <p className={cx("marginBottom20")}>
                Gataca will, if possible, give notice of such circumstances
                (suspension, interruption or termination of access to the
                Contents) by including the information referred to through the
                means of communication it deems appropriate for its wider
                circulation.
              </p>
            </div>
            <div
              className={styles?.contentCol__section}
              id="agreementEntirety__11"
            >
              <h4 className={cx("heading4 marginBottom32")}>
                11. Agreement in its entirety
              </h4>
              <p className={cx("marginBottom20")}>
                These Terms and any document expressly referred to in these
                Terms constitute the integral agreement between you and Gataca
                in relation to the subject matter of these terms and conditions
                and supersede all other prior agreements, understandings or
                promises made between you and Gataca orally or in writing in
                relation to the subject matter of these Terms.
              </p>
              <p className={cx("marginBottom20")}>
                In the case of any conflict between the terms of this Agreement
                and the terms of Gataca’s Generic Terms of Service, the terms of
                this service-specific Agreement shall prevail.
              </p>
            </div>
            <div
              className={styles?.contentCol__section}
              id="lawJurisdiction__12"
            >
              <h4 className={cx("heading4 marginBottom32")}>
                12. Applicable law and jurisdiction
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
                team shall be resolved by binding arbitration to the Courts and
                Tribunals of the city of Madrid.
              </p>
            </div>
            <div className={styles?.contentCol__section} id="contact__13">
              <h4 className={cx("heading4 marginBottom32")}>13. Contact</h4>
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

export default TermsOfUseWallet
