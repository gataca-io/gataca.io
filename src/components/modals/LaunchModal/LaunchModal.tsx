import { Link } from "gatsby"
import React from "react"
import data from "../../../../content/data/launchModalData.json"
import style from "./launchModal.module.scss"

type ILaunchModalProps = {
  hideModal: (x: boolean) => void
}

const LaunchModal: React.FC<ILaunchModalProps> = (props) => {
  const { hideModal } = props

  const saveModalSeen = () => sessionStorage.setItem("prelaunchSeen", "true")

  return (
    <>
      <div className={style.backgroundLayer}></div>
      <div className={style.launchModal}>
        <div className={style.launchModal__content}>
          <div className={style.launchModal__content__header}>
            <div
              className={style.closeButton}
              onClick={() => {
                saveModalSeen()
                hideModal(false)
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_2102_19465)">
                  <path
                    d="M0 0L17.25 17.25"
                    stroke="#181B5E"
                    stroke-width="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M17.25 0L0 17.25"
                    stroke="#181B5E"
                    stroke-width="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </div>
          </div>
          <div className={style.launchModal__content__left}>
            <h2 className={style.title}>{data.title}</h2>
            <p className={style.text}>{data.firstParagraph}</p>
            <div className={style.buttons}>
              {data.leftButton && data.leftButtonLink && (
                <Link to={data.leftButtonLink}>
                  <button
                    className={style.buttons__learnMore}
                    onClick={() => {
                      saveModalSeen()
                      hideModal(false)
                    }}
                  >
                    {data.leftButton}
                  </button>
                </Link>
              )}
              {data.rightButton && data.rightButtonLink && (
                <Link to={data.rightButtonLink}>
                  <button
                    className={style.buttons__earlyAccess}
                    onClick={() => {
                      saveModalSeen()
                      hideModal(false)
                    }}
                  >
                    {data.rightButton}
                  </button>
                </Link>
              )}
            </div>
          </div>
          <div className={style.image}>
            <img
              src={"../illustrations/dashboard.svg"}
              alt={"pre launch image"}
            />
            <p></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default LaunchModal
