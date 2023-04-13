import * as React from "react"
import cx from "classnames"
import * as styles from "./fifthSection.module.scss"
import { videos } from "../../../../../videos/videos"
import { images } from "../../../../../images/images"

export type ISectionProps = {
  title: string
  description: string
}

const FifthSection: React.FC<ISectionProps> = props => {
  const { title, description } = props
  let video: HTMLVideoElement | null | undefined

  React.useEffect(() => {
    video = document
      ? (document?.getElementById("video") as HTMLVideoElement)
      : undefined
  })
  return (
    <section className={`${styles?.videoSection} ${cx("containerMaxWidth")}`}>
      <div className={styles.videoSection__header}>
        <h3 className={cx("heading3 marginBottom12")}>{title}</h3>
        <p className={cx("bodyRegularXL neutral700")}>{description}</p>
      </div>
      <div className={styles.videoSection__videoContainer}>
        <video
          id="video"
          poster={images.videoThumbnail}
          onClick={() => (video ? (video.controls = true) : {})}
        >
          <source src={videos.gatacaVideo} type="video/mp4" />
        </video>
      </div>
    </section>
  )
}

export default FifthSection
