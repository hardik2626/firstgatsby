import React from 'react'
import {graphql, Link, StaticQuery} from 'gatsby'
//import Layout from "../components/layout"
const Homebanner = () => (
  <StaticQuery query={graphql
    `
    {
      allWordpressPage {
    edges {
      node {
        acf {
          banner_button_text
          banner_button_url
          banner_subtitle
          banner_title
        }
      }
    }
  }

    }
    `
  }render = {props => (
    <>
        <div>
          <h1>Pages</h1>
          {props.allWordpressPage.edges[0].acf.map(({ node }) => (
            <div>
              <h3>Banner</h3>
              {props.acf.banner_button_text}
            </div>
          ))}
        </div>

        <h1>Posts</h1>
        
        </>
  )} />
)
export default Homebanner