import * as React from "react"
import cx from "classnames"
import * as styles from "./fifthSection.module.scss"
import { videos } from "../../../../videos/videos"
import { images } from "../../../../images/images"

export type ISectionProps = {
  title: string
  description: string
}

const ThirdSection: React.FC<ISectionProps> = props => {
  const { title, description } = props
  const video = document.getElementById("video")

  return (
    <section className={`${styles?.fifthSection} ${cx("containerMaxWidth")}`}>
      <div className={styles.fifthSection__videoContainer}>
        <video
          id="video"
          poster={images.videoThumbnail}
          onClick={() => (video.controls = true)}
        >
          <source src={videos.gatacaVideo} type="video/mp4" />
        </video>
      </div>
    </section>
  )
}

export default ThirdSection
