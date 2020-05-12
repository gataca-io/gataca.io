import partnersStyles  from "./digitial-identities.module.scss"
import React from "react"

export default function DigitalIdentitiesSection(props) {
  return (
    <section className={partnersStyles}>
      <h2>{props.data.title}</h2>
      <p>{props.data.description}</p>
      {props.data.elements.map(el => {
        return <div>
          <h4>{el.title}</h4>
          <img src={el.image}/>
          <p src={el.description}/>
        </div>
      })}
    </section>
  )
}
