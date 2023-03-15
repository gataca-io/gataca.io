import { Link } from "gatsby"
import * as React from "react"
import * as styles from "./footer.module.scss"
import cx from "classnames"
import { images } from "../../../images/images"
import {
  companyFooterMenu,
  learnFooterMenu,
  productsFooterMenu,
  rightsReservedGataca,
  sectorsFooterMenu,
  subFooterMenu,
  useCasesFooterMenu,
} from "../../../globalData/globalData"
import SectionContent from "./footerComponents/sectionContent/SectionContent"
import SocialMediaContent from "./footerComponents/socialMediaContent/SocialMediaContent"

const Footer: React.FC = () => {
  return (
    <footer className={styles?.footer}>
      <section className={styles?.mainSectionFooter}>
        <div
          className={`${styles?.iconsContainer} ${styles?.mainSectionFooter__column}`}
        >
          <div className={styles?.logo}>
            <img
              src={images.gatacIconAndText}
              id="gatacaLogo"
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
          <SectionContent navigationObject={learnFooterMenu} />
        </div>
        <div
          className={`${styles?.footerSections} ${
            styles?.mainSectionFooter__column
          } ${styles?.showMobile} ${cx("marginTop10")}`}
        >
          <SectionContent navigationObject={learnFooterMenu} />
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
      <section className={styles?.secondarySectionFooter}>
        <div className={cx("marginBottom16")}>
          <ul>
            {subFooterMenu?.subRoutes?.map(item => {
              return (
                <li>
                  <Link
                    id={item.id}
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
          className={`${styles?.rightsReserved} ${cx(
            "buttonMD marginBottom16"
          )}`}
          id={rightsReservedGataca?.id}
        >
          {rightsReservedGataca?.label}
        </div>
      </section>
    </footer>
  )
}

export default Footer
