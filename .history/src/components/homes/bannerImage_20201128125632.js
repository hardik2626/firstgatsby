import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from "../components/layout"

class Bannerimage extends Component {
    render() {
        const page = this.props.data.allWordpressPage.edges
        console.log(page)
  
      return (
        <Layout>
          <h3>Facebook</h3>
          
          
        </Layout>
      )
    }
  }
  
  
  export default Bannerimage;
  
  export const query = graphql
  `
  {
    allWordpressPage {
        edges {
          node {
            title
            acf {
              banner_button_text
              banner_button_url
            }
          }
        }
      }  
  }
`