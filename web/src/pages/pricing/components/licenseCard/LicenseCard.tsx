import React from "react" // we need this to make JSX compile
import PurpleButton from "../../../../components/atoms/buttons/purple/PurpleButton"
import { ButtonModel, IProductModel } from "../../../../interfaces/interfaces"
import cx from "classnames"
import * as styles from "./licenseCard.module.scss"
import { images } from "../../../../images/images"
import Tag from "../../../../components/atoms/tags/Tag"

type ILicenseCardProps = {
  license: IProductModel
  showAllDetails?: boolean
  firstButton?: ButtonModel
  secondButton?: ButtonModel
  period: string
  isCurrentLicense?: boolean
  isNewLicense?: boolean
  popularLicenseType: string
}

type IFeatureProps = {
  feature: any
  label: string
  info?: string
  notAvailableNow?: boolean
}

const Feature: React.FC<IFeatureProps> = props => {
  const { feature, label, info, notAvailableNow } = props

  return !info ? (
    <li
      className={`${styles.license__features__list__item} ${cx(
        "marginTop16"
      )} ${notAvailableNow ? styles.notAvailableNow : ""}`}
    >
      {!notAvailableNow && (
        <>
          <img src={images.greenCheckIcon} alt={"Gataca Google Play"} />
        </>
      )}
      <div
        className={
          notAvailableNow
            ? styles.featureNotAvailableNow
            : styles.license__features__list__item__content
        }
      >
        {feature && <span>{feature}&nbsp;</span>}

        <span className={styles.featureName}>{label}</span>
      </div>
    </li>
  ) : (
    <li
      className={`${styles.license__features__list__item} ${cx("marginTop16")}`}
    >
      <img src={images.greenCheckIcon} alt={"Gataca Google Play"} />
      &nbsp;&nbsp;
      <span className={`${styles.featureQuantity}`}>{feature}</span>
      <p className={`${styles.featureName} ${cx("bodyBoldXS marginRight4 ")}`}>
        &nbsp;
        {label}
      </p>
    </li>
  )
}

