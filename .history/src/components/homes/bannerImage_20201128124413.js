import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from "../components/layout"

export default class Bannerimage extends Component {
    render() {
        const page = this.props.data.allWordpressPage.edges
        console.log(page)
  
      return (
        <Layout>
          <h3>Facebook</h3>
          {page.acf.banner_button_text}
          <h3>Twitter</h3>
          {page.acf.banner_button_url}
          
        </Layout>
      )
    }
  }
  
  
  
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