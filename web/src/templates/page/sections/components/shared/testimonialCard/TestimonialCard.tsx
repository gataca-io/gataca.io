import * as React from "react"
import cx from "classnames"
import * as styles from "./testimonialCard.module.scss"
import { TestimonialCardModel } from "../../../../../../interfaces/interfaces"
import StrapiImage from "../../../../../../components/atoms/images/StrapiImage"

const TestimonialCard: React.FC<TestimonialCardModel> = props => {
  const { className, idItem, content, image, name, workTitle, color } = props

  const colorStyles: Record<string, string> = {
    purple: styles?.purple,
    teal: styles?.teal,
    pink: styles?.pink,
  }

  return (
    <div
      id={idItem}
      className={`${styles?.card__container} ${
        color ? colorStyles[color] : styles?.purple
      } ${className && className}`}
    >
      <div className={styles.content__container}>
        <h3 className={cx("heading3 neutral1000")}>“</h3>
        {content?.length && (
          <p className={`${styles?.content} ${cx("bodyRegularLG neutral700")}`}>
            {content}
          </p>
        )}
      </div>
      <div className={styles?.footer__container}>
        {image?.data?.attributes?.url && (
          <div className={styles?.image__container}>
            <StrapiImage image={image ? image : null} />
          </div>
        )}
        {(name?.length || workTitle?.length) && (
          <div>
            <p className={cx("heading6 neutral1000")}>{name}</p>
            <p className={cx("bodyRegularSM neutral700")}>{workTitle}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default TestimonialCard
