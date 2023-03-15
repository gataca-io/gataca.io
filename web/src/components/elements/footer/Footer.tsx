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
import SectionContent from "./footerComponents/SectionContent"

const Footer: React.FC = () => {
  return (
    <main>
      <>
        <footer className={styles?.footer}>
          <section className={styles?.mainSectionFooter}>
            <div className="logo">
              <img src={images.gatacIconAndText} />
            </div>
            <div className={`${styles?.footerSections} ${cx("marginTop10")}`}>
              <SectionContent navigationObject={productsFooterMenu} />
            </div>
            <div className={`${styles?.footerSections} ${cx("marginTop10")}`}>
              <SectionContent navigationObject={useCasesFooterMenu} />
              <SectionContent navigationObject={useCasesFooterMenu} />
            </div>
            <div className={`${styles?.footerSections} ${cx("marginTop10")}`}>
              <SectionContent navigationObject={companyFooterMenu} />
              <SectionContent navigationObject={learnFooterMenu} />
            </div>
          </section>
          <hr></hr>
          <section className={styles?.secondarySectionFooter}>
            <div className={cx("marginBottom16")}>
              <ul>
                {subFooterMenu?.subRoutes?.map(item => {
                  return (
                    <li>
                      <Link className={cx("buttonMD")} to={item.route || ""}>
                        {item.label}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div
              className={`${styles?.rightsReserved} ${cx("buttonMD")} ${cx(
                "marginBottom16"
              )}`}
            >
              {rightsReservedGataca?.label}
            </div>
          </section>
        </footer>
      </>
    </main>
  )
}

export default Footer
