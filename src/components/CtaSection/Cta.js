import ctaStyles  from "./cta.module.scss"
import React from "react"

export default function Cta(props) {
  return (
    <section className={ctaStyles.base}>
      <div className={ctaStyles.container}>
        <h2>{props.data.title}</h2>
        <p>{props.data.description}</p>
        <button>{props.data.ctaText}</button>
      </div>
    </section>
  )
}
