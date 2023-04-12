import * as React from "react"
import cx from "classnames"
import * as styles from "./fourthSection.module.scss"
import ChecksGreyPanel from "../../../../../components/elements/panels/checksGreyPanel/ChecksGreyPanel"
import { images } from "../../../../../images/images"

export type ISectionProps = {
  title: string
  description: string
  imageClassName: string
  leftSideClassName: string
  rightSideClassName: string
  list: {
    title: string
    description?: string
  }[]
}

const ThirdSection: React.FC<ISectionProps> = props => {
  const {
    title,
    description,
    list,
    imageClassName,
    leftSideClassName,
    rightSideClassName,
  } = props

  return (
    <section className={`${styles?.fourthSection} ${cx("containerMaxWidth")}`}>
      <ChecksGreyPanel
        image={images.barsUpDown}
        title={title}
        description={description}
        list={list}
        imageClassName={imageClassName}
        leftSideClassName={leftSideClassName}
        rightSideClassName={rightSideClassName}
      />
    </section>
  )
}

export default ThirdSection
