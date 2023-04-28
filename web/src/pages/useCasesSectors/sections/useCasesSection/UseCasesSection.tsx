import * as React from "react"
import cx from "classnames"
import * as styles from "./useCasesSection.module.scss"
import { images } from "../../../../images/images"
import ListItems from "../../components/listItems/ListItems"

export type ISectionProps = {
  title: string
  description: string
  list: {
    title: string
    description: string
    id: string
    image: string
  }[]
  subOptionClickedID?: string
}

const UseCasesSection: React.FC<ISectionProps> = props => {
  const { title, description, list, subOptionClickedID } = props
  const [openItem, setOpenItem] = React.useState<string | undefined>(
    (subOptionClickedID && subOptionClickedID) ||
      "customerOnboarding" ||
      undefined
  )

  let useCasesBullets: HTMLElement | null
  let selectedUseCase: HTMLElement | null

  React.useEffect(() => {
    useCasesBullets = document && document?.getElementById("useCasesBullets")
    selectedUseCase =
      document && document?.getElementById(subOptionClickedID || "")
    setOpenItem(subOptionClickedID || "customerOnboarding" || undefined)
  }, [subOptionClickedID])

  React.useEffect(() => {
    selectedUseCase =
      document && document?.getElementById(subOptionClickedID || "")
    subOptionClickedID &&
      openItem &&
      subOptionClickedID === openItem &&
      selectedUseCase?.scrollIntoView({ behavior: "smooth" })
  })

  const scrollIntoView = (el: any) => {
    useCasesBullets
      ? useCasesBullets?.scroll({
          behavior: "smooth",
          left: el.offsetLeft,
        })
      : null
  }

  return (
    <>
      <section
        className={`${styles?.useCasesSection} ${cx("containerMaxWidth")}`}
      >
        <div className={styles?.useCasesSection__leftColumn}>
          <h3 className={cx("heading3 marginBottom12")}>{title}</h3>
          <p className={cx("bodyRegularXL")}>{description}</p>
          <div className={styles?.showDesktop}>
            <img src={images.folderPurple} alt="Folder" />
          </div>
        </div>
        <div
          id="useCasesBullets"
          className={styles.useCasesSection__rightColumn}
        >
          {list?.map((item, index) => {
            const { id, title, description } = item

            return (
              <>
                <p id={list[index + 1]?.id}></p>
                <ListItems
                  id={id}
                  key={"listItem__" + index}
                  index={index + 1}
                  title={title}
                  description={description}
                  selected={openItem === item?.id}
                  showItem={index => {
                    const element =
                      document &&
                      document?.getElementById("listItem__" + (index - 1))
                    subOptionClickedID !== "otherIndustries" &&
                      (setOpenItem(item?.id),
                      element && scrollIntoView(element))
                  }}
                />
              </>
            )
          })}
        </div>
        <div className={styles?.showMobile}>
          <img src={images.folderPurple} alt="Folder" />
        </div>
      </section>
    </>
  )
}

export default UseCasesSection
