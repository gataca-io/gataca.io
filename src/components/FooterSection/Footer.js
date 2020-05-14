import footerStyles  from "./footer.module.scss"
import React from "react"

export default function Footer(props) {
  return (
    <section className={footerStyles.base}>
      <div className={footerStyles.container}>
        <h2>Footer Title</h2>
      </div>
    </section>
  )
}
