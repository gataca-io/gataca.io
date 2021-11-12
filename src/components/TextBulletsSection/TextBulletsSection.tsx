import React, { useState, useEffect } from "react"
import styled from "styled-components"

type ITextBulletsSectionProps = {
  title?: string;
  textBullets: Array<{
    icon?: string,
    text: string,
    title?: string
  }>;
  backgroundColor?: string;
  containerStyles?: boolean;
  icons?: boolean,
  showIndex?: boolean;
  iconSize?: number,
}

const defaultProps = {
  iconSize: 20,
  icons: false,
}

const TextBulletsContainer = styled.section<ITextBulletsSectionProps>`
  padding: var(--baseSpacingDouble) var(--baseSpacing);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.backgroundColor ? props.backgroundColor : "var(--white)"};

  & > div {
    max-width: var(--max-width);
    text-align: center;

    h2 {
      margin-bottom: var(--baseSpacing);
      padding: var(--baseSpacing) 0;
    }
  }

  p {
    text-align: left;
  }
`

const TextBullet = styled.div<ITextBulletsSectionProps>`
  display: flex;
  margin-bottom: var(--baseSpacingHalf);

  .textCont {
    text-align: left;
    width: 100%;

    h3 {
      margin-bottom: var(--baseSpacingHalf);
    }
  }
`

const ImageContainer = styled.div<ITextBulletsSectionProps>`
  height: ${props => props.iconSize && props.iconSize + "px"};
  width: ${props => props.iconSize && props.iconSize + "px"};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: var(--baseSpacing);

  img {
    height: ${props => props.iconSize && props.iconSize * 0.8 + "px"};
    width: 90%;
    margin: 0;
  }
`

const TextBulletsSection: React.FC<ITextBulletsSectionProps> = (props) => {

  const { title, textBullets, icons, containerStyles, showIndex } = props

  useEffect(() => {

  }, [])

  return (
    <TextBulletsContainer
      {...props}
    >
      <div>
        <h2>{title}</h2>
        {textBullets.map((b, i) => {
          return (
            <TextBullet {...props}>
              {icons && b.icon && <ImageContainer {...props}>
                <img src={b.icon} alt={title}/>
              </ImageContainer>
              }
              <div className="textCont">
                {b.title && <h3 key={i}>{b.title}</h3>}
                <p key={i}>{showIndex && <span>{i + 1}. </span>}{b.text}</p>
              </div>
            </TextBullet>
          )
        })}
      </div>
    </TextBulletsContainer>
  )
}

TextBulletsSection.defaultProps = defaultProps

export default TextBulletsSection
