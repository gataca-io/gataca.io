import * as React from "react"
import cx from "classnames"
import * as styles from "./listMedia.module.scss"
import SingleFeature from "./components/singleFeature/SingleFeature"
import StrapiImage from "../../../../../../components/atoms/images/StrapiImage"

export type ISectionProps = {
  title: string
  media: any
  list: {
    id: string
    attributes: {
      title: string
      description: string
      image: any
    }
  }[]
}

const ListMedia: React.FC<ISectionProps> = props => {
  const { title, media, list } = props
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
      <section className={styles.listMedia}>
        <div
          className={`${cx("heading3")} ${styles.listMedia__leftSide}`}
          id="leftSide"
        >
          <p
            className={`${cx("heading3")} ${styles.listMedia__leftSide__title}`}
          >
            {title}
          </p>

          <div id="bullets" className={styles.listMedia__leftSide__bullets}>
            {list?.map((item, index) => {
              const { title, description } = item.attributes

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
        <div className={styles.listMedia__rightSide}>
          <StrapiImage image={media ? media : null} />
          {list?.map(item => {
            const { image } = item.attributes
            return (
              <>
                {list && openItem && list[openItem - 1] && (
                  <video
                    src={image?.data?.attributes?.url}
                    autoPlay
                    playsInline
                    muted
                  ></video>
                )}
              </>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default ListMedia
