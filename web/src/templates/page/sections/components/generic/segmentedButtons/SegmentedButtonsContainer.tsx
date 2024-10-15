import * as React from "react"
import * as styles from "./segmentedButtonsContainer.module.scss"
import SegmentedButtons from "./components/SegmentedButtons"
import MarkDownContent from "../../../../../../components/elements/markDownContent/MarkDownContent"

export type ISegmentedButtonsContainerProps = {
  segmentedOptions: any
}

const SegmentedButtonsContainer: React.FC<
  ISegmentedButtonsContainerProps
> = props => {
  const { segmentedOptions } = props

  const [openItem, setOpenItem] = React.useState<number>(1)

  return (
    <>
      <div className={styles?.segmentedButtons__container}>
        {segmentedOptions?.map((item: any, index: number) => {
          const { button } = item.attributes

          return (
            <SegmentedButtons
              id={"segmentedButton__" + index}
              key={"segmentedButton__" + index}
              index={index + 1}
              label={button?.label}
              fillColor={button?.fillColor}
              size={button?.size}
              noPaddingText={button?.noPaddingText}
              disabled={button?.disabled}
              selected={openItem === index + 1}
              showItem={index => {
                const element =
                  document &&
                  document?.getElementById("listCategory__" + (index - 1))
                setOpenItem(index), element
              }}
            />
          )
        })}
      </div>
      <>
        {segmentedOptions[0]?.attributes?.content?.length ? (
          <div className={styles?.content__container}>
            {segmentedOptions?.map((item: any, index: number) => {
              const { content } = item.attributes

              return (
                <>
                  {openItem === index + 1 ? (
                    <>
                      {content?.length && <MarkDownContent content={content} />}
                    </>
                  ) : null}
                </>
              )
            })}
          </div>
        ) : null}
      </>
    </>
  )
}

export default SegmentedButtonsContainer
