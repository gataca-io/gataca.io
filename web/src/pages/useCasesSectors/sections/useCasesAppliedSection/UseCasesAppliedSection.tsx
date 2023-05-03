import * as React from "react"
import cx from "classnames"
import * as styles from "./useCasesAppliedSection.module.scss"
import CategorySectors from "../../components/categorySectors/CategorySectors"
import Categories from "./elements/Categories"

export type ISectionProps = {
  title: string
  description: string
  index: number
  categories: {
    id: string
    title: string
    description: string
    list: []
  }[]
  subOptionClickedID?: string
}

const useCasesAppliedSection: React.FC<ISectionProps> = props => {
  const { title, description, index, categories, subOptionClickedID } = props
  const [openItem, setOpenItem] = React.useState(
    subOptionClickedID === "otherIndustries" ? 2 : 1
  )
  let useCasesCategories: HTMLElement | null
  let categoriesContent: HTMLElement | null

  React.useEffect(() => {
    setOpenItem(subOptionClickedID === "otherIndustries" ? 2 : 1)
    useCasesCategories =
      document && document?.getElementById("useCasesAppliedSectors")
    categoriesContent = document && document?.getElementById("otherIndustries")
    console.log("subOptionClickedID", subOptionClickedID, categoriesContent)
    subOptionClickedID === "otherIndustries" &&
      categoriesContent?.scrollIntoView({ behavior: "smooth" })
  }, [subOptionClickedID])

  const scrollIntoView = (el: any) => {
    useCasesCategories
      ? useCasesCategories.scroll({
          behavior: "smooth",
          left: el.offsetLeft,
        })
      : null
  }
  return (
    <>
      <section
        className={`${styles?.useCasesAppliedSection} ${cx(
          "containerMaxWidth"
        )}`}
      >
        <div className={styles?.useCasesAppliedSection__header}>
          <h3 className={cx("heading3 marginBottom12")}>{title}</h3>
          <p className={cx("bodyRegularXL")}>{description}</p>
          <div className={styles?.categories} id={"categoriesContent"}>
            {categories?.map((item, index) => {
              const { title } = item
              return (
                <Categories
                  id={"categories__" + index}
                  key={"categories__" + index}
                  index={index + 1}
                  title={title}
                  selected={openItem === index + 1}
                  showItem={index => {
                    const element =
                      document &&
                      document?.getElementById("listCategory__" + (index - 1))
                    setOpenItem(index), element && scrollIntoView(element)
                  }}
                />
              )
            })}
          </div>
        </div>
        <div
          id="useCasesAppliedSectors"
          className={styles?.useCasesAppliedSection__sectors}
        >
          {categories?.map((item, index) => {
            const { id, title, description, list } = item

            return (
              <CategorySectors
                id={"otherIndustries"}
                key={"listCategory__" + index}
                className={"listCategory__" + index}
                index={index + 1}
                title={title}
                description={description}
                list={list}
                selected={openItem === index + 1}
                subOptionClickedID={subOptionClickedID}
              />
            )
          })}
        </div>
      </section>
    </>
  )
}

export default useCasesAppliedSection
