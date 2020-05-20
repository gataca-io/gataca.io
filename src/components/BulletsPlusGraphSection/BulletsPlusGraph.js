import bulletsGraph  from "./BulletsPlusGraph.module.scss"
import React from "react"
import BulletOne from "../BulletOne"
import graph from "@images/explainedPlatform.svg"
import BulletCenter from "../BulletCenter"

export default function BulletsPlusGraph(props) {
  return (
      <section className={bulletsGraph.base}>
        <div className={bulletsGraph.leftTriangle}>
        <svg width="249" height="247" viewBox="0 0 249 247" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M249 4.37465e-06L0 247L-1.07967e-05 1.52588e-05L249 4.37465e-06Z" fill="white"/>
        </svg>
        </div>
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

