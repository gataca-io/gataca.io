import * as React from "react"
import cx from "classnames"
import { images } from "../../../../../images/images"
import * as styles from "./thirdSection.module.scss"
import SingleFeature from "../../components/singleFeature/SingleFeature"

export type ISectionProps = {
  title: string
  description: string
  list: {
    id: string
    attributes: {
      title: string
      description: string
      image: string
    }
  }[]
}

const featureImages = [
  images.phoneVC1,
  images.phoneConsent,
  images.phoneServices,
  images.phoneCreateCredential,
]

const numberImages = [
  images.number1,
  images.number2,
  images.number3,
  images.number4,
]

const ThirdSection: React.FC<ISectionProps> = props => {
  const { title, description, list } = props
  const [firstItem, setFirstItem] = React.useState<number>(0)

  let firstFeature: HTMLElement | null | undefined
  let firstFeatureImage: HTMLElement | null | undefined

  React.useEffect(() => {
    handleFeatureDataOpcity()
    handleFeatureImageOpcity()
  })

  const handleFeatureDataOpcity = () => {
    firstFeature = document
      ? document?.getElementById("firstFeature")
      : undefined
    firstFeature ? (firstFeature.style.opacity = "0") : null
    setTimeout(() => {
      firstFeature ? (firstFeature.style.opacity = "1") : null
    }, 200)
  }

  const handleFeatureImageOpcity = () => {
    firstFeatureImage = document
      ? document?.getElementById("firstFeatureImage")
      : undefined
    firstFeatureImage ? (firstFeatureImage.style.opacity = "0") : null
    setTimeout(() => {
      firstFeatureImage ? (firstFeatureImage.style.opacity = "1") : null
    }, 200)
  }

  return (
    <div style={{ position: "relative" }}>
      <section className={`${styles.thirdSection} ${cx("containerMaxWidth")}`}>
        <p className={cx("heading3")}>{title}</p>
        <p className={cx("bodyRegularXL marginTop12 neutral700")}>
          {description}
        </p>
        <div
          className={`${cx("heading3")} ${styles.thirdSection__leftSide}`}
          id="leftSide"
        >
          {list?.length && list[firstItem] && featureImages[firstItem] && (
            <img
              id={"firstFeatureImage"}
              src={featureImages[firstItem]}
              style={firstItem === 1 ? { marginLeft: "-1.8%" } : undefined}
            />
          )}
        </div>
        <div className={styles.thirdSection__rightSide}>
          <p className={cx("heading3")}>{title}</p>
          <p className={cx("bodyRegularXL marginTop12 neutral700")}>
            {description}
          </p>

          <div
            id={"firstFeature"}
            className={cx(styles.thirdSection__rightSide__data)}
          >
            {list?.length && list[firstItem] && (
              <div className={cx(styles.thirdSection__rightSide__data__item)}>
                <div>
                  <img src={numberImages[firstItem]} />
                </div>
                <p
                  className={cx(
                    styles.thirdSection__rightSide__data__item__title,
                    "heading4"
                  )}
                >
                  {list[firstItem]?.attributes.title}
                </p>
                <p
                  className={cx(
                    styles.thirdSection__rightSide__data__item__desc,
                    "bodyRegularXL marginTop12 neutral700"
                  )}
                >
                  {list[firstItem]?.attributes.description}
                </p>
              </div>
            )}
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
            <div onClick={() => firstItem < 3 && setFirstItem(firstItem + 1)}>
              <svg
                className={`${
                  firstItem >= 3
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
      </section>
    </div>
  )
}

export default ThirdSection
