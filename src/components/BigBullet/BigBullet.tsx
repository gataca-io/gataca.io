import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Button } from "carbon-components-react"

import styles from "./bigbullet.module.scss"
import cx from "classnames" // we need this to make JSX compile

const ImageContainer = styled.div<IBigBulletProps>`
  width: ${props => props.imgSize === "s" ? "100px" :
          props.imgSize === "m" ? "200px" :
                  props.imgSize === "l" ? "300px" :
                          props.imgSize === "xl" ? "400px" :
                                  "200px"};
  height: ${props => props.imgSize === "s" ? "100px" :
          props.imgSize === "m" ? "200px" :
                  props.imgSize === "l" ? "300px" :
                          props.imgSize === "xl" ? "400px" :
                                  "200px"};
  min-width: ${props => props.imgSize === "s" ? "100px" :
          props.imgSize === "m" ? "200px" :
                  props.imgSize === "l" ? "300px" :
                          props.imgSize === "xl" ? "400px" :
                                  "200px"};
  min-height: ${props => props.imgSize === "s" ? "100px" :
          props.imgSize === "m" ? "200px" :
                  props.imgSize === "l" ? "300px" :
                          props.imgSize === "xl" ? "400px" :
                                  "200px"};
  margin: var(--baseSpacingHalf);
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    margin: 0;
  }
`

const TextContainer = styled.div<IBigBulletProps>`
  margin: var(--baseSpacing);
  text-align: left;
  h3 {
    margin-bottom: var(--baseSpacingHalf);
    padding-right: ${props => props.right ? "0px" : "var(--baseSpacingDouble)"};
    font-weight: bold;
  }
`
export type IBigBulletProps = {
  image: string;
  title: string;
  description: string | undefined;
  shortDescription?: string;
  ctaText?: string;
  ctaUrl?: string;
  right?: boolean;
  left?: boolean;
  bulletsStyles?: any;
  imgSize?: "s" | "m" | "l" | "xl"
}

const BigBullet: React.FC<IBigBulletProps> = (
  props,
) => {
  const {
    image,
    description,
    shortDescription,
    title,
    ctaText,
    ctaUrl,
    right,
    bulletsStyles,
  } = props

  useEffect(() => {

  }, [])

  return (
    <React.Fragment>
      <div className={cx(styles.bigBulletContainer, bulletsStyles)}>
        {
          !right && <ImageContainer {...props}>
            {image && <img src={image} alt={title}/>}
          </ImageContainer>
        }

        <TextContainer {...props}>
          <h3>{title}</h3>
          {shortDescription && <div dangerouslySetInnerHTML={{ __html: shortDescription }}/>}
          {description && <div dangerouslySetInnerHTML={{ __html: description }}/>}
          {ctaText && ctaUrl && <Link to={ctaUrl}>
            <Button
              className={styles.ctaButton}
              disabled={false}
              iconDescription="Button icon"
              kind="primary"
              renderIcon={undefined}
              size="default"
              tabIndex={0}
              type="button"
            >{ctaText}</Button>
          </Link>}
        </TextContainer>

        {
          right && <ImageContainer {...props}>
            {image && <img src={image} alt={title}/>}
          </ImageContainer>
        }

      </div>
    </React.Fragment>
  )
}

BigBullet.defaultProps = {
  image: "",
  right: false,
  left: true,
  title: "BIG BULLET",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie vestibulum aliquam nunc sit ornare.",
}

export default BigBullet
