import * as React from "react"
import cx from "classnames"
import moment from "moment"
import * as styles from "./blogCard.module.scss"
import { BlogPreviewModel } from "../../../../../../interfaces/interfaces"
import StrapiImage from "../../../../../../components/atoms/images/StrapiImage"
import Button from "../../generic/button/Button"
import Chip from "../../generic/chip/Chip"
import { readingMarkdownTime } from "../../../../../../utils/time"
import MarkDownContent from "../../../../../../components/elements/markDownContent/MarkDownContent"
import { images } from "../../../../../../images/images"

const BlogCard: React.FC<BlogPreviewModel> = props => {
  const { date, previewImage, title, content, category, slugURL } =
    props?.attributes

  const { idItem, button, chip, showChip } = props

  const blogCategory = category?.data?.attributes?.name

  const readingTimeDisplay = () => {
    if (content) {
      const timeReading = readingMarkdownTime(content)
      return timeReading < 60 ? timeReading + " min read" : "+1 hour read"
    }
  }

  return (
    <div id={idItem} className={`${styles?.blogCard__container}`}>
      {showChip && (
        <div className={styles?.chip_extraText__container}>
          <Chip
            idChip={chip?.idChip}
            text={chip?.text || blogCategory}
            type={chip?.type}
            form={chip?.form}
            disabled={chip?.disabled}
            color={chip?.color || "purple"}
            chipSize={chip?.chipSize}
            leadingIcon={chip?.leadingIcon}
            trailingIcon={chip?.trailingIcon}
          />
          {content && content && (
            <span className={cx("bodyRegularSM neutral700")}>
              {readingTimeDisplay()}
            </span>
          )}
        </div>
      )}
      {previewImage?.data?.attributes?.url ? (
        <div className={styles?.image__container}>
          <StrapiImage image={previewImage} />
        </div>
      ) : null}
      <div className={styles?.content__container}>
        <div>
          {title?.length && <h5 className={cx("heading5")}>{title}</h5>}
          {date?.length && (
            <p className={cx("bodyRegularMD")}>{moment(date).format("LL")}</p>
          )}
        </div>

        {content?.length && (
          <div className={`${styles?.description}`}>
            {content?.length && <MarkDownContent content={content} />}
          </div>
        )}
      </div>

      <Button
        idButton={button?.idButton}
        label={button?.label || "Read More"}
        icon={button?.icon || images.chevronRight}
        style={button?.style || "text"}
        color={button?.color}
        size={button?.size}
        noPaddingText={button?.noPaddingText || true}
        disabled={button?.disabled}
        link={button?.link}
        url={button?.url}
        className={cx("marginTop8")}
        action={() => window?.open(`/blog/${slugURL}`, "_self")}
      />
    </div>
  )
}

export default BlogCard
