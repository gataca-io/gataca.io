import React from "react" // we need this to make JSX compile
import cx from "classnames"
import PurpleButton from "../../../../../../../../components/atoms/buttons/purple/PurpleButton"
import {
  ButtonModel,
  IProductModel,
} from "../../../../../../../../interfaces/interfaces"
import Tag from "../../../../../../../../components/atoms/tags/Tag"
import * as styles from "./licenseCard.module.scss"
import { images } from "../../../../../../../../images/images"

type ILicenseCardProps = {
  license: IProductModel
  showAllDetails?: boolean
  period: string
  isCurrentLicense?: boolean
}

type IFeatureProps = {
  feature?: any
  label: string
  info?: string
  notAvailableNow?: boolean
}

const Feature: React.FC<IFeatureProps> = props => {
  const { feature, label, info, notAvailableNow } = props

  return !info ? (
    <li
      className={`${styles?.license__features__list__item} ${cx(
        "marginTop16"
      )} ${notAvailableNow ? styles?.notAvailableNow : ""}`}
    >
      {!notAvailableNow && (
        <>
          <img src={images.greenCheckIcon} alt={"Gataca Google Play"} />
        </>
      )}
      <div
        className={
          notAvailableNow
            ? styles?.featureNotAvailableNow
            : styles?.license__features__list__item__content
        }
      >
        {feature && <span>{feature < 0 ? "∞" : feature}&nbsp;</span>}

        <span className={styles?.featureName}>{label}</span>
      </div>
    </li>
  ) : (
    <li
      className={`${styles?.license__features__list__item} ${cx(
        "marginTop16"
      )}`}
    >
      <img src={images.greenCheckIcon} alt={"Gataca Google Play"} />
      &nbsp;&nbsp;
      <span className={`${styles?.featureQuantity}`}>{feature}</span>
      <p className={`${styles?.featureName} ${cx("bodyBoldXS marginRight4 ")}`}>
        &nbsp;
        {label}
      </p>
    </li>
  )
}

const LicenseCard: React.FC<ILicenseCardProps> = props => {
  const { license, showAllDetails, period, isCurrentLicense } = props

  const getPrice = (item: any) => {
    if (period === "year") {
      return item?.yearlyPrice == undefined || item?.yearlyPrice < 0
        ? "Custom pricing"
        : new Intl.NumberFormat("en-DE").format(item?.yearlyPrice)
    } else {
      return item?.monthlyPrice == undefined || item?.monthlyPrice < 0
        ? "Custom pricing"
        : new Intl.NumberFormat("en-DE").format(item?.monthlyPrice)
    }
  }

  const licenseIsEnterprise = license?.name
    ?.toLowerCase()
    ?.includes("enterprise")

  return (
    <div
      className={`${styles?.license} ${
        isCurrentLicense ? styles?.currentLicense : ""
      }`}
    >
      <div className={styles?.license__header}>
        <p className={`${styles?.license__header__title} ${cx("bodyBoldXL")}`}>
          {license?.type}
        </p>
      </div>
      {license?.description && (
        <p
          className={`${styles?.license__description} ${cx(
            "marginTop8 bodyRegularSM neutral700"
          )}`}
        >
          {license?.description}
        </p>
      )}
      {!licenseIsEnterprise ? (
        <div className={`${styles?.license__price}`}>
          <p className={`${cx("marginTop24 heading3")}`}>
            <span>{getPrice(license)}€</span>
            <span className={`${cx("neutral700 bodyRegularMD marginLeft8")}`}>
              {"/ " + period}
            </span>
          </p>
          {period === "month"
            ? license?.subPriceMonthLabel && (
                <span
                  className={`${cx("neutral700 bodyRegularXS marginTop2")} ${
                    styles?.license__save
                  }`}
                >
                  {license?.subPriceMonthLabel}
                </span>
              )
            : license?.subPriceYearLabel && (
                <span
                  className={`${cx("neutral700 bodyRegularXS marginTop2")} ${
                    styles?.license__save
                  }`}
                >
                  {license?.subPriceYearLabel}
                </span>
              )}
        </div>
      ) : (
        <>
          <p
            className={`${styles?.license__customPrice} ${cx(
              "marginTo24 heading4"
            )}`}
          >
            {getPrice(license)}
          </p>
        </>
      )}
      <div className={styles?.license__features}>
        <div>
          <p
            className={`${styles?.license__features__title} ${cx(
              "bodyBoldXS neutral700"
            )}`}
          ></p>
          <ul className={styles?.license__features__list}>
            {!licenseIsEnterprise ? (
              <>
                <Feature
                  feature={license?.features?.activeUsers}
                  label="Active Users"
                />
                <Feature
                  feature={license?.features?.issuedCredentials}
                  label="Credentials"
                />

                <Feature label="Email Support" />
              </>
            ) : null}

            {licenseIsEnterprise ? (
              <>
                <Feature label="Custom Limits" />
                <Feature label="Advance Functionalities" />
                <Feature label="Premium Support" />
              </>
            ) : null}
          </ul>
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
  )
}

export default LicenseCard
