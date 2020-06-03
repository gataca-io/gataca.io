import bulletsStyles  from "./bullets.module.scss"
import bulletsMobileStyles  from "./bullets_mobile.module.scss"
import React from "react"
import BulletOne from "../BulletOne"
import { DangerSetPHtml } from "../auxiliary/aux"

function RenderMobile({ data }) {
  return <section className={bulletsMobileStyles.baseMobile}>
    <div className={`${ bulletsMobileStyles.container }`}>
      
      <div className={bulletsMobileStyles.header}>
        <div className={bulletsMobileStyles.iconContainer}>
          <img src={data.icon}  alt={data.title}/>
          <h2>{data.title}</h2>
        </div>
        <DangerSetPHtml data={data.description}/>
      </div>
      
      <div className={bulletsMobileStyles.bulletsContainer}>
        {data.elements.map(el => {
          return (
            <BulletOne data={el}/>
          )
        })}
      </div>
    
    </div>
  </section>
}

function RenderDesktop({ data }) {
  return (
    <section className={bulletsStyles.baseDesktop}>
    <div className={`bx--grid ${ bulletsStyles.container }`}>
      
      <div className={`bx--row ${ bulletsStyles.subContainer }`}>
        
        <div className={`bx--col-lg-4 ${ bulletsStyles.leftContainer }`}>
          <div className={bulletsStyles.topAdjust}>
            <img src={data.icon} />
          </div>
        </div>
        
        <div className={`bx--col-lg-12 ${ bulletsStyles.rightContainer }`}>
            <div className={bulletsStyles.header}>
              <div className={bulletsStyles.iconContainer}>
                <h2>{data.title}</h2>
              </div>
              {/*<DangerSetPHtml data={data.description}/>*/}
              <div dangerouslySetInnerHTML={{ __html: data.description }}/>
            </div>
            
            <div className={bulletsStyles.bulletsContainer}>
              {data.elements.map(el => {
                return (
                  <BulletOne data={el}/>
                )
              })}
            </div>
        </div>
        
      </div>
    </div>
  </section>
  )
}

export default function Bullets(props) {
  return (
    <React.Fragment>
      {RenderDesktop(props)}
      {RenderMobile(props)}
    </React.Fragment>
  )
}

