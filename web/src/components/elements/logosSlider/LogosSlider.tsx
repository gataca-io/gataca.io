import * as React from "react"
import * as styles from "./logosSlider.module.scss"
import { clientsClearLogos, clientsLogos } from "../../../data/globalData"

export type ILogosSliderProps = {
  lightLogos?: boolean
  className?: string
}

const timesToRepeatLogos = 15
const LogosSlider: React.FC<ILogosSliderProps> = props => {
  const { lightLogos, className } = props

  const logosToDisplay = lightLogos ? clientsClearLogos : clientsLogos

  return (
    <div className={`${className && className} ${styles.logosSlider} `}>
      <div className={styles.clientsLogo}>
        <div className={styles.clientsLogo__container}>
          <div className={styles.clientsLogo__slider}>
            {[...Array(timesToRepeatLogos)].map((e, i) => {
              return logosToDisplay?.map((item, index) => {
                return (
                  <div
                    className={styles?.clientsLogo__sliderItem}
                    key={"LogosSlider__" + index}
                  >
                    <img src={item.icon} id={item.id} alt={item.alt} />
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
