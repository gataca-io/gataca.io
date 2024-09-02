import * as React from "react"
import * as styles from "./logosSlider.module.scss"
import StrapiImage from "../../../../../../components/atoms/images/StrapiImage"

export type ILogosSliderProps = {
  // lightLogos?: boolean
  className?: string
  list: {
    attributes: {
      image: any
      title: string
      idClient: string
    }
  }[]
}

const timesToRepeatLogos = 15
const LogosSlider: React.FC<ILogosSliderProps> = props => {
  const { className, list } = props
  // console.log("list ", list[0]?.attributes)

  // const logosToDisplay = lightLogos ? clientsClearLogos : clientsLogos

  return (
    <div className={`${className && className} ${styles.logosSlider} `}>
      <div className={styles.clientsLogo}>
        <div className={styles.clientsLogo__container}>
          <div className={styles.clientsLogo__slider}>
            {[...Array(timesToRepeatLogos)].map((e, i) => {
              return list?.map((item, index) => {
                const { image, title } = item.attributes
                console.log("titleImage ", title)
                return (
                  <div
                    className={styles?.clientsLogo__sliderItem}
                    key={"LogosSlider__" + index}
                  >
                    <StrapiImage image={image ? image : null} />
                    {/* <img src={item.image} id={item.idClient} /> */}
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
