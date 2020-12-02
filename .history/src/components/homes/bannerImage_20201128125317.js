import { StaticQuery, graphql, Link } from "gatsby"
import React from "react"

const Bannerimage = () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressPage {
    edges {
      node {
        acf {
          banner_button_text
          banner_button_url
        }
      }
    }
  }
      }
    `}
    render={data => (
      
      


      
            {data.acf.banner_button_text}
        
    )}
  />
)
export default Bannerimage