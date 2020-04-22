import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import activePage from "../../content/assets/final-html/active-page.png"

class FinalHTMLSite extends React.Component {
  render() {
    return (
      <Layout location={"/final-html-site/"} title={"HLTH 320 Lab"}>
        <SEO title="Final HTML Site Assignment" />
        <h1>Final HTML Site Assignment</h1>
        <p>
          To be submitted to PolyLearn by 11:59PM on Wednesday of Finals Week
          (3/18/20).
        </p>
        <hr />

        <h2>Assignment Overview</h2>

        <p>
          This assignment will serve as a culmination of all of the web
          development work that you have been doing all quarter and should act
          as a professional portfolio to showcase you and your work. Earlier in
          the quarter, we had some fun with some crazy colors, gifs, and images
          but this should appear as a <strong>professional</strong> portfolio.
          That's not to say that you can't have a unique flavor and style to
          your website, but gifs of cat's fighting with lightsabers is not an
          appropriate background for your header.
        </p>

        <p>
          <a
            href="https://web.calpoly.edu/~brubenst/resume.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            This site
          </a>{" "}
          is a basic example of a portfolio site and was created as an example
          for this assignment several years ago.
        </p>

        <p>
          Overall, this assignment is an opportunity to show what you have been
          learning throughout the quarter and will provide you with an online
          portfolio that you can show to potential employers to showcase your
          digital literacy and technical skills.
        </p>

        <h3>
          The requirements for this assignment are fairly loose but your project
          must:
        </h3>
        <ul>
          <li>Appear professional</li>
          <li>Have consistent formatting from page to page</li>
          <li>
            Have working navigation on all pages (all links work and go to their
            intended pages)
          </li>
          <li>Hit all points on the checklist below</li>
        </ul>

        <h3>Opportunities for Extra Credit:</h3>
        <ul>
          <li>Incorporate something you found on CodePen.</li>
          <li>
            <span style={{ textDecoration: "line-through" }}>
              Upload this project to GitHub to have it hosted online for free.
            </span>
            <ul>
              <li>
                Hosting this project on GitHub would add nother layer of
                complexity that I think would be a very significant time sink.
                If you would like to do this feel free, but I don't think I can
                reasonably offer this as extra credit without at least
                attempting it with the class. For this reason, I am not offering
                this as extra credit.
              </li>
            </ul>
          </li>
        </ul>

        <hr />

        <h2>Checklist</h2>

        <ol>
          <li>
            <strong>
              VALIDATION: Does the HTML on your site validate on{" "}
              <a
                href="https://validator.w3.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                validator.w3.org
              </a>{" "}
              with no errors? Note: warnings are ok, but errors are not.
            </strong>
          </li>

          <li>
            <strong>
              FILE STRUCTURE: Does the folder and file structure match the
              structure outlined in the attached screenshot?
            </strong>

            <ul>
              <li>
                All CSS files should be in a folder/subdirectory named "css"
              </li>
              <li>
                All JavaScript files, if you have any, should be in a
                folder/subdirectory named "js"
              </li>
              <li>
                All image files, if you have any, should be in a
                folder/subdirectory named "images"
              </li>
              <li>
                All HTML files should be in the parent directory named
                "firstname-lastname-site-final"
              </li>
            </ul>
          </li>
          <li>
            <strong>
              CUSTOM STYLE: Is your site customized beyond the provided
              'Normalize' and Bootstrap theme with fonts, colors, and/or images?
            </strong>
          </li>

          <li>
            <strong>
              CONSISTENCY: Is the content grammatically sound? Is the content
              consistent?
            </strong>

            <ul>
              <li>
                For example, if you use hyphens to indicate location, then you
                should always use hyphens to indicate location as follows:
                <ul>
                  <li>
                    In-n-Out Burger <span style={{ color: "green" }}>–</span>{" "}
                    San Luis Obispo
                  </li>
                  <li>
                    Pita Pit <span style={{ color: "green" }}>–</span> San Luis
                    Obispo
                  </li>
                  <li>
                    The Central Roast <span style={{ color: "red" }}>(</span>
                    Pismo Beach<span style={{ color: "red" }}>)</span>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <li>
            <strong>
              CHANGE ME LINKS: Did you update ChangeMe1 and ChangeMe2 in the nav
              to link to something? The displayed text should accurately
              describe and reflect where those links point as well so a user
              knows where they will end up if they click.
            </strong>

            <ul>
              <li>
                At least one of the links should lead to a standalone page you
                create that matches the rest of the site, like
                calpoly.edu/~brubenst/portfolio.html or
                calpoly.edu/~brubenst/social-media.html.
              </li>
              <li>
                The other link can point to an external site that features you
                or is somehow relevant to you. It should be obvious why it is a
                link in your main navigation.
              </li>
              <li>
                Ensure all of your site's pages have the same navigation, and
                that the links point to the correct places.
              </li>
            </ul>
          </li>

          <li>
            <strong>
              "YOU ARE HERE" ACTIVE PAGE INDICATOR: Did you add a class and
              style that visually indicates which page the visitor is viewing.
            </strong>

            <ul>
              <li>
                The screenshot below is an example that demonstrates one
                approach to providing a visual indication.
              </li>
              <img src={activePage} style={imgShadow} alt="activePage" />
              <small>
                The navigation at the top provides a visual indication about the
                active page to the visitor: the yellow background indicates that
                this is the research page.
              </small>
            </ul>
          </li>

          <li>
            <strong>
              SUBMISSION FOR GRADING: Did you submit your files to PolyLearn?
              This is the version of your site that I will grade.
            </strong>
            <ul>
              <li>
                Make sure that you are submitting one compressed folder
                following the 'firstname-lastname-site-final' naming convention
              </li>
            </ul>
          </li>

          <li>
            <strong>EXTRA CREDIT OPPORTUNITIES:</strong>
            <ul>
              <li style={{ textDecoration: "line-through" }}>
                Have you published your website to GitHub?{" "}
              </li>
              <li>
                Did you incorporate something you found on CodePen?
                <ul>
                  <li>
                    This can be a slideshow, tabs, neat effect, etc. Make sure
                    it works with your website; you will have to modify its code
                    to match your website. Explore!
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ol>

        <hr />

        <h2>Helpful Resources</h2>

        <Link to="/fonts-and-colors/">
          <h4>Fonts and Color Pallette Resources</h4>
        </Link>

        <Link to="/validating-site/">
          <h4>How to Validate Your Site</h4>
        </Link>

        <h4 style={{ textDecoration: "line-through" }}>
          How to submit your site to Github
        </h4>
      </Layout>
    )
  }
}

const imgShadow = {
  boxShadow: "0px 5px 15px 0px rgba(3,86,66,0.5)",
}

export default FinalHTMLSite
