import React from "react" // we need this to make JSX compile
// import LicenseCard from "../LicenseCard/LicenseCard"
import cx from "classnames"
import * as styles from "./licensesTableMobile.module.scss"
import PurpleButton from "../../../../../../components/atoms/buttons/purple/PurpleButton"
import Tag from "../../../../../../components/atoms/tags/Tag"
import { images } from "../../../../../../images/images"
import { IProductModel } from "../../../../../../interfaces/interfaces"
import HoverTooltip from "../../../../../../components/elements/tooltip/hoverTooltip/HoverTooltip"

type ILicensesTableMobileProps = {
  license: IProductModel
  licenseIndex: number
  switchPeriodValue: string
  licenseIsEnterprise: (x: any) => boolean
  selectLicense: (x: any) => void
}

export const CardHeader: React.FC<{ title: string }> = props => {
  const { title } = props
  return (
    <div key={0} className={styles.card__header}>
      <p className={`${cx("bodyBoldLG")}`}>{title}</p>
    </div>
  )
}

export const CardLeftColumn: React.FC<{ text: string }> = props => {
  const { text } = props
  return (
    <div key={0} className={styles.card__row}>
      <div>
        <p className={`${cx("bodyRegularSM")}`}>{text}</p>
        <HoverTooltip label={"hola"} />
      </div>
    </div>
  )
}

