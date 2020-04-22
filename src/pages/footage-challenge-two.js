import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const listStyling = {
  marginLeft: "2rem",
}

class FootageChallengeTwo extends React.Component {
  render() {
    return (
      <Layout location={"/html-checkpoint-one/"} title={"HLTH 320 Lab"}>
        <SEO title="Footage Challenge #2" />
        <h1>Footage Challenge #2 - Lighten Up</h1>
        <p>
          To be completed before <Link to="/week-10/">week 10's</Link> lab.
        </p>
        <hr />

        <p>
          Your second footage challenge will focus on lighting. You will use
          your camera to record two people — a roommate(s), friend(s), family
          member(s) — answering a question. Each interview should be between 15
          and 30 seconds long and you will record them in different types of
          lighting. A list of parameters and options is below.
        </p>

        <h2>Interviewees</h2>
        <p>
          You will interview two different people. Your interviewees can be
          anybody — roommates, friends, family — except you.
        </p>

        <ul style={listStyling}>
          <li>
            You need to be the camera person, so you cannot answer the questions
            yourself.
          </li>
          <li>
            Let your subjects know that this video will be watched in class, but
            that it will not be published anywhere without their permission.
          </li>
        </ul>

        <h2>Questions</h2>
        <p>
          You will ask each interviewee to answer one of the following
          questions:
        </p>

        <ul style={listStyling}>
          <li>
            What would your "I'm super rich and can do something ridiculous"
            purchase be if you win a $1.5 billion in the lottery?
          </li>
          <li>
            What superhero power would you want to wake up with tomorrow? Why?
          </li>
        </ul>

        <h2>Time Limit</h2>
        <p>
          Your interviewees will provide a short answer to the question you (or
          they) choose from above.
        </p>

        <ul style={listStyling}>
          <li>
            Each interview will ideally be between 15 and 30 seconds long.
          </li>
          <li>
            The time limit is a soft limit; it is ok if their answer goes over
            that time.
          </li>
        </ul>

        <h2>Lighting</h2>
        <p>
          You will conduct the two interviews in different light settings. For
          example, if your first interview is conducted outside at nighttime,
          the second interview should be conducted either outdoors during the
          day or indoors at night.
        </p>

        <p>
          Below are some possible lighting variables. Feel free to mix and match
          variables:
        </p>

        <ul style={listStyling}>
          <li>Outdoors vs Indoors</li>
          <li>Daytime vs Nighttime</li>
          <li>Overhead lighting vs the flash / light on your phone / camera</li>
          <li>
            Household lighting vs big box store lighting (like inside of Walmart
            or Target)
          </li>
          <li>In shadows vs in direct light</li>
          <li>
            Light overhead (like the sun) vs light behind (like indoors in front
            of a window)
          </li>
        </ul>

        <h2>Editing</h2>
        <p>Your footage should be uninterrupted:</p>

        <ul style={listStyling}>
          <li>Press record and let the camera roll.</li>
          <li>Don't pause, stop, or cut the recording.</li>
          <li>
            Don't edit your recording. Just let the camera record; we will view
            the raw footage during class to examine how lighting can affect the
            footage.
          </li>
        </ul>

        <h2>File Name &amp; Submission</h2>

        <p>
          Both of your videos should be contained within one folder which will
          then be compressed and submitted to PolyLearn. Make sure you name your
          folder <strong>firstname-lastname-fc2</strong>.
        </p>

        <p>
          Submit your compressed folder via PolyLearn. You will have to compress
          the footage to a .zip file. This should be submitted prior to Week
          10's lab.
        </p>
      </Layout>
    )
  }
}

export default FootageChallengeTwo
