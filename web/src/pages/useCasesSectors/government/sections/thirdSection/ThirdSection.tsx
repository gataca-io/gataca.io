import * as React from "react"
import cx from "classnames"
import { images } from "../../../../../images/images"
import * as styles from "./thirdSection.module.scss"
import CardList from "../../../../../components/templates/cardList/CardList"

export type ISectionProps = {
  title: string
  description: string
  list: {
    index: number
    id: string
    icon: string
    title: string
    description: string
  }[]
}

const iconsUseCases = [
  images.documentListCheckIcon,
  images.idCardIcon,
  images.keyIcon,
  images.likeIcon,
  images.envelopeCheckIcon,
]
const ThirdSection: React.FC<ISectionProps> = props => {
  const { title, description, list } = props

  return (
    <section
      className={`${styles?.useCasesSection} ${cx("containerMaxWidth")}`}
    >
      <div className={styles?.description}>
        <h3 className={cx("heading3 marginBottom12")}>{title}</h3>
        <div>
          <p
            className={`${styles?.maxWidth} ${cx("bodyRegularXL neutral700")}`}
          >
            {description}
          </p>
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

export default ThirdSection
