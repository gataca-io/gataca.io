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
              idHeading={heading?.idHeading}
              titleSize={heading?.titleSize}
              align={heading?.align}
              extraText={heading?.extraText}
              title={heading?.title}
              sectionName={heading?.sectionName}
              content={heading?.content}
              buttonGroup={heading?.buttonGroup?.buttons?.data}
              list={heading?.list?.list_options?.data}
              segmentedButton={heading?.segmentedButton?.buttons?.data}
              table={heading?.table?.content}
              className={styles?.headingCards}
              chip={{
                idChip: heading?.chip?.idChip,
                text: heading?.chip?.text,
                type: heading?.chip?.type,
                form: heading?.chip?.form,
                disabled: heading?.chip?.disabled,
                color: heading?.chip?.color,
                chipSize: heading?.chip?.chipSize,
                leadingIcon: heading?.chip?.leadingIcon,
                trailingIcon: heading?.chip?.trailingIcon,
              }}
              button={{
                idButton: heading?.button?.idButton,
                label: heading?.button?.label,
                icon: heading?.button?.icon,
                style: heading?.button?.style,
                color: heading?.button?.color,
                size: heading?.button?.size,
                noPaddingText: heading?.button?.noPaddingText,
                disabled: heading?.button?.disabled,
                link: heading?.button?.link,
                url: heading?.button?.url,
                outsideWeb: heading?.button?.outsideWeb,
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
