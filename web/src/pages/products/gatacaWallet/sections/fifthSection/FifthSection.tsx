import * as React from "react"
import cx from "classnames"
import { images } from "../../../../../images/images"
import * as styles from "./fifthSection.module.scss"
import SingleFeature from "../../components/singleFeature/SingleFeature"
import { videos } from "../../../../../videos/videos"

export type ISectionProps = {
  title: string
  description: string
  list: {
    title: string
    description: string
    image: string
  }[]
}

const stepVideos = [
  videos.createCredentialVideo,
  videos.verifiableCredentialVideo,
  videos.SSIvideo,
  videos.servicesVideo,
]

const FifthSection: React.FC<ISectionProps> = props => {
  const { title, description, list } = props
  const [openItem, setOpenItem] = React.useState<number>(1)

  let bullets: HTMLElement | null | undefined
  React.useEffect(() => {
    bullets = document ? document?.getElementById("bullets") : undefined
  })

  const scrollIntoView = (el: HTMLElement) => {
    bullets
      ? bullets.scroll({
          behavior: "smooth",
          left: el.offsetLeft,
        })
      : null
  }

  return (
    <div style={{ position: "relative" }}>
      <section className={styles.fifthSection}>
        <div
          className={`${cx("heading3")} ${styles.fifthSection__leftSide}`}
          id="leftSide"
        >
          <p className={`${cx("heading3 marginBottom10")}`}>{title}</p>
          <p
            className={`${cx("bodyRegularXL")} ${
              styles.fifthSection__leftSide__description
            }`}
          >
            {description}
          </p>
          <div id="bullets" className={styles.fifthSection__leftSide__bullets}>
            {list?.map((item, index) => {
              const { title, description } = item

              return (
                <SingleFeature
                  id={"feature__" + index}
                  key={"feature__" + index}
                  index={index + 1}
                  title={title}
                  description={description}
                  selected={openItem === index + 1}
                  showFeature={index => {
                    const element =
                      document &&
                      document?.getElementById("feature__" + (index - 1))
                    setOpenItem(index), element && scrollIntoView(element)
                  }}
                />
              )
            })}
          </div>
        </div>
        <div className={styles.fifthSection__rightSide}>
          <img src={images.phoneFrameShadow} />
          {list && openItem && list[openItem - 1] && (
            <video
              width="250"
              src={stepVideos[openItem - 1]}
              autoPlay
              playsInline
              muted
            ></video>
          )}
        </div>
      </section>
    </div>
  )
}

export default FifthSection
