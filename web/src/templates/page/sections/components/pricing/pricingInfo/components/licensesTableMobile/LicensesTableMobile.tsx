import React, { useEffect } from "react"
import cx from "classnames"
import PurpleButton from "../../../../../../../../components/atoms/buttons/purple/PurpleButton"
import Tag from "../../../../../../../../components/atoms/tags/Tag"
import {
  IProductModel,
  InfoTogglesPricingModel,
} from "../../../../../../../../interfaces/interfaces"
import IconDataCell from "./elements/cells/iconDataCell/IconDataCell"
import ListDataCell from "./elements/cells/listDataCell/ListDataCell"
import QuantityDataCell from "./elements/cells/quantityDataCell/QuantityDataCell"
import CardHeader from "./elements/cardHeader/CardHeader"
import CardLeftColumn from "./elements/cardLeftColumn/CardLeftColumn"
import * as styles from "./licensesTableMobile.module.scss"
import { images } from "../../../../../../../../images/images"

export const gatacaLicensesList = [
  {
    features: {
      verificationTemplates: "Unlimited",
      issuanceTemplates: "Unlimited",
      activeUsers: "1.000",
      issuedCredentials: "2.000",
      dataAgreements: true,
      verifiableIds: true,
      customSchemas: true,
      sandboxTesting: true,
      extraCredentials: false,
      ageVerification: false,
      appIntegrations: false,
      didMethods: "did:gatc",
      trustRegistries: "Gataca, EBSI",
      qualifiedCertificates: false,
      enterpriseWallet: false,
      statistics: true,
      roleAccess: true,
      customRoles: false,
      emailSupport: true,
      slackSupport: false,
      accountTeam: false,
      available24x7: false,
      slas: false,
      onboardAndTraining: false,
    },
    name: "Essential",
    type: "Essential",
  },
  {
    features: {
      verificationTemplates: "Unlimited",
      issuanceTemplates: "Unlimited",
      activeUsers: "Custom",
      issuedCredentials: "Custom",
      dataAgreements: true,
      verifiableIds: true,
      customSchemas: true,
      sandboxTesting: true,
      extraCredentials: true,
      ageVerification: "Add On",
      appIntegrations: "Add On",
      didMethods: "did:gatc, did:ebsi, did:web",
      trustRegistries: `Gataca, EBSI, Custom`,
      qualifiedCertificates: true,
      enterpriseWallet: "Add On",
      statistics: true,
      roleAccess: true,
      customRoles: true,
      emailSupport: true,
      slackSupport: true,
      accountTeam: true,
      available24x7: "Add On",
      slas: "Add On",
      onboardAndTraining: "Add On",
    },
    name: "Enterprise",
    type: "Enterprise",
  },
]

