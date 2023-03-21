import * as React from "react"
import cx from "classnames"
import { images } from "../../../../../images/images"
import * as styles from "./sixthSection.module.scss"
import SingleFeature from "../../components/singleFeature/SingleFeature"
import PurpleButton from "../../../../../components/atoms/buttons/purple/PurpleButton"

export type ISectionProps = {
  title: string
  list: {
    title: string
    description: string
    image: string
  }[]
}

const featureImages = [
  images.globeEarthIcon,
  images.badgeIcon,
  images.shiedlCheckIcon,
]

const feature2Images = [
  images.credential1,
  images.credential2,
  images.credential3,
  images.credential4,
  images.credential5,
  images.credential6,
  images.credential7,
]
const SixthSection: React.FC<ISectionProps> = props => {
  const { title, list } = props
  const [openItem, setOpenItem] = React.useState<number>(1)
  const [firstItem, setFirstItem] = React.useState<number>(0)

  return (
    <div className={styles.sixthSection__container}>
      <section className={styles.sixthSection}>
        <div className={`${cx("heading3")} ${styles.sixthSection__leftSide}`}>
          <p className={`${cx("heading3 marginBottom12")}`}>{title}</p>
          <div className={styles.sixthSection__leftSide__bullets}>
            {list?.map((item, index) => {
              const { title, description } = item

              return (
                <div
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
              style={{ left: -firstItem * 323 }}
            >
              {feature2Images?.map(item => {
                return <img src={item} />
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
                    stroke-width="2.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div onClick={() => firstItem < 6 && setFirstItem(firstItem + 1)}>
                <svg
                  className={`${styles.buttons__right} ${
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
                    stroke-width="2.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
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
