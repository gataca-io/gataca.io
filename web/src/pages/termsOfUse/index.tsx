import { Link, PageProps } from "gatsby"
import * as React from "react"
import * as styles from "./index.module.scss"
import cx from "classnames"
import Layout from "../../components/templates/mainLayout/MainLayout"
import tableOfContent from "../../data/termsOfUseData"
import { LinkModel } from "../../interfaces/interfaces"
import TableOfContentContainer from "../../components/templates/tableOfContent/elements/tableOfContentContainer/TableOfContentContainer"
import {
  cookiePolicyURL,
  gatacaURL,
  privacyPolicyURL,
} from "../../data/globalData"

export type ITableOfContentProps = {
  navigationObject?: LinkModel
  className?: string
}
const TermsOfUse: React.FC<PageProps> = () => {
  const [tableOfContentOpenedID, setTableOfContentOpened] = React.useState("")
  const [strapiData, setStrapiData] = React.useState<any | undefined>()

  React.useEffect(() => {
    if (!strapiData) {
      getStrapiData()
    }
  }, [])

  const getStrapiData = async () => {
    await fetch(`${process.env.STRAPI_API_URL}/api/terms-of-use?&populate=*`)
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
          <h1 className={cx("heading1 marginBottom32")}>Terms of use</h1>
          <p className={cx("bodyRegularXL")}>Effective date: August 31, 2022</p>
        </div>
        <div className={styles?.sectionMain}>
          <div className={styles?.sectionMain__dataContentCol}>
            <div className={styles?.contentCol__section} id="introduction__0">
              <h4 className={cx("heading4 marginBottom32")}>1. Introduction</h4>
              <p className={cx("marginBottom20")}>
                Gataca España S.L.U and its affiliates (referred to as “
                <b>Gataca</b>” or “<b>we</b>”, “<b>our</b>” or “<b>us</b>”) is a
                cybersecurity company that provides decentralized digital
                identity technology through our software applications
                (collectively, “<b>Gataca Platform</b>”), including but not
                limited to our website
                <Link to={gatacaURL}> https://gataca.io</Link> (“
                <b>Website</b>
                ”), a cloud-based end-to-end solution (“<b>Gataca Studio</b>
                ”), our on-premise applications GATACA Certify and GATACA
                Connect and a mobile application (“
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
            <div
              className={styles?.contentCol__section}
              id="acceptanceOfTerms__1"
            >
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
              id="rightsUseOfService__2"
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
            <div className={styles?.contentCol__section} id="definition__3">
              <h4 className={cx("heading4 marginBottom32")}>4. Definition</h4>
              <ul>
                <li className={cx("marginBottom20")}>
                  <p className={cx("marginBottom20")}>
                    <b>Services:</b> The GATACA Platform and any other online
                    products and services provided by GATACA.
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p className={cx("marginBottom20")}>
                    <b>End User:</b> Person that uses the GATACA Wallet or
                    Clients’ own customers/users that view and interact with our
                    Services as part of the Client’s resources.
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p className={cx("marginBottom20")}>
                    <b>Authorized User:</b> Person authorised by a Client to
                    configure, manage and administer the Services on Client’s
                    behalf.
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p className={cx("marginBottom20")}>
                    <b>Personal Data:</b> Data about identified or identifiable
                    natural persons according to Art. 4 of the GDPR.
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p className={cx("marginBottom20")}>
                    <b>DIDs:</b> As per the W3C recommendation, DIDs are
                    globally unique persistent identifiers that do not require a
                    centralised registration authority and are often generated
                    and/or registered cryptographically.
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p className={cx("marginBottom20")}>
                    <b>Verifiable Credentials (VCs):</b> As per the W3C
                    recommendation, VCs are tamper-proof digital credentials
                    whose authorship can be cryptographically verified.
                  </p>
                </li>
                <li className={cx("marginBottom20")}>
                  <p className={cx("marginBottom20")}>
                    <b>Cryptographic keys:</b> Cryptographic material associated
                    to DIDs and used by the Services to execute signing and
                    encryption or decryption activities on End User’s or
                    Client’s behalf.
                  </p>
                </li>
              </ul>
            </div>
            <div className={styles?.contentCol__section} id="responsibleUse__4">
              <h4 className={cx("heading4 marginBottom32")}>
                5. Responsible Use
              </h4>
              <p className={cx("marginBottom20")}>
                You are obliged and undertake to use the Services, including the
                Contents in accordance with the regulations applicable at all
                times, following the provisions of these Terms and any other
                notice or instructions made known to you, either by means of
                this document or any other means within the Contents that are
                part of the Services, as well as complying with the generally
                accepted rules of coexistence, respect, morality and good
                customs.
              </p>
              <p className={cx("marginBottom20")}>
                You are obliged and undertake not to use the Services and its
                Contents for illicit purposes or effects, prohibited in this
                document or by the applicable regulations, including but not
                limited to actions that: (a) violate any third-party right,
                including any copyright, trademark, patent, trade secret, moral
                right, privacy right, right of publicity, or any other
                intellectual property or proprietary right; (b) are harassing,
                abusive, threatening, invasive of another’s privacy, defamatory,
                false, intentionally misleading, pornographic, patently
                offensive, promote hatred or physical harm of any kind against
                any group or individual or are otherwise objectionable; (c) are
                in violation of any law, regulation, or obligations or
                restrictions imposed by any third party; (d) attempt to bypass
                or break any security mechanism on the Services which could pose
                a security or service risk to us, other Clients or End Users;
                (e) attempt to reverse-engineer the Services in order to find
                limitations, vulnerabilities, or infringe our Intellectual
                Property including trade secrets, and copyrighted works; (f)
                launch or facilitate, whether intentionally or unintentionally,
                any activity that adversely impacts the availability,
                reliability, or stability of the Services; (g) transmit any
                material or data that contains viruses, Trojan horses, spyware,
                works, or any other malicious or harmful program; (h) engage in
                any unsolicited advertising, marketing, or other activities
                prohibited by applicable law or regulation covering anti-spam,
                data protection, or privacy legislation in any relevant
                jurisdiction; (i) attempt to solicit information from
                individuals without their explicit consent or under false
                pretenses; (j) create false identities, DIDs, Verifiable
                Credentials, or any other attempt to use the Services for
                nefarious purposes.
              </p>
            </div>
            <div
              className={styles?.contentCol__section}
              id="intellectualPropertyRights__5"
            >
              <h4 className={cx("heading4 marginBottom32")}>
                6. Intellectual property rights
              </h4>
              <p className={cx("marginBottom20")}>
                All trademarks, trade names, distinctive signs of any kind and
                any intellectual or industrial property rights over the Services
                and its Contents are the property of GATACA or, where
                appropriate, of third parties.
              </p>
              <p className={cx("marginBottom20")}>
                Under no circumstances does access to the Services imply any
                kind of permission, waiver, transmission, license or total or
                partial transfer of said rights.
              </p>
              <p className={cx("marginBottom20")}>
                The unauthorised use of the information contained in the
                Services, as well as any breach of the intellectual or
                industrial property rights of GATACA or of third parties who
                have licensed or assigned part of the Content, will give rise to
                the legally established responsibilities.
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
              id="warrantiesLiabilitiesIndemnity__6"
            >
              <h4 className={cx("heading4 marginBottom32")}>
                7. Warranties, liabilities, and indemnity
              </h4>

              <p className={cx("marginBottom20")}>
                <b>7.1 Warranties</b>
              </p>
              <p className={cx("marginBottom20")}>
                YOU UNDERSTAND AND AGREE THAT YOUR USE OF THE SERVICES IS AT
                YOUR SOLE RISK. GATACA makes no warranties of any kind,
                including but not limited to with respect to the Services and
                the Contents, whether express, implied, statutory, of
                merchantability, non-infringement or otherwise.
              </p>
              <p className={cx("marginBottom20")}>
                For Service-specific warranties, please visit the applicable
                service-specific terms.
              </p>
              <p className={cx("marginBottom20")}>
                <b>7.2 Liabilities</b>
              </p>
              <p className={cx("marginBottom20")}>
                GATACA excludes, with the exceptions contemplated in the
                legislation in force, any liability for damages of any nature,
                including but not limited to damages that may be due to the lack
                of availability, security, continuity or quality of the
                functioning of the Services and the Contents, and the
                non-fulfilment of the expectation of usefulness that you may
                have attributed to the Services and the Contents.
              </p>
              <p className={cx("marginBottom20")}>
                For Service-specific liabilities, please visit the applicable
                service-specific terms.
              </p>
              <p className={cx("marginBottom20")}>
                <b>7.3 Indemnity</b>
              </p>
              <p className={cx("marginBottom20")}>
                You agree to defend, indemnify, and hold GATACA harmless,
                including its subsidiaries, affiliates, and all of its
                respective officers, agents, partners, and employees, from and
                against any loss, damage, liability, claim, or demand, including
                reasonable attorneys’ fees and expenses, made by any third party
                due to or arising out of: (1) your contributions; (2) use of the
                Service; (3) breach of these Terms; (4) any breach of your
                representations and warranties set forth in these Terms; (5)
                your violation of the rights of a third party, including but not
                limited to intellectual property rights; or (6) any harmful act
                toward any other End User or Client of the Services with whom
                you connected via the Services. Notwithstanding the foregoing,
                GATACA reserves the right, at its own expense, to assume
                exclusive defense and control of any matter otherwise subject to
                indemnification by you and, in such case, you agree to cooperate
                with GATACA in the defense of such matter.
              </p>

              <p className={cx("marginBottom20")}>
                <b>7.4 Force Majeure</b>
              </p>
              <p className={cx("marginBottom20")}>
                No Party will be liable for any failure or delay in its
                performance under the terms of this Proposal due to any cause
                beyond its reasonable control, including acts of war, acts of
                God, pandemia, labor shortages or disputes, governmental acts or
                failure or degradation of the Internet or telecommunications
                services. The Party incurring in a delay will give the other
                Party prompt notice of such cause and will make commercially
                reasonable efforts to promptly correct such failure or delay in
                performance.
              </p>
            </div>
            <div className={styles?.contentCol__section} id="dataProtection__7">
              <h4 className={cx("heading4 marginBottom32")}>
                8. Data protection
              </h4>
              <p className={cx("marginBottom20")}>
                In accordance with the applicable data protection regulations,
                all Personal Data provided while using the Services will be
                processed in accordance with the provisions of the{" "}
                <a href="https://gataca.io/privacy-policy">Privacy Policy</a>{" "}
                and, where applicable, the{" "}
                <a href="https://gataca.io/cookie-policy">Cookies Policy</a> ,
                except otherwise stated in the corresponding Service-specific
                terms. By using the Services, you acknowledge and accept the
                processing of such personal data and declare that all
                information or data provided is true, current and corresponds to
                reality.
              </p>
            </div>
            <div
              className={styles?.contentCol__section}
              id="linksOtherSites__8"
            >
              <h4 className={cx("heading4 marginBottom32")}>
                9. Links to other sites
              </h4>
              <p className={cx("marginBottom20")}>
                Our Services may contain links to other sites that are not
                operated by GATACA. If you click a third-party link, you will be
                directed to that third party's site. We strongly advise you to
                review the Privacy Policy of every site you visit.
              </p>
              <p className={cx("marginBottom20")}>
                We have no control over and assume no responsibility for the
                content, privacy policies or practices of any third-party sites
                or services.
              </p>
            </div>
            <div className={styles?.contentCol__section} id="communications__9">
              <h4 className={cx("heading4 marginBottom32")}>
                10. Communications
              </h4>
              <p className={cx("marginBottom20")}>
                Applicable law requires that some of the information or
                communications sent to you must be in writing. By using the
                Services, you agree that all communications with us will be
                electronic. We will contact you by e-mail or provide you with
                information by posting notices on the Services or on GATACA's
                social networks. You consent to use this electronic means of
                communication and acknowledge that all contracts, notices,
                information and other communications that we send to you
                electronically comply with the legal requirements of being in
                writing. This condition shall not affect your statutory rights.
              </p>
            </div>
            <div
              className={styles?.contentCol__section}
              id="amendmentTermination__10"
            >
              <h4 className={cx("heading4 marginBottom32")}>
                11. Amendment and termination
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
                whenever you use the Services. Your continued access or use of
                the Services constitutes your acceptance of any revisions. If
                you do not agree to the revisions, you should stop using the
                Services.
              </p>
              <p className={cx("marginBottom20")}>
                We may suspend access to the Services immediately if: (a) you
                commit any material breach of these Terms, including reference
                documents specified in section 2; (b) there is reason to believe
                the traffic created from your use of the Services or your use of
                the Services is fraudulent or negatively impacting the operating
                capability of the Services; (c) we determine, in our sole
                discretion, that providing the Services is prohibited by
                applicable Law, or it has become impractical for any legal or
                regulatory reason to provide the Services; or (d) subject to
                applicable Law, you become the subject of liquidation,
                bankruptcy, change of control, or any similar proceedings.
              </p>
            </div>
            <div
              className={styles?.contentCol__section}
              id="agreementEntirety__11"
            >
              <h4 className={cx("heading4 marginBottom32")}>
                12. Agreement in its entirety
              </h4>
              <p className={cx("marginBottom20")}>
                These Terms and any document expressly referred to in these
                Terms constitute the integral agreement between you and GATACA
                in relation to the subject matter of these Terms and conditions
                and supersede all other prior agreements, understandings or
                promises made between you and GATACA orally or in writing in
                relation to the subject matter of these Terms.
              </p>
              <p className={cx("marginBottom20")}>
                In the case of any conflict between these Terms and any
                Service-specific terms, the latter shall prevail.
              </p>
            </div>
            <div
              className={styles?.contentCol__section}
              id="lawJurisdiction__12"
            >
              <h4 className={cx("heading4 marginBottom32")}>
                13. Applicable law and jurisdiction
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
            <div className={styles?.contentCol__section} id="contact__13">
              <h4 className={cx("heading4 marginBottom32")}>14. Contact</h4>
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

export default TermsOfUse
