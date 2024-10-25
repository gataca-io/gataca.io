import * as React from "react"
import cx from "classnames"
import * as styles from "./selector.module.scss"
import { SelectorModel } from "../../../../../../../interfaces/interfaces"
import StrapiImage from "../../../../../../../components/atoms/images/StrapiImage"
import { images } from "../../../../../../../images/images"
import MarkDownContent from "../../../../../../../components/elements/markDownContent/MarkDownContent"

const Selector: React.FC<SelectorModel> = props => {
  const {
    index,
    idSelector,
    title,
    content,
    showSelector,
    selected,
    showItem,
  } = props

  return (
    <>
      <div
        onClick={() => !selected && showItem(index)}
        id={idSelector}
        className={cx(styles.selector__container)}
      >
        <div className={styles.selector__titleContainer}>
          {selected && (
            <>{showSelector ? <img src={images.singleFeatureMark} /> : null}</>
          )}
          <p
            className={`${selected ? styles.title : styles.notSelected} ${cx(
              selected ? "bodyBoldXL marginBottom12" : "buttonLG"
            )}`}
          >
            {title}
          </p>
        </div>
        {selected && (
          <>
            {content?.length && (
              <div
                key={"content__" + index}
                className={`${styles.content} ${cx(
                  "bodyRegularMD neutral700 marginBottom20"
                )}`}
              >
                <MarkDownContent content={content} />
              </div>
            )}
          </>
        )}
      </div>
    </>
  )
}

export default Selector
