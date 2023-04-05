import * as React from "react"
import cx from "classnames"
import * as styles from "./fourthSection.module.scss"
import { images } from "../../../../images/images"

export type ISectionProps = {
  title: string
  description: string
  advantages: {
    route: string
    title: string
    image: string
    description: string
    level: string
  }[]
}

const advantagesImages = [
  images.banUser,
  images.dollar,
  images.chartUp,
  images.linkAtl,
]

const FourthSection: React.FC<ISectionProps> = props => {
  const { title, description, advantages } = props
  const [openedAdvantage, setOpenedAdvantage] = React.useState(0)
  const advantagesContainer = document.getElementById("advantagesContainer")

  const scrollIntoView = el => {
    advantagesContainer
      ? advantagesContainer.scroll({
          behavior: "smooth",
          left: el.offsetLeft - 5,
        })
      : null
  }
  return (
    <div
      className={styles.fourthSection__container}
      style={{ position: "relative" }}
    >
      <section className={`${styles.fourthSection} ${cx("containerMaxWidth")}`}>
        <div className={styles.fourthSection__leftSide}>
          <p className={`${cx("heading6 neutral700 marginBottom12")}`}>
            {description}
          </p>

          <h1 className={`${cx("heading3")}`}>{title}</h1>

          <div
            id="advantagesContainer"
            className={styles.advantages__container}
          >
            {advantages?.map((el, index) => {
              const { title, image, description, level, route } = el
              return (
                <div
                  id={"feature__" + index}
                  key={"feature__" + index}
                  className={`${styles?.advantage}`}
                  onMouseEnter={() => {
                    window?.innerWidth > 1066 && setOpenedAdvantage(index)
                  }}
                  onClick={() => {
                    const element = document.getElementById("feature__" + index)
                    window?.innerWidth < 1067 &&
                      (setOpenedAdvantage(index),
                      element && scrollIntoView(element))
                  }}
                >
                  <img
                    src={advantagesImages[index]}
                    className={`${styles?.advantage__image}`}
                  />
                  <p className={`${cx("heading6")}`}>{title}</p>
                  {openedAdvantage === index ? (
                    <p
                      className={`${styles?.advantage__description} ${cx(
                        "bodyRegularSM marginTop12"
                      )}`}
                    >
                      {description}
                    </p>
                  ) : null}
                </div>
              )
            })}
          </div>
        </div>
        <div className={styles.fourthSection__rightSide}></div>
      </section>
    </div>
  )
}

export default FourthSection
