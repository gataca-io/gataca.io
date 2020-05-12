import partnersStyles  from "./partners.module.scss"
import React from "react"

export default function PartnersSection(props) {
  return (
    <section className={partnersStyles.partnersStyles}>
      <section className={partnersStyles}>
        {props.data.partners.map(el=>{
          return <div>
            <h5>{el.title}</h5>
            <img src={el.partnerImage}/>
          </div>
        })}
      </section>
    </section>
  )
}

export const query = graphql`
    query {
        file(relativePath: { eq: "blog/avatars/kyle-mathews.jpeg" }) {
            childImageSharp {
                # Specify the image processing specifications right in the query.
                # Makes it trivial to update as your page's design changes.
                fixed(width: 125, height: 125) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`
