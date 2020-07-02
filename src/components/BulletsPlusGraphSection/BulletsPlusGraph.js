import bulletsGraph  from "./BulletsPlusGraph.module.scss"
import bulletsGraphMobile  from "./BulletsPlusGraph_mobile.module.scss"
import React from "react"
import BulletOne from "../BulletOne"

import BulletCenter from "../BulletCenter"
import { DangerSetH2Html } from "../auxiliary/aux"
import MainImage from "../MainImage/MainImage"

function RenderMobile({ data }) {
  return (
    <section className={bulletsGraphMobile.base}>
      <div className={bulletsGraphMobile.leftTriangle}>
        <svg width="249" height="247" viewBox="0 0 249 247" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M249 4.37465e-06L0 247L-1.07967e-05 1.52588e-05L249 4.37465e-06Z" fill="white"/>
        </svg>
      </div>
      <div className={bulletsGraphMobile.rightBottomTriangle}>
        <svg width="207" height="210" viewBox="0 0 207 210" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.50422e-06 210L207 0L207 210L2.50422e-06 210Z" fill="white"/>
        </svg>
      </div>
      <div className={bulletsGraphMobile.header}>
        <img src={data.icon}  alt={data.title}/>
        <DangerSetH2Html data={data.title }/>
        {/*<DangerSetPHtml data={data.description}/>*/}
        <div dangerouslySetInnerHTML={{ __html: data.description }}/>
      </div>
      <div className={bulletsGraphMobile.bulletsContainer}>
        {data.elements.map(el => {
          return (
            <BulletOne data={el} key={el.title}/>
          )
        })}
      </div>
      <div>
        <MainImage/>
      </div>
      <div className={bulletsGraphMobile.endBullet}>
        <BulletOne data={data.endBullet}/>
      </div>
    </section>
  )
}

function RenderDesktop({ data }) {
  return (
    <section className={bulletsGraph.base}>
      
      {/*TRIANGLES*/}
      <div className={bulletsGraph.leftTriangle}>
        <svg width="249" height="247" viewBox="0 0 249 247" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M249 4.37465e-06L0 247L-1.07967e-05 1.52588e-05L249 4.37465e-06Z" fill="white"/>
        </svg>
      </div>
      <div className={bulletsGraph.rightBottomTriangle}>
        <svg width="207" height="210" viewBox="0 0 207 210" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.50422e-06 210L207 0L207 210L2.50422e-06 210Z" fill="white"/>
        </svg>
      </div>
      
      {/*CONTENT*/}
      <div className={bulletsGraph.header}>
        <img src={data.icon}  alt={data.title}/>
        <DangerSetH2Html data={data.title}/>
        {/*<DangerSetPHtml data={data.description}/>*/}
        <div dangerouslySetInnerHTML={{ __html: data.description }}/>
      </div>
      <div className={bulletsGraph.bulletsContainer}>
        {data.elements.map(el => {
          return (
            <BulletOne data={el} key={el.title}/>
          )
        })}
      </div>
      <div>
        <MainImage/>
      </div>
      <div className={bulletsGraph.endBullet}>
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

