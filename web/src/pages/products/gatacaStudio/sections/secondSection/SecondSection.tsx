import * as React from "react"
import cx from "classnames"
import * as styles from "./secondSection.module.scss"
import ListItems from "../../../../home/components/listItems/ListItems"
import { videos } from "../../../../../videos/videos"

export type ISectionProps = {
  title: string
  description: string
  list: {
    title: string
    descriptionParagraphs: string[]
    id: string
  }[]
}
const videosGatacaStudio = [
  videos.studioVideo1,
  videos.studioVideo2,
  videos.studioVideo3,
]

const SecondSection: React.FC<ISectionProps> = props => {
  const { title, description, list } = props
  const [openItem, setOpenItem] = React.useState<number>(1)

  let gatacaStudioBullets: HTMLElement | null | undefined
  React.useEffect(() => {
    gatacaStudioBullets = document
      ? document?.getElementById("gatacaStudioBullets")
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
    <section
      className={`${styles.gatacaStudioSection} ${cx("containerMaxWidth")}`}
    >
      <h3 className={cx("heading3 marginBottom12")}>{title}</h3>
      <p className={`${styles?.description} ${cx("bodyRegularXL neutral700")}`}>
        {description}
      </p>
      <div style={{ position: "relative" }}>
        <div className={styles?.gatacaStudioSection__container}>
          <div className={styles?.gatacaStudioSection__leftSide}>
            <div
              id="gatacaStudioBullets"
              className={styles?.gatacaStudioSection__leftSide__bullets}
            >
              {list?.map((item, index) => {
                const { id, title, descriptionParagraphs } = item

                return (
                  <ListItems
                    id={"listItem__" + index}
                    key={"listItemThirdSection__" + index}
                    index={index + 1}
                    title={title}
                    description={descriptionParagraphs}
                    selected={openItem === index + 1}
                    showItem={index => {
                      const element = document.getElementById(
                        "listItem__" + (index - 1)
                      )
                      setOpenItem(index), element && scrollIntoView(element)
                    }}
                  />
                )
              })}
            </div>
          </div>
          <div className={styles.gatacaStudioSection__rightSide}>
            <div
              className={styles.gatacaStudioSection__rightSide__videoContainer}
            >
              {list && openItem && list[openItem - 1] && (
                <video
                  src={videosGatacaStudio[openItem - 1]}
                  playsInline
                  autoPlay
                  muted
                ></video>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SecondSection
