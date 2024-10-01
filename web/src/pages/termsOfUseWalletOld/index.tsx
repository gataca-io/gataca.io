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
          <p className={cx("bodyRegularXL")}>
            Effective date: September 5th, 2024
          </p>
        </div>
        <div className={styles?.sectionMain}>
          <div className={styles?.sectionMain__dataContentCol}>
            <div className={styles?.contentCol__section}>
              <p className={cx("marginBottom20")}>
                <b>
                  PLEASE READ THESE TERMS AND CONDITIONS CAREFULLY BEFORE
                  STARTING TO USE THE Gataca WALLET
                </b>
              </p>
            </div>
            <div className={styles?.contentCol__section} id="introduction__1">
              <h4 className={cx("heading4 marginBottom32")}>1. Introduction</h4>
              <p className={cx("marginBottom20")}>
                Gataca Labs S.L.U. and its affiliates (referred to as “
                <b>Gataca</b>” or “<b>we</b>”, “<b>our</b>” or “<b>us</b>”) is a
                cybersecurity company incorporated under the laws of Spain that
                provides decentralized digital identity technology through our
                software applications, including but not limited to our mobile
                ID wallet (the “<b>Wallet</b>”), and our identity platform for
                companies (“<b>Gataca Studio</b>”).
              </p>
              <p className={cx("marginBottom20")}>
                The terms “<b>you</b>”, “<b>your</b>”, and “<b>user</b>” refer
                to you as an individual.
              </p>
              <p className={cx("marginBottom20")}>
                These specific Terms of Service (“<b>Terms</b>” or the “
                <b>Agreement</b>”) is a legal agreement between you and Gataca
                for the use of the Wallet.
              </p>
              <p className={cx("marginBottom20")}>
                The Wallet includes graphics, photographs, artwork, images,
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
                    Gataca's,{" "}
                    <a href="https://gataca.io/privacy-policy/" target="_blank">
                      Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a href="https://gataca.io/cookie-policy/" target="_blank">
                      Cookies Policy
                    </a>
                    .
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
                You must be over 14 years old to use the Wallet.
              </p>
              <p className={cx("marginBottom20")}>
                By clicking on “Create Wallet,” or “Open your Wallet”,
                indicating acceptance electronically, or by accessing or using
                the Wallet, you agree to a full, complete and unreserved
                acceptance of each and every one of the terms included in these
                Terms.
              </p>
              <p className={cx("marginBottom20")}>
                If you do not agree to all these Terms, you shall refrain from
                using the Wallet.
              </p>
            </div>
            <div className={styles?.contentCol__section} id="accessToWallet__3">
              <h4 className={cx("heading4 marginBottom32")}>
                3. Access to the Wallet
              </h4>
              <p className={cx("marginBottom20")}>
                The operating systems that support the download of the Wallet
                are iOS and Android.
              </p>
              <p className={cx("marginBottom20")}>
                In order to use the Wallet you must access Google Play or Apple
                Store and download the application (hereinafter "<b>App</b>").
                Once the App is downloaded, you must provide a valid email
                address, and accept these Terms to create your Wallet account.
              </p>
              <p className={cx("marginBottom20")}>
                The creation of a Wallet account and the use of the Wallet are
                free of charge.
              </p>
            </div>
            <div
              className={styles?.contentCol__section}
              id="rightsUseOfService__4"
            >
              <h4 className={cx("heading4 marginBottom32")}>
                4. Your rights to use the service
              </h4>
              <p className={cx("marginBottom20")}>
                You are only granted the right to use the Wallet and only for
                the purposes described by Gataca.
              </p>
              <p className={cx("marginBottom20")}>
                Until termination of these Terms and as long as you comply with
                these Terms, Gataca grants to you a non-exclusive,
                non-transferable, revocable license to you for the purpose of
                using the Wallet, at your election and without obligation.
                Gataca reserves all other rights in the Wallet.
              </p>
              <p className={cx("marginBottom20")}>
                These Terms shall be in force for as long as you use the Wallet.
              </p>
            </div>
            <div
              className={styles?.contentCol__section}
              id="responsibilitiesRestrictions__5"
            >
              <h4 className={cx("heading4 marginBottom32")}>
                5. Responsibilities and restrictions
              </h4>
              <p className={cx("marginBottom20")}>
                <b>4.1 Account Registration</b>
              </p>
              <p className={cx("marginBottom20")}>
                You will use the Wallet only in compliance with these Terms,
                then in effect and all applicable laws and regulations. You
                shall also be responsible for maintaining the security of your
                account and of the device you install the App.
              </p>
              <p className={cx("marginBottom20")}>
                You shall not, directly or indirectly:
              </p>
              <ul>
                <li className={cx("marginBottom20")}>
                  <p>
                    <b></b>attempt to discover the source code, object code or
                    underlying structure, ideas, know-how or algorithms relevant
                    to the Wallet or any software, documentation or data related
                    to the Wallet;
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p>
                    <b></b>interfere with any license key mechanism in the
                    Wallet or otherwise circumvent mechanisms in the Wallet
                    intended to limit the authorized use;
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p>
                    <b></b>attempt to gain unauthorized access to the Wallet or
                    to any server, computer or database related to the Wallet;
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p>
                    <b></b>launch or facilitate, whether intentionally or
                    unintentionally, any activity that adversely impacts the
                    availability, reliability, or stability of the Wallet
                    service;
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p>
                    <b></b>use the Wallet to engage in dangerous and illegal
                    activities including its use for purposes other than those
                    intended;
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p>
                    <b></b>use the Wallet for competitive analysis or to build
                    competitive products;
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p>
                    <b></b>modify, translate, or create derivative works based
                    on the Wallet or its Content;
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p>
                    <b></b>rent, lease, distribute, sell, sublicense, transfer,
                    or provide access to the Wallet to a third party;
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p>
                    <b></b>remove any proprietary notices or labels;
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p>
                    <b></b>attempt to access another user’s account, impersonate
                    a person or organization, or misrepresent your identity.
                  </p>
                </li>
              </ul>
              <p className={cx("marginBottom20")}>
                Access to the Wallet and any associated accounts may be
                suspended, as outlined in Clause 12.2, if Gataca determines that
                you have committed multiple violations or a material breach of
                these Terms. Additionally, you may be barred from creating a new
                account
              </p>
              <p className={cx("marginBottom20")}>
                Also, failure to comply with this clause may lead to the
                commission of offenses punishable by the applicable regulations.
                We will report any such breach to the relevant authorities and
                will cooperate with them to discover the identity of the
                attacker.
              </p>
            </div>
            <div className={styles?.contentCol__section} id="userData__6">
              <h4 className={cx("heading4 marginBottom32")}>6. User Data</h4>
              <p className={cx("marginBottom20")}>
                <b>6.1 Definitions</b>
              </p>
              <p className={cx("marginBottom20")}>
                When setting up a Wallet account with Gataca, you acknowledge
                and consent to the creation of decentralized identifiers (“
                <b>DIDs</b>”) on your behalf.
              </p>
              <p className={cx("marginBottom20")}>
                The Gataca Wallet creates on your behalf one or more
                cryptographic key pairs for each DID. Cryptographic key pairs (“
                <b>Cryptographic Keys</b>”) are composed of one or more public
                key and associated private keys. The private keys will be used
                by the Wallet to execute signing and encryption or decryption
                activities within the Wallet. You agree to keep your private
                keys confidential and to not share them with anyone else.
              </p>
              <p className={cx("marginBottom20")}>
                With the Wallet you can download, create, store, share and
                manage personal information in electronic format, following the
                Verifiable Credentials data model (“<b>Credentials</b>”).
                Self-issued and downloaded Credentials are stored in your mobile
                device.
              </p>
              <p className={cx("marginBottom20")}>
                Your DIDs, your Cryptographic Keys, your Credentials licitly
                obtained and stored in your Wallet, and your backup files and
                any other data, included but not limited to your Personal Data
                that you provides to us or to our Clients, are referred to here
                as “<b>User Data</b>”.
              </p>
              <p className={cx("marginBottom20")}>
                <b>6.2 Processing of User Data</b>
              </p>
              <p className={cx("marginBottom20")}>
                You acknowledge and accept that you are solely responsible for
                the custody of your User Data.
              </p>
              <p className={cx("marginBottom20")}>
                You acknowledge and accept that in the event of loss, damage or
                stolen mobile device, or due to service errors, you may
                experience a total/partial loss of User Data.
              </p>
              <p className={cx("marginBottom20")}>
                Gataca does not have access to, nor collects data about
                Credentials or how they are used or shared with third parties.
              </p>
              <p className={cx("marginBottom20")}>
                Notwithstanding the foregoing, you acknowledge and accept that
                Gataca stores information (a) about Credentials that are issued
                by Gataca, for the sole purpose of providing the requested
                Credential, (b) about Credentials that you explicitly consent to
                sharing with Gataca, and (c) about Credentials that are issued
                by third parties or shared with third parties by means of our
                cloud-based Gataca Studio platform.
              </p>
              <p className={cx("marginBottom20")}>
                Where User Data includes Personal Data, clause 8 below (Data
                Protection) of these Terms will apply.
              </p>
              <p className={cx("marginBottom20")}>
                Gataca makes no representation or warranty regarding the
                veracity or accuracy of your Credentials issued by you or third
                parties, or regarding the use of any or all of your Credentials
                in your relationship with third parties. You are responsible for
                complying with the Terms and Conditions that these third parties
                may impose on Credentials issued to you or on your use of their
                services and you agree not hold Gataca liable for any
                infringement of such terms and conditions.
              </p>
              <p className={cx("marginBottom20")}>
                You have the ability to delete all User Data from your device
                via the Wallet interface. You acknowledge and accept that
                deleting the App from your device may not delete the User Data
                from your device.{" "}
              </p>
            </div>
            <div
              className={styles?.contentCol__section}
              id="securityRisksAndDowntime__7"
            >
              <h4 className={cx("heading4 marginBottom32")}>
                7. Security risks & downtime
              </h4>
              <p className={cx("marginBottom20")}>
                <b>7.1 Security</b>
              </p>
              <p className={cx("marginBottom20")}>
                You acknowledge that cryptography technologies are continuously
                evolving fields, which may pose risks to the Services and its
                Content due to advancements in decryption, quantum computing, or
                security vulnerabilities.
              </p>
              <p className={cx("marginBottom20")}>
                Gataca takes security very seriously. Gataca will strive for
                maximum levels of protection for the Wallet, by continuously
                updating the code underlying the Wallet and incorporating new
                security measures that account for the risks of such technical
                advances.
              </p>
              <p className={cx("marginBottom20")}>
                While Gataca is committed to implementing robust security
                measures and regularly updating the Wallet's code to mitigate
                these risks, we cannot guarantee absolute security. By using the
                Wallet, you accept these inherent risks.
              </p>
              <p className={cx("marginBottom20")}>
                You agree to keep your device's operating system up to date.
                Gataca is not liable for damages resulting from viruses or
                unauthorized use of your device in connection with the Wallet.
                You also agree to promptly report any security breaches or
                unauthorized use of the Wallet to Gataca.
              </p>
              <p className={cx("marginBottom20")}>
                <b>7.2 Downtime</b>
              </p>
              <p className={cx("marginBottom20")}>
                We strive to provide uninterrupted access to the Wallet. There
                may be occasions where the Wallet may be unavailable due to
                scheduled maintenance, upgrades, or circumstances beyond our
                control such as internet outages, force majeure events, or
                hardware failures. We will make reasonable efforts to minimize
                any downtime and to promptly restore the Wallet to full
                functionality. Gataca will, if possible, give notice of such
                circumstances (suspension or interruption of access to the
                Wallet and the Content) by including the information referred to
                through the means of communication it deems appropriate for its
                wider circulation.
              </p>
              <p className={cx("marginBottom20")}>
                Gataca does not guarantee the non-existence of interruptions or
                errors in the Service or its Contents. We will make all
                commercially reasonable efforts to keep the Service available to
                you 100% of the time.
              </p>
              <p className={cx("marginBottom20")}>
                <b>7.3 Developments, improvements and upgrades</b>
              </p>
              <p className={cx("marginBottom20")}>
                The developments, improvements and upgrades may refer to
                performing any functional, technical, or technological
                modifications from time to time (i) to accommodate changes in
                the Wallet or its operation, (ii) to maintain or correct any
                possible malfunction or anomaly that has been detected during
                the use of the Service; (iii) to accommodate changes in the
                applicable Law, and/or (iv) whenever Gataca deemed useful or
                necessary, or simply for the achievement of better or new
                functionalities.
              </p>
              <p className={cx("marginBottom20")}>
                You understand and acknowledge that the Wallet is subject to
                modifications by Gataca and that such modifications may require
                you to upgrade your hardware or operating system.
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
                You understand and agree that your use of the Wallet is at your
                sole risk. Gataca makes no warranties of any kind, including but
                not limited to with respect to the Wallet, the Content, and the
                User Data, whether express, implied, statutory, of
                merchantability, non-infringement or the absence of
                interruptions or errors in the Wallet or its Content; however,
                we will make commercially reasonable efforts to ensure the
                Wallet remains available to you as consistently as possible.
              </p>
              <p className={cx("marginBottom20")}>
                Without prejudice to the aforementioned, if you are acting as a
                consumer you are entitled to all the legal rights granted to
                consumers by your country's legislation.
              </p>
              <p className={cx("marginBottom20")}>
                <b>8.2 Liabilities</b>
              </p>
              <p className={cx("marginBottom20")}>
                Gataca excludes, with the exceptions contemplated in the
                legislation in force, any liability for damages of any nature,
                including but not limited to damages that may be due to the lack
                of availability, security, continuity or quality of the
                functioning of the Wallet and the Content, any total/partial
                loss of User Data and the non-fulfilment of the expectation of
                usefulness that you may have attributed to the Wallet and the
                Content.
              </p>
              <p className={cx("marginBottom20")}>
                Additionally, except as otherwise provided by applicable law,
                Gataca shall have no liability for: (a) lost profits, revenues,
                business opportunities, goodwill or anticipated savings; (b)
                indirect or consequential losses; (c) punitive damages; (d)
                losses not caused by our breach of these Terms or by our
                actions;and/or (e) losses that neither we nor you can foresee at
                the time these Terms come into force, or events beyond our
                control.
              </p>
              <p className={cx("marginBottom20")}>
                Without prejudice to the aforementioned, if you are acting as a
                consumer you are entitled to all the legal rights granted to
                consumers by your country's legislation.
              </p>
              <p className={cx("marginBottom20")}>
                <b>8.3 Indemnity</b>
              </p>
              <p className={cx("marginBottom20")}>
                To the extent permitted by applicable law, specifically if If
                you are business user or an organization, you agree to defend,
                indemnify, and hold Gataca harmless, including its subsidiaries,
                affiliates, and all of its respective officers, agents,
                partners, and employees, from and against any loss, damage,
                liability, claim, or demand, including reasonable attorneys’
                fees and expenses, made by any third party due to or arising out
                of: (1) your use of your User Data; (2) your use of the Wallet;
                (3) breach of these Terms; (4) any breach of your
                representations and warranties set forth in these Terms; (5)
                your violation of the rights of a third party, including but not
                limited to intellectual property rights; or (6) any harmful act
                toward any other User of the Service with whom you connected via
                the Wallet.
              </p>
              <p className={cx("marginBottom20")}>
                Notwithstanding the foregoing, Gataca reserves the right, at its
                own expense, to assume exclusive defense and control of any
                matter otherwise subject to indemnification by you and, in such
                case, you agree to cooperate with Gataca in the defense of such
                matter.
              </p>
              <p className={cx("marginBottom20")}>
                <b>8.4 Force Majeure</b>
              </p>
              <p className={cx("marginBottom20")}>
                Gataca will not be liable for any failure or delay in its
                performance under these Terms due to any cause beyond its
                reasonable control, including acts of war, acts of God,
                pandemia, labor shortages or disputes, governmental acts or
                failure or degradation of the Internet or telecommunications
                services. Gataca will give you prompt notice of such cause and
                will make commercially reasonable efforts to promptly correct
                such failure or delay in performance.
              </p>
            </div>
            <div className={styles?.contentCol__section} id="dataProtection__9">
              <h4 className={cx("heading4 marginBottom32")}>
                9. Data protection
              </h4>
              <p className={cx("marginBottom20")}>
                In accordance with the applicable data protection regulations,
                all Personal Data (as defined in Art. 4 of the GDPR) provided by
                you or to you while using the Wallet will be processed in
                accordance with the provisions of our{" "}
                <a href="https://gataca.io/privacy-policy" target="_blank">
                  Privacy Policy
                </a>{" "}
                and, where applicable, the{" "}
                <a href="https://gataca.io/cookie-policy" target="_blank">
                  Cookies Policy
                </a>
                . By using the Wallet, you acknowledge and accept the processing
                of such Personal Data and declare that all information or data
                provided is true, current and corresponds to reality.
              </p>
            </div>
            <div
              className={styles?.contentCol__section}
              id="intellectualProperty__10"
            >
              <h4 className={cx("heading4 marginBottom32")}>
                10. Intellectual Property
              </h4>
              <p className={cx("marginBottom20")}>
                The Wallet and the Content are protected by copyright, trade
                secret, and other intellectual property laws.
              </p>
              <p className={cx("marginBottom20")}>
                Gataca shall remain the exclusive owner of any and all
                intellectual property rights, whether registered or not, owned,
                owned or licensed by Gataca. These Terms in no case implies the
                assignment, transfer, acquisition or license of the Gataca’s
                intellectual property over the Wallet, software or any other
                information and documentation owned by Gataca. You are only
                authorized to use the Gataca’s intellectual property when you
                have an explicit and unequivocal permission, and in the manner
                specified by Gataca in these Terms or order forms and associated
                with the Wallet.
              </p>
              <p className={cx("marginBottom20")}>
                Any new intellectual property generated during the term of this
                Agreement and in connection with the Wallet, improvements,
                enhancements or modifications thereto, and all intellectual
                property rights related thereto, and/or Gataca Technology shall,
                in any case, automatically and exclusively belong to Gataca.
              </p>
              <p className={cx("marginBottom20")}>
                Any ideas, questions, answers, suggestions, or comments
                ("Feedback") provided by you to us shall not be considered
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
            <div className={styles?.contentCol__section} id="amendment__11">
              <h4 className={cx("heading4 marginBottom32")}>11. Amendment</h4>
              <p className={cx("marginBottom20")}>
                We may revise these Terms from time to time. If we do, those
                revised Terms will supersede prior versions. Unless we say
                otherwise, revisions will be effective upon the effective date
                indicated at the top of these Terms.
              </p>
              <p className={cx("marginBottom20")}>
                You will receive notifications via email or the Wallet regarding
                any material changes or updates to the Terms. It is essential to
                regularly check for notifications to stay informed about any
                modifications to these Terms.
              </p>
              <p className={cx("marginBottom20")}>
                Your continued access or use of the Wallet constitutes your
                acceptance of any revisions. If you do not agree to the
                revisions, you should stop using the Wallet.
              </p>
            </div>
            <div
              className={styles?.contentCol__section}
              id="terminationSuspension__12"
            >
              <h4 className={cx("heading4 marginBottom32")}>
                12. Termination and suspension
              </h4>
              <p className={cx("marginBottom20")}>
                <b>12.1 Termination</b>
              </p>
              <p className={cx("marginBottom20")}>
                You may terminate these Terms at any time, by deleting your
                account via the Wallet interface and deleting the App.
              </p>
              <p className={cx("marginBottom20")}>
                <b>12.2 Suspension</b>
              </p>
              <p className={cx("marginBottom20")}>
                Gataca may unilaterally interrupt, suspend or terminate these
                Terms and access to the Wallet and the Content at any time in
                any of these cases: (a) if you breach these Terms substantially
                or repeatedly or any Gataca’s policies; (b) if we are required
                to do so to comply with a legal requirement or a court order;
                (c) if we have sufficient reason to believe that your conduct
                (such as hacking, impersonation, harassment, spamming, deceit,
                or any other) causes harm or incurs liabilities to a user, a
                third party, or Gataca.
              </p>
              <p className={cx("marginBottom20")}>
                Gataca will give notice of such circumstance by including the
                information referred to through the means of communication it
                deems appropriate for your knowledge.
              </p>
              <p className={cx("marginBottom20")}>
                If you believe your Gataca account has been suspended or
                terminated in error, you can appeal the decision by contacting
                Gataca at{" "}
                <a href="mailto: legal@gataca.io" type="email">
                  legal@gataca.io
                </a>
                .
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
                These Terms and any document expressly referred to in these
                Terms constitute the integral agreement between you and Gataca
                in relation to the subject matter of these terms and conditions
                and supersede all other prior agreements, understandings or
                promises made between you and Gataca orally or in writing in
                relation to the subject matter of these Terms.
              </p>
            </div>
            <div
              className={styles?.contentCol__section}
              id="agreementEntirety__14"
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
                For the resolution of all disputes, controversies or situations
                arising from these Terms that cannot be resolved through our
                support team the Spanish Courts and Tribunals shall have
                jurisdiction in accordance with the terms established in article
                52.3 of the Spanish Civil Procedure Act.
              </p>
              <p className={cx("marginBottom20")}>
                For users who are not acting as consumers and users, the Courts
                and Tribunals of the city of Madrid shall have jurisdiction,
                renouncing any other jurisdiction that may correspond to them.
              </p>
            </div>
            <div className={styles?.contentCol__section} id="contact__15">
              <h4 className={cx("heading4 marginBottom32")}>15. Contact</h4>
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
