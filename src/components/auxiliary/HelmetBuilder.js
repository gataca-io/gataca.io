import Helmet from "react-helmet"
import React from "react"

function buildMetaTitle(title) {
  if (!!title) {
    return <title>{title}</title>
  } else {
    return null;
  }
}

function buildMetaDescription(description) {
  if (!!description) {
    return <meta name="description" content={description}/>
  } else {
    return null;
  }
}

export const BuildHelmet = ({ metas }) => {
  if (!!metas) {
    return <Helmet>
      {buildMetaTitle(metas.title)}
      {buildMetaDescription(metas.description)}
      
      {/*FACEBOOK*/}
      {/*      <meta property="og:url"                content="http://www.nytimes.com/2015/02/19/arts/international/when-great-minds-dont-think-alike.html" />
      <meta property="og:type"               content="article" />
      <meta property="og:title"              content="When Great Minds Don’t Think Alike" />
      <meta property="og:description"        content="How much does culture influence creative thinking?" />
      <meta property="og:image"              content="http://static01.nyt.com/images/2015/02/19/arts/international/19iht-btnumbers19A/19iht-btnumbers19A-facebookJumbo-v2.jpg" />
      <meta property="og:image:width"              content="pixels" /> CHANGE AMMOUT
      <meta property="og:image:height"              content="pixels" /> CHANGE AMMOUT
      <meta property="og:image:type"              content="image/jpeg | image/gif | image/png" /> CHANGE AMMOUT
      */}
      
      
      {/*TWITTER*/}
      
      {/*      <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:site" content="@nytimes"/>
          <meta name="twitter:creator" content="@SarahMaslinNir"/>
            <meta name="twitter:title" content="Parade of Fans for Houston’s Funeral"/>
              <meta name="twitter:description" content="NEWARK - The guest list and parade of limousines with celebrities emerging from them seemed more suited to a red carpet event in Hollywood or New York than than a gritty stretch of Sussex Avenue near the former site of the James M. Baxter Terrace public housing project here."/>
                <meta name="twitter:image" content="http://graphics8.nytimes.com/images/2012/02/19/us/19whitney-span/19whitney-span-articleLarge.jpg"/>*/}
      
      
      {/*LINKED IN*/}
      {/*      <meta property="og:title" content="Title of the article"/>
<meta property="og:image" content="//media.example.com/ 1234567.jpg"/>
      <meta property="og:description" content="Description that will show in the preview"/>
<meta property="og:url" content="//www.example.com/URL of the article" />  */}
    </Helmet>
  } else {
    return null
  }
}
