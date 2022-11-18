import React, { useState } from "react"
import styles from "./rotatingCard.module.scss"

interface RotatingCardProps {
  data: any
}

const RotatingCard: React.FC<RotatingCardProps> = (props) => {
  const { data } = props
  const [turnedCard, setTurnedCard] = useState(false)
  return (
    <div
      className={`${styles.rotatingCard} ${
        turnedCard ? styles.turnedCard : ""
      }`}
    >
      <div
        className={`${styles.rotatingCard__side} ${styles.rotatingCard__front}`}
      >
        <div className={styles.rotatingCard__side__header}>
          {data.tag && (
            <div className={styles.rotatingCard__side__header__tag}>
              {data.tag}
            </div>
          )}
          <svg
            onClick={() => setTurnedCard(true)}
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 1.25V17.75"
              stroke="#181B5E"
              stroke-width="0.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17.25 9.5H0.75"
              stroke="#181B5E"
              stroke-width="0.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <img src={data.icon} alt={data.title} />
        <h3>{data.title}</h3>
        <p>{data.shortDescription}</p>
      </div>
      <div
        className={`${styles.rotatingCard__side} ${styles.rotatingCard__back}`}
      >
        <div className={styles.rotatingCard__side__header}>
          <svg
            onClick={() => setTurnedCard(false)}
            width="24"
            height="2"
            viewBox="0 0 24 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.5 1H0.5"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <p>{data.description}</p>
      </div>
    </div>
  )
}

export default RotatingCard
