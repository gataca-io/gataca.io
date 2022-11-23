import { Button } from "carbon-components-react"
import { Link } from "gatsby"
import React from "react"
import headlineStyles from "./headline.module.scss"

interface IHeadLineSectionProps {
  title: string
  icon?: string
  subtitle?: string
  description?: string
  big?: boolean
  ctaText?: string
  ctaLinkTargetBlank?: boolean
  ctaLink?: string
  darkButton?: boolean
  imagePath?: string
}

const defaultProps = {}

const HeadLineSection: React.FC<IHeadLineSectionProps> = (props) => {
  const {
    title,
    subtitle,
    description,
    icon,
    big,
    ctaText,
    ctaLink,
    ctaLinkTargetBlank,
    darkButton,
    imagePath,
  } = props
  return (
    <section className={headlineStyles.headLineContainer}>
      <div>
        {icon && (
          <div className={headlineStyles.iconContainer}>
            <img src={icon} alt={title} />
          </div>
        )}
        {title && (
          <h1
            className={big ? headlineStyles.bigHeadline : ""}
            dangerouslySetInnerHTML={{ __html: title }}
          />
        )}
        {subtitle && (
          <p
            className={headlineStyles.subtitle}
            dangerouslySetInnerHTML={{ __html: subtitle }}
          />
        )}
        {description && (
          <div
            className={headlineStyles.description}
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
        {ctaText && ctaLink && (
          <Link target={ctaLinkTargetBlank ? "_blank" : ""} to={ctaLink}>
            <Button
              className={
                darkButton
                  ? headlineStyles.darkButton
                  : headlineStyles.ctaButton
              }
              disabled={false}
              iconDescription="Button icon"
              kind="primary"
              renderIcon={undefined}
              size="default"
              tabIndex={0}
              type="button"
            >
              {ctaText}
            </Button>
          </Link>
        )}

        <div className={imagePath ? headlineStyles.imageContainer : ""}>
          <img src={imagePath} />
        </div>
      </div>
    </section>
  )
}

HeadLineSection.defaultProps = defaultProps

export default HeadLineSection
