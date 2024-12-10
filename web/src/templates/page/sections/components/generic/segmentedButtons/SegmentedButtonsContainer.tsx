import * as React from "react"
import * as styles from "./segmentedButtonsContainer.module.scss"
import SegmentedButtons from "./components/SegmentedButtons"
import MarkDownContent from "../../../../../../components/elements/markDownContent/MarkDownContent"
import GeneralCardsLayout from "../../shared/GeneralCardsLayout/GeneralCardsLayout"
import Heading from "../../shared/Heading/Heading"
import { HeadingModel } from "../../../../../../interfaces/interfaces"

export type ISegmentedButtonsContainerProps = {
  idItem?: string
  segmentedOptions: any
  heading?: HeadingModel
  className?: string
  subOptionClickedID?: string
}

const SegmentedButtonsContainer: React.FC<
  ISegmentedButtonsContainerProps
> = props => {
  const { idItem, subOptionClickedID, segmentedOptions, heading, className } =
    props

  const [openItem, setOpenItem] = React.useState(
    subOptionClickedID === idItem ? 2 : 1
  )

  return (
    <div
      className={`${styles?.segmentedButtons__container} ${
        className && className
      }`}
    >
      {heading && (
        <Heading
          {...heading}
          button={{
            ...heading?.button,
            action: () => window.open(heading?.button?.url, "_blank"),
          }}
        />
      )}
      <div className={styles?.segmentedOptions}>
        {segmentedOptions?.map((item: any, index: number) => {
          const { button } = item.attributes

          return (
            <SegmentedButtons
              id={"segmentedButton__" + index}
              key={"segmentedButton__" + index}
              index={index + 1}
              {...button}
              selected={openItem === index + 1}
              showItem={index => {
                setOpenItem(index)
              }}
            />
          )
        })}
      </div>

      {segmentedOptions[0]?.attributes?.content?.length ? (
        <div id={idItem}>
          {segmentedOptions?.map((item: any, index: number) => {
            const { content } = item.attributes

            return openItem === index + 1 ? (
              <div key={"content__" + index}>
                {content?.length && <MarkDownContent content={content} />}
              </div>
            ) : null
          })}
        </div>
      ) : null}

      {segmentedOptions[0]?.attributes?.generalCardsLayout ? (
        <div id={idItem}>
          {segmentedOptions?.map((item: any, index: number) => {
            const { generalCardsLayout } = item.attributes

            return openItem === index + 1 ? (
              <GeneralCardsLayout
                key={"generalCardsLayout__" + index}
                idItem={generalCardsLayout?.idItem}
                heading={generalCardsLayout?.heading?.data?.attributes}
                button={generalCardsLayout?.button}
                columns={generalCardsLayout?.columns}
                card={generalCardsLayout?.card}
                pricing={generalCardsLayout?.pricing}
                className={styles?.segmentButtons__generalCardsLayout}
              />
            ) : null
          })}
        </div>
      ) : null}
    </div>
  )
}

export default SegmentedButtonsContainer
