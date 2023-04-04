import * as React from "react"
import cx from "classnames"
import * as styles from "./secondSection.module.scss"
import Tag from "../../../../../components/atoms/tags/Tag"
import { images } from "../../../../../images/images"
import CrevronRightSVG from "../../../../../images/icons/ChevronRightSVG"

export type ISectionProps = {
  entries: {
    level: string
    title: string
    description: string
  }[]
  title: string
  description: string
}

const SecondSection: React.FC<ISectionProps> = props => {
  const { entries, title, description } = props

  return (
    <div style={{ position: "relative" }}>
      <div className={styles.secondSection__container}>
        <section
          className={`${styles.secondSection} ${cx("containerMaxWidth")}`}
        >
          <h1 className={`${cx("heading1 marginBottom12")}`}>{title}</h1>
          <p className={`${cx("bodyRegularXL neutral700")}`}>{description}</p>
          <div className={`${cx("heading3")} ${styles.entriesContainer}`}>
            {entries?.map((el, index) => {
              const { title, description, level } = el
              return (
                <div
                  id={"category__" + index}
                  className={`${styles.documentationEntry} ${cx("bodyBoldLG")}`}
                  key={"categoryButton__" + index}
                >
                  <div>
                    <Tag label={level} className={`${cx("marginBottom12")}`} />
                    <p className={`${cx("bodyBoldXL marginBottom4")}`}>
                      {title}
                    </p>
                    <p className={`${cx("bodyRegularLG neutral700")}`}>
                      {description}
                    </p>
                  </div>
                  <CrevronRightSVG
                    strokeColor={"#1E1E20"}
                    className={styles.chevron}
                  />
                </div>
              )
            })}
          </div>
          <div className={styles.secondSection__rightSide}>
            <img src={images.rightRocket} />
          </div>
        </section>
      </div>
    </div>
  )
}

export default SecondSection
