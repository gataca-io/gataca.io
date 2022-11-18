import React from "react" // we need this to make JSX compile
import {
  ButtonModel,
  IPriceModel,
  IProductModel,
} from "../../interfaces/interfactes"
import DarkButton from "../buttons/DarkButton/DarkButton"
import LightButton from "../buttons/LightButton/LightButton"
import LightPanel from "../panels/LightPanel/LightPanel"
import Description from "../texts/Description/Description"
import RegularTooltip from "../tooltips/RegularTootltip/RegularTootltip"
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
      <RegularTooltip
        positionMobile={{
          align: "center",
          direction: "bottom",
        }}
        label={
          <>
            <img src="/icons/check.svg" alt={"Gataca Google Play"} />
            &nbsp;&nbsp;
            <span className={styles.featureQuantity}>{feature}</span>
            <p className={styles.featureName}>
              &nbsp;
              {label}
            </p>
          </>
        }
        info={info || ""}
        blue={true}
      />
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

  const getPrice = (prices: IPriceModel[]) => {
    const selectedPeriodPrice = prices?.filter((el) => {
      return el.recurringInterval === period
    })[0]

    return selectedPeriodPrice?.amount ? selectedPeriodPrice?.amount / 100 : 0
  }

  return (
    <LightPanel
      className={`${styles.license} ${
        isCurrentLicense ? styles.currentLicense : ""
      }`}
    >
      {isNewLicense && (
        <div className={styles.license__tag}>
          <p>New Plan</p>
        </div>
      )}
      {isCurrentLicense && (
        <div className={styles.license__tag}>
          <p>Current Plan</p>
        </div>
      )}
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
      <p className={styles.license__price}>
        <span>{getPrice(license?.prices)}€</span> &nbsp;
        {/* TODO: TRANSLATE */}/ {period}
      </p>
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
          text={
            isCurrentLicense
              ? "Current"
              : license?.type === "Trial"
              ? "Switch to Free"
              : "Upgrade to " + license?.type
          }
          disabled={!!isCurrentLicense}
          functionality={firstButton.function}
        />
      )}
      {secondButton && (
        <LightButton
          className={styles.license__button__features}
          functionality={secondButton?.function}
          text={secondButton.label}
          disabled={false}
        />
      )}
    </LightPanel>
  )
}

export default LicenseCard
