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
        <SEO title="HTML Checkpoint #1" />
        <h1>HTML Site Checkpoint #2</h1>
        <p>
          To be completed as part of <Link to="/week-4/">week 4's</Link> lab. We
          will be completing this together as a class so the instructions here
          are sparse.
        </p>

        <h3>
          I. Create a copy of your content files from Site Checkpoint 1 and name
          it your-name-site-checkpoint2 (e.g., gary-katz-site-checkpoint2)
        </h3>
        <p>Make sure to use 'firstname-lastname-site-checkpoint2' formatting</p>

        <h3>II. Create two new files within this site folder.</h3>
        <ul>
          <li>index.html</li>
          <li>resume.html</li>
        </ul>

        <h3>
          III. Copy and paste the CodePen exercise that we just completed as a
          class into the index.html file.
        </h3>

        <h3>
          IV. Go back to CodePen, remove all of the content from between the
          &lt;body&gt;&lt;/body&gt; and copy/paste all of the content from your
          resume between these tags.
        </h3>

        <h3>V. Add contextual html tags to all of your content!</h3>
        <p>
          I will do an example on the projector in lab so feel free to follow
          along.
        </p>

        <p>
          Below are some html elements that might be useful. This is not an
          exhaustive list of course and if you want to use others please feel
          free.
        </p>
        <ul>
          <li>&lt;h1&gt;&lt;/h1&gt;</li>
          <li>&lt;h2&gt;&lt;/h2&gt;</li>
          <li>&lt;h3&gt;&lt;/h3&gt;</li>
          <li>&lt;p&gt;&lt;/p&gt;</li>
          <li>&lt;ul&gt;&lt;/ul&gt;</li>
          <li>&lt;li&gt;&lt;/li&gt;</li>
        </ul>

        <h3>
          VI. Fill the resume.html file with the content from this most recent
          CodePen.
        </h3>

        <h3>
          VII. Test your pages in the browser and make sure your 'home' and
          'resume' navigation links work on both pages.
        </h3>

        <h3>
          VIII. Save, compress and submit your folder to the <i>lab section</i>{" "}
          of PolyLearn!
        </h3>

        <hr />

        <h3>Reminders:</h3>
        <ul>
          <li>
            Ensure your folders contain the following files:
            <ul>
              <li>index.html</li>
              <li>resume.html</li>
            </ul>
          </li>
          <li>Follow the proper firstname-lastname-site-checkpoint2</li>
          <li>
            Make sure your 'home' and 'resume' navigation links work on both
            pages
          </li>
        </ul>

        <hr />
      </Layout>
    )
  }
}

export default HtmlCheckpointTwo
