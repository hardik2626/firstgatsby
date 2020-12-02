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
        {resolutions &&
          <div>
            <Img resolutions={resolutions} alt=""/>
            {/* <img src={resolutions.src} alt=""/> */}
          </div>
        }
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
      featured_media {
          localFile {
            childImageSharp {
              resolutions(height: 800, width: 1000, quality: 100) {
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