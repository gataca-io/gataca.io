import partnersStyles  from "./bullets.module.scss"
import React from "react"

export default function Bullets(props) {
  return (
    <section className={partnersStyles.base}>
      <h2>{props.data.title}</h2>
      <p dangerouslySetInnerHTML={{ __html: props.data.description}}></p>
      {props.data.elements.map(el => {
        return (
          <div>
            <h4>{el.title}</h4>
            <img src={el.image}/>
            <p>{el.description}</p>
          </div>
        )
      })}
    </section>
  )
}
