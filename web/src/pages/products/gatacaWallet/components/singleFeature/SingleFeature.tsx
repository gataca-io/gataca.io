import * as React from "react"
import * as styles from "./singleFeature.module.scss"
import cx from "classnames"
import { images } from "../../../../../images/images"

export type ISingleFeatureProps = {
  id: string
  index: number
  title: string
  description: string
  selected: boolean
  showFeature: (x: number) => void
  className?: any
}

const SingleFeature: React.FC<ISingleFeatureProps> = props => {
  const { id, index, title, description, selected, showFeature, className } =
    props
  return (
    <div
      onClick={() => !selected && showFeature(index)}
      id={id}
      className={`${cx("marginBottom20")} ${cx(styles.container)}`}
    >
      <div className={`${styles.titleContainer}`}>
        {selected && <img src={images.singleFeatureMark} />}
        <p
          className={`${cx(selected ? "bodyBoldXL" : "buttonLG")} ${cx(
            selected ? styles.title : styles.unselectedTitle
          )}`}
        >
          {title}
        </p>
      </div>

      {selected && (
        <p
          className={`${styles.description} ${cx("bodyRegularLG marginTop10")}`}
        >
          {description}
        </p>
      )}
    </div>
  )
}

export default SingleFeature
