import React from "react"
import cx from "classnames"
import Tag from "../../../../../../../../components/atoms/tags/Tag"
import IconDataCell from "./elements/cells/iconDataCell/IconDataCell"
import CardHeader from "./elements/cardHeader/CardHeader"
import CardLeftColumn from "./elements/cardLeftColumn/CardLeftColumn"
import * as styles from "./licensesTableMobile.module.scss"
import QuantityDataCell from "../licensesTable/elements/cells/quantityDataCell/QuantityDataCell"
import MarkDownContent from "../../../../../../../../components/elements/markDownContent/MarkDownContent"
import Button from "../../../../generic/button/Button"

type ILicensesTableMobileProps = {
  license: any
  licenseIndex: number
  switchPeriodValue: string
  infoToggles?: any
  selectLicense: (x: any) => void
  tier_tables: any
  tiers: any
  pricing: any
  pricingSelected: any
  titleFeaturesTableMobile?: string
}
const LicensesTableMobile: React.FC<ILicensesTableMobileProps> = props => {
  const {
    license,
    switchPeriodValue,
    licenseIndex,
    tier_tables,
    tiers,
    selectLicense,
    pricing,
    pricingSelected,
    titleFeaturesTableMobile,
  } = props

  const periodYear = switchPeriodValue === "year"

  const getPrice = (item: any) => {
    if (periodYear) {
      return item?.amountYearly == undefined || item?.amountYearly < 0
        ? item?.customPrice
        : new Intl.NumberFormat("en-DE").format(item?.amountYearly)
    } else {
      return item?.amountMonthly == undefined || item?.amountMonthly < 0
        ? item?.customPrice
        : new Intl.NumberFormat("en-DE").format(item?.amountMonthly)
    }
  }

  const getGatacaTiersLicense = () => {
    const correspondingLicense = tiers?.find(mockedLicense => {
      const tierName = license?.attributes?.name?.toLowerCase()
      const licenseName = mockedLicense?.attributes?.name?.toLowerCase()
      return !!tierName?.includes(licenseName)
    })

    const fullTier = { ...correspondingLicense, ...license }

    return fullTier
  }

  return (
    <>
      <div className={styles?.tableContainer}>
        <div>
          <p className={`${cx("heading4 neutral1000")}`} id={"featuresTable"}>
            {titleFeaturesTableMobile}
          </p>
          <select
            className={`${styles?.selector} ${cx("bodyRegularMD neutral1000")}`}
            defaultValue={licenseIndex || 0}
            onChange={event => {
              selectLicense(event?.target?.value)
            }}
          >
            {pricing?.map((item: any, index: any) => {
              return (
                <option
                  key={"pricingOption__" + index}
                  defaultChecked={licenseIndex === index + 1}
                  className={`${cx("bodyRegularMD neutral1000")}`}
                  value={index}
                >
                  {item?.name}
                </option>
              )
            })}
          </select>
          <div className={styles?.header__container}>
            <div>
              <p className={cx("heading3 neutral1000")}>
                <span>{getPrice(pricingSelected)}</span>
                <span>
                  {(pricingSelected?.amountYearly ||
                    pricingSelected?.amountMonthly) && <span>€</span>}
                </span>

                <span className={cx("marginLeft8")}>
                  {periodYear
                    ? pricingSelected?.frecuencyYearly
                    : pricingSelected?.frecuencyMonthly}
                </span>
              </p>
            </div>
            {(pricingSelected?.button?.label?.length ||
              pricingSelected?.button?.icon?.data?.attributes?.url?.length) && (
              <div>
                <Button
                  {...pricingSelected?.button}
                  action={() =>
                    window?.open(
                      pricingSelected?.button?.url,
                      pricingSelected?.button?.outsideWeb ? "_blank" : "_self"
                    )
                  }
                />
              </div>
            )}
          </div>
        </div>
        {/* Verifiable Credentials */}
        <div className={styles?.card}>
          <CardHeader title={tier_tables[0]?.attributes?.title} />

          <div key={0} className={styles?.card__row}>
            <CardLeftColumn
              text={
                tier_tables[0]?.attributes?.feature_details?.data[0]?.attributes
                  ?.title
              }
              information={
                tier_tables[0]?.attributes?.feature_details?.data[0]?.attributes
                  ?.infoToggle
              }
            />
            <div className={`${cx("bodyBoldSM neutral1000")}`}>
              <QuantityDataCell
                data={
                  getGatacaTiersLicense()?.attributes?.features
                    ?.verificationTemplates
                }
              />
            </div>
          </div>
          <div key={1} className={styles?.card__row}>
            <CardLeftColumn
              text={
                tier_tables[0]?.attributes?.feature_details?.data[1]?.attributes
                  ?.title
              }
              information={
                tier_tables[0]?.attributes?.feature_details?.data[1]?.attributes
                  ?.infoToggle
              }
            />
            <div className={`${cx("bodyBoldSM neutral1000")}`}>
              <QuantityDataCell
                data={
                  getGatacaTiersLicense()?.attributes?.features
                    ?.issuanceTemplates
                }
              />
            </div>
          </div>
          <div key={2} className={styles?.card__row}>
            <CardLeftColumn
              text={
                tier_tables[0]?.attributes?.feature_details?.data[2]?.attributes
                  ?.title
              }
              information={
                tier_tables[0]?.attributes?.feature_details?.data[2]?.attributes
                  ?.infoToggle
              }
            />
            <div className={`${cx("bodyBoldSM neutral1000")}`}>
              <QuantityDataCell
                data={
                  getGatacaTiersLicense()?.attributes?.features?.activeUsers
                }
              />
            </div>
          </div>
          <div key={3} className={styles?.card__row}>
            <CardLeftColumn
              text={
                tier_tables[0]?.attributes?.feature_details?.data[3]?.attributes
                  ?.title
              }
              information={
                tier_tables[0]?.attributes?.feature_details?.data[3]?.attributes
                  ?.infoToggle
              }
            />
            <div className={`${cx("bodyBoldSM neutral1000")}`}>
              <QuantityDataCell
                data={
                  getGatacaTiersLicense()?.attributes?.features
                    ?.issuedCredentials
                }
              />
            </div>
          </div>
          <div key={4} className={styles?.card__row}>
            <CardLeftColumn
              text={
                tier_tables[0]?.attributes?.feature_details?.data[4]?.attributes
                  ?.title
              }
              information={
                tier_tables[0]?.attributes?.feature_details?.data[4]?.attributes
                  ?.infoToggle
              }
            />

            <IconDataCell
              key={"SE__" + license?.type}
              data={
                getGatacaTiersLicense()?.attributes?.features?.dataAgreements
              }
            />
          </div>
          <div key={5} className={styles?.card__row}>
            <CardLeftColumn
              text={
                tier_tables[0]?.attributes?.feature_details?.data[5]?.attributes
                  ?.title
              }
              information={
                tier_tables[0]?.attributes?.feature_details?.data[5]?.attributes
                  ?.infoToggle
              }
            />
            <IconDataCell
              key={"SE__" + license?.type}
              data={
                getGatacaTiersLicense()?.attributes?.features?.verifiableIds
              }
            />
          </div>
          <div key={6} className={styles?.card__row}>
            <CardLeftColumn
              text={
                tier_tables[0]?.attributes?.feature_details?.data[6]?.attributes
                  ?.title
              }
              information={
                tier_tables[0]?.attributes?.feature_details?.data[6]?.attributes
                  ?.infoToggle
              }
            />
            <IconDataCell
              key={"SE__" + license?.type}
              data={
                getGatacaTiersLicense()?.attributes?.features?.customSchemas
              }
            />
          </div>
          <div key={7} className={styles?.card__row}>
            <CardLeftColumn
              text={
                tier_tables[0]?.attributes?.feature_details?.data[7]?.attributes
                  ?.title
              }
              information={
                tier_tables[0]?.attributes?.feature_details?.data[7]?.attributes
                  ?.infoToggle
              }
            />
            <IconDataCell
              key={"SE__" + license?.type}
              data={
                getGatacaTiersLicense()?.attributes?.features
                  ?.sandBoxEnvironment
              }
            />
          </div>
          <div key={8} className={styles?.card__row}>
            <CardLeftColumn
              text={
                tier_tables[0]?.attributes?.feature_details?.data[8]?.attributes
                  ?.title
              }
              information={
                tier_tables[0]?.attributes?.feature_details?.data[8]?.attributes
                  ?.infoToggle
              }
            />
            <IconDataCell
              key={"SE__" + license?.type}
              data={
                getGatacaTiersLicense()?.attributes?.features?.extraCredentials
              }
            />
          </div>
        </div>
        {/* Single Sign on */}
        <div key={9} className={styles?.card}>
          <CardHeader title={tier_tables[1]?.attributes?.title} />

          <div className={styles?.card__row}>
            <CardLeftColumn
              text={
                tier_tables[1]?.attributes?.feature_details?.data[0]?.attributes
                  ?.title
              }
              information={
                tier_tables[1]?.attributes?.feature_details?.data[0]?.attributes
                  ?.infoToggle
              }
            />
            <div className={`${cx("bodyBoldSM neutral1000")}`}>
              <td className={styles.markdown}>
                {getGatacaTiersLicense()?.attributes.features?.ageVerification
                  ?.length && (
                  <MarkDownContent
                    content={
                      getGatacaTiersLicense()?.attributes.features
                        ?.ageVerification
                    }
                  />
                )}
              </td>
            </div>
          </div>
          <div key={10} className={styles?.card__row}>
            <CardLeftColumn
              text={
                tier_tables[1]?.attributes?.feature_details?.data[1]?.attributes
                  ?.title
              }
              information={
                tier_tables[1]?.attributes?.feature_details?.data[1]?.attributes
                  ?.infoToggle
              }
            />
            <div className={`${cx("bodyBoldSM neutral1000")}`}>
              <td className={styles.markdown}>
                {getGatacaTiersLicense()?.attributes.features?.appIntegrations
                  ?.length && (
                  <MarkDownContent
                    content={
                      getGatacaTiersLicense()?.attributes.features
                        ?.appIntegrations
                    }
                  />
                )}
              </td>
            </div>
          </div>
        </div>
        {/* Enterprise */}
        <div key={11} className={styles?.card}>
          <CardHeader title={tier_tables[2]?.attributes?.title} />

          <div className={styles?.card__row}>
            <CardLeftColumn
              text={
                tier_tables[2]?.attributes?.feature_details?.data[0]?.attributes
                  ?.title
              }
              information={
                tier_tables[2]?.attributes?.feature_details?.data[0]?.attributes
                  ?.infoToggle
              }
            />
            <div className={`${cx("bodyBoldSM neutral1000")}`}>
              <td className={styles.markdown}>
                {getGatacaTiersLicense()?.attributes.features?.didMethods
                  ?.length && (
                  <MarkDownContent
                    content={
                      getGatacaTiersLicense()?.attributes.features?.didMethods
                    }
                  />
                )}
              </td>
            </div>
          </div>
          <div className={styles?.card__row}>
            <CardLeftColumn
              text={
                tier_tables[2]?.attributes?.feature_details?.data[1]?.attributes
                  ?.title
              }
              information={
                tier_tables[2]?.attributes?.feature_details?.data[1]?.attributes
                  ?.infoToggle
              }
            />
            <div className={`${cx("bodyBoldSM neutral1000")}`}>
              <td className={styles.markdown}>
                {getGatacaTiersLicense()?.attributes.features?.trustRegistries
                  ?.length && (
                  <MarkDownContent
                    content={
                      getGatacaTiersLicense()?.attributes.features
                        ?.trustRegistries
                    }
                  />
                )}
              </td>
            </div>
          </div>
          <div className={styles?.card__row}>
            <CardLeftColumn
              text={
                tier_tables[2]?.attributes?.feature_details?.data[2]?.attributes
                  ?.title
              }
              information={
                tier_tables[2]?.attributes?.feature_details?.data[2]?.attributes
                  ?.infoToggle
              }
            />
            <IconDataCell
              data={
                getGatacaTiersLicense()?.attributes?.features
                  ?.qualifiedCertificates
              }
            />
          </div>
          <div className={styles?.card__row}>
            <CardLeftColumn
              text={
                tier_tables[2]?.attributes?.feature_details?.data[3]?.attributes
                  ?.title
              }
              information={
                tier_tables[2]?.attributes?.feature_details?.data[3]?.attributes
                  ?.infoToggle
              }
            />
            <div className={`${cx("bodyBoldSM neutral1000")}`}>
              <td className={styles.markdown}>
                {getGatacaTiersLicense()?.attributes.features?.enterpriseWallet
                  ?.length && (
                  <MarkDownContent
                    content={
                      getGatacaTiersLicense()?.attributes.features
                        ?.enterpriseWallet
                    }
                  />
                )}
              </td>
            </div>
          </div>
        </div>
        {/* Administration */}
        <div className={styles?.card}>
          <CardHeader title={tier_tables[3]?.attributes?.title} />
          <div className={styles?.card__row}>
            <CardLeftColumn
              text={
                tier_tables[3]?.attributes?.feature_details?.data[0]?.attributes
                  ?.title
              }
              information={
                tier_tables[3]?.attributes?.feature_details?.data[0]?.attributes
                  ?.infoToggle
              }
            />
            <IconDataCell
              data={getGatacaTiersLicense()?.attributes?.features?.statistics}
            />
          </div>
          <div className={styles?.card__row}>
            <CardLeftColumn
              text={
                tier_tables[3]?.attributes?.feature_details?.data[1]?.attributes
                  ?.title
              }
              information={
                tier_tables[3]?.attributes?.feature_details?.data[1]?.attributes
                  ?.infoToggle
              }
            />
            <IconDataCell
              data={
                getGatacaTiersLicense()?.attributes?.features
                  ?.roleBasedAccessControl
              }
            />
          </div>
          <div className={styles?.card__row}>
            <CardLeftColumn
              text={
                tier_tables[3]?.attributes?.feature_details?.data[2]?.attributes
                  ?.title
              }
              information={
                tier_tables[3]?.attributes?.feature_details?.data[2]?.attributes
                  ?.infoToggle
              }
            />
            <IconDataCell
              data={getGatacaTiersLicense()?.attributes?.features?.customRoles}
            />
          </div>
        </div>
        {/* Support Services */}
        <div className={styles?.card}>
          <CardHeader title={tier_tables[4]?.attributes?.title} />
          <div className={styles?.card__row}>
            <CardLeftColumn
              text={
                tier_tables[4]?.attributes?.feature_details?.data[0]?.attributes
                  ?.title
              }
              information={
                tier_tables[4]?.attributes?.feature_details?.data[0]?.attributes
                  ?.infoToggle
              }
            />
            <IconDataCell
              data={
                getGatacaTiersLicense()?.attributes?.features?.ticketingSystem
              }
            />
          </div>
          <div className={styles?.card__row}>
            <CardLeftColumn
              text={
                tier_tables[4]?.attributes?.feature_details?.data[1]?.attributes
                  ?.title
              }
              information={
                tier_tables[4]?.attributes?.feature_details?.data[1]?.attributes
                  ?.infoToggle
              }
            />
            <IconDataCell
              data={getGatacaTiersLicense()?.attributes?.features?.slackSupport}
            />
          </div>
          <div className={styles?.card__row}>
            <CardLeftColumn
              text={
                tier_tables[4]?.attributes?.feature_details?.data[2]?.attributes
                  ?.title
              }
              information={
                tier_tables[4]?.attributes?.feature_details?.data[2]?.attributes
                  ?.infoToggle
              }
            />
            <IconDataCell
              data={getGatacaTiersLicense()?.attributes?.features?.accountTeam}
            />
          </div>
          <div className={styles?.card__row}>
            <CardLeftColumn
              text={
                tier_tables[4]?.attributes?.feature_details?.data[3]?.attributes
                  ?.title
              }
              information={
                tier_tables[4]?.attributes?.feature_details?.data[3]?.attributes
                  ?.infoToggle
              }
            />
            <div className={`${cx("bodyBoldSM neutral1000")}`}>
              <td className={styles.markdown}>
                {getGatacaTiersLicense()?.attributes.features?.twentyFourSeven
                  ?.length && (
                  <MarkDownContent
                    content={
                      getGatacaTiersLicense()?.attributes.features
                        ?.twentyFourSeven
                    }
                  />
                )}
              </td>
            </div>
          </div>
          <div className={styles?.card__row}>
            <CardLeftColumn
              text={
                tier_tables[4]?.attributes?.feature_details?.data[4]?.attributes
                  ?.title
              }
              information={
                tier_tables[4]?.attributes?.feature_details?.data[4]?.attributes
                  ?.infoToggle
              }
            />
            <div className={`${cx("bodyBoldSM neutral1000")}`}>
              <td className={styles.markdown}>
                {getGatacaTiersLicense()?.attributes.features?.slas?.length && (
                  <MarkDownContent
                    content={getGatacaTiersLicense()?.attributes.features?.slas}
                  />
                )}
              </td>
            </div>
          </div>
          <div className={styles?.card__row}>
            <CardLeftColumn
              text={
                tier_tables[4]?.attributes?.feature_details?.data[5]?.attributes
                  ?.title
              }
              information={
                tier_tables[4]?.attributes?.feature_details?.data[5]?.attributes
                  ?.infoToggle
              }
            />
            <div className={`${cx("bodyBoldSM neutral1000")}`}>
              <td className={styles.markdown}>
                {getGatacaTiersLicense()?.attributes.features
                  ?.onboardingTraining?.length && (
                  <MarkDownContent
                    content={
                      getGatacaTiersLicense()?.attributes.features
                        ?.onboardingTraining
                    }
                  />
                )}
              </td>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LicensesTableMobile
