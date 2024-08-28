import type { PageProps } from "gatsby"
import * as React from "react"
import cx from "classnames"
import * as styles from "./benefits.module.scss"
import { useLayoutEffect } from "react"
import StrapiImage from "../../../../../../components/atoms/images/StrapiImage"
import List from "./components/list/List"

export type ISectionProps = {
  title: string
  hero: any
  id: any
  list: {
    attributes: {
      number: string
      icon: any
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
    <div
      className={styles.benefits__container}
      style={{ position: "relative" }}
      key={`benefits_` + id}
    >
      <section className={`${styles.benefits} ${cx("containerMaxWidth")}`}>
        <div className={`${styles.benefits__leftSide}`}>
          <StrapiImage
            className={styles.benefits__imageContainer}
            image={hero ? hero : null}
          />
        </div>
        <div className={styles.benefits__rightSide}>
          <p className={`${cx("heading3")}`}>{title}</p>
          <div className={styles.benefits__rightSide__bullets}>
            {list?.map((item, index) => {
              const { icon, number, title, description } = item.attributes

              return (
                <List
                  key={"list__" + index}
                  icon={icon}
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
