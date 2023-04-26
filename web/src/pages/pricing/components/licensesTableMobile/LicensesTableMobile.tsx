import React from "react"
import cx from "classnames"
import PurpleButton from "../../../../components/atoms/buttons/purple/PurpleButton"
import Tag from "../../../../components/atoms/tags/Tag"
import {
  IProductModel,
  InfoTogglesPricingModel,
} from "../../../../interfaces/interfaces"
import IconDataCell from "./elements/cells/iconDataCell/IconDataCell"
import ListDataCell from "./elements/cells/listDataCell/ListDataCell"
import QuantityDataCell from "./elements/cells/quantityDataCell/QuantityDataCell"
import CardHeader from "./elements/cardHeader/CardHeader"
import CardLeftColumn from "./elements/cardLeftColumn/CardLeftColumn"
import * as styles from "./licensesTableMobile.module.scss"
import { images } from "../../../../images/images"

type ILicensesTableMobileProps = {
  license: IProductModel
  licenseIndex: number
  switchPeriodValue: string
  infoToggles: InfoTogglesPricingModel
  selectLicense: (x: any) => void
}

const LicensesTableMobile: React.FC<ILicensesTableMobileProps> = props => {
  const {
    license,
    switchPeriodValue,
    licenseIndex,
    infoToggles,
    selectLicense,
  } = props

  const getPrice = (item: any) => {
    return switchPeriodValue === "year" ? item?.yearlyPrice : item?.monthlyPrice
  }

  return (
    <>
      <div className={styles?.tableContainer}>
        <div>
          <p className={`${cx("heading4")}`} id={"featuresTable"}>
            All features
          </p>
          <select
            className={`${styles?.selector} ${cx("bodyRegularMD")}`}
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
          <div className={styles?.header__container}>
            <div>
              {!license?.name?.toLowerCase()?.includes("enterprise") ? (
                <>
                  <p className={`${cx("heading4")}`}>
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
                          )}`}
                        >
                          {license?.subPriceMonthLabel}
                        </span>
                      )
                    : license?.subPriceYearLabel && (
                        <span
                          className={`${cx(
                            "neutral700 bodyRegularXS marginTop2"
                          )}`}
                        >
                          {license?.subPriceYearLabel}
                        </span>
                      )}
                </>
              ) : (
                <>
                  <p className={`${cx("heading5")}`}>{getPrice(license)}</p>
                </>
              )}
            </div>

            <div>
              {license?.type === "Professional" && (
                <Tag label={"Popular"} className={styles?.popularTag} />
              )}
            </div>
          </div>
          <PurpleButton
            className={styles?.license__button}
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
        <div className={styles?.card}>
          <CardHeader title={"Verification Features"} />

          <div key={0} className={styles?.card__row}>
            <CardLeftColumn
              text={"Verification Templates"}
              information={infoToggles?.verificationTemplate}
            />
            <QuantityDataCell data={license?.features?.verificationTemplates} />
          </div>
          <div className={styles?.card__row}>
            <CardLeftColumn
              text={"Active users p/m"}
              information={infoToggles?.activeUser}
            />
            <QuantityDataCell data={license?.features?.activeUsers} />
          </div>
        </div>

        {/* Issuance features */}
        <div className={styles?.card}>
          <CardHeader title={"Issuance Features"} />

          <div key={0} className={styles?.card__row}>
            <CardLeftColumn
              text={"Issuance Templates"}
              information={infoToggles?.issuanceTemplate}
            />
            <QuantityDataCell data={license?.features?.issuanceTemplates} />
          </div>
          <div className={styles?.card__row}>
            <CardLeftColumn
              text={"Issued Credentials"}
              information={infoToggles?.issuedCredential}
            />
            <QuantityDataCell data={license?.features?.issuedCredentials} />
          </div>
        </div>

        {/* Other features */}
        <div className={styles?.card}>
          <CardHeader title={"Other Features"} />

          <div key={0} className={styles?.card__row}>
            <CardLeftColumn text={"DIDs"} />
            <QuantityDataCell data={license?.features?.dids} />
          </div>
          <div className={styles?.card__row}>
            <CardLeftColumn text={"API Keys"} />
            <QuantityDataCell data={license?.features?.apiKeys} />
          </div>
          <div className={styles?.card__row}>
            <CardLeftColumn
              text={"2FA Security Mechanism"}
              information={infoToggles?.securityFactorMechanism}
            />
            <ListDataCell data={license?.features?.nFactor} />
          </div>
          <div className={styles?.card__row}>
            <CardLeftColumn text={"Notifications"} />
            <ListDataCell data={license?.features?.notifications} />
          </div>
          <div className={styles?.card__row}>
            <CardLeftColumn text={"Usage Statistics"} />
            <IconDataCell data={license?.features?.stadistics} />
          </div>
          <div className={styles?.card__row}>
            <CardLeftColumn text={"Credentials in W3C VC format"} />
            <IconDataCell data={license?.features?.credentialsInW3CFormat} />
          </div>
          <div className={styles?.card__row}>
            <CardLeftColumn
              text={"Sandbox environment"}
              information={infoToggles?.sandboxEnvironment}
            />
            <IconDataCell data={license?.features?.sandBoxEnvironment} />
          </div>
          <div className={styles?.card__row}>
            <CardLeftColumn
              text={"DID in Public Catalogue"}
              information={infoToggles?.didInPublicCatalogue}
            />
            <IconDataCell data={license?.features?.didPublicCatalogue} />
          </div>
          <div className={styles?.card__row}>
            <CardLeftColumn
              text={"Publish Schemas in Public Catalogue"}
              information={infoToggles?.schemaInPublicCatalogue}
            />
            <IconDataCell data={license?.features?.newSchemaPublicCatalogue} />
          </div>
          <div className={styles?.card__row}>
            <CardLeftColumn
              text={"EBSI integration"}
              information={infoToggles?.ebsiIntegration}
            />
            <IconDataCell data={license?.features?.ebsiIntegration} />
          </div>
          <div className={styles?.card__row}>
            <CardLeftColumn text={"Customization of GDPR purposes"} />
            <IconDataCell data={license?.features?.customGDPRPurposes} />
          </div>
          <div className={styles?.card__row}>
            <CardLeftColumn text={"Custom QR"} />
            <IconDataCell data={license?.features?.customQR} />
          </div>
          <div className={styles?.card__row}>
            <CardLeftColumn text={"Credentials in ISO 18013:5 format"} />
            <IconDataCell data={license?.features?.credentialsInISO28013} />
          </div>
          <div className={styles?.card__row}>
            <CardLeftColumn
              text={"Integration with custom trust Frameworks"}
              information={infoToggles?.integrationCustomFrameworks}
            />
            <IconDataCell
              data={license?.features?.integrationCustomTrustFrameworks}
            />
          </div>
          <div className={styles?.card__row}>
            <CardLeftColumn
              text={"Integration with custom infrastructure"}
              information={infoToggles?.integrationCustomInfraestructure}
            />
            <IconDataCell
              data={license?.features?.integrationCustomTrustInfraestructure}
            />
          </div>
          <div className={styles?.card__row}>
            <CardLeftColumn text={"Stadard Support"} />
            <div className={`${cx("bodyBoldSM")}`}>
              {typeof license?.features?.standardSupport == "boolean" ? (
                <img
                  className={styles?.icon}
                  src={
                    license?.features?.standardSupport
                      ? images?.checkIcon
                      : images?.closeIcon
                  }
                ></img>
              ) : (
                <p>
                  ${" "}
                  <span className={`${cx("bodyRegularCap neutral700")}`}>
                    {license?.features?.standardSupport}
                  </span>
                </p>
              )}
            </div>
          </div>
          <div className={styles?.card__row}>
            <CardLeftColumn text={"Premier Support"} />
            <div className={`${cx("bodyBoldSM")}`}>
              {typeof license?.features?.premierSupport == "boolean" ? (
                <img
                  className={styles?.icon}
                  src={
                    license?.features?.premierSupport
                      ? images?.checkIcon
                      : images?.closeIcon
                  }
                ></img>
              ) : (
                <p>
                  ${" "}
                  <span className={`${cx("bodyRegularCap neutral700")}`}>
                    {license?.features?.premierSupport}
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
