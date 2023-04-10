import * as React from "react"
import cx from "classnames"
import * as styles from "./thirdSection.module.scss"
import ListItems from "../../components/listItems/ListItems"
import { videos } from "../../../../videos/videos"

export type ISectionProps = {
  title: string
  description: string
  list: {
    title: string
    description: string
    id: string
  }[]
}
const videosGatacaStudio = [
  videos.issuance,
  videos.verification,
  videos.credentialActivity,
  videos.verifiedUsers,
  videos.wallet,
]

const ThirdSection: React.FC<ISectionProps> = props => {
  const { title, description, list } = props
  const [openItem, setOpenItem] = React.useState<number>(1)

  const gatacaStudioBullets = document.getElementById("gatacaStudioBullets")

  const scrollIntoView = el => {
    gatacaStudioBullets
      ? gatacaStudioBullets.scroll({
          behavior: "smooth",
          left: el.offsetLeft,
        })
      : null
  }

  return (
    <section
      className={`${styles?.gatacaStudioSection} ${cx("containerMaxWidth")}`}
    >
      <h6 className={cx("heading6 marginBottom12 neutral700")}>{title}</h6>
      <h3 className={`${styles?.description} ${cx("heading3")}`}>
        {description}
      </h3>
      <div style={{ position: "relative" }}>
        <div className={styles?.gatacaStudioSection__container}>
          <div className={styles?.gatacaStudioSection__leftSide}>
            <div
              id="gatacaStudioBullets"
              className={styles?.gatacaStudioSection__leftSide__bullets}
            >
              {list?.map((item, index) => {
                const { id, title, description } = item

                return (
                  <ListItems
                    id={"listItem__" + index}
                    key={"listItem__" + index}
                    index={index + 1}
                    title={title}
                    description={description}
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

export default ThirdSection
