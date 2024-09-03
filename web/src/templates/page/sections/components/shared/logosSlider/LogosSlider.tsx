import * as React from "react"
import * as styles from "./logosSlider.module.scss"
import StrapiImage from "../../../../../../components/atoms/images/StrapiImage"

export type ILogosSliderProps = {
  lightLogos?: boolean
  className?: string
  list: {
    attributes: {
      icon: any
      title: string
      idClient: string
    }
  }[]
}

const timesToRepeatLogos = 15
const LogosSlider: React.FC<ILogosSliderProps> = props => {
  const { className, lightLogos, list } = props

  return (
    <div
      className={`${className && className} ${styles.logosSlider} ${
        lightLogos ? styles.darkBackground : styles.lightBackground
      }
      `}
    >
      <div className={styles.clientsLogo}>
        <div className={styles.clientsLogo__container}>
          <div className={styles.clientsLogo__slider}>
            {[...Array(timesToRepeatLogos)].map((e, i) => {
              return list?.map((item, index) => {
                const { icon } = item.attributes
                return (
                  <div
                    className={styles?.clientsLogo__sliderItem}
                    key={"LogosSlider__" + index}
                  >
                    <StrapiImage image={icon ? icon : null} />
                  </div>
                )
              })
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LogosSlider
