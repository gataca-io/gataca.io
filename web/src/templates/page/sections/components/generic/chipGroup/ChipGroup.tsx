import * as React from "react"
import * as styles from "./chipGroup.module.scss"
import MarkDownContent from "../../../../../../components/elements/markDownContent/MarkDownContent"
import SegmentedChip from "./segmentedChip/SegmentedChip"

export type IChipGroupProps = {
  chipOptions: any
}

const ChipGroup: React.FC<IChipGroupProps> = props => {
  const { chipOptions } = props

  const [openItem, setOpenItem] = React.useState<number>(1)

  return (
    <>
      <div className={styles?.chipGroup__container}>
        {chipOptions?.map((item: any, index: number) => {
          const { chip } = item.attributes

          return (
            <>
              <SegmentedChip
                id={"segmentedChip__" + index}
                key={"segmentedChip__" + index}
                index={index + 1}
                text={chip?.text}
                type={chip?.type}
                form={chip?.form}
                disabled={chip?.disabled}
                color={chip?.color}
                chipSize={chip?.chipSize}
                leadingIcon={chip?.leadingIcon}
                trailingIcon={chip?.trailingIcon}
                selected={openItem === index + 1}
                showItem={index => {
                  const element = index - 1
                  setOpenItem(index), element
                }}
              />
            </>
          )
        })}
      </div>
      <>
        {chipOptions[0]?.attributes?.content?.length ? (
          <div
            key={"contentContainer__" + Math.random()}
            className={styles?.content__container}
          >
            {chipOptions?.map((item: any, index: number) => {
              const { content } = item.attributes

              return (
                <>
                  <div key={"chipContent__" + index}>
                    {openItem === index + 1 ? (
                      <>
                        {content?.length && (
                          <MarkDownContent content={content} />
                        )}
                      </>
                    ) : null}
                  </div>
                </>
              )
            })}
          </div>
        ) : null}
      </>
    </>
  )
}

export default ChipGroup
