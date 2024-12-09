import * as React from "react"
import cx from "classnames"
import StrapiAuthor from "../../../../components/atoms/strapi/StrapiAuthor"
import MarkDownContent from "../../../../components/elements/markDownContent/MarkDownContent"
import * as styles from "./secondSection.module.scss"
import { EmployeeInfoModel } from "../../../../interfaces/interfaces"

export type IContentProps = {
  content?: any
  className?: string
  avatarSize: string
  employee: {
    data: {
      attributes: EmployeeInfoModel
    }
  }
}
const SecondSection: React.FC<IContentProps> = props => {
  const { content, employee, avatarSize } = props

  return (
    <section
      className={`${styles.secondSection__container} ${cx(
        "containerMaxWidth"
      )}`}
    >
      <div className={`${styles.secondSection}`}>
        <div className={styles.secondSection__leftSide}>
          {content?.length && <MarkDownContent content={content} />}
        </div>
        <div className={styles.secondSection__rightSide}>
          <StrapiAuthor employee={employee?.data} avatarSize={avatarSize} />
        </div>
      </div>
    </section>
  )
}

export default SecondSection
