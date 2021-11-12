import React, { useState, useEffect } from "react"

type ITransformBulletsSectionProps = {
  title?: string,
  description?: string,
  bulletMap: { list: any[] }[];
}

const defaultProps = {

}

const TransformBulletsSection: React.FC<ITransformBulletsSectionProps> = (props) => {
  const {
    title,
    description,
    bulletMap,
  } = props

  useEffect(() => {

  }, [])

  return (
    <React.Fragment>
      <section>
        <div>
          { title && <h2>{title}</h2> }
          { description && <h2>{description}</h2> }
          {
            bulletMap.map(line => {
              line.list.map(bullet=>{
                return (
                  <div>
                    <h3>{bullet.title}</h3>
                    <p>{bullet.description}</p>
                  </div>
                )
              })
            })
          }
        </div>
      </section>
    </React.Fragment>
  )
}

TransformBulletsSection.defaultProps = defaultProps

export default TransformBulletsSection
