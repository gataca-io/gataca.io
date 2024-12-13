import * as React from "react"
import * as styles from "./carrouselLogos.module.scss"
import StrapiImage from "../../../../../../components/atoms/images/StrapiImage"

export type IcarrouselLogosProps = {
  lightLogos?: boolean
  loop?: boolean
  className?: string
  marginBottom?: boolean
  list: {
    attributes: {
      icon: any
      title: string
      idClient: string
    }
  }[]
}

const timesToRepeatLogos = 15
const CarrouselLogos: React.FC<IcarrouselLogosProps> = props => {
  const { className, lightLogos, loop, marginBottom, list } = props

  return (
    <div
      className={`${className && className} ${styles.carrouselLogos} ${
        lightLogos ? styles.darkBackground : styles.lightBackground
      } ${marginBottom ? styles?.marginBottom : ""}
      `}
    >
      {loop && loop ? (
        <div className={`${styles.clientsLogo} ${styles.clientsLogo__loop}`}>
          <div className={styles.clientsLogo__container}>
            <div className={styles.clientsLogo__carrousel}>
              {[...Array(timesToRepeatLogos)].map((e, i) => {
                return list?.map((item, index) => {
                  const { icon } = item.attributes
                  return (
                    <div
                      className={styles?.clientsLogo__carrouselItem}
                      key={"carrouselLogos__" + index}
                    >
                      <StrapiImage image={icon ? icon : null} />
                    </div>
                  )
                })
              })}
            </div>
          </div>
        </div>
      ) : (
        <div className={`${styles.clientsLogo} ${styles.clientsLogo__static}`}>
          <div className={styles.clientsLogo__container}>
            <div className={styles.clientsLogo__carrousel}>
              {list?.map((item, index) => {
                const { icon } = item.attributes
                return (
                  <div
                    className={styles?.clientsLogo__carrouselItem}
                    key={"carrouselLogos__" + index}
                  >
                    <StrapiImage image={icon ? icon : null} />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CarrouselLogos
