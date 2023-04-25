import * as React from "react"
import cx from "classnames"
import { ButtonModel } from "../../../../interfaces/interfaces"
import { images } from "../../../../images/images"
import PurpleButton from "../../../../components/atoms/buttons/purple/PurpleButton"
import CardList from "../../../../components/templates/cards/cardList/CardList"
import * as styles from "./sixthSection.module.scss"

export type ISectionProps = {
  title: string
  subTitle: string
  description: string
  list: {
    index: number
    id: string
    icon: string
    title: string
    description: string
  }[]
  learnMoreButton: ButtonModel
}

const iconsUseCases = [
  images.userCheckIcon,
  images.fingerPrintIcon,
  images.keyIcon,
  images.idCardIcon,
  images.penLineIcon,
  images.envelopeCheckIcon,
]
const SixthSection: React.FC<ISectionProps> = props => {
  const { title, subTitle, description, list, learnMoreButton } = props

  return (
    <section
      className={`${styles?.useCasesSection} ${cx("containerMaxWidth")}`}
    >
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
          <div className={styles?.buttonContainer}>
            <PurpleButton
              label={learnMoreButton?.label}
              action={() => window.open("/useCasesSectors", "_self")}
            />
          </div>
        </div>
      </div>
      <div className={styles?.useCasesSection__container}>
        {list?.map((item, index) => {
          const { title, description } = item
          return (
            <CardList
              id={"useCaseItem__" + index}
              key={"useCaseItem__" + index}
              icon={iconsUseCases[index]}
              title={title}
              description={description}
            />
          )
        })}
      </div>
    </section>
  )
}

export default SixthSection
