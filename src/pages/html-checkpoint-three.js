import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

// import compress from "../../content/assets/html-one/compress.png"
// import fileTree from "../../content/assets/html-one/file-tree.png"
// import initialContent from "../../content/assets/html-one/initial-content.png"
// import instructionTable from "../../content/assets/html-one/instruction-table.png"
// import semanticHtml from "../../content/assets/html-one/semantic-html.png"
// import siteExample from "../../content/assets/html-one/site-example.png"
// import splitContent from "../../content/assets/html-one/split-content.png"

// const listStyling = {
//   marginLeft: "2rem",
// }

// const noMarginBottom = {
//   marginBottom: 0,
// }

class HtmlCheckpointTwo extends React.Component {
  render() {
    return (
      <Layout location={"/html-checkpoint-two/"} title={"HLTH 320 Lab"}>
        <SEO title="HTML Checkpoint #3" />
        <h1>HTML Site Checkpoint #3</h1>
        <p>
          To be completed as part of <Link to="/week-5/">week 5's</Link> lab.
        </p>
        <p>
          I will go through the setup of this assignment with the class and
          complete the first bit with everyone.
        </p>

        <p>
          I will give the class some time to work without an example but I will
          be coming around to help individually. If you finish the requirements
          of the assignment early, get creative and add more styles or help your
          neighbors.
        </p>

        <p>We will wrap up as a class and do an example together.</p>

        <hr />
        <h2>Assignment Overview</h2>
        <h3>
          I. Create a copy of your content files from Site Checkpoint 2 and name
          it your-name-site-checkpoint3 (e.g., gary-katz-site-checkpoint3)
        </h3>
        <p>Make sure to use 'firstname-lastname-site-checkpoint3' formatting</p>
        <h3>II. Create one new folder named "css" within this site folder.</h3>
        <h3>III. Create two new documents within this css folder</h3>
        <ul>
          <li>normalize.css</li>
          <li>styles.css</li>
        </ul>
        <h3>
          IV. Go to{" "}
          <a
            href="https://necolas.github.io/normalize.css/"
            target="_blank"
            rel="noopener noreferrer"
          >
            this website
          </a>{" "}
          and click on the big "Download" button.
        </h3>
        <p>
          This is a CSS reset file, it is some boilerplate code that will help
          us to make sure we are starting with a "blank canvas" while writing
          our own CSS.
        </p>
        <p>
          Copy and paste the contents of this page into your "normalize.css"
          file.
        </p>
        <h3>
          V.{" "}
          <a
            href="https://www.w3schools.com/css/css_howto.asp"
            target="_blank"
            rel="noopener noreferrer"
          >
            Import
          </a>{" "}
          both of your newly created stylesheets into the head of your
          "index.html" and "resume.html" pages
        </h3>
        <h3>
          VI. Use your "styles.css" file to add custom styling for this
          assignment.
        </h3>
        <p>
          Test your changes in the browser by dragging and dropping your html
          file into the search bar.
        </p>
        <p>
          Make sure you are saving your css files and refreshing your browser to
          view your changes!
        </p>
        <h3>VIII. Compress and submit your site files!</h3>
        <hr />
        <h2>Assignment Requirements</h2>

        <ol>
          <li>
            New backgrounds for these major elements:
            <ul>
              <li>header</li>
              <li>nav</li>
              <li>main</li>
              <li>aside</li>
              <li>footer</li>
              <li>body</li>
            </ul>
            <p>
              Obnoxious/Loud/Clown colors are encouraged. These are styles that
              we will change later on in the quarter so have fun and pick styles
              that are "out there."
            </p>
          </li>
          <li>At least 1 new CSS rule that changes the font of an element.</li>
          <li>
            Have your &lt;main&gt; and &lt;aside&gt; elements positioned side by
            side.
            <p>
              Hint:{" "}
              <a
                href="https://www.w3schools.com/css/css_inline-block.asp"
                target="_blank"
                rel="noopener noreferrer"
              >
                display: inline-block
              </a>{" "}
              and{" "}
              <a
                href="https://www.w3schools.com/cssref/pr_dim_width.asp"
                target="_blank"
                rel="noopener noreferrer"
              >
                width
              </a>{" "}
              will be your friends here
            </p>
          </li>
          <li>
            At least 2 CSS rules based upon a class selection. (You will have to
            add these classes into your html because they do not exist yet.)
          </li>
          <li>
            At least 1 new CSS rule based on a{" "}
            <a
              href="https://www.w3schools.com/css/css3_mediaqueries_ex.asp"
              target="_blank"
              rel="noopener noreferrer"
            >
              media query
            </a>
            .
          </li>
        </ol>

        <hr />

        <h2>Reminders</h2>
        <ul>
          <li>Follow the proper firstname-lastname-site-checkpoint3</li>
          <li>
            Ensure your folders contain the following files:
            <ul>
              <li>normalize.css</li>
              <li>styles.css</li>
            </ul>
          </li>
          <li>All of your html files should have your stylesheets imported.</li>
        </ul>
        <hr />
      </Layout>
    )
  }
}

export default HtmlCheckpointTwo
