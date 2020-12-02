import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from '../layout'

class Bannerimage extends Component {
    render() {
        const page = this.props.data.allWordpressPage
        console.log(page)
  
      return (
        <Layout>
          <h3>Facebook</h3>
          {/* {page.allWordpressPage.acf.banner_button_text}
          <h3>Twitter</h3>
          {page.acf.banner_button_url} */}
          
        
          </Layout>
      )
    }
  }
  
  
  export default Bannerimage;
  
  export const query = graphql`
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