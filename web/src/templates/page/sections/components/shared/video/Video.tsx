import * as React from "react"
import cx from "classnames"
import * as styles from "./video.module.scss"
import { HeadingModel } from "../../../../../../interfaces/interfaces"
import Heading from "../Heading/Heading"

export type ISectionProps = {
  className?: string
  idItem?: string
  color?: string
  heading?: HeadingModel
  image?: any
  video?: any
}

const Video: React.FC<ISectionProps> = props => {
  const { className, idItem, color, heading, image, video } = props
  let videoHTML: HTMLVideoElement | null | undefined

  const videoID = idItem || "video"

  React.useEffect(() => {
    videoHTML = document
      ? (document?.getElementById(videoID) as HTMLVideoElement)
      : undefined
  })

  const colorStyles: Record<string, string> = {
    black: styles?.blackBackground,
    grey: styles?.greyBackground,
  }

  const getmediaExt = () => {
    let divContent = null
    const mediaExt = video?.data?.attributes?.ext
    const videoContent = (
      <div className={cx("marginBottom32")}>
        <video
          id={videoID}
          poster={image?.data?.attributes?.url}
          onClick={() => (videoHTML ? (videoHTML.controls = true) : {})}
          src={video?.data?.attributes?.url}
        ></video>
      </div>
    )

    if (mediaExt) {
      switch (mediaExt) {
        case ".mp4":
          divContent = videoContent
          break
        case ".mpeg":
          divContent = videoContent
          break
        case ".mov":
          divContent = videoContent
          break
        case ".wmv":
          divContent = videoContent
          break
        case ".avi":
          divContent = videoContent
          break
        case ".flv":
          divContent = videoContent
          break
        default:
          divContent = null
      }
    }

    return divContent
  }

  return (
    <div
      id="homeVideoSection"
      className={`${styles?.video} ${cx("containerMaxWidth")}`}
    >
      {heading && (
        <div className={`${styles?.video__heading} ${className && className}`}>
          <Heading
            {...heading}
            button={{
              ...heading?.button,
              action: () => window.open(heading?.button?.url, "_blank"),
            }}
            key={`heading_` + Math.random()}
          />
        </div>
      )}
      <div
        className={`${styles.video__videoContainer} ${
          color ? colorStyles[color] : styles?.blackBackground
        }`}
      >
        {video && getmediaExt()}
      </div>
    </div>
  )
}

export default Video
