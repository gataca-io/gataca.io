import { Link } from "gatsby"
import * as React from "react"
import * as styles from "./footer.module.scss"
import cx from "classnames"
import { images } from "../../../images/images"
import {
  companyFooterMenu,
  resourcesFooterMenu,
  productsFooterMenu,
  rightsReservedGataca,
  sectorsFooterMenu,
  subFooterMenu,
  useCasesFooterMenu,
} from "../../../data/globalData"
import SectionContent from "./footerComponents/sectionContent/SectionContent"
import SocialMediaContent from "./footerComponents/socialMediaContent/SocialMediaContent"

const Footer: React.FC = () => {
  return (
    <footer className={styles?.footer}>
      <section
        className={`${styles?.mainSectionFooter} ${cx("containerMaxWidth")}`}
      >
        <div
          className={`${styles?.iconsContainer} ${styles?.mainSectionFooter__column}`}
        >
          <div className={styles?.logo}>
            <img
              src={images.gatacIconAndText}
              id="footer__gatacaLogo"
              key={"footer__" + "gatacaLogo"}
              alt="Gataca Logo"
            />
          </div>
          <div
            className={`${styles?.socialMediaContainer} ${styles?.showDesktop}`}
          >
            <SocialMediaContent />
          </div>
        </div>
        <div
          className={`${styles?.footerSections} ${
            styles?.mainSectionFooter__column
          } ${styles?.showDesktop} ${cx("marginTop10")}`}
        >
          <SectionContent navigationObject={productsFooterMenu} />
        </div>
        <div
          className={`${styles?.footerSections} ${
            styles?.mainSectionFooter__column
          } ${styles?.showMobile} ${cx("marginTop10")}`}
        >
          <SectionContent navigationObject={productsFooterMenu} />
          <SectionContent navigationObject={companyFooterMenu} />
        </div>
        <div
          className={`${styles?.footerSections} ${
            styles?.mainSectionFooter__column
          } ${cx("marginTop10")}`}
        >
          <SectionContent navigationObject={useCasesFooterMenu} />
          <SectionContent
            navigationObject={sectorsFooterMenu}
            className={styles?.showDesktop}
          />
        </div>
        <div
          className={`${styles?.footerSections} ${
            styles?.mainSectionFooter__column
          } ${styles?.showDesktop} ${cx("marginTop10")}`}
        >
          <SectionContent navigationObject={companyFooterMenu} />
          <SectionContent navigationObject={resourcesFooterMenu} />
        </div>
        <div
          className={`${styles?.footerSections} ${
            styles?.mainSectionFooter__column
          } ${styles?.showMobile} ${cx("marginTop10")}`}
        >
          <SectionContent navigationObject={resourcesFooterMenu} />
        </div>
        <div
          className={`${styles?.footerSections} ${
            styles?.mainSectionFooter__column
          } ${styles?.showMobile} ${cx("marginTop10")}`}
        >
          <SectionContent navigationObject={sectorsFooterMenu} />
        </div>
        <div
          className={`${styles?.socialMediaContainer} ${styles?.showMobile}`}
        >
          <SocialMediaContent />
        </div>
      </section>
      <hr></hr>
      <section
        className={`${styles?.secondarySectionFooter} ${cx(
          "containerMaxWidth"
        )}`}
      >
        <div>
          <img src={images.ISO27001Certification}></img>
        </div>
        <div>
          <div>
            <div>
              <ul>
                {subFooterMenu?.subRoutes?.map((item, index) => {
                  return (
                    <li key={"subFooter__" + item.id + index}>
                      <Link
                        id={"subFooter__" + item.id}
                        className={cx("buttonMD")}
                        to={item.route || ""}
                      >
                        {item.label}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div
              className={`${styles?.rightsReserved} ${cx("buttonMD")}`}
              id={rightsReservedGataca?.id}
              key={"footer__" + rightsReservedGataca?.id}
            >
              {rightsReservedGataca?.label}
            </div>
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer
