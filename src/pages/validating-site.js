import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Errors from "../../content/assets/validating-sites/errors.png"
import NoErrors from "../../content/assets/validating-sites/no-errors.png"
import PageSourceHighlighted from "../../content/assets/validating-sites/page-source-highlighted.png"
import PageSourcePasted from "../../content/assets/validating-sites/page-source-pasted.png"
import PageSource from "../../content/assets/validating-sites/page-source.png"
import ViewPageSource from "../../content/assets/validating-sites/view-page-source.png"

const imgShadow = {
  boxShadow: "0px 5px 15px 0px rgba(3,86,66,0.5)",
}

class ValidatingSite extends React.Component {
  render() {
    return (
      <Layout location={"/validating Site/"} title={"HLTH 320 Lab"}>
        <SEO title="How to Validate Your Site" />
        <h1>How to Validate Your Site</h1>
        <p>
          Validation is a vital part of web development. The most important
          reasons being that it ensures that 1) your website is ADA accessible
          and 2) that search engines will 'like' your site.
        </p>
        <p>
          I am going to run through how to validate your final HTML sites. I am
          attaching screenshots in hopes that they give some visual
          clarification.
        </p>
        <hr />

        <ol>
          <li>
            <p>
              Open the front page of your HTML site and right click anywhere on
              some blank space on the page and select the 'View Page Source'
              option from the list that pops up.
            </p>
            <img src={ViewPageSource} alt="hlth320" style={imgShadow} />
            <p>
              Note that I am using Google Chrome for these instructions and
              these same options may not appear in other browsers. Due to Google
              Chrome being a free and easily accessable tool, I will not be
              writing specific instructions for other browsers.
            </p>

            <hr />
          </li>

          <li>
            <p>
              You will be taken to a screen that contains the code for your site
              that will look something like this:
            </p>
            <img src={PageSource} alt="hlth320" style={imgShadow} />
            <hr />
          </li>

          <li>
            <p>
              Highlight all of the code that you see on this page and copy it.
              (`Command + C` for Macs / `Ctrl + C` for Windows)
            </p>
            <img src={PageSourceHighlighted} alt="hlth320" style={imgShadow} />
            <hr />
          </li>

          <li>
            <p>
              Navigate to{" "}
              <a
                href="https://validator.w3.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                validator.w3.org
              </a>{" "}
              and:
            </p>
            <ol>
              <li>
                Click the <strong>Validate by Direct Input</strong> tab.
              </li>
              <li>
                Paste your code from the previous step into the text field.
              </li>
              <li>
                Click the <strong>Check</strong> button to run the validation
                checker.
              </li>
            </ol>
            <img src={PageSourcePasted} alt="hlth320" style={imgShadow} />
            <hr />
          </li>

          <li>
            <p>
              You will be taken to a results page. This is the readout of all of
              the <span style={{ color: "#caca06" }}>Warnings</span> and{" "}
              <span style={{ color: "red" }}>Errors</span> on your site.
            </p>
            <img src={Errors} alt="hlth320" style={imgShadow} />
            <p>
              <span style={{ color: "#caca06" }}>Warnings</span> are fine to
              have but <span style={{ color: "red" }}>Errors</span> need to be
              taken care of in order for your site to validate properly and to
              avoid a point deduction.
            </p>
            <p>
              You can handle these errors by copying the error message straight
              into google and seeing what search results come up. This will give
              you clues on how to solve the problem but it will require problem
              solving beyond just copying and pasting.
            </p>
            <hr />
          </li>

          <li>
            <p>
              Fix your code, and then rinse and repeat steps 1-5 in order to
              test your updated code to make sure you are handling your errors.
            </p>
            <hr />
          </li>

          <li>
            <p>Congratulations! Your code is now error free!</p>
            <img src={NoErrors} alt="hlth320" style={imgShadow} />
            <p>
              Note that if you continue to make changes to your site, you will
              need to retest your code within this tool to ensure you are not
              getting new errors. For this reason, I suggest leaving this code
              validating process until you are finished working on your site and
              you are ready to submit it to PolyLearn.
            </p>
          </li>
        </ol>
      </Layout>
    )
  }
}

export default ValidatingSite
