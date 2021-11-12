import headlineStyles from "./headline.module.scss"
import React from "react"
import { Link } from "gatsby"
import styles from "../BigBullet/bigbullet.module.scss"
import { Button } from "carbon-components-react"

interface IHeadLineSectionProps {
  title: string;
  icon?: string;
  subtitle?: string;
  description?: string;
  big?: boolean,
  ctaText?: string,
  ctaLink?: string
}

const defaultProps = {}

const HeadLineSection: React.FC<IHeadLineSectionProps> = (
  props,
) => {
  const { title, subtitle, description, icon, big, ctaText, ctaLink } = props
  return (
    <section className={headlineStyles.headLineContainer}>
      <div>
        {icon && <div className={headlineStyles.iconContainer}>
          <img src={icon} alt={title}/>
        </div>}
        {title && <h1 className={big ? headlineStyles.bigHeadline : ""} dangerouslySetInnerHTML={{ __html: title }}/>}
        {subtitle && <p
          className={headlineStyles.subtitle}
          dangerouslySetInnerHTML={{ __html: subtitle }}/>}
        {description && <div
          className={headlineStyles.description}
          dangerouslySetInnerHTML={{ __html: description }}/>}
        {ctaText && ctaLink && <Link
          to={ctaLink}>
          <Button
            className={headlineStyles.ctaButton}
            disabled={false}
            iconDescription="Button icon"
            kind="primary"
            renderIcon={undefined}
            size="default"
            tabIndex={0}
            type="button"
          >{ctaText}</Button>
        </Link>}
      </div>
    </section>
  )
}

HeadLineSection.defaultProps = defaultProps

export default HeadLineSection
