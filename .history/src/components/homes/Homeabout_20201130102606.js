import React from 'react'
import {graphql, Link, StaticQuery} from 'gatsby'
//import Layout from "../components/layout"
const Homeabout = () => (
  <StaticQuery
    query={graphql`
      {
        allWordpressPage(filter: {slug: {eq: "home"}}) {
            edges {
            node {
                acf {
                home_about_button_text
                home_about_button_url
                home_about_description
                home_about_image {
                    localFile {
                    url
                    }
                }
                home_about_listing {
                    about_listing_title
                }
                home_about_title
                }
            }
            }
        }
      }
    `}
    render={props => (
      <>
      {props.allWordpressPage.edges.map(item => (
        <section className="home-about-section spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="ha-pic">
                            <img src="img/h-about.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="ha-text">
                            <h2>{item.node.acf.home_about_title}</h2>
                            <p>When I first got into the online advertising business, I was looking for the magical
                                combination that would put my website into the top search engine rankings, catapult me to
                                the forefront of the minds or individuals looking to buy my product, and generally make me
                                rich beyond my wildest dreams! After succeeding in the business for this long, I’m able to
                                look back on my old self with this kind of thinking and shake my head.</p>
                            <ul>
                                <li><span className="icon_check"></span> Write On Your Business Card</li>
                                <li><span className="icon_check"></span> Advertising Outdoors</li>
                                <li><span className="icon_check"></span> Effective Advertising Pointers</li>
                                <li><span className="icon_check"></span> Kook 2 Directory Add Url Free</li>
                            </ul>
                            <a href="#" className="ha-btn">Discover Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>        
        ))}
      </>
    )}
  />
)
export default Homeabout