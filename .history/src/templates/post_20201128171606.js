import React, { Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import Img from 'gatsby-image'

class Post extends Component {
  render() {
    const post = this.props.data.wordpressPost
    const resolutions = post.featured_media.localFile.childImageSharp.resolutions

    return (
      <>
      <Layout>
        <h1 dangerouslySetInnerHTML={{__html: post.title}} />
        
        <div dangerouslySetInnerHTML={{__html: post.content}} />
        <h3>Facebook</h3>
        {post.acf.demoface}
        <h3>Twitter</h3>
        {post.acf.demotwit}
        </Layout>
      </>
    )
  }
}

Post.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default Post

export const postQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
      acf {
          demoface
          demotwit
        }
      featured_media {
          localFile {
            childImageSharp {
              resolutions(height: 800, width: 700, quality: 100) {
                src
                width
                height
              }
            }
          }
        }
    }
    site {
      siteMetadata {
        title
        description
      }
    }
    
  }
`  