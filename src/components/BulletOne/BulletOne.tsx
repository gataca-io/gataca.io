import React from "react"
import styled from "styled-components"
import cx from "classnames"
import { Link } from "gatsby"
import styles from "./bulletOne.module.scss"


const BulletIcon = styled.div<IBulletIcon>`
  display: flex;
  justify-content: ${props => props.right ? "flex-end" : props.left ? "flex-start" : props.center ? "center" : "flex-start"};
  align-items: flex-start;
  height: 45px;
  width: 100%;
  margin-bottom: 1rem;
  padding: 3px 3px 3px 0;
`

const defaultProps = {}

interface IBulletIcon {
  center?: boolean;
  right?: boolean;
  left?: boolean;
}

interface IBulletOne {
  center?: boolean;
  right?: boolean;
  left?: boolean;
  data: {
    image?: string;
    title: string;
    description?: string;
    ctaText?: string;
    ctaUrl?: string;
  }
  bulletContainerStyles?: any;
}

const BulletOne: React.FC<IBulletOne> = (props) => {
  const { bulletContainerStyles, right, center, left, data } = props
  const { image, title, description, ctaText, ctaUrl } = data
  return (
    <div className={bulletContainerStyles}>
      <div className={styles.bullet} {...props}>
        <div className={styles.bulletMainContainer}>
          {image && <BulletIcon right={right} left={left} center={center}>
            <img src={image} alt={title}/>
          </BulletIcon>}
          <h4 className={cx(
            center ? "bullet-centered" : null)
          }>{title}</h4>
          {description && <div className={cx(
            "bullet-description",
            center ? "bullet-centered" : null)
          }
                               dangerouslySetInnerHTML={{ __html: description }}
          />}
        </div>
        {ctaText && ctaUrl && <Link className={"bulletOneCta"} to={ctaUrl}>{ctaText}</Link>}
      </div>
    </div>
  )
}

BulletOne.defaultProps = defaultProps

export default BulletOne
