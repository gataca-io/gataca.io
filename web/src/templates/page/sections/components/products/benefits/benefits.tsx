import type { PageProps } from "gatsby"
import * as React from "react"
import cx from "classnames"
import { images } from "../../../../../../images/images"
import * as styles from "./benefits.module.scss"
import { useLayoutEffect } from "react"
import NumberedText from "../../../../../../pages/products/gatacaWallet/components/numberedText/NumberedText"
import StrapiImage from "../../../../../../components/atoms/images/StrapiImage"

export type ISectionProps = {
  title: string
  hero: any
  id: any
  list: {
    id: string
    attributes: {
      number: string
      title: string
      description: string
    }
  }[]
  setBenefitsLoaded: (x: boolean) => void
}

const Benefits: React.FC<ISectionProps> = props => {
  const { id, title, hero, list, setBenefitsLoaded } = props

  useLayoutEffect(() => {
    setBenefitsLoaded(true)
  }, [])

  return (
    <div style={{ position: "relative" }}>
      <section className={`${styles.benefits} ${cx("containerMaxWidth")}`}>
        <div className={`${cx("heading3")} ${styles.benefits__leftSide}`}>
          <StrapiImage image={hero ? hero : null} />
        </div>
        <div className={styles.benefits__rightSide}>
          <p className={`${cx("heading3 marginBottom8")}`}>{title}</p>
          <div className={styles.benefits__rightSide__bullets}>
            {list?.map((item, index) => {
              const { number, title, description } = item.attributes

              return (
                <NumberedText
                  key={"benefits__" + index}
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

export default Benefits
