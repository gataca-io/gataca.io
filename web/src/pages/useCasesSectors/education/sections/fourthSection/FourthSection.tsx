import * as React from "react"
import cx from "classnames"
import * as styles from "./fourthSection.module.scss"
import ChecksGreyPanel from "../../../../../components/elements/panels/checksGreyPanel/ChecksGreyPanel"
import { images } from "../../../../../images/images"

export type ISectionProps = {
  title: string
  description: string
  list: {
    title: string
    description?: string
  }[]
}

const ThirdSection: React.FC<ISectionProps> = props => {
  const { title, description, list } = props

  return (
    <section className={`${styles?.fourthSection} ${cx("containerMaxWidth")}`}>
      <ChecksGreyPanel
        image={images.books}
        title={title}
        description={description}
        list={list}
        imageClassName={styles.barsGovernment}
        leftSideClassName={styles.leftSide}
        rightSideClassName={styles.rightSide}
      />
    </section>
  )
}

export default ThirdSection
