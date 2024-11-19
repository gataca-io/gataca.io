import * as React from "react"
import { TestimonialCardModel } from "../../../../../../../../interfaces/interfaces"
import * as styles from "./testimonialCardContainer.module.scss"
import TestimonialCard from "../../../testimonialCard/TestimonialCard"

export type ITestimonialCardContainerProps = {
  idItem?: string
  card?: TestimonialCardModel[]
  cardWidth?: number
  cardHeight?: number
}

const TestimonialCardContainer: React.FC<
  ITestimonialCardContainerProps
> = props => {
  const { idItem, card, cardWidth, cardHeight } = props

  return (
    <div id={idItem} className={`${styles.card__container}`}>
      {card?.map((el: any, index: number) => {
        const { idItem, content, image, name, workTitle, color } = el

        return (
          <div
            key={`testimonialCard__` + index}
            style={{ width: cardWidth, height: cardHeight }}
          >
            <TestimonialCard
              idItem={idItem}
              content={content}
              image={image}
              name={name}
              workTitle={workTitle}
              color={color}
            />
          </div>
        )
      })}
    </div>
  )
}

export default TestimonialCardContainer
