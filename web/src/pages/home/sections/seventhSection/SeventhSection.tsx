import * as React from "react"
import cx from "classnames"
import * as styles from "./seventhSection.module.scss"
import { images } from "../../../../images/images"

export type ISectionProps = {
  title: string
  subTitle: string
  description: string
  feedback: {
    comment: string
    persons: string
    roles: string
  }[]
}

const SeventhSection: React.FC<ISectionProps> = props => {
  const { subTitle, title, description, feedback } = props

  return (
    <section className={`${styles?.seventhSection} ${cx("containerMaxWidth")}`}>
      <div className={styles?.seventhSection__container}>
        <div style={{ position: "relative" }}>
          <div className={styles?.seventhSection__options}>
            <div className={styles?.seventhSection__leftSide}>
              <div className={styles?.seventhSection__leftSide__feedbackBullet}>
                <div>
                  <p className={cx("heading3")}>“</p>
                  <p className={cx("bodyRegularLG neutral700 marginTop16")}>
                    {feedback && feedback[0] && feedback[0]?.comment}
                  </p>
                </div>
                <div>
                  <img src={images.kuleuvenLogo} alt="KU Leuven logo" />
                  <div>
                    <p className={cx("heading6")}>
                      {feedback && feedback[0] && feedback[0]?.persons}
                    </p>
                    <p className={cx("bodyRegularSM neutral700 marginTop4")}>
                      {feedback && feedback[0] && feedback[0]?.roles}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles?.seventhSection__rightSide}>
              <div>
                <h6 className={cx("heading6 neutral700")}>{subTitle}</h6>
                <h3 className={cx("heading3 marginTop12")}>{title}</h3>
                <p className={cx("bodyRegularXL marginTop12 neutral700")}>
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SeventhSection
