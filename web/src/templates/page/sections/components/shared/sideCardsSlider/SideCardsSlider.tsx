import * as React from "react"
import cx from "classnames"
import {
  HeadingModel,
  ButtonModel,
} from "../../../../../../interfaces/interfaces"
import * as styles from "./sideCardsSlider.module.scss"
import Heading from "../Heading/Heading"
import CardsContainer from "./components/cardsContainer/CardsContainer"
import CredentialsContainer from "./components/credentialsContainer/CredentialsContainer"
import ButtonIcon from "../../generic/buttonIcon/ButtonIcon"
import TestimonialCardContainer from "./components/testimonialCardContainer/TestimonialCardContainer"
import { inherits } from "util"

export type ISideCardsSliderProps = {
  idItem?: string
  heading?: HeadingModel
  background?: boolean
  buttonLeft?: ButtonModel
  buttonRight?: ButtonModel
  textAlign?: string
  cards?: any
  credentials?: any
  testimonialCards?: any
  cardWidth: number
  cardHeight: number
}

const SideCardsSlider: React.FC<ISideCardsSliderProps> = props => {
  const {
    idItem,
    heading,
    background,
    textAlign,
    cards,
    credentials,
    buttonLeft,
    buttonRight,
    cardWidth,
    cardHeight,
    testimonialCards,
  } = props

  const textAlignStyles: Record<string, string> = {
    right: styles?.textAlignRight,
  }

  const [firstItem, setFirstItem] = React.useState<number>(0)

  const cardsLength =
    cards?.card.length ||
    credentials?.credential.length ||
    testimonialCards?.card.length

  const isBrowser = typeof window !== "undefined"
  const [dimensions, setDimensions] = React.useState(
    isBrowser ? window.innerWidth || Math.min(window.innerWidth) : 0
  )
  const handleResize = () => {
    setDimensions(
      isBrowser ? window.innerWidth || Math.min(window.innerWidth) : 0
    )
  }

  React.useEffect(() => {
    window.addEventListener("resize", handleResize, false)
  }, [])

  const width = Math.min(dimensions)
  const smallResolution = width < 640
  const mediumResolution = width < 968
  const testimonialCardWidth = 332

  return (
    <div
      id={idItem}
      className={`${styles.sideCardsSlider} ${
        background ? styles?.background : ""
      }`}
      style={{ position: "relative" }}
    >
      <div
        className={`${styles.sideCardsSlider__container} ${cx(
          "containerMaxWidth"
        )} ${
          testimonialCards?.card?.length < 2 ? styles?.oneTestimonialCard : ""
        } ${textAlign ? textAlignStyles[textAlign] : ""}`}
      >
        <div
          className={`${styles.sideCardsSlider__heading} ${
            textAlign ? textAlignStyles[textAlign] : ""
          } ${background ? styles?.background : ""}`}
        >
          <Heading
            {...heading}
            button={{
              ...heading?.button,
              action: () => window.open(heading?.button?.url, "_blank"),
            }}
          />
        </div>
        <div
          className={`${styles.sideCardsSlider__slotsButtonContainer} ${
            textAlign ? textAlignStyles[textAlign] : ""
          } ${
            testimonialCards?.card?.length < 2 ? styles?.oneTestimonialCard : ""
          } ${background ? styles?.background : ""}`}
          style={{ height: cardHeight + 48 + 32 + 12 }}
        >
          <div
            className={styles.sideCardsSlider__slotsButton}
            style={{ height: cardHeight + 48 + 32 + 12 }}
          >
            <div
              className={styles.slots__elements}
              style={
                textAlign === "left"
                  ? { left: -firstItem * (cardWidth + 32) }
                  : smallResolution && !testimonialCards?.card
                  ? { left: -firstItem * (cardWidth + 32) }
                  : testimonialCards?.card && smallResolution
                  ? { left: -firstItem * (testimonialCardWidth + 32) }
                  : testimonialCards?.card && mediumResolution
                  ? { right: -firstItem * (testimonialCardWidth + 32) }
                  : { right: -firstItem * (cardWidth + 32) }
              }
            >
              {cards?.card && (
                <CardsContainer
                  cardWidth={cardWidth}
                  cardHeight={cardHeight}
                  card={cards?.card}
                />
              )}
              {credentials?.credential && (
                <CredentialsContainer
                  cardWidth={cardWidth}
                  cardHeight={cardHeight}
                  credential={credentials?.credential}
                />
              )}
              {testimonialCards?.card && (
                <TestimonialCardContainer
                  cardWidth={cardWidth}
                  cardHeight={cardHeight}
                  card={testimonialCards?.card}
                  smallResolution={smallResolution}
                  mediumResolution={mediumResolution}
                  testimonialCardWidth={testimonialCardWidth}
                />
              )}
            </div>
            {cardsLength > 1 && (
              <div className={styles.sideCardsSlider__buttons}>
                <ButtonIcon
                  idButton={buttonLeft?.idButton}
                  icon={buttonLeft?.icon}
                  style={buttonLeft?.style}
                  color={buttonLeft?.color}
                  size={buttonLeft?.size}
                  disabled={firstItem <= 0 ? true : false}
                  action={() => firstItem > 0 && setFirstItem(firstItem - 1)}
                />
                <ButtonIcon
                  idButton={buttonRight?.idButton}
                  icon={buttonRight?.icon}
                  style={buttonRight?.style}
                  color={buttonRight?.color}
                  size={buttonRight?.size}
                  disabled={firstItem >= cardsLength - 1 ? true : false}
                  action={() =>
                    firstItem < cardsLength + 1 && setFirstItem(firstItem + 1)
                  }
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideCardsSlider
