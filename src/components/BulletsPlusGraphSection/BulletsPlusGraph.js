import bulletsGraph  from "./BulletsPlusGraph.module.scss"
import React from "react"
import BulletOne from "../BulletOne"
import graph from "@images/explainedPlatform.svg"
import BulletCenter from "../BulletCenter"

export default function BulletsPlusGraph(props) {
  return (
      <section className={bulletsGraph.base}>
        <div className={bulletsGraph.header}>
          <h2>{props.data.title}</h2>
          <p dangerouslySetInnerHTML={{ __html: props.data.description}}></p>
        </div>
        <div className={bulletsGraph.bulletsContainer}>
          {props.data.elements.map(el => {
            return (
              <BulletOne data={el}/>
            )
          })}
        </div>
        <div>
          <img src={graph}/>
        </div>
        <div>
          <BulletCenter data={props.data.endBullet} />
        </div>
      </section>
  )
}

