import footerStyles  from "./footer.module.scss"
import React from "react"

export default function FooterSection(props) {
  return (
    <section className={footerStyles.base}>
      <div className={footerStyles.container}>
        <h2>Footer Title</h2>
        <div className={footerStyles.findUs}>
          <div>
              <h3>Madrid</h3>
              <p>c/moreno nieto, 2</p>
              <p>28005 Madrid, Spain</p>
            </div>
          <div>
            <h3>Boston</h3>
            <p>139 Charles St. Suite 355</p>
            <p>Boston, MA (02114) USA</p>
          </div>
        </div>
        <div className={footerStyles.followUs}>
          {props.data.findUs.map(el=>{
            return <div>
              <a href={el.url} target="_blank">
                <img src={el.icon} />
              </a>
            </div>
          })}
        </div>
      </div>
    </section>
  )
}
