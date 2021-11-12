import styled from "styled-components"
import React from "react"

interface LineProps {
  width: number
}

export const LineStyled = styled.div<LineProps>`
  height:1px;
  width: ${props => props.width ? props.width + "px" : "0px"};
  background-color: var(--darkblue);
  border-radius: 20px;
  margin: var(--baseSpacingHalf) 0;
`

const Line: React.FC<LineProps> = (props) => {
  return <LineStyled {...props}/>
}

export default Line;
