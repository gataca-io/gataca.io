import * as React from "react"
import cx from "classnames"
import * as styles from "./gatacaStudioSection.module.scss"
import ListItems from "../../components/listItems/ListItems"
import { videos } from "../../../../videos/videos"
import { images } from "../../../../images/images"

export type ISectionProps = {
  title: string
  description: string
  list: {
    title: string
    description: string
    id: string
    image: string
  }[]
}

const GatacaStudioSection: React.FC<ISectionProps> = props => {
  const { title, description, list } = props
  const [openItem, setOpenItem] = React.useState<number>(1)

  const useCasesBullets = document.getElementById("gatacaStudioBullets")

  const scrollIntoView = el => {
    useCasesBullets
      ? useCasesBullets.scroll({
          behavior: "smooth",
          left: el.offsetLeft,
        })
      : null
  }

  return (
    <>
      <section
        className={`${styles?.gatacaStudioSection} ${cx("containerMaxWidth")}`}
      >
        <div>
          <h6 className={cx("heading6 marginBottom12 neutral700")}>{title}</h6>
          <h3 className={`${styles?.description} ${cx("heading3")}`}>
            {description}
          </h3>
        </div>
        <div className={styles?.gatacaStudioSection__container}>
          <div className={styles?.gatacaStudioSection__leftColumn}>
            {list?.map((item, index) => {
              const { id, title, description } = item

              return (
                <ListItems
                  id={id}
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
          <div
            id="gatacaStudioBullets"
            className={styles.gatacaStudioSection__rightColumn}
          >
            {/* <video autoPlay muted>
              <source src={videos.issuance} type="video/mp4" />
            </video> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default GatacaStudioSection
