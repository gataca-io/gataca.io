import * as React from "react"
import cx from "classnames"
import * as styles from "./listOpensHover.module.scss"
import StrapiImage from "../../../../../../components/atoms/images/StrapiImage"

export type ISectionProps = {
  title: string
  id: string
  list: {
    id: string
    attributes: {
      icon: any
      title: string
      description: string
    }
  }[]
}

const ListOpensHover: React.FC<ISectionProps> = props => {
  const { title, list } = props
  const [openedAdvantage, setOpenedAdvantage] = React.useState(0)
  let advantagesContainer: HTMLElement | null | undefined

  React.useEffect(() => {
    advantagesContainer = document
      ? document?.getElementById("advantagesContainer")
      : undefined
  })

  const scrollIntoView = (el: HTMLElement) => {
    advantagesContainer
      ? advantagesContainer.scroll({
          behavior: "smooth",
          left: el.offsetLeft - 5,
        })
      : null
  }
  return (
    <div
      className={styles.listOpensHover__container}
      style={{ position: "relative" }}
    >
      <div className={`${styles.listOpensHover} ${cx("containerMaxWidth")}`}>
        <div className={styles.listOpensHover__leftSide}>
          <h3 className={`${cx("heading3")}`}>{title}</h3>

          <div
            id="advantagesContainer"
            className={styles.advantages__container}
          >
            {list?.map((item, index) => {
              const { title, description, icon } = item.attributes
              return (
                <div
                  id={"feature__" + index}
                  key={"feature__" + index}
                  className={`${styles?.advantage}`}
                  onMouseEnter={() => {
                    window?.innerWidth > 1066 && setOpenedAdvantage(index)
                  }}
                  onClick={() => {
                    const element = document.getElementById("feature__" + index)
                    window?.innerWidth < 1067 &&
                      (setOpenedAdvantage(index),
                      element && scrollIntoView(element))
                  }}
                >
                  <div>
                    {icon && (
                      <StrapiImage
                        className={styles?.advantage__image}
                        image={icon ? icon : null}
                      />
                    )}
                  </div>
                  <p className={`${cx("heading6")}`}>{title}</p>
                  {openedAdvantage === index ? (
                    <p
                      className={`${styles?.advantage__description} ${cx(
                        "bodyRegularSM"
                      )}`}
                    >
                      {description}
                    </p>
                  ) : null}
                </div>
              )
            })}
          </div>
        </div>
        <div className={styles.listOpensHover__rightSide}></div>
      </div>
    </div>
  )
}

export default ListOpensHover
