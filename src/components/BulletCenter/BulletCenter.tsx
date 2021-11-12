import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Line from "../../Line"
import styles from "./bulletcenter.module.scss"
import cx from "classnames";


const Subtitle = styled.h5`
  font-size: 1rem;
  letter-spacing: 0.1rem;
  opacity: 0.3;
  font-weight: 600;
  color: var(--darkblue);
  padding-bottom: var(--baseMargin);
  //border-bottom: 1px solid #181B5E44;
`

interface BulletCenterProps {
  data: {
    image: string;
    title: string;
    subtitle?: string;
    description: string;
    ctaText?: string;
    ctaUrl?: string;
  }
  line?: boolean,
  bulletContainerStyles?: any
}

const BulletCenter: React.FC<BulletCenterProps> = (props) => {
  const {line} = props;
  const { image, title, subtitle, description, ctaText, ctaUrl } = props.data
  return (
    <div className={cx(props.bulletContainerStyles, styles.bullet)}>
      <div className={styles.bulletMainContainer}>
        {image && <div className={styles.bulletIcon}>
          <img src={image} alt={title}/>
        </div>}
        <h4>{title}</h4>
        {subtitle && <Subtitle> {subtitle} </Subtitle>}
        {line && <Line width={70}/>}
        <div dangerouslySetInnerHTML={{ __html: description }}/>
      </div>

      {ctaText && ctaUrl && <Link to={ctaUrl}>{ctaText}</Link>}
    </div>
  )
}


BulletCenter.defaultProps = {
  data: {
    image: "../images/phone-small.svg",
    title: "BULLET CENTERED",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie vestibulum aliquam nunc sit ornare.",
  },
}

export default BulletCenter
