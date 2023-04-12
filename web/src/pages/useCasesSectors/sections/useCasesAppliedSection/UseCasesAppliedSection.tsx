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
}

const useCasesAppliedSection: React.FC<ISectionProps> = props => {
  const { title, description, index, categories } = props
  const [openItem, setOpenItem] = React.useState<number>(1)
  let useCasesCategories: HTMLElement | null

  React.useEffect(() => {
    useCasesCategories =
      document && document?.getElementById("useCasesAppliedSectors")
  })

  const scrollIntoView = el => {
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
          <div className={styles?.categories}>
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
                id={id}
                key={"listCategory__" + index}
                className={"listCategory__" + index}
                index={index + 1}
                title={title}
                description={description}
                list={list}
                selected={openItem === index + 1}
              />
            )
          })}
        </div>
      </section>
    </>
  )
}

export default useCasesAppliedSection
