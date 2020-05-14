import partnersStyles  from "./bullets.module.scss"
import React from "react"
import BulletOne from "../BulletOne"

export default function Bullets(props) {
  return (
    <section className={partnersStyles.base}>
      <div className={partnersStyles.header}>
        <h2>{props.data.title}</h2>
        <p dangerouslySetInnerHTML={{ __html: props.data.description}}></p>
      </div>
      <div className={partnersStyles.bulletsContainer}>
        {props.data.elements.map(el => {
          return (
            <BulletOne data={el}></BulletOne>
          )
        })}
      </div>
    </section>
  )
}