const LicensesTableMobile: React.FC<ILicensesTableMobileProps> = props => {
  const {
    license,
    switchPeriodValue,
    licenseIndex,
    selectLicense,
    licenseIsEnterprise,
  } = props

  const getPrice = (item: any) => {
    return switchPeriodValue === "year" ? item.yearlyPrice : item.monthlyPrice
  }

  const isLastItem = (itemsArray: any[] | undefined, item: any) => {
    const arrLength = itemsArray?.length
    const itemPosition = itemsArray?.indexOf(item)
    return arrLength ? itemPosition === arrLength - 1 : false
  }

  return (
    <>
      <div className={styles.tableContainer}>
        <div>
          <p className={`${cx("heading4")}`} id={"featuresTable"}>
            All features
          </p>
          <select
            className={`${styles.selector} ${cx("bodyRegularMD")}`}
            defaultValue={licenseIndex || 0}
            onChange={event => {
              selectLicense(event?.target?.value)
            }}
          >
            <option
              defaultChecked={licenseIndex === 0}
              className={`${cx("bodyRegularMD")}`}
              value={0}
            >
              Starter
            </option>
            <option
              defaultChecked={licenseIndex === 1}
              className={`${cx("bodyRegularMD")}`}
              value={1}
            >
              Profesional
            </option>
            <option
              defaultChecked={licenseIndex === 2}
              className={`${cx("bodyRegularMD")}`}
              value={2}
            >
              Essential
            </option>
            <option
              defaultChecked={licenseIndex === 3}
              className={`${cx("bodyRegularMD")}`}
              value={3}
            >
              Enterprise
            </option>
          </select>
          <div className={styles.header__container}>
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
            </div>

            <div className={styles.license__header}>
              {license?.type === "Professional" && (
                <Tag label={"Popular"} className={styles.popularTag} />
              )}
            </div>
          </div>
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
        </div>

        {/* Verification features */}
        <div className={styles.card}>
          <CardHeader title={"Verification Features"} />

          <div key={0} className={styles.card__row}>
            <CardLeftColumn text={"Verification Templates"} />
            <div className={`${cx("bodyBoldSM")}`}>
              {license?.features?.verificationTemplates === "∞"
                ? "Unlimited"
                : license?.features?.verificationTemplates}
            </div>
          </div>
          <div className={styles.card__row}>
            <CardLeftColumn text={"Active users p/m"} />
            <div className={`${cx("bodyBoldSM")}`}>
              {license?.features?.activeUsers === "∞"
                ? "Unlimited"
                : license?.features?.activeUsers}
            </div>
          </div>
        </div>

        {/* Issuance features */}
        <div className={styles.card}>
          <CardHeader title={"Issuance Features"} />

          <div key={0} className={styles.card__row}>
            <CardLeftColumn text={"Issuance Templates"} />
            <div className={`${cx("bodyBoldSM")}`}>
              {license?.features?.issuanceTemplates === "∞"
                ? "Unlimited"
                : license?.features?.issuanceTemplates}
            </div>
          </div>
          <div className={styles.card__row}>
            <CardLeftColumn text={"Issued Credentials"} />
            <div className={`${cx("bodyBoldSM")}`}>
              {license?.features?.issuedCredentials === "∞"
                ? "Unlimited"
                : license?.features?.issuedCredentials}
            </div>
          </div>
        </div>

        {/* Other features */}
        <div className={styles.card}>
          <CardHeader title={"Other Features"} />

          <div key={0} className={styles.card__row}>
            <CardLeftColumn text={"DIDs"} />
            <div className={`${cx("bodyBoldSM")}`}>
              {license.features?.dids === "∞"
                ? "Unlimited"
                : license.features?.dids}
            </div>
          </div>
          <div className={styles.card__row}>
            <CardLeftColumn text={"API Keys"} />
            <div className={`${cx("bodyBoldSM")}`}>
              {license.features?.apiKeys === "∞"
                ? "Unlimited"
                : license.features?.apiKeys}
            </div>
          </div>
          <div className={styles.card__row}>
            <CardLeftColumn text={"2FA Security Mechanism"} />
            <div className={`${cx("bodyBoldSM")}`}>
              {license?.features?.nFactor?.length ? (
                license?.features?.nFactor?.map((el: string) => (
                  <p className={`${cx("bodyBoldSM")}`}>
                    {el}
                    {!isLastItem(license?.features?.nFactor || [], el)
                      ? ","
                      : ""}
                  </p>
                ))
              ) : (
                <p className={`${cx("bodyBoldSM")}`}>None</p>
              )}
            </div>
          </div>
          <div className={styles.card__row}>
            <CardLeftColumn text={"Notifications"} />
            <div className={`${cx("bodyBoldSM")}`}>
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
            </div>
          </div>
          <div className={styles.card__row}>
            <CardLeftColumn text={"Usage Statistics"} />
            <div className={`${cx("bodyBoldSM")}`}>
              <img
                className={styles.icon}
                src={
                  license.features?.stadistics
                    ? images.checkIcon
                    : images.closeIcon
                }
              ></img>
            </div>
          </div>
          <div className={styles.card__row}>
            <CardLeftColumn text={"Credentials in W3C VC format"} />
            <div className={`${cx("bodyBoldSM")}`}>
              <img
                className={styles.icon}
                src={
                  license?.features?.credentialsInW3CFormat
                    ? images.checkIcon
                    : images.closeIcon
                }
              ></img>
            </div>
          </div>
          <div className={styles.card__row}>
            <CardLeftColumn text={"Sandbox environment"} />
            <div className={`${cx("bodyBoldSM")}`}>
              <img
                className={styles.icon}
                src={
                  license.features?.sandBoxEnvironment
                    ? images.checkIcon
                    : images.closeIcon
                }
              ></img>
            </div>
          </div>
          <div className={styles.card__row}>
            <CardLeftColumn text={"DID in Public Catalogue"} />
            <div className={`${cx("bodyBoldSM")}`}>
              <img
                className={styles.icon}
                src={
                  license.features?.didPublicCatalogue
                    ? images.checkIcon
                    : images.closeIcon
                }
              ></img>
            </div>
          </div>
          <div className={styles.card__row}>
            <CardLeftColumn text={"Publish Schemas in Public Catalogue"} />
            <div className={`${cx("bodyBoldSM")}`}>
              <img
                className={styles.icon}
                src={
                  license.features?.newSchemaPublicCatalogue
                    ? images.checkIcon
                    : images.closeIcon
                }
              ></img>
            </div>
          </div>
          <div className={styles.card__row}>
            <CardLeftColumn text={"EBSI integration"} />
            <div className={`${cx("bodyBoldSM")}`}>
              <img
                className={styles.icon}
                src={
                  license.features?.ebsiIntegration
                    ? images.checkIcon
                    : images.closeIcon
                }
              ></img>
            </div>
          </div>
          <div className={styles.card__row}>
            <CardLeftColumn text={"Customization of GDPR purposes"} />
            <div className={`${cx("bodyBoldSM")}`}>
              <img
                className={styles.icon}
                src={
                  license.features?.customGDPRPurposes
                    ? images.checkIcon
                    : images.closeIcon
                }
              ></img>
            </div>
          </div>
          <div className={styles.card__row}>
            <CardLeftColumn text={"Custom QR"} />
            <div className={`${cx("bodyBoldSM")}`}>
              <img
                className={styles.icon}
                src={
                  license.features?.customQR
                    ? images.checkIcon
                    : images.closeIcon
                }
              ></img>
            </div>
          </div>
          <div className={styles.card__row}>
            <CardLeftColumn text={"Credentials in ISO 18013:5 format"} />
            <div className={`${cx("bodyBoldSM")}`}>
              <img
                className={styles.icon}
                src={
                  license.features?.credentialsInISO28013
                    ? images.checkIcon
                    : images.closeIcon
                }
              ></img>
            </div>
          </div>
          <div className={styles.card__row}>
            <CardLeftColumn text={"Integration with custom trust Frameworks"} />
            <div className={`${cx("bodyBoldSM")}`}>
              <img
                className={styles.icon}
                src={
                  license.features?.integrationCustomTrustFrameworks
                    ? images.checkIcon
                    : images.closeIcon
                }
              ></img>
            </div>
          </div>
          <div className={styles.card__row}>
            <CardLeftColumn text={"Integration with custom infrastructure"} />
            <div className={`${cx("bodyBoldSM")}`}>
              <img
                className={styles.icon}
                src={
                  license.features?.integrationCustomTrustInfraestructure
                    ? images.checkIcon
                    : images.closeIcon
                }
              ></img>
            </div>
          </div>
          <div className={styles.card__row}>
            <CardLeftColumn text={"Stadard Support"} />
            <div className={`${cx("bodyBoldSM")}`}>
              {typeof license.features?.standardSupport == "boolean" ? (
                <img
                  className={styles.icon}
                  src={
                    license.features?.standardSupport
                      ? images.checkIcon
                      : images.closeIcon
                  }
                ></img>
              ) : (
                <p>
                  ${" "}
                  <span className={`${cx("bodyRegularCap neutral700")}`}>
                    {license.features?.standardSupport}
                  </span>
                </p>
              )}
            </div>
          </div>
          <div className={styles.card__row}>
            <CardLeftColumn text={"Premier Support"} />
            <div className={`${cx("bodyBoldSM")}`}>
              {typeof license.features?.premierSupport == "boolean" ? (
                <img
                  className={styles.icon}
                  src={
                    license.features?.premierSupport
                      ? images.checkIcon
                      : images.closeIcon
                  }
                ></img>
              ) : (
                <p>
                  ${" "}
                  <span className={`${cx("bodyRegularCap neutral700")}`}>
                    {license.features?.premierSupport}
                  </span>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LicensesTableMobile
