import React, { Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import Img from 'gatsby-image'

class Post extends Component {
  render() {
    const post = this.props.data.wordpressPost
    const resolutions = props.featured_media.localFile.localFile.childImageSharp.resolutions

    return (
      <>
      <Layout>
        <h1 dangerouslySetInnerHTML={{__html: post.title}} />
        <Img resolutions={resolutions} alt=""/>
        <div dangerouslySetInnerHTML={{__html: post.content}} />
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
    }
    site {
      siteMetadata {
        title
        description
      }
    }
    featured_media {
        source_url
          localFile {
          childImageSharp {
            resolutions(width: 300, height: 300) {
              src
              width
              height
            }
          }
        }
      }
  }
`  