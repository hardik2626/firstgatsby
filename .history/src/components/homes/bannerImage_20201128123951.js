import React, { Component } from 'react'
import { graphql } from 'gatsby'


class Bannerimage extends Component {

    const page = this.props.data.allWordpressPage.edges
    console.log(page.node.title)
    render() {

  
      return (
        <>
          <h3>Facebook</h3>
          {page.acf.banner_button_text}
          <h3>Twitter</h3>
          {page.acf.banner_button_url}
          
        </>
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