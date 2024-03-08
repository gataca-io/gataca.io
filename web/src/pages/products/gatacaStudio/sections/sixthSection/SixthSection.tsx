import * as React from "react"
import cx from "classnames"
import PurpleButton from "../../../../../components/atoms/buttons/purple/PurpleButton"
import Tag from "../../../../../components/atoms/tags/Tag"
import * as styles from "./sixthSection.module.scss"
import { navigate } from "gatsby"
import { ButtonModel } from "../../../../../interfaces/interfaces";

export type ISectionProps = {
  title: string
  subTitle: string
  description: string
  list: {
      id: string
      attributes: {
          name: string
          description: string
          subPriceMonthLabel: string
          subPriceYearLabel: string
          type: string
          monthlyPrice: number
          yearlyPrice: number
          button: ButtonModel
          button2: ButtonModel
          popular: boolean
          createdAt?: string
          updatedAt?: string
          publishedAt?: string
      }
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
          const { name, description, button2, popular } = item.attributes

          return (
            <div
              id={"cardItem__" + index}
              key={"cardItem__" + index}
              className={`${styles?.plansSection__list}`}
              onClick={() => {
                const element = document.getElementById("cardItem__" + index)
                window?.innerWidth < 1230 && element && scrollIntoView(element)
              }}
            >
              <div className={styles.cardHeader}>
                <p className={`${cx("bodyBoldLG")}`}>{name}</p>
                {popular && <Tag label={'Popular'} />}
              </div>

              <p className={`${cx("bodyRegularSM marginBottom24 neutral700")}`}>
                {description}
              </p>
              <PurpleButton
                outlined={button2?.outlined}
                label={button2?.label}
                action={() =>
                  !button2?.outlined
                    ? window?.open(button2?.url)
                    : navigate(button2?.url || "")
                }
              />
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default SixthSection
