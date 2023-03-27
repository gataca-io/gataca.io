import type { PageProps } from "gatsby"
import * as React from "react"
import cx from "classnames"
import { images } from "../../../../../images/images"
import * as styles from "./secondSection.module.scss"
import NumberedText from "../../components/numberedText/NumberedText"
import { useLayoutEffect } from "react"

export type ISectionProps = {
  title: string
  list: {
    number: string
    title: string
    description: string
  }[]
  setSecondSectionLoaded: (x: boolean) => void
}

const SecondSection: React.FC<ISectionProps> = props => {
  const { title, list, setSecondSectionLoaded } = props

  useLayoutEffect(() => {
    setSecondSectionLoaded(true)
  }, [])

  return (
    <div style={{ position: "relative" }}>
      <section className={styles.secondSection}>
        <div className={`${cx("heading3")} ${styles.secondSection__leftSide}`}>
          <img src={images.purpleArrows} />
        </div>
        <div className={styles.secondSection__rightSide}>
          <p className={`${cx("heading3 marginBottom8")}`}>{title}</p>
          <div className={styles.secondSection__rightSide__bullets}>
            {list?.map((item, index) => {
              const { number, title, description } = item

              return (
                <NumberedText
                  key={"beneficts__" + index}
                  number={number}
                  title={title}
                  description={description}
                />
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default SecondSection
