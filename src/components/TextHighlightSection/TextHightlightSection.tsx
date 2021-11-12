import styles  from "./texthighlight.module.scss"
import React from "react"

interface CtaSectionProps {
  title: string;
  description?: string;
  backColor? : boolean
}

const TextHightlightSection: React.FC<CtaSectionProps> = (props) => {
  const { title, description } = props;
  return (
    <section className={styles.base}>
      <div className={styles.container}>
        {title && <h2>{title}</h2>}
        {description && <div
          className={styles.subContainer}
          dangerouslySetInnerHTML={{ __html: description }}/>
        }
      </div>
    </section>
  )
}

export default TextHightlightSection
