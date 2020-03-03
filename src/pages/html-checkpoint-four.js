import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class HtmlCheckpointTwo extends React.Component {
  render() {
    return (
      <Layout location={"/html-checkpoint-four/"} title={"HLTH 320 Lab"}>
        <SEO title="HTML Checkpoint #4" />
        <h1>HTML Site Checkpoint #4</h1>
        <p>
          To be completed as part of <Link to="/week-9/">week 9's</Link> lab.
        </p>

        <p>We will wrap up as a class and do an example together.</p>

        <hr />
        <h2>Assignment Overview</h2>
        <h3>
          I. Create a copy of your content files from Site Checkpoint 3 and name
          it your-name-site-checkpoint4 (e.g., gary-katz-site-checkpoint4)
        </h3>
        <p>Make sure to use 'firstname-lastname-site-checkpoint4' formatting</p>

        <h3>
          II. Go to{" "}
          <a
            href="https://getbootstrap.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bootsrap's site
          </a>{" "}
          and click on the "Get Started" button.
        </h3>

        <h3>
          III. Follow the intructions on this page to include the bootstrap
          stylesheet into your own html files
        </h3>
        <h3>
          IV. Implement the following Bootstrap components somewhere on your
          site.
        </h3>
        <p>Style them uniquely and give them your own flair.</p>
        <ul>
          <li>
            <a
              href="https://getbootstrap.com/docs/4.4/components/buttons/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Button
            </a>
          </li>
          <li>
            <a
              href="https://getbootstrap.com/docs/4.4/components/navs/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Nav
            </a>
          </li>
          <li>
            <a
              href="https://getbootstrap.com/docs/4.4/components/card/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Card
            </a>
          </li>

          <li>
            <p>Optional:</p>
            <a
              href="https://getbootstrap.com/docs/4.4/components/carousel/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Carousel
            </a>
            <p>
              Note: this will require adding Bootstrap's Javascript Code to your
              site as well.
            </p>
          </li>
        </ul>

        <h3>V. Compress and submit your site files to PolyLearn</h3>

        <h3>
          VI. Create a{" "}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          account and submit the URL of your profile to PolyLearn
        </h3>
      </Layout>
    )
  }
}

export default HtmlCheckpointTwo
