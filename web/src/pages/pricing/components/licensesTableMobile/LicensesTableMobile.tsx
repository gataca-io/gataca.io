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
              {!license?.attributes.name?.toLowerCase()?.includes("enterprise") ? (
                <>
                  <p className={`${cx("heading4")}`}>
                    <span>{getPrice(license?.attributes)}€</span>
                    {" /"}
                    &nbsp;
                    {switchPeriodValue}
                  </p>
                  {switchPeriodValue === "month"
                    ? license?.attributes.subPriceMonthLabel && (
                        <span
                          className={`${cx(
                            "neutral700 bodyRegularXS marginTop2"
                          )}`}
                        >
                          {license?.attributes.subPriceMonthLabel}
                        </span>
                      )
                    : license?.attributes.subPriceYearLabel && (
                        <span
                          className={`${cx(
                            "neutral700 bodyRegularXS marginTop2"
                          )}`}
                        >
                          {license?.attributes.subPriceYearLabel}
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
              {license?.attributes.type === "Professional" && (
                <Tag label={"Popular"} className={styles?.popularTag} />
              )}
            </div>
          </div>
          <PurpleButton
            className={styles?.license__button}
            label={license?.attributes?.button?.label}
            action={() =>
              window?.open(
                license?.attributes?.button?.url,
                license?.attributes?.button?.outsideWeb ? "_blank" : "_self"
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
            <QuantityDataCell data={license?.attributes.features?.verificationTemplates} />
          </div>
          <div className={styles?.card__row}>
            <CardLeftColumn
              text={"Active users p/m"}
              information={infoToggles?.activeUser}
            />
            <QuantityDataCell data={license?.attributes.features?.activeUsers} />
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
            <QuantityDataCell data={license?.attributes.features?.issuanceTemplates} />
          </div>
          <div className={styles?.card__row}>
            <CardLeftColumn
              text={"Issued Credentials"}
              information={infoToggles?.issuedCredential}
            />
            <QuantityDataCell data={license?.attributes.features?.issuedCredentials} />
          </div>
        </div>

        {/* Other features */}
        <div className={styles?.card}>
          <CardHeader title={"Other Features"} />

          <div key={0} className={styles?.card__row}>
            <CardLeftColumn text={"DIDs"} />
            <QuantityDataCell data={license?.attributes.features?.dids} />
          </div>
          <div className={styles?.card__row}>
            <CardLeftColumn text={"API Keys"} />
            <QuantityDataCell data={license?.attributes.features?.apiKeys} />
          </div>
          <div className={styles?.card__row}>
            <CardLeftColumn
              text={"2FA Security Mechanism"}
              information={infoToggles?.securityFactorMechanism}
            />
            <ListDataCell data={license?.attributes.features?.nFactor} />
          </div>
          <div className={styles?.card__row}>
            <CardLeftColumn text={"Notifications"} />
            <ListDataCell data={license?.attributes.features?.notifications} />
          </div>
          <div className={styles?.card__row}>
            <CardLeftColumn text={"Usage Statistics"} />
            <IconDataCell data={license?.attributes.features?.stadistics} />
          </div>
          <div className={styles?.card__row}>
            <CardLeftColumn text={"Credentials in W3C VC format"} />
            <IconDataCell data={license?.attributes.features?.credentialsInW3CFormat} />
          </div>
          <div className={styles?.card__row}>
            <CardLeftColumn
              text={"Sandbox environment"}
              information={infoToggles?.sandboxEnvironment}
            />
            <IconDataCell data={license?.attributes.features?.sandBoxEnvironment} />
          </div>
          <div className={styles?.card__row}>
            <CardLeftColumn
              text={"DID in Public Catalogue"}
              information={infoToggles?.didInPublicCatalogue}
            />
            <IconDataCell data={license?.attributes.features?.didPublicCatalogue} />
          </div>
          <div className={styles?.card__row}>
            <CardLeftColumn
              text={"Publish Schemas in Public Catalogue"}
              information={infoToggles?.schemaInPublicCatalogue}
            />
            <IconDataCell data={license?.attributes.features?.newSchemaPublicCatalogue} />
          </div>
          <div className={styles?.card__row}>
            <CardLeftColumn
              text={"EBSI integration"}
              information={infoToggles?.ebsiIntegration}
            />
            <IconDataCell data={license?.attributes.features?.ebsiIntegration} />
          </div>
          <div className={styles?.card__row}>
            <CardLeftColumn text={"Customization of GDPR purposes"} />
            <IconDataCell data={license?.attributes.features?.customGDPRPurposes} />
          </div>
          <div className={styles?.card__row}>
            <CardLeftColumn text={"Custom QR"} />
            <IconDataCell data={license?.attributes.features?.customQR} />
          </div>
          <div className={styles?.card__row}>
            <CardLeftColumn text={"Credentials in ISO 18013:5 format"} />
            <IconDataCell data={license?.attributes.features?.credentialsInISO28013} />
          </div>
          <div className={styles?.card__row}>
            <CardLeftColumn
              text={"Integration with custom trust Frameworks"}
              information={infoToggles?.integrationCustomFrameworks}
            />
            <IconDataCell
              data={license?.attributes.features?.integrationCustomTrustFrameworks}
            />
          </div>
          <div className={styles?.card__row}>
            <CardLeftColumn
              text={"Integration with custom infrastructure"}
              information={infoToggles?.integrationCustomInfraestructure}
            />
            <IconDataCell
              data={license?.attributes.features?.integrationCustomTrustInfraestructure}
            />
          </div>
          <div className={styles?.card__row}>
            <CardLeftColumn text={"Standard Support"} />
            <div className={`${cx("bodyBoldSM")}`}>
              {typeof license?.attributes.features?.standardSupport == "boolean" ? (
                <img
                  className={styles?.icon}
                  src={
                    license?.attributes.features?.standardSupport
                      ? images.checkIcon
                      : images.closeIcon
                  }
                ></img>
              ) : (
                <p>
                  ${" "}
                  <span className={`${cx("bodyRegularCap neutral700")}`}>
                    {license?.attributes.features?.standardSupport}
                  </span>
                </p>
              )}
            </div>
          </div>
          <div className={styles?.card__row}>
            <CardLeftColumn text={"Premier Support"} />
            <div className={`${cx("bodyBoldSM")}`}>
              {typeof license?.attributes.features?.premierSupport == "boolean" ? (
                <img
                  className={styles?.icon}
                  src={
                    license?.attributes.features?.premierSupport
                      ? images.checkIcon
                      : images.closeIcon
                  }
                ></img>
              ) : (
                <p>
                  ${" "}
                  <span className={`${cx("bodyRegularCap neutral700")}`}>
                    {license?.attributes.features?.premierSupport}
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
