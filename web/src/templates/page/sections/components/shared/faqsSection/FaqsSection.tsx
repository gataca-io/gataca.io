import * as React from "react"
import cx from "classnames"
import * as styles from "./faqsSection.module.scss"
import ListInfoItems from "../../../../../../components/templates/listInfoItems/listInfoItems"
import ListInfo from "../../../../../../components/templates/listInfo/ListInfo"
import StrapiImage from "../../../../../../components/atoms/images/StrapiImage"

export type ISectionProps = {
  title: string
  subtitle?: string
  hero: any
  info: {
    id: number
    attributes: {
      title: string
      index: number
      list: []
    }
  }[]
}

const FaqsSection: React.FC<ISectionProps> = props => {
  const { title, subtitle, hero, info } = props
  const [openItem, setOpenItem] = React.useState<number>(0)
  const [showItem, setShowItem] = React.useState<number>()

  let faqsBullets: HTMLElement | null | undefined

  React.useEffect(() => {
    faqsBullets = document ? document?.getElementById("faqsBullets") : undefined
  })

  const scrollIntoView = (el: HTMLElement) => {
    faqsBullets
      ? faqsBullets.scroll({
          behavior: "smooth",
          left: el.offsetLeft - 50,
        })
      : null
  }

  return (
    <div className={`${styles?.faqsSection} ${cx("containerMaxWidth")}`}>
      <div className={styles?.faqsSection__container}>
        <h6 className={` ${cx("heading6  neutral700 marginBottom6")}`}>
          {subtitle}
        </h6>
        <h3 className={cx("heading3")}>{title}</h3>

        <div style={{ position: "relative" }}>
          <div className={styles?.faqsSection__options}>
            <div className={styles?.faqsSection__leftSide}>
              <div
                id="faqsBullets"
                className={styles?.faqsSection__leftSide__bullets}
              >
                {info?.map((item, index) => {
                  const { title } = item.attributes

                  return (
                    <ListInfo
                      id={"listInfo__" + index}
                      key={"listInfo__" + index}
                      index={index}
                      title={title}
                      selected={openItem === index}
                      showItem={index => {
                        const element =
                          document &&
                          document.getElementById("listInfo__" + index)
                        setOpenItem(index),
                          setShowItem(0),
                          element && scrollIntoView(element)
                      }}
                    />
                  )
                })}
              </div>
            </div>
            <div className={styles?.faqsSection__rightSide}>
              <>
                {info &&
                  info[openItem]?.attributes.list?.map((el, index) => {
                    const { title, description } = el

                    return (
                      <>
                        <div
                          id={"listOption__" + index}
                          key={"listOption__" + index}
                        >
                          <ListInfoItems
                            id={"listItem__" + index}
                            key={"listItem__" + index}
                            index={index + 1}
                            title={title}
                            description={description}
                            selected={showItem === index + 1}
                            showItem={index => {
                              const element = document.getElementById(
                                "listItem__" + (index - 1)
                              )
                              setShowItem(index)
                            }}
                          />
                        </div>
                      </>
                    )
                  })}
              </>
            </div>
          </div>
        </div>
        <div className={styles?.image__container}>
          <StrapiImage image={hero ? hero : null} />
        </div>
      </div>
    </div>
  )
}

export default FaqsSection
