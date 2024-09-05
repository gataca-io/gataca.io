import type { PageProps } from "gatsby"
import * as React from "react"
import { Link } from "gatsby"
import * as styles from "./index.module.scss"
import cx from "classnames"
import Layout from "../../components/templates/mainLayout/MainLayout"
import TableOfContentContainer from "../../components/templates/tableOfContent/elements/tableOfContentContainer/TableOfContentContainer"
import { LinkModel } from "../../interfaces/interfaces"
import tableOfContent from "../../data/legalNoticeData"
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
    await fetch(`${process.env.STRAPI_API_URL}/api/legal-notice?&populate=*`)
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
            <h1 className={cx("heading1 marginBottom32")}>
              Gataca Legal Notice
            </h1>
            <p className={cx("bodyRegularXL")}>
              Effective date: September 4th, 2024
            </p>
          </div>
          <div className={styles?.sectionMain}>
            <div className={styles?.sectionMain__dataContentCol}>
              <div className={styles?.contentCol__section} id="introduction__1">
                <h4 className={cx("heading4 marginBottom32")}>
                  1. Introduction
                </h4>
                <p>
                  This website (the “<b>Website</b>”) is owned and operated by
                  Gataca Labs S.L.U. (referred to as “<b>Gataca</b>” or “
                  <b>we</b>”, “<b>our</b>” or “<b>us</b>”), a cybersecurity
                  company incorporated under the laws of Spain through our
                  software applications, including but not limited to our
                  cloud-based identity platform for the issuance and
                  verification of identity credentials (“<b>Gataca Studio</b>”),
                  our mobile ID wallet (“Gataca Wallet”), and our website
                  https://gataca.io (the “<b>Website</b>”), jointly referred to
                  as the “<b>Services</b>”.
                </p>
                <p>
                  The Website includes graphics, photographs, artwork,
                  merchandise, images, screen shots, text, digital files,
                  trademarks, logos, product names, slogans, and other materials
                  (the “<b>Content</b>”) provided by Gataca or its licensors.
                </p>
                <p>
                  The terms “<b>you</b>”, “<b>your</b>”, and “<b>user</b>” refer
                  to you as an individual.
                </p>
                <p>
                  These Website Terms (“<b>Terms</b>”) are a legal agreement
                  between you and Gataca.
                </p>
              </div>
              <div
                className={styles?.contentCol__section}
                id="acceptanceTerms__2"
              >
                <h4 className={cx("heading4 marginBottom32")}>
                  2. Acceptance of Terms
                </h4>
                <p className={cx("marginBottom20")}>
                  By accessing the Website or its Content in any way, including,
                  without limitation, browsing the Website, using information
                  obtained from the Website, making a purchase, and/or
                  submitting information to Gataca through the Website, you
                  agree to and are bound by the terms, conditions, policies and
                  notices contained herein (the “<b>Terms</b>”).
                </p>
              </div>
              <div className={styles?.contentCol__section} id="accessRights__3">
                <h4 className={cx("heading4 marginBottom32")}>
                  3. Access rights
                </h4>
                <p className={cx("marginBottom20")}>
                  The information contained and accessed on or through the
                  Website is for general guidance and is intended to offer
                  general information of interest. Gataca grants you a limited
                  license to access and use the Website or the Content for
                  personal purposes only.
                </p>
                <p className={cx("marginBottom20")}>
                  No other right of use, alteration, exploitation, reproduction,
                  distribution or public communication of the Website or its
                  Contents other than those expressly provided for herein is
                  hereby conferred on you.
                </p>
                <p className={cx("marginBottom20")}>
                  In particular, you are not permitted to
                </p>
                <ul>
                  <li className={cx("marginBottom20")}>
                    <p className={cx("marginBottom20")}>
                      <b></b>Download or modify the Website or the Content, or
                      any portion thereof, without Gataca's express written
                      consent.
                    </p>
                  </li>
                  <li className={cx("marginBottom20")}>
                    <p className={cx("marginBottom20")}>
                      <b></b>Reproduce, duplicate, copy, sell, or exploit the
                      Website or the Content, or any portion thereof, for
                      commercial purposes without Gataca's express written
                      consent.
                    </p>
                  </li>
                  <li className={cx("marginBottom20")}>
                    <p className={cx("marginBottom20")}>
                      <b></b>Create derivative works from the Content.
                    </p>
                  </li>
                  <li className={cx("marginBottom20")}>
                    <p className={cx("marginBottom20")}>
                      <b></b>Use data mining, robots, or similar tools to
                      extract information.
                    </p>
                  </li>
                </ul>
              </div>
              <div
                className={styles?.contentCol__section}
                id="responsibleUse__4"
              >
                <h4 className={cx("heading4 marginBottom32")}>
                  4. Responsible Use
                </h4>
                <p className={cx("marginBottom20")}>
                  You are obliged and undertake to use the Website and the
                  Content in accordance with the regulations applicable at all
                  times, following the provisions of these Terms and any other
                  notice or instructions made known to you, either by means of
                  these Terms or any other means within the Content, as well as
                  complying with the generally accepted rules of coexistence,
                  respect, morality and good customs.
                </p>
                <p className={cx("marginBottom20")}>
                  You are obliged and undertake not to use the Website and its
                  Contents for illicit purposes or effects, prohibited in these
                  Terms or by the applicable regulations, including but not
                  limited to actions that: (a) violate any third-party right,
                  including any copyright, trademark, patent, trade secret,
                  moral right, privacy right, right of publicity, or any other
                  intellectual property or proprietary right; (b) are harassing,
                  abusive, threatening, invasive of another’s privacy,
                  defamatory, false, intentionally misleading, pornographic,
                  patently offensive, promote hatred or physical harm of any
                  kind against any group or individual or are otherwise
                  objectionable; (c) are in violation of any law, regulation, or
                  obligations or restrictions imposed by any third party; (d)
                  attempt to bypass or break any security mechanism on the
                  Website which could pose a security or service risk to us, our
                  clients, or other users; (e) attempt to reverse-engineer the
                  Website in order to find limitations, vulnerabilities, or
                  infringe our Intellectual Property including trade secrets,
                  and copyrighted works; (f) launch or facilitate, whether
                  intentionally or unintentionally, any activity that adversely
                  impacts the availability, reliability, or stability of the
                  Website; (g) transmit any material or data that contains
                  viruses, Trojan horses, spyware, works, or any other malicious
                  or harmful program; (h) engage in any unsolicited advertising,
                  marketing, or other activities prohibited by applicable law or
                  regulation covering anti-spam, data protection, or privacy
                  legislation in any relevant jurisdiction; (i) attempt to
                  solicit information from individuals without their explicit
                  consent or under false pretenses;
                </p>
              </div>
              <div
                className={styles?.contentCol__section}
                id="intellectualPropertyRights__5"
              >
                <h4 className={cx("heading4 marginBottom32")}>
                  5. Intellectual property rights
                </h4>
                <p className={cx("marginBottom20")}>
                  All trademarks, trade names, distinctive signs of any kind and
                  any intellectual or industrial property rights over the
                  Website and its Content are the property of Gataca or, where
                  appropriate, of third parties.
                </p>
                <p className={cx("marginBottom20")}>
                  Gataca shall remain the exclusive owner of any and all
                  intellectual property rights, whether registered or not,
                  owned, owned or licensed by Gataca. These Terms in no case
                  implies the assignment, transfer, acquisition or license of
                  the Gataca’s intellectual property.
                </p>
                <p className={cx("marginBottom20")}>
                  The unauthorized use of the information contained in the
                  Website, as well as any breach of the intellectual or
                  industrial property rights of Gataca or of third parties who
                  have licensed or assigned part of the Content, will give rise
                  to the legally established responsibilities.
                </p>
                <p className={cx("marginBottom20")}>
                  Any ideas, questions, answers, suggestions, or comments ("
                  <b>Feedback</b>") provided by you to us shall not be
                  considered confidential or proprietary information. By
                  providing us with Feedback, you authorize us to use it, along
                  with any developments or derivatives thereof, determined at
                  our sole discretion, without requiring additional permission
                  from you or payment of compensation to you.
                </p>
                <p className={cx("marginBottom20")}>
                  You agree that (i) by submitting unsolicited ideas to us or
                  any of our representatives, you automatically forfeit your
                  right to any intellectual property rights in these ideas; and
                  (ii) unsolicited ideas submitted to us, our employees, or
                  representatives automatically become the property of Gataca.
                  You hereby assign all rights, title, and interest you have in
                  such Feedback and ideas to Gataca, including all intellectual
                  property rights therein.
                </p>
                <p className={cx("marginBottom20")}>
                  All copyrights of these Terms are also reserved by the
                  regulations and international treaties of intellectual
                  property that are applicable. Copying, reproduction,
                  transformation, distribution, public communication, making
                  available, withdrawal or use, in whole or in part, by any
                  means whatsoever, is expressly prohibited.
                </p>
              </div>
              <div className={styles?.contentCol__section} id="warranties__6">
                <h4 className={cx("heading4 marginBottom32")}>
                  6. Warranties, liabilities, and indemnity
                </h4>
                <p className={cx("marginBottom20")}>
                  <b>6.1 Warranties</b>
                </p>
                <p className={cx("marginBottom20")}>
                  You understand and agree that your use of the Website is at
                  your sole risk. Gataca makes no warranties of any kind,
                  including but not limited to with respect to the Website and
                  the Contents, whether express, implied, statutory, of
                  merchantability, non-infringement or otherwise.
                </p>
                <p className={cx("marginBottom20")}>
                  In this regard, Gataca does not guarantee the truthfulness,
                  accuracy, adequacy, suitability, completeness and timeliness
                  of the information provided through the Website and its
                  Content.
                </p>
                <p className={cx("marginBottom20")}>
                  For Service-specific warranties, please visit the applicable
                  service-specific terms.
                </p>
                <p className={cx("marginBottom20")}>
                  <b>6.2 Liabilities</b>
                </p>
                <p className={cx("marginBottom20")}>
                  Gataca excludes, with the exceptions contemplated in the
                  legislation in force, any liability for damages of any nature,
                  including but not limited to damages that may be due to the
                  lack of availability, security, continuity or quality of the
                  functioning of the Website and the Content, and the
                  non-fulfilment of the expectation of usefulness that you may
                  have attributed to the Website and the Content.
                </p>
                <p className={cx("marginBottom20")}>
                  For Service-specific liabilities, please visit the applicable
                  service-specific terms.
                </p>
                <p className={cx("marginBottom20")}>
                  <b>6.3 Indemnity</b>
                </p>
                <p className={cx("marginBottom20")}>
                  You agree to defend, indemnify, and hold Gataca harmless,
                  including its subsidiaries, affiliates, and all of its
                  respective officers, agents, partners, and employees, from and
                  against any loss, damage, liability, claim, or demand,
                  including reasonable attorneys’ fees and expenses, made by any
                  third party due to or arising out of: (1) your contributions;
                  (2) use of the Service; (3) breach of these Terms; (4) any
                  breach of your representations and warranties set forth in
                  these Terms; (5) your violation of the rights of a third
                  party, including but not limited to intellectual property
                  rights; or (6) any harmful act toward any other user of the
                  Website with whom you connected via the Website.
                </p>
                <p className={cx("marginBottom20")}>
                  Notwithstanding the foregoing, Gataca reserves the right, at
                  its own expense, to assume exclusive defense and control of
                  any matter otherwise subject to indemnification by you and, in
                  such case, you agree to cooperate with Gataca in the defense
                  of such matter.
                </p>
                <p className={cx("marginBottom20")}>
                  <b>6.4 Force Majeure</b>
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
              <div
                className={styles?.contentCol__section}
                id="dataProtection__7"
              >
                <h4 className={cx("heading4 marginBottom32")}>
                  7. Data protection
                </h4>
                <p className={cx("marginBottom20")}>
                  In accordance with the applicable data protection regulations,
                  all Personal Data (as defined in Art. 4 of the GDPR) provided
                  while using the Website will be processed in accordance with
                  the provisions of the{" "}
                  <a href="https://gataca.io/privacy-policy" target="_blank">
                    Privacy Policy
                  </a>{" "}
                  and, where applicable, the{" "}
                  <a href="https://gataca.io/cookie-policy" target="_blank">
                    Cookies Policy
                  </a>
                  , except otherwise stated in the corresponding
                  service-specific terms.
                </p>
                <p className={cx("marginBottom20")}>
                  By giving your express consent, you acknowledge and accept the
                  processing of such personal data and declare that all
                  information or data provided is true, current and corresponds
                  to reality.
                </p>
              </div>
              <div
                className={styles?.contentCol__section}
                id="linksOtherSites__8"
              >
                <h4 className={cx("heading4 marginBottom32")}>
                  8. Links to other sites
                </h4>
                <p className={cx("marginBottom20")}>
                  Our Website may contain links to other sites that are not
                  operated by Gataca. If you click a third-party link, you will
                  be directed to that third party's site. We strongly advise you
                  to review the Privacy Policy of every site you visit.
                </p>
                <p className={cx("marginBottom20")}>
                  We have no control over and assume no responsibility for the
                  content, privacy policies or practices of any third-party
                  sites or services.
                </p>
                <p className={cx("marginBottom20")}>
                  If you wish to make us aware of a link to a website with
                  content that you believe is inappropriate or illegal, you may
                  contact us.
                </p>
              </div>
              <div
                className={styles?.contentCol__section}
                id="communications__9"
              >
                <h4 className={cx("heading4 marginBottom32")}>
                  9. Communications
                </h4>
                <p className={cx("marginBottom20")}>
                  Applicable law requires that some of the information or
                  communications sent to you must be in writing. By using the
                  Website, you agree that all communications with us will be
                  electronic. We will contact you by e-mail or provide you with
                  information by posting notices on the Website or on Gataca's
                  social networks. You consent to use this electronic means of
                  communication and acknowledge that all contracts, notices,
                  information, and other communications that we send to you
                  electronically comply with the legal requirements of being in
                  writing. This condition shall not affect your statutory
                  rights.
                </p>
              </div>
              <div className={styles?.contentCol__section} id="amendment__10">
                <h4 className={cx("heading4 marginBottom32")}>10. Amendment</h4>
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
                  whenever you use the Website. Your continued access or use of
                  the Website constitutes your acceptance of any revisions. If
                  you do not agree to the revisions, you should stop using the
                  Website.
                </p>
              </div>
              <div
                className={styles?.contentCol__section}
                id="jurisdiction__11"
              >
                <h4 className={cx("heading4 marginBottom32")}>
                  11. Applicable law and jurisdiction
                </h4>
                <p className={cx("marginBottom20")}>
                  All the conditions included in this document are governed by
                  Spanish law.
                </p>
                <p className={cx("marginBottom20")}>
                  Should any dispute arise, please try contacting our support
                  team first to resolve the dispute before bringing a formal
                  legal case.
                </p>
                <p className={cx("marginBottom20")}>
                  If you act as a consumer or user, the Spanish Courts and
                  Tribunals shall have jurisdiction in accordance with the terms
                  established in article 52.3 of the Spanish Civil Procedure
                  Act.
                </p>
              </div>
              <div className={styles?.contentCol__section} id="contact__12">
                <h4 className={cx("heading4 marginBottom32")}>12. Contact</h4>
                <p className={cx("marginBottom20")}>
                  In compliance with the provisions of Law 34/2002 on
                  Information Society Services and Electronic Commerce and other
                  applicable regulations, the general information details of
                  this website are given below:
                </p>
                <ul>
                  <li className={cx("marginBottom20")}>
                    <p className={cx("marginBottom20")}>
                      <b>Website owner</b>: Gataca Labs S.L.U.
                    </p>
                  </li>
                  <li className={cx("marginBottom20")}>
                    <p className={cx("marginBottom20")}>
                      <b>Registered office</b>: Calle Lopez de Hoyos 286, Bajo,
                      B, 28043 Madrid
                    </p>
                  </li>
                  <li className={cx("marginBottom20")}>
                    <p className={cx("marginBottom20")}>
                      <b>Contact email</b>:{" "}
                      <a href="mailto: legal@gataca.io" type="email">
                        legal@gataca.io
                      </a>
                    </p>
                  </li>
                  <li className={cx("marginBottom20")}>
                    <p className={cx("marginBottom20")}>
                      <b>Registration details</b>: Commercial Register of Madrid
                      in Sheet M-707679, Volume 39832, Entry 100
                    </p>
                  </li>
                  <li className={cx("marginBottom20")}>
                    <p className={cx("marginBottom20")}>
                      <b>Registration number</b>: B88524525
                    </p>
                  </li>
                </ul>
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
