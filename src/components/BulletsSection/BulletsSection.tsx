
import bulletsStyles from "./bullets.module.scss"

import bulletsMobileStyles from "./bullets_mobile.module.scss"
import React from "react"
import BulletOne from "../BulletOne/BulletOne"

function RenderMobile({ bullets, title, mainDescription, mainIcon, centeredBullets, rightBullets }: BulletsProps) {
  return <section className={bulletsMobileStyles.baseMobile}>
    <div className={`${bulletsMobileStyles.container}`}>

      {title || mainDescription || mainIcon && <div className={bulletsMobileStyles.header}>
        <div className={bulletsMobileStyles.iconContainer}>
          <img src={mainIcon} alt={title}/>
          <h2>{title}</h2>
        </div>
        {/*<DangerSetPHtml data={data.description}/>*/}
        {mainDescription && <div dangerouslySetInnerHTML={{ __html: mainDescription }}/>}
      </div>}

      <div className={bulletsMobileStyles.bulletsContainer}>
        {bullets.map(el => {
          return (
            <BulletOne center={centeredBullets} right={rightBullets} data={el} key={el.title}/>
          )
        })}
      </div>

    </div>
  </section>
}

function RenderDesktop({ bullets, title, mainDescription, mainIcon, centeredBullets, rightBullets }: BulletsProps) {
  return (
    <section className={bulletsStyles.baseDesktop}>
      <div className={`bx--grid ${bulletsStyles.container}`}>

        <div className={`bx--row ${bulletsStyles.subContainer}`}>

          {mainIcon && <div className={`bx--col-lg-4 ${bulletsStyles.leftContainer}`}>
            <div className={bulletsStyles.topAdjust}>
              <img src={mainIcon} alt={title}/>
            </div>
          </div>}

          <div className={`bx--col-lg-12 ${bulletsStyles.rightContainer}`}>
            <div className={bulletsStyles.header}>
              {title && <div className={bulletsStyles.iconContainer}>
                <h2>{title}</h2>
              </div>}
              {/*<DangerSetPHtml data={data.description}/>*/}
              {mainDescription && <div dangerouslySetInnerHTML={{ __html: mainDescription }}/>}
            </div>

            <div className={bulletsStyles.bulletsContainer}>
              {bullets.map(el => {
                return (
                  <BulletOne
                    center={centeredBullets}
                    right={rightBullets}
                    data={el}
                    key={el.title}/>
                )
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

interface BulletsProps {
  bullets: Array<{
    image: string;
    title: string;
    description: string;
  }>;
  title?: string;
  mainDescription?: string,
  mainIcon?: string
  centeredBullets?: boolean;
  rightBullets?: boolean;
}

const defaultProps = {}

const BulletsSection: React.FC<BulletsProps> = (props) => {
  return (
    <React.Fragment>
      {RenderDesktop(props)}
      {RenderMobile(props)}
    </React.Fragment>
  )
}

BulletsSection.defaultProps = defaultProps

export default BulletsSection
