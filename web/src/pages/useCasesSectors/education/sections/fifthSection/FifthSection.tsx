import * as React from "react"
import cx from "classnames"
import * as styles from "./fifthSection.module.scss"
import { images } from "../../../../../images/images"
import { Link } from "gatsby"

export type ISectionProps = {
  title: string
  stories: {
    title: string
    description: string
    route?: string
    listTitle: string
    LearnMore?: string
  }[]
  list: {
    title: string
  }[]
}

const logos = [
  images.ebsiEarlyAdoptersLogo,
  images.ebsiEuroCommissionLogo,
  images.unaEuropalogo,
]

const FifthSection: React.FC<ISectionProps> = props => {
  const { title, stories, list } = props
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
          <h3 className={cx("heading3 marginBottom12")}>{title}</h3>
        </div>
        <div id="storiesContainer" className={styles.stories__container}>
          {stories?.map((el, index) => {
            const { title, description, listTitle, LearnMore, list } = el
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
                  )}`}
                >
                  {description}
                </p>
                {openedStory === index ? (
                  <div>
                    <p className={cx("bodyRegularXL marginTop12 neutral700")}>
                      {listTitle}
                    </p>

                    {list?.map(item => {
                      const { title } = item
                      return <p>{title}</p>
                    })}
                    <Link key={"link__" + index} to={el.route || ""}>
                      {el.LearnMore}
                    </Link>
                  </div>
                ) : null}
              </div>
            )
          })}
        </div>
        <div className={styles.fourthSection__rightSide}></div>
      </div>
    </section>
  )
}

export default FifthSection
