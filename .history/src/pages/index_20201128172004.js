import React, { Component } from "react"
import { Link } from "gatsby"

import { Link, graphql } from "gatsby"



import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"
import Bannerimage from "../components/homes/BannerImage"



class IndexPage extends Component {
  render() {
    const data = this.props.data

    return (
      <div>
        <div>
          <h1>Pages</h1>
          {data.allWordpressPage.edges.map(({ node }) => (
            <div key={node.slug}>
              <Link to={node.slug}>
                <h2>{node.title}</h2>
              </Link>
              <h3>{node.excerpt}</h3>
            </div>
          ))}
        </div>

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

export default IndexPage

export const query = graphql`
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

export default IndexPage
