import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

class FontsAndColors extends React.Component {
  render() {
    return (
      <Layout location={"/fonts-and-colors/"} title={"HLTH 320 Lab"}>
        <SEO title="Fonts and Colors" />
        <h1>Fonts and Color Pallette Resources</h1>
        <div style={wrapperStyling}>
          <iframe
            style={iframeStyle}
            title="Graphic Design Tutorial: Choosing fonts"
            src="https://www.youtube.com/embed/Xwahw7mdeXQ"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div style={wrapperStyling}>
          <iframe
            style={iframeStyle}
            title="How To Choose The Right Font For You Web Site"
            src="https://www.youtube.com/embed/I51ZY1QGPCs"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div style={wrapperStyling}>
          <iframe
            style={iframeStyle}
            title="Graphic Design Tutorial: Basic colour palettes"
            src="https://www.youtube.com/embed/qoHhL5Xksmw"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <h4>
          <a
            href="https://coolors.co/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Color Palette Generator
          </a>
        </h4>

        <h4>
          <a
            href="https://fonts.google.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Fonts
          </a>{" "}
          and a{" "}
          <a
            href="https://developers.google.com/fonts/docs/getting_started"
            target="_blank"
            rel="noopener noreferrer"
          >
            getting started guide
          </a>
          .
        </h4>
      </Layout>
    )
  }
}

export default FontsAndColors

const wrapperStyling = {
  position: "relative",
  paddingBottom: "56.25%",
  paddingTop: "25px",
  height: 0,
  marginBottom: "1.5rem",
}

const iframeStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
}
