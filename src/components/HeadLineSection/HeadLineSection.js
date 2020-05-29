import headlineStyles from "./headline.module.scss"
import React from "react"

export default function HeadLineSection({ title, description }) {
  return (
    <section className={headlineStyles.headLineContainer}>
      <div>
        <h2>{title}</h2>
        <div dangerouslySetInnerHTML={{ __html: description }}/>
      </div>
    </section>
  )
}
