import React from "react"
import styled from 'styled-components'

const Bullet = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 400px;
  img{
    height: 50px;
    width: 50px;
    background-color: var(--white);
  }
`

export default function BulletCenter(props) {
  const {image, title, description} = props.data;
  return (
    <Bullet>
      <img src={image}/>
      <h4>{title}</h4>
      <p>{description}</p>
    </Bullet>
  )
}
