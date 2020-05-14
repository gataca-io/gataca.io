import React from "react"
import styled from 'styled-components'

const Bullet = styled.div`
  padding: var(--baseMargin);
`

export default function BulletOne(props) {
  const {image, title, description} = props.data;
  return (
    <Bullet>
      <img src={image}/>
      <h4>{title}</h4>
      <p>{description}</p>
    </Bullet>
  )
}
