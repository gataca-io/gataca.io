import * as React from "react"
import * as styles from "./logosSlider.module.scss"
import { clientsLogos } from "../../../globalData/globalData"

const timesToRepeatLogos = 3
const LogosSlider: React.FC = () => {
  return (
    <div className={styles.logosSlider}>
      <div className={styles.clientsLogo}>
        <div className={styles.clientsLogo__container}>
          <div className={styles.clientsLogo__slider}>
            {[...Array(timesToRepeatLogos)].map((e, i) => {
              return clientsLogos.map((item, index) => {
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
