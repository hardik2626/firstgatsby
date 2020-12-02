import React, { Component } from "react"
import { Link } from "gatsby"

import { graphql } from "gatsby"



import Layout from "../components/layout"




class Homebanner extends Component {
  render() {
    const data = this.props.data

    return (
      <div>
        <h1>dddddddddddd</h1>
      </div>
    )
  }
}

export default Homebanner

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
