import React, { Component } from "react"
import { Link, graphql } from "gatsby"

class Bannerimage extends Component {
  render() {
    const data = this.props.data

    return (
      <div>
        

        <h1>Posts</h1>
        {data.allWordpressPost.edges.map(({ node }) => (
          <div key={node.slug}>
            <Link to={node.slug}>
              <h2>{node.title}</h2>
            </Link>
            <h3>{node.excerpt}</h3>
          </div>
        ))}
      </div>
    )
  }
}

export default Bannerimage

export const query = graphql
`
  {
    allWordpressPage {
      edges {
        node {
          id
          title
          excerpt
          slug
        }
      }
    }
    allWordpressPost {
      edges {
        node {
          title
          excerpt
          slug
        }
      }
    }
  }
`