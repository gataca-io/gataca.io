import React from "react" // we need this to make JSX compile
// import LicenseCard from "../LicenseCard/LicenseCard"
import cx from "classnames"
import * as styles from "./licensesTable.module.scss"
import PurpleButton from "../../../../../../components/atoms/buttons/purple/PurpleButton"
import Tag from "../../../../../../components/atoms/tags/Tag"
import { images } from "../../../../../../images/images"

type ILicensesTableProps = {
  products: any[]
  switchPeriodValue: string
  switchButtonOptios: any
  licenseIsEnterprise: (x: any) => boolean
  selectPeriod: (x: any) => void
}

const LicensesTable: React.FC<ILicensesTableProps> = props => {
  const {
    products,
    switchPeriodValue,
    switchButtonOptios,
    selectPeriod,
    licenseIsEnterprise,
  } = props

  const getPrice = (item: any) => {
    return switchPeriodValue === "year" ? item.yearlyPrice : item.monthlyPrice
  }

  const isLastItem = (itemsArray: any[], item: any) => {
    const arrLength = itemsArray?.length
    const itemPosition = itemsArray?.indexOf(item)
    return itemPosition === arrLength - 1
  }

  return (
    <>
      <div className={styles.tableContainer}>
        <table>
          <thead className={styles.table__header__container}>
            <tr className={styles.table__header} id={"featuresTableDesk"}>
              <th colSpan={2}></th>

              {products?.map(license => {
                return (
                  <th className={styles.table__header__cell}>
                    <div className={styles.table__header__cell__content}>
                      <div className={styles.license__header}>
                        <p
                          className={`${styles.licenseName} ${cx(
                            "bodyBoldMD"
                          )}`}
                        >
                          {license?.type}
                        </p>
                        {license?.type === "Professional" && (
                          <Tag
                            label={"Popular"}
                            className={styles.license__header__popularTag}
                          />
                        )}
                      </div>
                      <div>
                        {!licenseIsEnterprise(license) ? (
                          <>
                            <p
                              className={`${styles.licensePrice} ${
                                switchPeriodValue !== "year"
                                  ? styles.licensePriceLarge
                                  : ""
                              } ${cx("heading4")}`}
                            >
                              <span>{getPrice(license)}€</span>
                              {" /"}
                              &nbsp;
                              {switchPeriodValue}
                            </p>
                            {switchPeriodValue === "month"
                              ? license?.subPriceMonthLabel && (
                                  <span
                                    className={`${cx(
                                      "neutral700 bodyRegularXS marginTop2"
                                    )} ${styles.licenseSave}`}
                                  >
                                    {license?.subPriceMonthLabel}
                                  </span>
                                )
                              : license?.subPriceYearLabel && (
                                  <span
                                    className={`${cx(
                                      "neutral700 bodyRegularXS marginTop2"
                                    )} ${styles.licenseSave}`}
                                  >
                                    {license?.subPriceYearLabel}
                                  </span>
                                )}
                          </>
                        ) : (
                          <>
                            <p
                              className={`${styles.licenseCustomPrice} ${
                                switchPeriodValue === "year"
                                  ? styles.licenseCustomPriceLarge
                                  : ""
                              } ${cx("heading5")}`}
                            >
                              {getPrice(license)}
                            </p>
                          </>
                        )}
                        <PurpleButton
                          className={styles.license__button}
                          label={license?.button?.label}
                          action={() =>
                            window?.open(
                              license?.button?.url,
                              license?.button?.outsideWeb ? "_blank" : "_self"
                            )
                          }
                        />
                        {/* <PurpleButton
                          className={styles.billSummary__continue}
                          text={
                            licenseIsEnterprise(license)
                              ? "Contact Us"
                              : "Get Started"
                          }
                          functionality={() =>
                            !licenseIsEnterprise(license)
                              ? window?.open(
                                  "https://studio.gataca.io/login",
                                  "_blank"
                                )
                              : window?.open(
                                  "https://gataca.io/company/contact",
                                  "_blank"
                                )
                          }
                          disabled={false}
                        /> */}
                      </div>
                    </div>
                  </th>
                )
              })}
            </tr>
          </thead>
          <tbody className={styles.table__body}>
            <tr key={0} className={styles.table__body__row}>
              <p></p>
              <div></div>
            </tr>
            <tr key={1} className={styles.table__body__row}>
              <td
                className={`${styles.table__body__row__cell} ${
                  styles.table__body__row__category
                } ${cx("bodyBoldCap")}`}
                rowSpan={2}
              >
                Verification Features
              </td>
              <td
                className={`${styles.table__body__row__cell} ${
                  styles.table__body__row__subcategory
                } ${cx("bodyRegularSM")}`}
              >
                Verification Templates
              </td>
              {products?.map(license => {
                return (
                  <>
                    <td
                      className={`${styles.table__body__row__cell} ${
                        styles.table__body__row__data
                      } ${cx("bodyBoldSM")}`}
                    >
                      {license.features?.verificationTemplates === "∞"
                        ? "Unlimited"
                        : license.features?.verificationTemplates}
                    </td>
                  </>
                )
              })}
            </tr>
            <tr key={2} className={styles.table__body__row}>
              <td
                className={`${styles.table__body__row__cell} ${
                  styles.table__body__row__subcategory
                } ${cx("bodyRegularSM")}`}
              >
                Active Users p/m
              </td>
              {products?.map(license => {
                return (
                  <>
                    <td
                      className={`${styles.table__body__row__cell} ${
                        styles.table__body__row__data
                      } ${cx("bodyBoldSM")}`}
                    >
                      {license.features?.activeUsers === "∞"
                        ? "Unlimited"
                        : license.features?.activeUsers}
                    </td>
                  </>
                )
              })}
            </tr>
            <tr key={3} className={styles.table__body__row}>
              <td
                rowSpan={2}
                className={`${styles.table__body__row__cell} ${
                  styles.table__body__row__category
                } ${cx("bodyBoldCap")}`}
              >
                Issuance Features
              </td>
              <td
                className={`${styles.table__body__row__cell} ${
                  styles.table__body__row__subcategory
                } ${cx("bodyRegularSM")}`}
              >
                Issuance Templates
              </td>
              {products?.map(license => {
                return (
                  <>
                    <td
                      className={`${styles.table__body__row__cell} ${
                        styles.table__body__row__data
                      } ${cx("bodyBoldSM")}`}
                    >
                      {license.features?.issuanceTemplates === "∞"
                        ? "Unlimited"
                        : license.features?.issuanceTemplates}
                    </td>
                  </>
                )
              })}
            </tr>
            <tr key={4} className={styles.table__body__row}>
              <td
                className={`${styles.table__body__row__cell} ${
                  styles.table__body__row__subcategory
                } ${cx("bodyRegularSM")}`}
              >
                Issued Credentials p/m
              </td>
              {products?.map(license => {
                return (
                  <>
                    <td
                      className={`${styles.table__body__row__cell} ${
                        styles.table__body__row__data
                      } ${cx("bodyBoldSM")}`}
                    >
                      {license.features?.issuedCredentials === "∞"
                        ? "Unlimited"
                        : license.features?.issuedCredentials}
                    </td>
                  </>
                )
              })}
            </tr>
            <tr key={5} className={styles.table__body__row}>
              <td
                rowSpan={18}
                className={`${styles.table__body__row__cell} ${
                  styles.table__body__row__category
                } ${cx("bodyBoldCap")}`}
              >
                Other Features
              </td>
            </tr>
            <tr key={6} className={styles.table__body__row}>
              <td
                className={`${styles.table__body__row__cell} ${
                  styles.table__body__row__subcategory
                } ${cx("bodyRegularSM")}`}
              >
                DIDs
              </td>
              {products?.map(license => {
                return (
                  <>
                    <td
                      className={`${styles.table__body__row__cell} ${
                        styles.table__body__row__data
                      } ${cx("bodyBoldSM")}`}
                    >
                      {license.features?.dids === "∞"
                        ? "Unlimited"
                        : license.features?.dids}
                    </td>
                  </>
                )
              })}
            </tr>
            <tr key={7} className={styles.table__body__row}>
              <td
                className={`${styles.table__body__row__cell} ${
                  styles.table__body__row__subcategory
                } ${cx("bodyRegularSM")}`}
              >
                API Keys
              </td>
              {products?.map(license => {
                return (
                  <>
                    <td
                      className={`${styles.table__body__row__cell} ${
                        styles.table__body__row__data
                      } ${cx("bodyBoldSM")}`}
                    >
                      {license.features?.apiKeys === "∞"
                        ? "Unlimited"
                        : license.features?.apiKeys}
                    </td>
                  </>
                )
              })}
            </tr>
            <tr key={8} className={styles.table__body__row}>
              <td
                className={`${styles.table__body__row__cell} ${
                  styles.table__body__row__subcategory
                } ${cx("bodyRegularSM")}`}
              >
                2FA Security Mechanism
              </td>
              {products?.map(license => {
                return (
                  <>
                    <td
                      className={`${styles.table__body__row__cell} ${
                        styles.table__body__row__data
                      } ${cx("bodyBoldSM")}`}
                    >
                      {license.features?.nFactor?.length ? (
                        license.features?.nFactor?.map((el: string) => (
                          <p className={`${cx("bodyBoldSM")}`}>
                            {el}
                            {!isLastItem(license.features?.nFactor, el)
                              ? ","
                              : ""}
                          </p>
                        ))
                      ) : (
                        <p className={`${cx("bodyBoldSM")}`}>None</p>
                      )}
                    </td>
                  </>
                )
              })}
            </tr>
            <tr key={9} className={styles.table__body__row}>
              <td
                className={`${styles.table__body__row__cell} ${
                  styles.table__body__row__subcategory
                } ${cx("bodyRegularSM")}`}
              >
                Notifications
              </td>
              {products?.map(license => {
                return (
                  <>
                    <td
                      className={`${styles.table__body__row__cell} ${
                        styles.table__body__row__data
                      } ${cx("bodyBoldSM")}`}
                    >
                      {license.features?.notifications?.length ? (
                        license.features?.notifications?.map((el: string) => (
                          <p className={`${cx("bodyBoldSM")}`}>
                            {el}
                            {!isLastItem(license.features?.notifications, el)
                              ? ","
                              : ""}
                          </p>
                        ))
                      ) : (
                        <p className={`${cx("bodyBoldSM")}`}>None</p>
                      )}
                    </td>
                  </>
                )
              })}
            </tr>
            <tr key={10} className={styles.table__body__row}>
              <td
                className={`${styles.table__body__row__cell} ${
                  styles.table__body__row__subcategory
                } ${cx("bodyRegularSM")}`}
              >
                Usage Statistics
              </td>
              {products?.map(license => {
                return (
                  <>
                    <td
                      className={`${styles.table__body__row__cell} ${
                        styles.table__body__row__data
                      } ${cx("bodyBoldSM")}`}
                    >
                      <img
                        className={styles.table__body__row__cell__icon}
                        src={
                          license.features?.stadistics
                            ? images.checkIcon
                            : images.closeIcon
                        }
                      ></img>
                    </td>
                  </>
                )
              })}
            </tr>
            <tr key={10} className={styles.table__body__row}>
              <td
                className={`${styles.table__body__row__cell} ${
                  styles.table__body__row__subcategory
                } ${cx("bodyRegularSM")}`}
              >
                Credentials in W3C VC format
              </td>
              {products?.map(license => {
                return (
                  <>
                    <td
                      className={`${styles.table__body__row__cell} ${
                        styles.table__body__row__data
                      } ${cx("bodyBoldSM")}`}
                    >
                      <img
                        className={styles.table__body__row__cell__icon}
                        src={
                          license?.credentialsInW3CFormat
                            ? images.checkIcon
                            : images.closeIcon
                        }
                      ></img>
                    </td>
                  </>
                )
              })}
            </tr>
            <tr key={10} className={styles.table__body__row}>
              <td
                className={`${styles.table__body__row__cell} ${
                  styles.table__body__row__subcategory
                } ${cx("bodyRegularSM")}`}
              >
                Sandbox environment
              </td>
              {products?.map(license => {
                return (
                  <>
                    <td
                      className={`${styles.table__body__row__cell} ${
                        styles.table__body__row__data
                      } ${cx("bodyBoldSM")}`}
                    >
                      <img
                        className={styles.table__body__row__cell__icon}
                        src={
                          license.features?.sandBoxEnvironment
                            ? images.checkIcon
                            : images.closeIcon
                        }
                      ></img>
                    </td>
                  </>
                )
              })}
            </tr>
            <tr key={11} className={styles.table__body__row}>
              <td
                className={`${styles.table__body__row__cell} ${
                  styles.table__body__row__subcategory
                } ${cx("bodyRegularSM")}`}
              >
                DID in Public Catalogue
              </td>
              {products?.map(license => {
                return (
                  <>
                    <td
                      className={`${styles.table__body__row__cell} ${
                        styles.table__body__row__data
                      } ${cx("bodyBoldSM")}`}
                    >
                      <img
                        className={styles.table__body__row__cell__icon}
                        src={
                          license.features?.didPublicCatalogue
                            ? images.checkIcon
                            : images.closeIcon
                        }
                      ></img>
                      {/* {  */}
                      {/* // : "✗ " + "Only Private Catalogue"} */}
                    </td>
                  </>
                )
              })}
            </tr>
            <tr key={12} className={styles.table__body__row}>
              <td
                className={`${styles.table__body__row__cell} ${
                  styles.table__body__row__subcategory
                } ${cx("bodyRegularSM")}`}
              >
                Publish Schemas in Public Catalogue
              </td>
              {products?.map(license => {
                return (
                  <>
                    <td
                      className={`${styles.table__body__row__cell} ${
                        styles.table__body__row__data
                      } ${cx("bodyBoldSM")}`}
                    >
                      <img
                        className={styles.table__body__row__cell__icon}
                        src={
                          license.features?.newSchemaPublicCatalogue
                            ? images.checkIcon
                            : images.closeIcon
                        }
                      ></img>
                    </td>
                  </>
                )
              })}
            </tr>
            <tr key={12} className={styles.table__body__row}>
              <td
                className={`${styles.table__body__row__cell} ${
                  styles.table__body__row__subcategory
                } ${cx("bodyRegularSM")}`}
              >
                EBSI integration
              </td>
              {products?.map(license => {
                return (
                  <>
                    <td
                      className={`${styles.table__body__row__cell} ${
                        styles.table__body__row__data
                      } ${cx("bodyBoldSM")}`}
                    >
                      <img
                        className={styles.table__body__row__cell__icon}
                        src={
                          license.features?.ebsiIntegration
                            ? images.checkIcon
                            : images.closeIcon
                        }
                      ></img>
                    </td>
                  </>
                )
              })}
            </tr>
            <tr key={12} className={styles.table__body__row}>
              <td
                className={`${styles.table__body__row__cell} ${
                  styles.table__body__row__subcategory
                } ${cx("bodyRegularSM")}`}
              >
                Customization of GDPR purposes
              </td>
              {products?.map(license => {
                return (
                  <>
                    <td
                      className={`${styles.table__body__row__cell} ${
                        styles.table__body__row__data
                      } ${cx("bodyBoldSM")}`}
                    >
                      <img
                        className={styles.table__body__row__cell__icon}
                        src={
                          license.features?.customGDPRPurposes
                            ? images.checkIcon
                            : images.closeIcon
                        }
                      ></img>
                    </td>
                  </>
                )
              })}
            </tr>
            <tr key={13} className={styles.table__body__row}>
              <td
                className={`${styles.table__body__row__cell} ${
                  styles.table__body__row__subcategory
                } ${cx("bodyRegularSM")}`}
              >
                Custom QR
              </td>
              {products?.map(license => {
                return (
                  <>
                    <td
                      className={`${styles.table__body__row__cell} ${
                        styles.table__body__row__data
                      } ${cx("bodyBoldSM")}`}
                    >
                      <img
                        className={styles.table__body__row__cell__icon}
                        src={
                          license.features?.customQR
                            ? images.checkIcon
                            : images.closeIcon
                        }
                      ></img>
                    </td>
                  </>
                )
              })}
            </tr>
            <tr key={13} className={styles.table__body__row}>
              <td
                className={`${styles.table__body__row__cell} ${
                  styles.table__body__row__subcategory
                } ${cx("bodyRegularSM")}`}
              >
                Credentials in ISO 18013:5 format
              </td>
              {products?.map(license => {
                return (
                  <>
                    <td
                      className={`${styles.table__body__row__cell} ${
                        styles.table__body__row__data
                      } ${cx("bodyBoldSM")}`}
                    >
                      <img
                        className={styles.table__body__row__cell__icon}
                        src={
                          license.features?.credentialsInISO28013
                            ? images.checkIcon
                            : images.closeIcon
                        }
                      ></img>
                    </td>
                  </>
                )
              })}
            </tr>
            <tr key={13} className={styles.table__body__row}>
              <td
                className={`${styles.table__body__row__cell} ${
                  styles.table__body__row__subcategory
                } ${cx("bodyRegularSM")}`}
              >
                Integration with custom trust Frameworks
              </td>
              {products?.map(license => {
                return (
                  <>
                    <td
                      className={`${styles.table__body__row__cell} ${
                        styles.table__body__row__data
                      } ${cx("bodyBoldSM")}`}
                    >
                      <img
                        className={styles.table__body__row__cell__icon}
                        src={
                          license.features?.integrationCustomTrustFrameworks
                            ? images.checkIcon
                            : images.closeIcon
                        }
                      ></img>
                    </td>
                  </>
                )
              })}
            </tr>
            <tr key={13} className={styles.table__body__row}>
              <td
                className={`${styles.table__body__row__cell} ${
                  styles.table__body__row__subcategory
                } ${cx("bodyRegularSM")}`}
              >
                Integration with custom infrastructure
              </td>
              {products?.map(license => {
                return (
                  <>
                    <td
                      className={`${styles.table__body__row__cell} ${
                        styles.table__body__row__data
                      } ${cx("bodyBoldSM")}`}
                    >
                      <img
                        className={styles.table__body__row__cell__icon}
                        src={
                          license.features
                            ?.integrationCustomTrustInfraestructure
                            ? images.checkIcon
                            : images.closeIcon
                        }
                      ></img>
                    </td>
                  </>
                )
              })}
            </tr>
            <tr key={14} className={styles.table__body__row}>
              <td
                className={`${styles.table__body__row__cell} ${
                  styles.table__body__row__subcategory
                } ${cx("bodyRegularSM")}`}
              >
                Stadard Support
              </td>
              {products?.map(license => {
                return (
                  <>
                    <td
                      className={`${styles.table__body__row__cell} ${
                        styles.table__body__row__data
                      } ${cx("bodyBoldSM")}`}
                    >
                      {typeof license.features?.standardSupport == "boolean" ? (
                        <img
                          className={styles.table__body__row__cell__icon}
                          src={
                            license.features?.standardSupport
                              ? images.checkIcon
                              : images.closeIcon
                          }
                        ></img>
                      ) : (
                        <p>
                          ${" "}
                          <span
                            className={`${cx("bodyRegularCap neutral700")}`}
                          >
                            {license.features?.standardSupport}
                          </span>
                        </p>
                      )}
                    </td>
                  </>
                )
              })}
            </tr>
            <tr key={14} className={styles.table__body__row}>
              <td
                className={`${styles.table__body__row__cell} ${
                  styles.table__body__row__subcategory
                } ${cx("bodyRegularSM")}`}
              >
                Premier Support
              </td>
              {products?.map(license => {
                return (
                  <>
                    <td
                      className={`${styles.table__body__row__cell} ${
                        styles.table__body__row__data
                      } ${cx("bodyBoldSM")}`}
                    >
                      {typeof license.features?.premierSupport == "boolean" ? (
                        <img
                          className={styles.table__body__row__cell__icon}
                          src={
                            license.features?.premierSupport
                              ? images.checkIcon
                              : images.closeIcon
                          }
                        ></img>
                      ) : (
                        <p>
                          ${" "}
                          <span
                            className={`${cx("bodyRegularCap neutral700")}`}
                          >
                            {license.features?.premierSupport}
                          </span>
                        </p>
                      )}
                    </td>
                  </>
                )
              })}
            </tr>
            {/* <tr key={15} className={styles.table__body__row}>
              <td
                className={`${styles.table__body__row__cell} ${
                  styles.table__body__row__subcategory
                } ${cx("bodyRegularSM")}`}
              >
                SLAs
              </td>
              {products?.map(license => {
                return (
                  <>
                    <td
                      className={`${styles.table__body__row__cell} ${
                        styles.table__body__row__data
                      } ${cx("bodyBoldSM")}`}
                    >
                      <img
                        className={styles.table__body__row__cell__icon}
                        src={
                          license.features?.slas
                            ? images.checkIcon
                            : images.closeIcon
                        }
                      ></img>
                    </td>
                  </>
                )
              })}
            </tr> */}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default LicensesTable
