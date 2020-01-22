import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import compress from "../../content/assets/html-one/compress.png"
import fileTree from "../../content/assets/html-one/file-tree.png"
import initialContent from "../../content/assets/html-one/initial-content.png"
import instructionTable from "../../content/assets/html-one/instruction-table.png"
import semanticHtml from "../../content/assets/html-one/semantic-html.png"
import splitContent from "../../content/assets/html-one/split-content.png"

const listStyling = {
    marginLeft: '2rem'
}

const noMarginBottom = {
    marginBottom: 0
}

class HtmlCheckpointOne extends React.Component {
  render() {
    
    return (
      <Layout location={'/html-checkpoint-one/'} title={'HLTH 320 Lab'}>
        <SEO title="HTML Checkpoint #1" />
        <h1>HTML Site Checkpoint #1</h1>
        <p>To be completed as part of <Link to='/week-3/'>week 3's</Link> lab.</p>
        
        <hr/>
        <h3>I. Set Up Your Content Files</h3>
        <ol style={listStyling}>
            <li>Open Dreamweaver (Finder > Applications > Dreamweaver)</li>
            <li>Create a new site (Site > New Site)
                <ul>
                    <li>Name it yourname-site-checkpoint1 (e.g., gary-katz-site-checkpoint1)</li>
                    <li>Use your full name</li>
                    <li>Use hyphens (-) and not slashes (/). Slashes mean something to computers when dealing with folders.</li>
                </ul>
            </li>
            <li>Create a new folder inside of yourname-site-checkpoint1
                <ul>
                    <li>Name it templates</li>
                </ul>
            </li>
            <li>Create a new file
                <ul>
                    <li>Name it content.txt</li>
                    <li>Save it in the templates folder.</li>
                </ul>
            </li>
            <li>Type the following template components in content.txt, including the line breaks.
                <ul>
                    <li>Use proper grammar and spelling.</li>
                    <li>Save content.txt when you are done.</li>
                </ul>
            </li>
        </ol>
        <img src={instructionTable} alt="initial table"/>

        <p>Here is what it looks like in my text editor:</p>
        <img src={initialContent} alt="hlth320" style={noMarginBottom} />

        <h3>II. Create header.txt, nav.txt, main.txt, footer.txt, and aside.txt inside of the templates folder (/templates/)</h3>
        <img src={fileTree} alt="hlth320" style={noMarginBottom} />

        <h3>III. Copy the appropriate content from content.txt into its corresponding partial file.</h3>
        <img src={splitContent} alt="hlth320" style={noMarginBottom} />

        <h3>IV. Add semantic HTML markup.</h3>
        <img src={semanticHtml} alt="hlth320" style={noMarginBottom} />

        <h3>V. Compress yourname-site-checkpoint1</h3>
        <img src={compress} alt="hlth320" style={noMarginBottom} />

        <h3>VI. Submit yourname-site-checkpoint1.zip to PolyLearn within your <i>lab section</i>.</h3>
        
      </Layout>
    )
  }
}

export default HtmlCheckpointOne