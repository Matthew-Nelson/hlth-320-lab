import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import write1 from "../../content/assets/posting-blogs/write1.png"
import write2 from "../../content/assets/posting-blogs/write2.png"
import writeBlogPost from "../../content/assets/posting-blogs/writeBlogPost.png"
import writtenPost from "../../content/assets/posting-blogs/writtenPost.png"
import redditHighlight from "../../content/assets/posting-blogs/redditHighlight.png"
import linkPopup from "../../content/assets/posting-blogs/linkPopup.png"
import linkPopulation from "../../content/assets/posting-blogs/linkPopulation.png"
import documentTab from "../../content/assets/posting-blogs/documentTab.png"
import tagsAndCats from "../../content/assets/posting-blogs/tagsAndCats.png"
import confirmation from "../../content/assets/posting-blogs/confirmation.png"

const imgShadow = {
  boxShadow: "0px 5px 15px 0px rgba(3,86,66,0.5)",
}

class PostingBlogs extends React.Component {
  render() {
    return (
      <Layout location={"/posting-blogs/"} title={"HLTH 320 Lab"}>
        <SEO title="How to Post New Blog Posts" />
        <h1>How to Post New Blog Posts in Wordpress</h1>
        <p>
          I am going to run through how to add new blog posts to your wordpress
          blogs. I am attaching screenshots in hopes that they give some visual
          instruction as well.
        </p>
        <hr />

        <ol>
          <li>
            <p>
              Navigate to your blog's home page and make sure you are logged in.
              You will see a little button on the top right hand corner that
              says 'Write'. Find it and click on it!
            </p>
            <p>
              It may look a little different based on whether you are at your
              actual blog or within the 'wordpress land' environment. Either of
              these will work.
            </p>
            <img src={write1} alt="hlth320" style={imgShadow} />
            <img src={write2} alt="hlth320" style={imgShadow} />
            <hr />
          </li>

          <li>
            <p>You will be taken to a page that looks like this:</p>
            <img src={writeBlogPost} alt="htlh320" style={imgShadow} />
            <p>
              This is where you will be writing your blog post. I have filled in
              the template with some dummy text for reference:
            </p>
            <img src={writtenPost} alt="hlth320" style={imgShadow} />
          </li>

          <li>
            <p>
              Now we are going to add a link to some of the content in our blog.
              First, highlight the text that you want to be a link. I have
              clicked on the word "reddit".
            </p>
            <img src={redditHighlight} alt="!" style={imgShadow} />
            <p>
              First, click the little icon with the chain links. A box will
              popup around your highlighted text. Then, click the little arrow
              icon within that popup box.
            </p>
            <img src={linkPopup} alt="!" style={imgShadow} />
            <p>
              Add in the url that you want to send your readers to and make sure
              to click the option for "Open in a new tab".
            </p>
            <img src={linkPopulation} alt="!" style={imgShadow} />
          </li>

          <li>
            <p>
              With your completed blog posts, you are now ready to add tags and
              categories! Look on the sidebar of your page and make sure you are
              in the "document" tab.
            </p>
            <img src={documentTab} alt="1" style={imgShadow} />
            <p>Populate your tags and categories fields</p>
            <img src={tagsAndCats} alt="1" style={imgShadow} />
          </li>

          <li>
            <p>
              Hit Publish in the upper right hand corner! You're done! A menu
              will show up giving you a confirmation message as well as a link
              to view your post on your blog.
            </p>
            <img src={confirmation} alt="1" style={imgShadow} />
          </li>
        </ol>
      </Layout>
    )
  }
}

export default PostingBlogs
