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
    list: []
  }[]
}

const SecondSection: React.FC<ISectionProps> = props => {
  const { title, subTitle, info } = props
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
              <div className={styles?.faqsSection__leftSide__bullets}>
                {info?.map((item, index) => {
                  const { title } = item

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
                          document.getElementById("listOption__" + index)
                        setOpenItem(index), element && scrollIntoView(element)
                      }}
                    />
                  )
                })}
              </div>
            </div>
            <div id="faqsBullets" className={styles?.faqsSection__rightSide}>
              <>
                {info &&
                  info[openItem]?.list?.map((el, index) => {
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
          <img src={images.chat}></img>
        </div>
      </div>
    </section>
  )
}

export default SecondSection
