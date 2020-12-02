import React, { Component } from 'react'
import { graphql } from 'gatsby'
//import SEO from "../components/seo"
import Layout from '../layout'

class Bannerimage extends Component {
    render() {
        //const {data} = props
        const data = this.props.data
        //const page = this.props.data.allWordpressPage
        console.log(page)
      
      return (
        <>
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
        
          <h3>Facebook</h3>
          {/* {page.acf.banner_button_text} */}
          <h3>Twitter</h3>
          {/* {page.acf.banner_button_url} */}
          
        </>
      )
    }
  }
  
  
  export default Bannerimage
  
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
