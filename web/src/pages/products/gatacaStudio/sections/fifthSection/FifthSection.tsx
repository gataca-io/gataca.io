import * as React from "react"
import cx from "classnames"
import * as styles from "./fifthSection.module.scss"
import { images } from "../../../../../images/images"
import { videos } from "../../../../../videos/videos"

export type ISectionProps = {
  title: string
  subTitle: string
  description: string
}

const ThirdSection: React.FC<ISectionProps> = props => {
  const { title, subTitle, description } = props
  let video: HTMLVideoElement | null | undefined

  React.useEffect(() => {
    video = document
      ? (document?.getElementById("video") as HTMLVideoElement)
      : undefined
  })
  return (
    <section className={`${styles?.fifthSection} ${cx("containerMaxWidth")}`}>
      <div className={styles.fifthSection__header}>
        <h6 className={cx("heading6 marginBottom12 neutral700")}>{title}</h6>
        <h3
          className={`${styles?.description} ${cx("heading3 marginBottom12")}`}
          dangerouslySetInnerHTML={{ __html: subTitle }}
        ></h3>
        <p className={cx("bodyRegularXL neutral700")}>{description}</p>
      </div>
      <div className={styles.fifthSection__videoContainer}>
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

export default ThirdSection
