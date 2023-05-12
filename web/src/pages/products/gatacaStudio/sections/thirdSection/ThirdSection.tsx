import * as React from "react"
import cx from "classnames"
import { images } from "../../../../../images/images"
import * as styles from "./thirdSection.module.scss"
import ChecksGreyPanel from "../../../../../components/elements/panels/checksGreyPanel/ChecksGreyPanel"
import ChecksGreyPanelTwoColumns from "../../../../../components/elements/panels/checksGreyPanelTwoColumns/ChecksGreyPanelTwoColumns"

export type ISectionProps = {
  title: string
  list: {
    title: string
  }[]
}

const ThirdSection: React.FC<ISectionProps> = props => {
  const { title, list } = props

  return (
    <div
      className={`${styles.thirdSection__container} ${cx("containerMaxWidth")}`}
    >
      <ChecksGreyPanelTwoColumns
        title={title}
        list={list}
        image={images.rocket}
      />
    </div>
  )
}

export default ThirdSection
