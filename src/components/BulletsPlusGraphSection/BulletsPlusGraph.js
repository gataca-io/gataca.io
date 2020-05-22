import bulletsGraph  from "./BulletsPlusGraph.module.scss"
import React from "react"
import BulletOne from "../BulletOne"
import graph from "@images/explainedPlatform.svg"
import BulletCenter from "../BulletCenter"

function RenderMobile({ data }) {
  return null;
}

function RenderDesktop({ data }) {
  return (
    <section className={bulletsGraph.base}>
    <div className={bulletsGraph.leftTriangle}>
      <svg width="249" height="247" viewBox="0 0 249 247" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M249 4.37465e-06L0 247L-1.07967e-05 1.52588e-05L249 4.37465e-06Z" fill="white"/>
      </svg>
    </div>
    <div className={bulletsGraph.header}>
      <img src={data.icon} />
      <h2>{data.title}</h2>
      <p dangerouslySetInnerHTML={{ __html: data.description }}></p>
    </div>
    <div className={bulletsGraph.bulletsContainer}>
      {data.elements.map(el => {
        return (
          <BulletOne data={el}/>
        )
      })}
    </div>
    <div>
      <img src={graph}/>
    </div>
    <div>
      <BulletCenter data={data.endBullet}/>
    </div>
  </section>
  )
}

export default function BulletsPlusGraph({ data }) {
  return (
    <React.Fragment>
      <RenderDesktop data={data}/>
      <RenderMobile data={data}/>
    </React.Fragment>
  )
}

