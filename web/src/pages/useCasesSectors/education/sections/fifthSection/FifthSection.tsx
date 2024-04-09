import * as React from "react"
import cx from "classnames"
import * as styles from "./fifthSection.module.scss"
import { images } from "../../../../../images/images"
import { Link } from "gatsby"
import { IconModel } from "../../../../../interfaces/interfaces"

export type ISectionProps = {
  title: string
  stories: {
    id: number
    attributes: {
      title: string
      description: string
      route?: string
      listTitle: string
      link?: {
        label: string
        route: string
      }
      credentials: {
        data: {
          id: number
          attributes: {
            category: string
          }
        }[]
      }
  }
  }[]
  list: {
    title: string
  }[]
}

const logos = [
  images.ebsiEarlyAdoptersLogo,
  images.unaEuropalogo,
  images.ebsiEuroCommissionLogo,
]

const FifthSection: React.FC<ISectionProps> = props => {
  const { title, stories } = props
  const [openedStory, setOpenedStory] = React.useState(0)
  let storiesContainer: HTMLElement | null | undefined

  React.useEffect(() => {
    storiesContainer = document
      ? document?.getElementById("storiesContainer")
      : undefined
  })

  const scrollIntoView = (el: HTMLElement) => {
    storiesContainer
      ? storiesContainer.scroll({
          behavior: "smooth",
          left: el.offsetLeft - 5,
        })
      : null
  }

  return (
    <section className={`${styles?.fifthSection} ${cx("containerMaxWidth")}`}>
      <div
        className={styles.fifthSection__container}
        style={{ position: "relative" }}
      >
        <div className={styles.fifthSection__header}>
          <h3 className={cx("heading3")}>{title}</h3>
        </div>
        <div id="storiesContainer" className={styles.stories__container}>
          {stories?.map((el, index) => {
            const { title, description, listTitle, link, credentials } = el.attributes
            return (
              <div
                id={"feature__" + index}
                key={"feature__" + index}
                className={`${styles?.story}`}
                onMouseEnter={() => {
                  window?.innerWidth > 1066 && setOpenedStory(index)
                }}
                onClick={() => {
                  const element = document.getElementById("feature__" + index)
                  window?.innerWidth < 1067 &&
                    (setOpenedStory(index), element && scrollIntoView(element))
                }}
              >
                <img src={logos[index]} className={`${styles?.logo__image}`} />
                <h5 className={`${cx("heading5")}`}>{title}</h5>
                <p
                  className={`${styles?.story__description} ${cx(
                    "bodyRegularXL marginTop12"
                  )} ${cx(openedStory === index ? "" : styles.notOpened)}`}
                >
                  {description}
                </p>
                {openedStory === index ? (
                  <div>
                    <p
                      className={cx(
                        "bodyRegularXL marginTop32 marginBottom20 neutral700"
                      )}
                    >
                      {listTitle}
                    </p>

                    {credentials.data?.map((item, index) => {
                      const { category } = item.attributes
                      return (
                        <p
                          key={"listItem" + index}
                          className={`${styles.list} ${cx("heading6")}`}
                        >
                          <span className={cx("marginRight12")}>
                            <img src={images.checkIcon} />
                          </span>
                          <span>{category}</span>
                        </p>
                      )
                    })}
                    {link && (
                      <div
                        className={styles.link__container}
                        key={"link__" + index}
                      >
                        <Link
                          className={cx("buttonMD")}
                          to={link.route || ""}
                          target="_blank"
                        >
                          {link.label}
                        </Link>
                        <img src={images.chevronRight}></img>
                      </div>
                    )}
                  </div>
                ) : null}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FifthSection
