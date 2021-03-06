import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Header from '../header'
import Layout from '../layout'

class Bannerimage extends Component {
    render() {
        //const {data} = props
        const page = this.props.data.allWordpressPage
        console.log(page)
  
      return (
        <>
        <Header />
        <Layout>
          <h3>Facebook</h3>
          </Layout>
          {/* {page.allWordpressPage.acf.banner_button_text}
          <h3>Twitter</h3>
          {page.acf.banner_button_url} */}
          
        </>
      )
    }
  }
  
  
  export default Bannerimage;
  
//   export const query = graphql`
//   {
//     allWordpressPage {
//         edges {
//           node {
//             title
//             acf {
//               banner_button_text
//               banner_button_url
//             }
//           }
//         }
//       }  
//   }
// `

export const data = useStaticQuery(graphql`
    query allWordpressPage {
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
  `)