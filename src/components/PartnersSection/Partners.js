import partnersStyles  from "./partners.module.scss"
import React from "react"

export default function Partners(props) {
  return (
    <section className={partnersStyles.partnersStyles}>
      <div className={partnersStyles.container}>
        <div>
          <p>{props.data.title}</p>
        </div>
        {props.data.partners.map(el=>{
          return <div className={partnersStyles.partnerContainer}>
            <img src={el.partnerImage}/>
            <p>{el.title}</p>
          </div>
        })}
      </div>
    </section>
  )
}

export const query = graphql`
    query partners {
        allDataJson(filter: {}) {
            nodes {
                partnerSection {
                    title
                    partners {
                        title
                        partnerImage
                    }
                }
            }
        }
    }
`
