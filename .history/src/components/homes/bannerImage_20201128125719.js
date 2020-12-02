import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import Header from '../header'

class Bannerimage extends Component {
    render() {
        const page = this.props.data.allWordpressPage.edges
        console.log(page)
  
      return (
        <>
        <Header />
          <h3>Facebook</h3>
          
          
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