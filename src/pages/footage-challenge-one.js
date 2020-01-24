import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const listStyling = {
  marginLeft: "2rem",
}

class FootageChallengeOne extends React.Component {
  render() {
    return (
      <Layout location={"/html-checkpoint-one/"} title={"HLTH 320 Lab"}>
        <SEO title="HTML Checkpoint #1" />
        <h1>Footage Challenge #1 - Welcome to Cal Poly</h1>
        <p>
          To be completed before <Link to="/week-6/">week 6's</Link> lab.
        </p>
        <hr />
        <p>
          For your first footage challenge, you must record 30 seconds of video
          footage that you think fits the theme of "Welcome to Cal Poly." The
          footage will be 'B-roll' or stock footage. Here are some parameters:
        </p>
        <ul style={listStyling}>
          <li>
            Your footage should be at least 30 seconds long and capture the
            scene of "Welcome to Cal Poly."
          </li>
          <li>
            Your goal is to simply capture whatever is going on during those 30
            seconds.
            <ul>
              <li>No script, actors, or dialogue should be included.</li>
              <li>
                It is ok if your footage includes passersby talking; this is
                called ambient sound in filmmaking or background noise in
                everyday life.
              </li>
            </ul>
          </li>
          <li>
            Your footage should be uninterrupted:
            <ul>
              <li>Press record and let the camera roll.</li>
              <li>Don’t pause, stop, or cut the recording.</li>
              <li>
                Don’t edit your recording. Just let the camera record; we will
                use the raw footage later.
              </li>
            </ul>
          </li>
        </ul>
        <p>
          Submit your video file via PolyLearn. You may have to compress the
          footage to a .zip file; we will test this in lab.
        </p>
      </Layout>
    )
  }
}

export default FootageChallengeOne
