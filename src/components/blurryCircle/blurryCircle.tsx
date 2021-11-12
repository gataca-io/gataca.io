import React from "react"
import styled from "styled-components"

export type BlurrycircleProps = {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
  blur?: number,
  size?: number,
  opacity?: number,
  zIndex?: number,
  shadow?: boolean,
  borderColor?: string;
}

const BlurryCirle = styled.div<BlurrycircleProps>`
  position: absolute;
  bottom: ${props => props.bottom ? props.bottom + "px" : 0 + "px"};
  right: ${props => props.right ? props.right + "px" : 0 + "px"};
  left: ${props => props.left ? props.left + "px" : 0 + "px"};
  top: ${props => props.top ? props.top + "px" : 0 + "px"};
  /*    background: white;
      background: linear-gradient(
                      304deg, rgba(255, 255, 255, 0.4029586835) 0%, rgba(255, 255, 255, 0.106320028) 92%);
                      */
  opacity: ${props => props.opacity ? props.opacity : 0};
  box-shadow: ${props => props.shadow ? "0px 3px 12px #00000012" : "none"};
  border-radius: ${props => props.size ? props.size * 10 + "px" : "50px"};
  border: ${props => props.borderColor ? "2px solid " + props.borderColor : "none"};
  z-index: ${props => props.zIndex ? props.zIndex : 1};
  height: ${props => props.size ? props.size + "px" : "20px"};
  width: ${props => props.size ? props.size + "px" : "20px"};
  backdrop-filter: ${props => props.blur ? "blur(" + props.blur + "px)" : "none"};
`

export default function Blurrycircle(props: BlurrycircleProps) {
  return (
    <BlurryCirle {...props} className="blurryCircle"/>
  )
}
