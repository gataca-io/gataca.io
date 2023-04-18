import * as React from "react"
import cx from "classnames"
import * as styles from "./secondSection.module.scss"
import ListInfo from "../../../../../components/templates/listInfo/ListInfo"
import ListInfoItems from "../../../../../components/templates/listInfoItems/listInfoItems"
import { images } from "../../../../../images/images"

export type ISectionProps = {
  title: string
  subTitle: string
  info: {
    title: string
    index: number
    selected: boolean
    showItem: (x: number) => void
    list: []
  }[]
}

const SecondSection: React.FC<ISectionProps> = props => {
  const { title, subTitle, info } = props
  const [openItem, setOpenItem] = React.useState<number>(1)

  let gatacaStudioBullets: HTMLElement | null | undefined
  React.useEffect(() => {
    gatacaStudioBullets = document
      ? document?.getElementById("faqsBullets")
      : undefined
  })

  const scrollIntoView = (el: HTMLElement) => {
    gatacaStudioBullets
      ? gatacaStudioBullets.scroll({
          behavior: "smooth",
          left: el.offsetLeft,
        })
      : null
  }

  return (
    <section className={`${styles?.faqsSection} ${cx("containerMaxWidth")}`}>
      <div className={styles?.faqsSection__container}>
        <h6 className={cx("heading6 marginBottom12 neutral700")}>{title}</h6>
        <h3 className={`${styles?.description} ${cx("heading3")}`}>
          {subTitle}
        </h3>
        <div style={{ position: "relative" }}>
          <div className={styles?.faqsSection__options}>
            <div className={styles?.faqsSection__leftSide}>
              <div
                id="faqsBullets"
                className={styles?.faqsSection__leftSide__bullets}
              >
                {info?.map((item, index) => {
                  const { title } = item

                  return (
                    <ListInfo
                      id={"listInfo__" + index}
                      key={"listInfo__" + index}
                      index={index + 1}
                      title={title}
                      selected={openItem === index + 1}
                      showItem={index => {
                        const element =
                          document &&
                          document.getElementById("listInfo__" + (index - 1))
                        setOpenItem(index), element && scrollIntoView(element)
                      }}
                    />
                  )
                })}
              </div>
            </div>
            <div className={styles?.faqsSection__rightSide}>
              <>
                {info?.map((el, index) => {
                  const { list } = el

                  return (
                    <>
                      <div
                        id={"listOption__" + index}
                        key={"listOption__" + index}
                      >
                        {list?.map((subItem, index) => {
                          const { title, description } = subItem
                          return (
                            <ListInfoItems
                              id={"listItem__" + index}
                              key={"listItem__" + index}
                              index={index + 1}
                              title={title}
                              description={description}
                              selected={openItem === index + 1}
                              showItem={index => {
                                const element =
                                  document &&
                                  document?.getElementById(
                                    "listInfo_" + (index - 1)
                                  )
                                setOpenItem(index),
                                  element && scrollIntoView(element)
                              }}
                            />
                          )
                        })}
                      </div>
                    </>
                  )
                })}
              </>
            </div>
          </div>
        </div>
        <div className={styles?.image__container}>
          <img src={images.chat}></img>
        </div>
      </div>
    </section>
  )
}

export default SecondSection
