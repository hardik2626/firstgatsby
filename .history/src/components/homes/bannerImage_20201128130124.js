import React, { Component } from 'react'
import { graphql } from 'gatsby'
//import Layout from "../components/layout"
import Header from '../header'

class Bannerimage extends Component {
    render() {
        const page = data.allWordpressPage.edges
        console.log(page)
  
      return (
        <>
        <Header />
          <h3>Facebook</h3>
          {/* {page.allWordpressPage.acf.banner_button_text}
          <h3>Twitter</h3>
          {page.acf.banner_button_url} */}
          
        </>
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