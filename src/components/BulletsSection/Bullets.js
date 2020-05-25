import bulletsStyles  from "./bullets.module.scss"
import bulletsMobileStyles  from "./bullets_mobile.module.scss"
import React from "react"
import BulletOne from "../BulletOne"

function RenderMobile(props) {
  return <section className={bulletsMobileStyles.baseMobile}>
    <div className={`${ bulletsMobileStyles.container }`}>
      
      <div className={bulletsMobileStyles.header}>
        <div className={bulletsMobileStyles.iconContainer}>
          <img src={props.data.icon} />
          <h2>{props.data.title}</h2>
        </div>
        <p dangerouslySetInnerHTML={{ __html: props.data.description }}/>
      </div>
      
      <div className={bulletsMobileStyles.bulletsContainer}>
        {props.data.elements.map(el => {
          return (
            <BulletOne data={el}/>
          )
        })}
      </div>
    
    </div>
  </section>
}

function RenderDesktop(props) {
  return (
    <section className={bulletsStyles.baseDesktop}>
    <div className={`bx--grid ${ bulletsStyles.container }`}>
      
      <div className={`bx--row ${ bulletsStyles.subContainer }`}>
        
        <div className={`bx--col-lg-4 ${ bulletsStyles.leftContainer }`}>
          <div className={bulletsStyles.topAdjust}>
            <img src={props.data.icon} />
          </div>
        </div>
        
        <div className={`bx--col-lg-12 ${ bulletsStyles.rightContainer }`}>
            <div className={bulletsStyles.header}>
              <div className={bulletsStyles.iconContainer}>
                <h2>{props.data.title}</h2>
              </div>
              <p dangerouslySetInnerHTML={{ __html: props.data.description}}></p>
            </div>
            
            <div className={bulletsStyles.bulletsContainer}>
              {props.data.elements.map(el => {
                return (
                  <BulletOne data={el}></BulletOne>
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

