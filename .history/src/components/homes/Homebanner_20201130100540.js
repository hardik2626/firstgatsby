import React from 'react'
import {graphql, Link, StaticQuery} from 'gatsby'
//import Layout from "../components/layout"
const Homebanner = () => (
  <StaticQuery
    query={graphql`
      {
        allWordpressPage(filter: { slug: { eq: "home" } }) {
          edges {
            node {
              acf {
                banner_button_text
                banner_button_url
                banner_subtitle
                banner_title
                home_background_image {
                localFile {
                  url
                  childImageSharp {
                    fluid {
                      srcSet
                    }
                  }
                }
              }
              }
              
            }
          }
        }
      }
    `}
    render={props => (
      <>
      {props.allWordpressPage.edges.map(item => (
        <section className="hero-section set-bg" style={{backgroundImage: `url(${item.node.acf.home_background_image.localFile.url})`}}>
       
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="hero-text">
                  <span>{item.node.acf.banner_subtitle}</span>
                  <h2>
                  {item.node.acf.banner_title}
                  </h2>
                  <a href={item.node.acf.banner_button_url} className="primary-btn">
                  {item.node.acf.banner_button_text}
                  </a>
                </div>
              </div>
              <div className="col-lg-5">
                <img src="img/hero-right.png" alt="" />
              </div>
            </div>
          </div>
        </section>
        ))}

        
      </>
    )}
  />
)
export default Homebanner