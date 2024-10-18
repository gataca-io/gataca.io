import * as React from "react"
import cx from "classnames"
import * as styles from "./actionCard.module.scss"
import { ActionCardModel } from "../../../../../../interfaces/interfaces"
import StrapiImage from "../../../../../../components/atoms/images/StrapiImage"
import Button from "../../generic/button/Button"
import Chip from "../../generic/chip/Chip"

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
  } = props

  const [openItem, setOpenItem] = React.useState(true)

  return (
    <div id={idActionCard} className={`${styles?.actionCard__container} `}>
      <div className={styles.actionCard__leftSide}>
        {titleCard?.length && (
          <div
            className={styles.titleContainer}
            onClick={() => setOpenItem(!openItem)}
          >
            {titleCard?.length && (
              <p className={cx("bodyBoldXL")}>{titleCard}</p>
            )}
            {openItem ? (
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
        {openItem ? (
          <div className={styles.mainContentContainer}>
            {(chip?.text?.length ||
              chip?.leadingIcon ||
              chip?.trailingIcon) && (
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
            {content?.length && (
              <p className={cx("bodyRegularLG neutral700")}>{content}</p>
            )}
          </div>
        ) : null}
      </div>
      {(trailingIcon?.length ||
        button?.label?.length ||
        button?.icon?.length) && (
        <div className={styles.actionCard__rightSide}>
          {trailingIcon?.length && (
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
