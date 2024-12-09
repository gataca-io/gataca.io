import * as React from "react"
import cx from "classnames"
import * as styles from "./blogHighlightCard.module.scss"
import {
  ButtonModel,
  HeadingModel,
} from "../../../../../../interfaces/interfaces"
import Heading from "../Heading/Heading"
import Button from "../../generic/button/Button"
import BlogCardContainer from "../BlogCardContainer/BlogCardContainer"

export type ISectionProps = {
  idItem?: string
  heading?: HeadingModel
  button?: ButtonModel
  blogHighlightCardContainer?: any
}

const BlogHighlightCard: React.FC<ISectionProps> = props => {
  const { idItem, heading, button, blogHighlightCardContainer } = props

  return (
    <div
      id={idItem}
      className={`${styles.blogHighlightCard__container} ${cx(
        "containerMaxWidth"
      )}`}
    >
      {(heading ||
        button?.label?.length ||
        button?.icon?.data?.attributes?.url?.length) && (
        <div className={styles.mainTitle__container}>
          {heading && (
            <Heading
              {...heading}
              buttonGroup={heading?.buttonGroup?.buttons?.data}
              table={heading?.table?.content}
              className={styles?.headingCards}
              button={{
                ...heading?.button,
                action: () => window.open(heading?.button?.url, "_blank"),
              }}
            />
          )}
          {(button?.label?.length ||
            button?.icon?.data?.attributes?.url?.length) && (
            <Button
              idButton={button?.idButton}
              label={button?.label}
              icon={button?.icon}
              style={button?.style}
              color={button?.color}
              size={button?.size}
              noPaddingText={button?.noPaddingText}
              disabled={button?.disabled}
              link={button?.link}
              url={button?.url}
              action={() =>
                window?.open(
                  button?.url,
                  button?.outsideWeb ? "_blank" : "_self"
                )
              }
            />
          )}
        </div>
      )}
      <BlogCardContainer
        idItem={blogHighlightCardContainer?.idItem}
        blog_card={
          blogHighlightCardContainer?.blog_card?.data?.attributes?.blog
        }
        columns={blogHighlightCardContainer?.columns}
      />
    </div>
  )
}

export default BlogHighlightCard
