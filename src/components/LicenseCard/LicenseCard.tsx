import React from "react" // we need this to make JSX compile
import { ButtonModel, IProductModel } from "../../interfaces/interfaces"
import DarkButton from "../buttons/DarkButton/DarkButton"
import LightButton from "../buttons/LightButton/LightButton"
import LightPanel from "../panels/LightPanel/LightPanel"
import Description from "../texts/Description/Description"
import styles from "./licenseCard.module.scss"

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

const Feature: React.FC<IFeatureProps> = (props) => {
  const { feature, label, info, notAvailableNow } = props

  return !info ? (
    <li
      className={`${styles.license__features__list__item} ${
        notAvailableNow ? styles.notAvailableNow : ""
      }`}
    >
      {!notAvailableNow && (
        <>
          <img src="/icons/check.svg" alt={"Gataca Google Play"} />
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
    <li className={styles.license__features__list__item}>
      <img src="/icons/check.svg" alt={"Gataca Google Play"} />
      &nbsp;&nbsp;
      <span className={styles.featureQuantity}>{feature}</span>
      <p className={styles.featureName}>
        &nbsp;
        {label}
      </p>
    </li>
  )
}

const LicenseCard: React.FC<ILicenseCardProps> = (props) => {
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
    <LightPanel
      className={`${styles.license} ${
        isCurrentLicense ? styles.currentLicense : ""
      }`}
    >
      <div className={styles.license__header}>
        <p className={styles.license__header__title}>{license?.type}</p>
        {license?.type === popularLicenseType && (
          <div className={styles.license__header__popularTag}>
            <p>Popular</p>
          </div>
        )}
      </div>
      {license?.description && (
        <Description
          className={styles.license__description}
          text={license?.description}
        />
      )}
      {!licenseIsEnterprise ? (
        <>
          <p
            className={`${styles.license__price} ${
              period === "month" ? styles.license__priceLarge : ""
            }`}
          >
            <span>{getPrice(license)}€</span> &nbsp;
            {"/ " + period}
          </p>
          {period === "year" && (
            <span className={styles.license__save}>Save 10%</span>
          )}
        </>
      ) : (
        <>
          <p
            className={`${styles.license__customPrice} ${
              period === "year" ? styles.license__customPriceLarge : ""
            }`}
          >
            {getPrice(license)}
          </p>
          <span
            className={`${styles.license__adapted} ${
              period === "year" ? styles.license__adaptedLarge : ""
            }`}
          >
            A plan that adapts to your company's needs
          </span>
        </>
      )}
      <div className={styles.license__features}>
        <div>
          <p className={styles.license__features__title}>Features</p>
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
          <p className={styles.license__features__title}>Issuance Features</p>
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
                  <img src="/icons/check.svg" alt={"Gataca Google Play"} />
                  &nbsp;&nbsp;
                  <span className={styles.featureName}>
                    N-factor mechanisms {license?.features?.nFactor?.join(", ")}
                  </span>
                </li>
              )}
              <li className={styles.license__features__list__item}>
                <img src="/icons/check.svg" alt={"Gataca Google Play"} />
                &nbsp;&nbsp;
                <span className={styles.featureName}>
                  Notifications {license?.features?.notifications?.join(", ")}
                </span>
              </li>
              <li className={styles.license__features__list__item}>
                <img src="/icons/check.svg" alt={"Gataca Google Play"} />
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
      {firstButton && (
        <DarkButton
          className={styles.license__button}
          text={license?.type !== "Enterprise" ? "Get Started" : "Contact Us"}
          disabled={!!isCurrentLicense}
          functionality={() =>
            !licenseIsEnterprise
              ? window?.open("https://studio.gataca.io/login", "_blank")
              : window?.open("https://gataca.io/company/contact", "_blank")
          }
        />
      )}
      {secondButton && (
        <LightButton
          className={styles.license__button}
          functionality={scrollToFeatures}
          text={secondButton.label}
          disabled={false}
        />
      )}
    </LightPanel>
  )
}

export default LicenseCard
