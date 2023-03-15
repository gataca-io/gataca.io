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

const Footer: React.FC = () => {
  return (
    <main>
      <>
        <footer className={styles?.footer}>
          <section className={styles?.mainSectionFooter}>
            <div className="logo">
              <img src={images.gatacIconAndText} />
            </div>
            <div className={styles?.footerSections}>
              <p className={`${cx("marginBottom32")} ${cx("buttonMD")}`}>
                {productsFooterMenu?.label}
              </p>
              <ul>
                {productsFooterMenu?.subRoutes?.map(item => {
                  return (
                    <li className={cx("marginBottom16")}>
                      <Link
                        className={cx("bodyRegularMD")}
                        to={item.route || ""}
                      >
                        {item.label}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className={styles?.footerSections}>
              <div>
                <p
                  className={`${cx("marginBottom32")} ${cx("buttonMD")} ${cx(
                    "marginTop10"
                  )}`}
                >
                  {useCasesFooterMenu?.label}
                </p>
                <ul>
                  {useCasesFooterMenu?.subRoutes?.map(item => {
                    return (
                      <li className={cx("marginBottom16")}>
                        <Link
                          className={cx("bodyRegularMD")}
                          to={item.route || ""}
                        >
                          {item.label}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
              <div>
                <p
                  className={`${cx("marginBottom32")} ${cx("buttonMD")} ${cx(
                    "marginTop10"
                  )}`}
                >
                  {sectorsFooterMenu?.label}
                </p>
                <ul>
                  {sectorsFooterMenu?.subRoutes?.map(item => {
                    return (
                      <li className={cx("marginBottom16")}>
                        <Link
                          className={cx("bodyRegularMD")}
                          to={item.route || ""}
                        >
                          {item.label}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
            <div className={styles?.footerSections}>
              <div>
                <p
                  className={`${cx("marginBottom32")} ${cx("buttonMD")} ${cx(
                    "marginTop10"
                  )}`}
                >
                  {companyFooterMenu?.label}
                </p>
                <ul>
                  {companyFooterMenu?.subRoutes?.map(item => {
                    return (
                      <li className={cx("marginBottom16")}>
                        <Link
                          className={cx("bodyRegularMD")}
                          to={item.route || ""}
                        >
                          {item.label}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
              <div>
                <p
                  className={`${cx("marginBottom32")} ${cx("buttonMD")} ${cx(
                    "marginTop10"
                  )}`}
                >
                  {learnFooterMenu?.label}
                </p>
                <ul>
                  {learnFooterMenu?.subRoutes?.map(item => {
                    return (
                      <li className={cx("marginBottom16")}>
                        <Link
                          className={cx("bodyRegularMD")}
                          to={item.route || ""}
                        >
                          {item.label}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </section>
          <hr></hr>
          <section className={styles?.subSectionFooter}>
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