type ILicensesTableMobileProps = {
  license: any
  licenseIndex: number
  switchPeriodValue: string
  infoToggles?: any
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
    if (switchPeriodValue === "year") {
      return item?.yearlyPrice == undefined || item?.yearlyPrice < 0
        ? "Custom pricing"
        : new Intl.NumberFormat("en-DE").format(item?.yearlyPrice)
    } else {
      return item?.monthlyPrice == undefined || item?.monthlyPrice < 0
        ? "Custom pricing"
        : new Intl.NumberFormat("en-DE").format(item?.monthlyPrice)
    }
  }

  const getGatacaTiersLicense = () => {
    const correspondingLicense = gatacaLicensesList?.find(mockedLicense => {
      const tierName = license?.attributes?.name?.toLowerCase()
      const licenseName = mockedLicense?.name?.toLowerCase()

      return !!tierName?.includes(licenseName)
    })

    const fullTier = { ...correspondingLicense, ...license }

    return fullTier
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
              defaultChecked={licenseIndex === 2}
              className={`${cx("bodyRegularMD")}`}
              value={0}
            >
              Essential
            </option>
            <option
              defaultChecked={licenseIndex === 3}
              className={`${cx("bodyRegularMD")}`}
              value={1}
            >
              Enterprise
            </option>
          </select>
          <div className={styles?.header__container}>
            <div>
              {!license?.attributes.name
                ?.toLowerCase()
                ?.includes("enterprise") ? (
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
        {/* Verifiable Credentials */}
        <div className={styles?.card}>
          <CardHeader title={"Verification Features"} />

          <div key={0} className={styles?.card__row}>
            <CardLeftColumn
              text={"Verification Templates"}
              information={infoToggles?.verificationTemplate}
            />
            <div className={`${cx("bodyBoldSM")}`}>
              <p>{getGatacaTiersLicense()?.features?.verificationTemplates}</p>
            </div>
          </div>
          <div key={1} className={styles?.card__row}>
            <CardLeftColumn
              text={"Issuance Templates"}
              information={infoToggles?.issuanceTemplate}
            />
            <div className={`${cx("bodyBoldSM")}`}>
              <p>{getGatacaTiersLicense()?.features?.issuanceTemplates}</p>
            </div>
          </div>
          <div key={2} className={styles?.card__row}>
            <CardLeftColumn
              text={"Active Users"}
              information={infoToggles?.activeUser}
            />
            <div className={`${cx("bodyBoldSM")}`}>
              <p>{getGatacaTiersLicense()?.features?.activeUsers}</p>
            </div>
          </div>
          <div key={3} className={styles?.card__row}>
            <CardLeftColumn
              text={"Issued Credentials"}
              information={infoToggles?.issuedCredential}
            />
            <div className={`${cx("bodyBoldSM")}`}>
              <p>{getGatacaTiersLicense()?.features?.issuedCredentials}</p>
            </div>
          </div>
          <div key={4} className={styles?.card__row}>
            <CardLeftColumn
              text={"Data agreements"}
              information={infoToggles?.dataAgreements}
            />
            <IconDataCell
              key={"SE__" + license?.type}
              data={getGatacaTiersLicense()?.features?.dataAgreements}
            />
          </div>
          <div key={5} className={styles?.card__row}>
            <CardLeftColumn
              text={"Verifiable IDs"}
              information={infoToggles?.verifiableIds}
            />
            <IconDataCell
              key={"SE__" + license?.type}
              data={getGatacaTiersLicense()?.features?.verifiableIds}
            />
          </div>
          <div key={6} className={styles?.card__row}>
            <CardLeftColumn
              text={"Custom schemas"}
              information={infoToggles?.customSchemas}
            />
            <IconDataCell
              key={"SE__" + license?.type}
              data={getGatacaTiersLicense()?.features?.customSchemas}
            />
          </div>
          <div key={7} className={styles?.card__row}>
            <CardLeftColumn
              text={"Sandbox testing"}
              information={infoToggles?.sandboxEnvironment}
            />
            <IconDataCell key={"SE__" + license?.type} data={true} />
          </div>
          <div key={8} className={styles?.card__row}>
            <CardLeftColumn
              text={"Extra credentials"}
              information={infoToggles?.extraCredentials}
            />
            <IconDataCell
              key={"SE__" + license?.type}
              data={getGatacaTiersLicense()?.features?.extraCredentials}
            />
          </div>
        </div>
        {/* Single Sign on */}
        <div key={9} className={styles?.card}>
          <CardHeader title={"Single Sing On"} />

          <div className={styles?.card__row}>
            <CardLeftColumn
              text={"Age Verification"}
              information={infoToggles?.ageVerification}
            />
            <div className={`${cx("bodyBoldSM")}`}>
              {typeof getGatacaTiersLicense()?.features?.ageVerification ==
              "boolean" ? (
                <IconDataCell
                  data={getGatacaTiersLicense()?.features?.ageVerification}
                />
              ) : (
                <p>{getGatacaTiersLicense()?.features?.ageVerification}</p>
              )}
            </div>
          </div>
          <div key={10} className={styles?.card__row}>
            <CardLeftColumn text={"App integrations"} />
            <div className={`${cx("bodyBoldSM")}`}>
              {typeof getGatacaTiersLicense()?.features?.appIntegrations ==
              "boolean" ? (
                <IconDataCell
                  data={getGatacaTiersLicense()?.features?.appIntegrations}
                />
              ) : (
                <p>{getGatacaTiersLicense()?.features?.appIntegrations}</p>
              )}
            </div>
          </div>
        </div>
        {/* Enterprise */}
        <div key={11} className={styles?.card}>
          <CardHeader title={"Enterprise"} />

          <div className={styles?.card__row}>
            <CardLeftColumn text={"DID methods"} />
            <div className={`${cx("bodyBoldSM")}`}>
              <p>{getGatacaTiersLicense()?.features?.didMethods}</p>
            </div>
          </div>
          <div className={styles?.card__row}>
            <CardLeftColumn text={"Trust registries"} />
            <div className={`${cx("bodyBoldSM")}`}>
              <p>{getGatacaTiersLicense()?.features?.trustRegistries}</p>
            </div>
          </div>
          <div className={styles?.card__row}>
            <CardLeftColumn
              text={"Qualified certificates"}
              information={infoToggles?.qualifiedCertificates}
            />
            <IconDataCell
              data={getGatacaTiersLicense()?.features?.qualifiedCertificates}
            />
          </div>
          <div className={styles?.card__row}>
            <CardLeftColumn
              text={"Enterprise wallet"}
              information={infoToggles?.enterpriseWallet}
            />
            <div className={`${cx("bodyBoldSM")}`}>
              {typeof getGatacaTiersLicense()?.features?.enterpriseWallet ==
              "boolean" ? (
                <IconDataCell
                  data={getGatacaTiersLicense()?.features?.enterpriseWallet}
                />
              ) : (
                <p>{getGatacaTiersLicense()?.features?.enterpriseWallet}</p>
              )}
            </div>
          </div>
        </div>
        {/* Administration */}
        <div className={styles?.card}>
          <CardHeader title={"Administration"} />
          <div className={styles?.card__row}>
            <CardLeftColumn text={"Statistics"} />
            <IconDataCell data={true} />
          </div>
          <div className={styles?.card__row}>
            <CardLeftColumn text={"Role based access control"} />
            <IconDataCell
              data={getGatacaTiersLicense()?.features?.roleAccess}
            />
          </div>
          <div className={styles?.card__row}>
            <CardLeftColumn text={"Custom roles"} />
            <IconDataCell
              data={getGatacaTiersLicense()?.features?.customRoles}
            />
          </div>
        </div>
        {/* Support Services */}
        <div className={styles?.card}>
          <CardHeader title={"Support Services"} />
          <div className={styles?.card__row}>
            <CardLeftColumn text={"Email support"} />
            <IconDataCell
              data={getGatacaTiersLicense()?.features?.emailSupport}
            />
          </div>
          <div className={styles?.card__row}>
            <CardLeftColumn text={"Slack support"} />
            <IconDataCell
              data={getGatacaTiersLicense()?.features?.slackSupport}
            />
          </div>
          <div className={styles?.card__row}>
            <CardLeftColumn text={"Account team"} />
            <IconDataCell
              data={getGatacaTiersLicense()?.features?.accountTeam}
            />
          </div>
          <div className={styles?.card__row}>
            <CardLeftColumn text={"24x7"} />
            <div className={`${cx("bodyBoldSM")}`}>
              {typeof getGatacaTiersLicense()?.features?.available24x7 ==
              "boolean" ? (
                <IconDataCell
                  data={getGatacaTiersLicense()?.features?.available24x7}
                />
              ) : (
                <p>{getGatacaTiersLicense()?.features?.available24x7}</p>
              )}
            </div>
          </div>
          <div className={styles?.card__row}>
            <CardLeftColumn text={"SLAs"} />
            <div className={`${cx("bodyBoldSM")}`}>
              {typeof getGatacaTiersLicense()?.features?.slas == "boolean" ? (
                <IconDataCell data={getGatacaTiersLicense()?.features?.slas} />
              ) : (
                <p>{getGatacaTiersLicense()?.features?.slas}</p>
              )}
            </div>
          </div>
          <div className={styles?.card__row}>
            <CardLeftColumn
              text={"Onboarding and training"}
              // information={t(infoToggles?.integrationCustomInfraestructure)}
            />
            <div className={`${cx("bodyBoldSM")}`}>
              {typeof getGatacaTiersLicense()?.features?.onboardAndTraining ==
              "boolean" ? (
                <IconDataCell
                  data={getGatacaTiersLicense()?.features?.onboardAndTraining}
                />
              ) : (
                <p>{getGatacaTiersLicense()?.features?.onboardAndTraining}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LicensesTableMobile
