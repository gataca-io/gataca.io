import * as React from "react"
import cx from "classnames"
import { images } from "../../../images/images"

export interface IStrapiAuthorProps {
  author: string
  className?: string
}

const teamImages = [
  images.ceoTeam,
  images.ctoTeam,
  images.csoTeam,
  images.businessTeam,
  images.backendTeam,
  images.frontend1Team,
  images.designTeam,
  images.itManagerTeam,
  images.marketingTeam,
  images.frontend2Team,
]

const StrapiAuthor: React.FC<IStrapiAuthorProps> = props => {
  const { author, className } = props

  let authorName = ""
  let authorRole = ""
  let authorImage = ""
  let authorLinkedInURL = ""

  const updateAuthorData = () => {
    if (author === "Irene") {
      return (
        (authorName = "Irene Hernández"),
        (authorRole = "CEO"),
        (authorImage = teamImages[0]),
        (authorLinkedInURL = "https://www.linkedin.com/in/samuelgoes/")
      )
    } else if (author === "Samuel") {
      return (
        (authorName = "Samuel Gómez"),
        (authorRole = "CTO"),
        (authorImage = teamImages[1]),
        (authorLinkedInURL = "https://www.linkedin.com/in/samuelgoes/")
      )
    } else if (author === "José") {
      return (
        (authorName = "José San Juan"),
        (authorRole = "CSO"),
        (authorImage = teamImages[2]),
        (authorLinkedInURL = "https://www.linkedin.com/in/jsanjup/")
      )
    } else if (author === "Chiara") {
      return (
        (authorName = "Chiara Casoni"),
        (authorRole = "Business Development & Partnerships"),
        (authorImage = teamImages[3]),
        (authorLinkedInURL = "https://www.linkedin.com/in/chiaracasoni/")
      )
    } else if (author === "Daniel") {
      return (
        (authorName = "Daniel Moledo"),
        (authorRole = "Backend Developer"),
        (authorImage = teamImages[4]),
        (authorLinkedInURL =
          "https://www.linkedin.com/in/daniel-moledo-garcia/")
      )
    } else if (author === "Ángela") {
      return (
        (authorName = "Ángela Benavente"),
        (authorRole = "Frontend Developer"),
        (authorImage = teamImages[5]),
        (authorLinkedInURL =
          "https://www.linkedin.com/in/angela-benavente-almazan/")
      )
    } else if (author === "Tefy") {
      return (
        (authorName = "Estefanía Zambrano"),
        (authorRole = "UX/UI Designer"),
        (authorImage = teamImages[6]),
        (authorLinkedInURL = "https://www.linkedin.com/in/tefy-zambrano/")
      )
    } else if (author === "Jorge") {
      return (
        (authorName = "Jorge Navas"),
        (authorRole = "IT Manager"),
        (authorImage = teamImages[7]),
        (authorLinkedInURL =
          "https://www.linkedin.com/in/jorge-navas-d%C3%ADaz-8b422643/")
      )
    } else if (author === "Esther") {
      return (
        (authorName = "Esther Saurí"),
        (authorRole = "Digital Marketing Specialist"),
        (authorImage = teamImages[8]),
        (authorLinkedInURL =
          "https://www.linkedin.com/in/esther-sauri-carbonell/")
      )
    } else if (author === "Mayra") {
      return (
        (authorName = "Mayra Amador"),
        (authorRole = "Frontend Developer"),
        (authorImage = teamImages[9]),
        (authorLinkedInURL =
          "https://www.linkedin.com/in/mayra-amador-zapata-/")
      )
    }
  }

  updateAuthorData()

  return (
    <div className={className}>
      <div>
        <img src={authorImage}></img>
      </div>
      <div>
        <a target="_blank" href={authorLinkedInURL}>
          <h6 className={cx("heading6")}>{authorName}</h6>
        </a>
        <p className={cx("bodyRegularSM")}>{authorRole}</p>
      </div>
    </div>
  )
}

export default StrapiAuthor
