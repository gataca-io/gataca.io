import * as React from "react"
import { Link } from "gatsby"
import cx from "classnames"
import { images } from "../../../../../images/images"
import { ButtonModel } from "../../../../../interfaces/interfaces"
import PurpleButton from "../../../../../components/atoms/buttons/purple/PurpleButton"
import * as styles from "./fourthSection.module.scss"

export type ISectionProps = {
  title: string
  description: string
  button: ButtonModel
  list: {
    id: string
    attributes: {
      name: string
      role: string
      linkedinRoute: string
    }
  }[]
}

const teamImages = [
  images.ceoTeam,
  images.ctoTeam,
  images.csoTeam,
  images.businessTeam,
  images.backendTeam,
  images.frontend1Team,
  images.designTeam,
  images.itManagerTeam,
  images.marketingTeam,
  images.frontend2Team,
  images.cfoTeam,
  images.adminExecutiveTeam,
  images.mobileAppDeveloper,
]

const FourthSection: React.FC<ISectionProps> = props => {
  const { title, description, button, list } = props

  return (
    <section className={`${styles.fourthSection} ${cx("containerMaxWidth")}`}>
      <div className={styles.fourthSection__content}>
        <div className={styles.header}>
          <h3 className={`${cx("heading3 marginBottom24")}`}>{title}</h3>
          <p className={cx("bodyRegularXL neutral700 marginBottom24")}>
            {description}
          </p>
          <PurpleButton
            label={button?.label}
            action={() => window.open("/company/jobs/", "_self")}
          />
        </div>
        <div className={styles.listContainer}>
          {list?.map((item, index) => {
            return (
              <div key={"listTeam__" + index} className={styles.listTeam}>
                <img
                  className={`${cx("marginBottom20")}`}
                  src={teamImages[index]}
                ></img>
                <div className={`${styles.listTeam__content}`}>
                  <div className={`${styles.leftColumn}`}>
                    <h6
                      className={`${cx("heading6 marginBottom8")} ${
                        styles.name
                      }`}
                    >
                      {item.attributes.name}
                    </h6>
                    <p className={`${styles.title} ${cx("bodyBoldMD")}`}>
                      {item.attributes.role}
                    </p>
                  </div>
                  <div className={`${styles.rightColumn}`}>
                    <a href={item.attributes.linkedinRoute} target="_blank">
                      <img src={images.linkedinLogo}></img>
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FourthSection
