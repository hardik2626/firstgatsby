import React from 'react'
import {graphql, Link, StaticQuery} from 'gatsby'
//import Layout from "../components/layout"
const Homebanner = () => (
  <StaticQuery query={graphql
    `
    {
      allWordpressPage(filter: {slug: {eq: "home"}}) {
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
          {props.allWordpressPage.edges.map( item => (
            <div>
              <h3>Banner</h3>
              {item.node.acf.banner_button_text}
              {item.node.acf.banner_button_url}
              {item.node.acf.banner_subtitle}
              {item.node.acf.banner_title}
            </div>
          ))}
        </div>

        <h1>Posts</h1>
        
        </>
  )} />
)
export default Homebanner