import * as React from "react"
import cx from "classnames"
import * as styles from "./sixthSection.module.scss"
import { images } from "../../../../../images/images"
import PurpleButton from "../../../../../components/atoms/buttons/purple/PurpleButton"
import Tag from "../../../../../components/atoms/tags/Tag"
import { ButtonModel } from "../../../../../interfaces/interfaces"

export type ISectionProps = {
  title: string
  subTitle: string
  description: string
  list: {
    title: string
    description: string
    button: ButtonModel
    tag?: string
  }[]
}

const SixthSection: React.FC<ISectionProps> = props => {
  const { title, subTitle, description, list } = props
  let cardsContainer: HTMLElement | null | undefined

  React.useEffect(() => {
    cardsContainer = document
      ? document?.getElementById("cardsContainer")
      : undefined
  })

  const scrollIntoView = (el: HTMLElement) => {
    cardsContainer
      ? cardsContainer.scroll({
          behavior: "smooth",
          left:
            el.offsetLeft -
            (window?.innerWidth < 640
              ? 25
              : window?.innerWidth < 961
              ? 45
              : 65),
        })
      : null
  }

  return (
    <section className={`${styles?.plansSection} ${cx("containerMaxWidth")}`}>
      <div>
        <h6 className={cx("heading6 marginBottom12 neutral700")}>{title}</h6>
        <h3 className={`${styles?.maxWidth} ${cx("heading3 marginBottom12")}`}>
          {subTitle}
        </h3>
        <div className={styles?.description}>
          <p
            className={`${styles?.maxWidth} ${cx("bodyRegularXL neutral700")}`}
          >
            {description}
          </p>
        </div>
      </div>
      <div id="cardsContainer" className={styles?.plansSection__container}>
        {list?.map((item, index) => {
          const { title, description, button, tag } = item

          return (
            <div
              id={"cardItem__" + index}
              key={"cardItem__" + index}
              className={`${styles?.plansSection__list}`}
              onClick={() => {
                const element = document.getElementById("cardItem__" + index)
                console.log("hola")
                window?.innerWidth < 1230 && element && scrollIntoView(element)
              }}
            >
              <div className={styles.cardHeader}>
                <p className={`${cx("bodyBoldLG")}`}>{title}</p>
                {tag && <Tag label={tag} />}
              </div>

              <p className={`${cx("bodyRegularSM marginBottom24 neutral700")}`}>
                {description}
              </p>
              <PurpleButton
                outlined={button?.outlined}
                label={button?.label}
                action={() => window.open(button?.url)}
              />
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default SixthSection
