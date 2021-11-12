import React, { useState, useEffect } from "react"
import styled from "styled-components"

type IProductHeadlineProps = {
  text: string;
}

const StyledHeadline = styled.div`
  margin-top: var(--baseSpacing);
  max-width: 768px;
  width: 100%;
  padding: var(--baseSpacing) 0 var(--baseSpacing) 0;
  padding-top: calc(var(--topbar-height-mobile) + var(--baseSpacingHalf));;
  border-bottom: 2px solid var(--bg-grey);
  font-weight: bold;
  @media (max-width: 672px) {
    padding: var(--baseSpacing);
  }

  h1 {
    max-width: var(--max-width);
    display: flex;
    justify-content: center;
  }
`

const ProductHeadline: React.FC<IProductHeadlineProps> = ({ text }) => {

  return (
    <StyledHeadline>
      <h1>{text}</h1>
    </StyledHeadline>
  )
}

ProductHeadline.defaultProps = {}

export default ProductHeadline
