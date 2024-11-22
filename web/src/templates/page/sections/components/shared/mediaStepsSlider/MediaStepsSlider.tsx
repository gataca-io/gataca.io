import * as React from "react"
import cx from "classnames"
import * as styles from "./mediaStepsSlider.module.scss"
import {
  ButtonModel,
  HeadingModel,
} from "../../../../../../interfaces/interfaces"
import StrapiImage from "../../../../../../components/atoms/images/StrapiImage"
import Heading from "../Heading/Heading"
import ButtonIcon from "../../generic/buttonIcon/ButtonIcon"

export type IMediaStepsSliderProps = {
  idItem?: string
  heading?: HeadingModel
  mediaSteps?: any
  buttonLeft?: ButtonModel
  buttonRight?: ButtonModel
}

const MediaStepsSlider: React.FC<IMediaStepsSliderProps> = props => {
  const { idItem, heading, mediaSteps, buttonLeft, buttonRight } = props
  const [firstItem, setFirstItem] = React.useState<number>(0)

  let step: HTMLElement | null | undefined
  let stepImage: HTMLElement | null | undefined

  React.useEffect(() => {
    handleFeatureDataOpcity()
    handleFeatureImageOpcity()
  })

  const handleFeatureDataOpcity = () => {
    step = document ? document?.getElementById("step") : undefined
    step ? (step.style.opacity = "0") : null
    setTimeout(() => {
      step ? (step.style.opacity = "1") : null
    }, 200)
  }

  const handleFeatureImageOpcity = () => {
    stepImage = document ? document?.getElementById("image") : undefined
    stepImage ? (stepImage.style.opacity = "0") : null
    setTimeout(() => {
      stepImage ? (stepImage.style.opacity = "1") : null
    }, 200)
  }

  const stepsLength = mediaSteps?.length

  return (
    <div id={idItem} style={{ position: "relative" }}>
      <div
        className={`${styles.mediaStepsSlider__container} ${cx(
          "containerMaxWidth"
        )}`}
      >
        <div className={`${styles.heading__mobile}`}>
          {heading && (
            <Heading
              idHeading={heading?.idHeading}
              titleSize={heading?.titleSize}
              align={heading?.align}
              extraText={heading?.extraText}
              title={heading?.title}
              sectionName={heading?.sectionName}
              content={heading?.content}
              buttonGroup={heading?.buttonGroup?.buttons?.data}
              list={heading?.list?.list_options?.data}
              segmentedButton={heading?.segmentedButton?.buttons?.data}
              table={heading?.table?.content}
              chip={{ ...heading?.chip }}
              button={{
                ...heading?.button,
                action: () => window.open(heading?.button?.url, "_blank"),
              }}
            />
          )}
        </div>
        <div className={`${styles.mediaStepsSlider__leftSide}`}>
          {mediaSteps?.length && mediaSteps[firstItem] && (
            <div id={"image"} className={styles?.imageContainer}>
              <StrapiImage
                image={
                  mediaSteps?.[firstItem]?.attributes?.image
                    ? mediaSteps?.[firstItem]?.attributes?.image
                    : null
                }
              />
            </div>
          )}
        </div>
        <div className={styles.mediaStepsSlider__rightSide}>
          <div className={`${styles.heading__desktop}`}>
            {heading && (
              <Heading
                idHeading={heading?.idHeading}
                titleSize={heading?.titleSize}
                align={heading?.align}
                extraText={heading?.extraText}
                title={heading?.title}
                sectionName={heading?.sectionName}
                content={heading?.content}
                buttonGroup={heading?.buttonGroup?.buttons?.data}
                list={heading?.list?.list_options?.data}
                segmentedButton={heading?.segmentedButton?.buttons?.data}
                table={heading?.table?.content}
                chip={{ ...heading?.chip }}
                button={{
                  ...heading?.button,
                  action: () => window.open(heading?.button?.url, "_blank"),
                }}
              />
            )}
          </div>
          <div
            id={"step"}
            className={cx(styles.mediaStepsSlider__rightSide__data)}
          >
            {mediaSteps?.length && mediaSteps[firstItem] && (
              <div className={styles.mediaStepsSlider__rightSide__data__item}>
                {mediaSteps?.[firstItem] && (
                  <>
                    <div className={styles?.imageContainer}>
                      <StrapiImage
                        image={
                          mediaSteps?.[firstItem]?.attributes?.stepImage
                            ? mediaSteps?.[firstItem]?.attributes?.stepImage
                            : null
                        }
                      />
                    </div>
                    <div className={styles?.heading}>
                      <Heading
                        idHeading={
                          mediaSteps?.[firstItem]?.attributes?.headingStep
                            .idHeading
                        }
                        titleSize={
                          mediaSteps?.[firstItem]?.attributes?.headingStep
                            .titleSize
                        }
                        align={
                          mediaSteps?.[firstItem]?.attributes?.headingStep.align
                        }
                        extraText={
                          mediaSteps?.[firstItem]?.attributes?.headingStep
                            .extraText
                        }
                        title={
                          mediaSteps?.[firstItem]?.attributes?.headingStep.title
                        }
                        sectionName={
                          mediaSteps?.[firstItem]?.attributes?.headingStep
                            .sectionName
                        }
                        content={
                          mediaSteps?.[firstItem]?.attributes?.headingStep
                            .content
                        }
                        buttonGroup={
                          mediaSteps?.[firstItem]?.attributes?.headingStep
                            .buttonGroup?.buttons?.data
                        }
                        list={
                          mediaSteps?.[firstItem]?.attributes?.headingStep.list
                            ?.list_options?.data
                        }
                        segmentedButton={
                          mediaSteps?.[firstItem]?.attributes?.headingStep
                            .segmentedButton?.buttons?.data
                        }
                        table={
                          mediaSteps?.[firstItem]?.attributes?.headingStep.table
                            ?.content
                        }
                        chip={{
                          ...mediaSteps?.[firstItem]?.attributes?.headingStep
                            .chip,
                        }}
                        button={{
                          ...mediaSteps?.[firstItem]?.attributes?.headingStep
                            .button,
                          action: () =>
                            window.open(
                              mediaSteps?.[firstItem]?.attributes?.headingStep
                                .button?.url,
                              "_blank"
                            ),
                        }}
                      />
                      <div className={styles.mediaStepsSlider__buttons__mobile}>
                        <ButtonIcon
                          idButton={buttonLeft?.idButton}
                          icon={buttonLeft?.icon}
                          style={buttonLeft?.style}
                          color={buttonLeft?.color}
                          size={buttonLeft?.size}
                          disabled={firstItem <= 0 ? true : false}
                          action={() =>
                            firstItem > 0 && setFirstItem(firstItem - 1)
                          }
                        />
                        <ButtonIcon
                          idButton={buttonRight?.idButton}
                          icon={buttonRight?.icon}
                          style={buttonRight?.style}
                          color={buttonRight?.color}
                          size={buttonRight?.size}
                          disabled={firstItem >= stepsLength - 1 ? true : false}
                          action={() =>
                            firstItem < stepsLength - 1 &&
                            setFirstItem(firstItem + 1)
                          }
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
          <div className={styles.mediaStepsSlider__buttons__desktop}>
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
              disabled={firstItem >= stepsLength - 1 ? true : false}
              action={() =>
                firstItem < stepsLength - 1 && setFirstItem(firstItem + 1)
              }
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MediaStepsSlider
