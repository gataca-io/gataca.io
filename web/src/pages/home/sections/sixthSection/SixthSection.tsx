import * as React from "react"
import cx from "classnames"
import * as styles from "./sixthSection.module.scss"
import SimpleList from "../../../../components/templates/simpleList/SimpleList"
import { images } from "../../../../images/images"

export type ISectionProps = {
  title: string
  subTitle: string
  description: string
  list: {
    title: string
    description: string
  }[]
}

const iconsUseCases = [
  images.userCheckIcon,
  images.fingerPrintIcon,
  images.keyIcon,
  images.idCardIcon,
  images.penLineIcon,
  images.envelopeCheckIcon,
]
const ThirdSection: React.FC<ISectionProps> = props => {
  const { title, subTitle, description, list } = props

  return (
    <section
      className={`${styles?.useCasesSection} ${cx("containerMaxWidth")}`}
    >
      <div className={styles?.description}>
        <h6 className={cx("heading6 marginBottom12 neutral700")}>{title}</h6>
        <h3 className={cx("heading3 marginBottom12")}>{subTitle}</h3>
        <p className={cx("bodyRegularXL neutral700")}>{description}</p>
      </div>
      <div className={styles?.useCasesSection__container}>
        {list?.map((item, index) => {
          const { title, description } = item

          return (
            <div
              id={"listItem__" + index}
              className={`${styles?.useCasesSection__list} ${cx(
                "marginBottom32"
              )}`}
            >
              <div>
                <img src={iconsUseCases[index]} />
              </div>
              <SimpleList
                key={"listItem__" + index}
                title={title}
                description={description}
              />
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default ThirdSection
