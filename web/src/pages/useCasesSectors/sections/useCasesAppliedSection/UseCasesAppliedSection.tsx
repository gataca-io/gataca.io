import * as React from "react"
import cx from "classnames"
import * as styles from "./useCasesAppliedSection.module.scss"
import { images } from "../../../../images/images"
import CategorySectors from "../../components/categorySectors/CategorySectors"

export type ISectionProps = {
  title: string
  description: string
  category: {
    title: string
    description: string
    list: []
  }[]
}

const useCasesAppliedSection: React.FC<ISectionProps> = props => {
  const { title, description, category } = props

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
        </div>
        <div className={styles?.useCasesAppliedSection__sectors}>
          {category?.map((item, index) => {
            const { title, description, list } = item

            return (
              <CategorySectors
                id={"listCategory__" + index}
                key={"listCategory__" + index}
                index={index + 1}
                title={title}
                description={description}
                list={list}
              />
            )
          })}
        </div>
      </section>
    </>
  )
}

export default useCasesAppliedSection
