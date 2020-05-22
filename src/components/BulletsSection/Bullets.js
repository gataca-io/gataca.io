import partnersStyles  from "./bullets.module.scss"
import React from "react"
import BulletOne from "../BulletOne"

function RenderMobile(props) {
  return <section className={partnersStyles.baseMobile}>
    <div className={`${ partnersStyles.container }`}>
      
      <div className={partnersStyles.header}>
        <div className={partnersStyles.iconContainer}>
          <img src={props.data.icon} />
          <h2>{props.data.title}</h2>
        </div>
        <p dangerouslySetInnerHTML={{ __html: props.data.description}}></p>
      </div>
      
      <div className={partnersStyles.bulletsContainer}>
        {props.data.elements.map(el => {
          return (
            <BulletOne data={el}></BulletOne>
          )
        })}
      </div>
    
    </div>
  </section>
}

function RenderDesktop(props) {
  return (
    <section className={partnersStyles.baseDesktop}>
    <div className={`bx--grid ${ partnersStyles.container }`}>
      
      <div className={`bx--row ${ partnersStyles.subContainer }`}>
        
        <div className={`bx--col-lg-4 ${ partnersStyles.leftContainer }`}>
          <div className={partnersStyles.topAdjust}>
            <img src={props.data.icon} />
          </div>
        </div>
        
        <div className={`bx--col-lg-12 ${ partnersStyles.rightContainer }`}>
            <div className={partnersStyles.header}>
              <div className={partnersStyles.iconContainer}>
                <h2>{props.data.title}</h2>
              </div>
              <p dangerouslySetInnerHTML={{ __html: props.data.description}}></p>
            </div>
            
            <div className={partnersStyles.bulletsContainer}>
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

