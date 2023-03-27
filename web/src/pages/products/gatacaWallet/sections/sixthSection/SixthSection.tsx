import * as React from "react"
import cx from "classnames"
import { images } from "../../../../../images/images"
import * as styles from "./sixthSection.module.scss"
import CredentialExample from "./components/credential/CredentialExample"

export type ISectionProps = {
  title: string
  list: {
    title: string
    description: string
    image: string
  }[]
  credentials: {
    icon: string
    category: string
    issuer: string
    mainData: string
    issuanceDate: string
    expirationDate: string
    validated: boolean
  }[]
}

const featureImages = [
  images.globeEarthIcon,
  images.badgeIcon,
  images.shiedlCheckIcon,
]

const credentialsIcons = [
  images.iconID,
  images.iconLicense,
  images.iconAward,
  images.iconCredential,
  images.iconTicket,
  images.healthIcon,
  images.pinIcon,
]

const SixthSection: React.FC<ISectionProps> = props => {
  const { title, list, credentials } = props
  const [firstItem, setFirstItem] = React.useState<number>(0)

  return (
    <div id="sixthSection" className={styles.sixthSection__container}>
      <section className={styles.sixthSection}>
        <div className={`${cx("heading3")} ${styles.sixthSection__leftSide}`}>
          <p className={`${cx("heading3 marginBottom12")}`}>{title}</p>
          <div className={styles.sixthSection__leftSide__bullets}>
            {list?.map((item, index) => {
              const { title, description } = item

              return (
                <div
                  key={"property__example" + index}
                  className={`${styles.sixthSection__rightSide__bullets__container}`}
                >
                  <img src={featureImages[index]} />
                  <div>
                    <p className={`${cx("heading6")}`}>{title}</p>
                    <p className={`${cx("bodyRegularMD marginTop8")}`}>
                      {description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className={styles.sixthSection__rightSide}>
          <div>
            <div
              className={styles.sixthSection__rightSide__credentials}
              style={{ left: -firstItem * 374 }}
            >
              {credentials?.map((item, index) => {
                const {
                  icon,
                  category,
                  issuer,
                  mainData,
                  issuanceDate,
                  expirationDate,
                  validated,
                } = item
                return (
                  <CredentialExample
                    icon={credentialsIcons[index]}
                    category={category}
                    issuer={issuer}
                    mainData={mainData}
                    issuanceDate={issuanceDate}
                    expirationDate={expirationDate}
                    validated={validated}
                  />
                )
              })}
            </div>
            <div className={styles.buttons__container}>
              <div onClick={() => firstItem > 0 && setFirstItem(firstItem - 1)}>
                <svg
                  className={`${styles.buttons__left} ${
                    firstItem <= 0
                      ? styles.buttons__inactive
                      : styles.buttons__active
                  }`}
                  width="48"
                  height="48"
                  viewBox="-1 -1 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="48" height="48" rx="24" fill="#4745B7" />
                  <path
                    d="M27 30L21 24L27 18"
                    stroke="white"
                    strokeWidth="2.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div onClick={() => firstItem < 6 && setFirstItem(firstItem + 1)}>
                <svg
                  className={`${
                    firstItem >= 6
                      ? styles.buttons__inactive
                      : styles.buttons__active
                  }`}
                  width="48"
                  height="48"
                  viewBox="-1 -1 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="48" height="48" rx="24" fill="#4745B7" />
                  <path
                    d="M21 30L27 24L21 18"
                    stroke="white"
                    strokeWidth="2.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SixthSection
