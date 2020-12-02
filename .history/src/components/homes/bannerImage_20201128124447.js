import React, { Component } from 'react'
import Layout from "../components/layout"
export default class Bannerimage extends Component {
    render() {
        return (
            <Layout>
                {console.log("test" + this.props.data.allWordpressPost.edges[0].node.title)}
                <h1>Blog Listing Page</h1>
            </Layout>
        )
    }
}
export const query = graphql`
{
  allWordpressPost {
    edges {
      node {
        id
        path
        title
        slug
        date
        excerpt
        featured_media {
          source_url
        }
      }
    }
  }
}
`











