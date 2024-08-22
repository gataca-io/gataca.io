import * as React from "react"
import * as styles from "./numberedText.module.scss"
import cx from "classnames"
import { InsideSectionsModel } from "../../../../../../../../interfaces/interfaces"
import StrapiImage from "../../../../../../../../components/atoms/images/StrapiImage"

const NumberedText: React.FC<InsideSectionsModel> = props => {
  const { title, description, icon } = props
  return (
    <div
      className={`${cx("marginTop32 marginBottom12")} ${cx(styles.container)}`}
    >
      <StrapiImage image={icon ? icon : null} />
      <p className={`${cx("heading6 marginBottom8")} ${cx(styles.title)}`}>
        {title}
      </p>
      <p className={`${cx("bodyRegularMD neutral700")} ${styles.description}`}>
        {description}
      </p>
    </div>
  )
}

export default NumberedText
