import * as React from "react"
import cx from "classnames"
import * as styles from "./actionCard.module.scss"
import { ActionCardModel } from "../../../../../../../interfaces/interfaces"
import StrapiImage from "../../../../../../../components/atoms/images/StrapiImage"
import Button from "../../../generic/button/Button"
import Chip from "../../../generic/chip/Chip"
import MarkDownContent from "../../../../../../../components/elements/markDownContent/MarkDownContent"

const ActionCard: React.FC<ActionCardModel> = props => {
  const {
    idActionCard,
    titleCard,
    upperIconOpened,
    upperIconClosed,
    chip,
    titleContent,
    content,
    button,
    trailingIcon,
    selected,
    showItem,
    index,
  } = props

  return (
    <div className={`${styles?.actionCard__container} `}>
      <div className={styles.actionCard__leftSide}>
        {!selected && (
          <div
            id={idActionCard ? idActionCard : "actionCard__"}
            className={styles.titleContainer}
            onClick={() => !selected && showItem(index)}
          >
            {titleCard?.length && (
              <p className={cx("bodyBoldXL")}>{titleCard}</p>
            )}
            {selected ? (
              <>
                {upperIconOpened && (
                  <div>
                    <StrapiImage
                      image={upperIconOpened ? upperIconOpened : null}
                    />
                  </div>
                )}
              </>
            ) : (
              <>
                {upperIconClosed && (
                  <div>
                    <StrapiImage
                      image={upperIconClosed ? upperIconClosed : null}
                    />
                  </div>
                )}
              </>
            )}
          </div>
        )}
        {selected ? (
          <div className={styles.actionCard__opened}>
            <div
              id={idActionCard ? idActionCard : "actionCard__"}
              className={styles.titleContainer}
              onClick={() => showItem(!selected ? index : 0)}
            >
              {titleCard?.length && (
                <p className={cx("bodyBoldXL")}>{titleCard}</p>
              )}
              {selected ? (
                <>
                  {upperIconOpened && (
                    <div>
                      <StrapiImage
                        image={upperIconOpened ? upperIconOpened : null}
                      />
                    </div>
                  )}
                </>
              ) : (
                <>
                  {upperIconClosed && (
                    <div>
                      <StrapiImage
                        image={upperIconClosed ? upperIconClosed : null}
                      />
                    </div>
                  )}
                </>
              )}
            </div>
            <div className={styles.mainContentContainer}>
              {(chip?.text?.length ||
                chip?.leadingIcon?.data?.attributes?.url?.length ||
                chip?.trailingIcon?.data?.attributes?.url?.length) && (
                <div className={cx("marginBottom12")}>
                  <Chip
                    idChip={chip?.idChip}
                    text={chip?.text}
                    type={chip?.type}
                    form={chip?.form}
                    disabled={chip?.disabled}
                    color={chip?.color}
                    chipSize={chip?.chipSize}
                    leadingIcon={chip?.leadingIcon}
                    trailingIcon={chip?.trailingIcon}
                  />
                </div>
              )}
              {titleContent?.length && (
                <h4 className={cx("bodyBoldXL")}>{titleContent}</h4>
              )}
              {content?.length && <MarkDownContent content={content} />}
            </div>
          </div>
        ) : null}
      </div>
      {(trailingIcon?.data?.attributes?.url?.length ||
        button?.label?.length ||
        button?.icon?.length) && (
        <div className={styles.actionCard__rightSide}>
          {trailingIcon?.data?.attributes?.url?.length && (
            <div>
              <StrapiImage
                className={cx("iconSM")}
                image={trailingIcon ? trailingIcon : null}
              />
            </div>
          )}
          {(button?.label?.length || button?.icon?.length) && (
            <Button
              idButton={button?.idButton}
              label={button?.label}
              icon={button?.icon}
              style={button?.style}
              color={button?.color}
              size={button?.size}
              noPaddingText={button?.noPaddingText}
              disabled={button?.disabled}
              link={button?.link}
              url={button?.url}
              action={() =>
                window?.open(
                  button?.url,
                  button?.outsideWeb ? "_blank" : "_self"
                )
              }
            />
          )}
        </div>
      )}
    </div>
  )
}

export default ActionCard
