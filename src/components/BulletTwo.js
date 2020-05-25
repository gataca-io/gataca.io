import React from "react"
import styled from 'styled-components'

const Bullet = styled.div`
background-color: var(--white);
padding: var(--baseMargin);
border-radius: var(--borderRadius);
`

export default function BulletTwo(props) {
  const {image, title, description} = props.data;
  return (
      <Bullet>
        <img src={image}/>
        <h4>{title}</h4>
        <p dangerouslySetInnerHTML={{ __html: description }}></p>
      </Bullet>
  )
}