const LicenseCard: React.FC<ILicenseCardProps> = props => {
  const {
    license,
    showAllDetails,
    firstButton,
    secondButton,
    period,
    isNewLicense,
    isCurrentLicense,
    popularLicenseType,
  } = props

  const scrollToFeatures = () =>
    document?.getElementById("topOfAllFeatures")?.scrollIntoView(true)

  const getPrice = (item: any) => {
    return period === "year" ? item.yearlyPrice : item.monthlyPrice
  }

  const licenseIsEnterprise = license?.name
    ?.toLowerCase()
    ?.includes("enterprise")

  return (
    <div
      className={`${styles.license} ${
        isCurrentLicense ? styles.currentLicense : ""
      }`}
    >
      <div className={styles.license__header}>
        <p className={`${styles.license__header__title} ${cx("bodyBoldLG")}`}>
          {license?.type}
        </p>
        {license?.type === "Professional" && (
          <Tag
            label={"Popular"}
            className={styles.license__header__popularTag}
          />
        )}
      </div>
      {license?.description && (
        <p
          className={`${styles.license__description} ${cx(
            "marginTop8 bodyRegularSM neutral700"
          )}`}
        >
          {license?.description}
        </p>
      )}
      {!licenseIsEnterprise ? (
        <div className={`${styles.license__price}`}>
          <p
            className={` ${styles.license__priceLarge} ${cx(
              "marginTop24 heading3"
            )}`}
          >
            <span>{getPrice(license)}€</span>
            <span className={`${cx("neutral700 bodyRegularMD marginLeft8")}`}>
              {"/ " + period}
            </span>
          </p>
          {period === "month"
            ? license?.subPriceMonthLabel && (
                <span
                  className={`${cx("neutral700 bodyRegularXS marginTop2")} ${
                    styles.license__save
                  }`}
                >
                  {license?.subPriceMonthLabel}
                </span>
              )
            : license?.subPriceYearLabel && (
                <span
                  className={`${cx("neutral700 bodyRegularXS marginTop2")} ${
                    styles.license__save
                  }`}
                >
                  {license?.subPriceYearLabel}
                </span>
              )}
        </div>
      ) : (
        <>
          <p
            className={`${styles.license__customPrice} ${
              period === "year" ? styles.license__customPriceLarge : ""
            } ${cx("marginTo24 heading4")}`}
          >
            {getPrice(license)}
          </p>
        </>
      )}
      <div className={styles.license__features}>
        <div>
          <p
            className={`${styles.license__features__title} ${cx(
              "bodyBoldXS neutral700"
            )}`}
          >
            Verification Features
          </p>
          <ul className={styles.license__features__list}>
            <Feature
              feature={license?.features?.verificationTemplates}
              label="Verification Templates"
            />

            <Feature
              feature={license?.features?.activeUsers}
              label="Active Users"
              info={license?.features?.activeUsersInfo}
            />
          </ul>
        </div>
        <div>
          <p
            className={`${styles.license__features__title} ${cx(
              " bodyBoldXS neutral700"
            )}`}
          >
            Issuance Features
          </p>
          <ul className={styles.license__features__list}>
            <Feature
              feature={license?.features?.issuanceTemplates}
              label="Issuance Templates"
            />

            <Feature
              feature={license?.features?.issuedCredentials}
              label="Issued Credentials"
              info={license?.features?.issuedCredentialsInfo}
            />
          </ul>
        </div>
        {showAllDetails && (
          <div>
            <p className={styles.license__features__title}>Other Features</p>

            <ul className={styles.license__features__list}>
              <Feature feature={license?.features?.dids} label="DIDs" />

              <Feature
                feature={license?.features?.apiKeys}
                label="API Keys"
                info={license?.features?.apiKeysInfo}
              />

              {!!license?.features?.nFactor?.length && (
                <li className={styles.license__features__list__item}>
                  <img src={images.greenCheckIcon} alt={"Gataca Google Play"} />
                  &nbsp;&nbsp;
                  <span className={styles.featureName}>
                    N-factor mechanisms {license?.features?.nFactor?.join(", ")}
                  </span>
                </li>
              )}
              <li className={styles.license__features__list__item}>
                <img src={images.greenCheckIcon} alt={"Gataca Google Play"} />
                &nbsp;&nbsp;
                <span className={styles.featureName}>
                  Notifications {license?.features?.notifications?.join(", ")}
                </span>
              </li>
              <li className={styles.license__features__list__item}>
                <img src={images.greenCheckIcon} alt={"Gataca Google Play"} />
                &nbsp;&nbsp;
                <span className={styles.featureName}>Stadistics</span>
              </li>
              {!!license?.features?.didPublicCatalogue && (
                <Feature feature={""} label={"DID in Public Catalogue"} />
              )}

              {license?.features?.support && (
                <Feature
                  feature={license?.features?.support}
                  label={"Support"}
                />
              )}
              {license?.features?.slas && (
                <Feature feature={""} label={"SLAs"} />
              )}

              {license?.features?.newSchemaPublicCatalogue && (
                <Feature
                  feature={license?.features?.newSchemaPublicCatalogue}
                  label={"SLAs"}
                  notAvailableNow
                />
              )}
              {license?.features?.customQR && (
                <Feature
                  feature={license?.features?.customQR}
                  label={"Custom QR"}
                  notAvailableNow
                />
              )}
              {!license?.features?.nFactor?.length && (
                <li
                  className={`${styles.license__features__list__item} ${styles.notAvailableNow}`}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className={styles.featureName}>
                    N-factor mechanisms
                  </span>
                </li>
              )}
              {!license?.features?.didPublicCatalogue && (
                <Feature
                  feature={""}
                  label="DID in Public Catalogue"
                  notAvailableNow
                />
              )}
              {!license?.features?.newSchemaPublicCatalogue && (
                <Feature
                  feature={""}
                  label="New Schemas in Public Catalogue"
                  notAvailableNow
                />
              )}
              {!license?.features?.customQR && (
                <li
                  className={`${styles.license__features__list__item} ${styles.notAvailableNow}`}
                >
                  &nbsp; &nbsp; Custom QR
                </li>
              )}
              {!license?.features?.support && (
                <Feature feature={""} label="Support" notAvailableNow />
              )}
              {!license?.features?.slas && (
                <Feature feature={""} label="SLAs" notAvailableNow />
              )}
            </ul>
          </div>
        )}
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
  )
}

export default LicenseCard
