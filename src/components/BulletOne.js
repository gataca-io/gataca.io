import React from "react"
import styled from 'styled-components'

const Bullet = styled.div`
  padding: var(--baseMargin);
  max-width: 300px;
  h4 {
  color: var(--darkblue);
  }
  h4, img {
  margin-bottom: 0.7rem;
  }
  img{
    height: 100%;
    svg{
      fill: var(--darkblue);
    }
  }
  p{
    font-size: 0.8rem;
    color: var(--grey);
  }
`
const BulletIcon = styled.div`
    display: flex;
    justify-content: ${props => props.right ? "flex-end" : props.left ? "flex-start" : props.center ? "center" : "flex-start"};
    align-items: flex-start;
    height: 45px;
    width: 100%;
    margin-bottom: 1rem;
    padding: 3px 3px 3px 0;
`

export default function BulletOne(props) {
  const {image, title, description} = props.data;
  return (
    <Bullet>
      <BulletIcon right={props.right} left={props.left} center={props.center}>
        <img src={image}/>
      </BulletIcon>
      <h4>{title}</h4>
      <p dangerouslySetInnerHTML={{ __html: description }}/>
    </Bullet>
  )
}
