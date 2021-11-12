import React, { Fragment } from "react"

export default function SafeImage(props) {
  // console.log(props.media)
  const imageUrl = props.media ? <img src={props.media.source_url}/> : <img src="https://picsum.photos/1000/1200"/>
  return imageUrl;
}
