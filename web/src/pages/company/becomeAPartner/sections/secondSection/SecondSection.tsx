import * as React from "react"
import { Link } from "gatsby"
import cx from "classnames"
import { images } from "../../../../../images/images"
import * as styles from "./secondSection.module.scss"

export type ISectionProps = {
  title: string
  subTitle: string
  description: string
  linkLabel: string
  linkRoute: string
  list: {
    id: number
    attributes: {
      title: string
      description: string
    }
  }[]
}

const typesIcons = [images.settingsIcon, images.usersIcon, images.userCheckIcon]

const SecondSection: React.FC<ISectionProps> = props => {
  const { title, description, subTitle, linkLabel, linkRoute, list } = props

  return (
    <section className={`${styles.secondSection} ${cx("containerMaxWidth")}`}>
      <div className={styles.secondSection__content}>
        <h3 className={`${cx("heading3")}`}>{title}</h3>
        <div className={styles.content__cards}>
          {list?.map((item, index) => {
            const { title, description } = item.attributes

            return (
              <div
                key={`${"types__" + index}`}
                className={`${styles.types__card}`}
              >
                <img
                  src={typesIcons[index]}
                  className={`${cx("marginBottom24")}`}
                />
                <h5 className={`${cx("heading5 marginBottom8")}`}>{title}</h5>
                <p className={`${cx("bodyRegularMD neutral700")} `}>
                  {description}
                </p>
              </div>
            )
          })}
        </div>
        <div className={styles.content__footer}>
          <h5 className={`${cx("heading5 marginBottom12")}`}>{subTitle}</h5>
          <p className={`${cx("bodyRegularMD")}`}>
            <Link to={linkRoute || ""}> {linkLabel} </Link>
            {description}
          </p>
        </div>
      </div>
    </section>
  )
}

export default SecondSection
