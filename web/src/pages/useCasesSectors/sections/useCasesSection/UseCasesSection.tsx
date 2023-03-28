import * as React from "react"
import cx from "classnames"
import * as styles from "./useCasesSection.module.scss"
import { images } from "../../../../images/images"
import SingleFeature from "../../../products/gatacaWallet/components/singleFeature/SingleFeature"

export type ISectionProps = {
  title: string
  description: string
}
const UseCasesSection: React.FC<ISectionProps> = props => {
  const { title, description } = props

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
        <div id="bullets" className={styles.useCasesSection__rightColumn}>
          {/* {list?.map((item, index) => {
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
                  const element = document.getElementById(
                    "feature__" + (index - 1)
                  )
                  setOpenItem(index), element && scrollIntoView(element)
                }}
              />
            )
          })} */}
          Left column
        </div>
        <div className={styles?.showMobile}>
          <img src={images.folderPurple} alt="Folder" />
        </div>
      </section>
    </>
  )
}

export default UseCasesSection
