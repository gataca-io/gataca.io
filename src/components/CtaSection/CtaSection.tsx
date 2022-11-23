import { Button } from "carbon-components-react"
import { Link } from "gatsby"
import React from "react"
import ctaStyles from "./cta.module.scss"

interface CtaSectionProps {
  title?: string
  icon?: string
  description?: string
  ctaUrl: string
  ctaText: string
  customCta?: any
  backgroundColor?: string
}

const CtaSection: React.FC<CtaSectionProps> = (props) => {
  const {
    title,
    description,
    ctaUrl,
    ctaText,
    customCta,
    backgroundColor,
    icon,
  } = props
  return (
    <section
      className={ctaStyles.base}
      style={{
        backgroundColor: backgroundColor ? backgroundColor : "var(--white)",
      }}
    >
      <div className={ctaStyles.container}>
        {icon && (
          <div className={ctaStyles.iconContainer}>
            <img src={icon} />
          </div>
        )}
        {title && <h2>{title}</h2>}
        {description && (
          <div
            className={ctaStyles.subContainer}
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
        {customCta ? (
          customCta
        ) : (
          <Link rel="noreferrer" to={ctaUrl} target={"_blank"}>
            <Button className={ctaStyles.endCtaButton}> {ctaText}</Button>
          </Link>
        )}
      </div>
    </section>
  )
}

export default CtaSection
