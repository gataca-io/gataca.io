import { Link } from "gatsby"
import React from "react"
import data from "./../../../../content/data/prelaunchModalData.json"
import style from "./preLaunchModal.module.scss"

type IPreLaunchModalProps = {
  hideModal: (x: boolean) => void
}

const PreLaunchModal: React.FC<IPreLaunchModalProps> = (props) => {
  const { hideModal } = props

  const saveModalSeen = () => sessionStorage.setItem("prelaunchSeen", "true")

  return (
    <>
      <div className={style.backgroundLayer}></div>
      <div className={style.preLaunchModal}>
        <div className={style.preLaunchModal__content}>
          <div className={style.preLaunchModal__content__header}>
            <div className={style.commingTag}>
              <p>{data.tag}</p>
            </div>
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
          <div className={style.preLaunchModal__content__left}>
            <h2 className={style.title}>{data.title}</h2>
            <p className={style.text}>{data.firstParagraph}</p>
            <p className={style.text}>{data.secondParagraph}</p>
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
              src={"../illustrations/prelaunch.svg"}
              alt={"pre launch image"}
            />
            <p></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default PreLaunchModal
