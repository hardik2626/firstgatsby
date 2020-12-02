import React from 'react'
import {graphql,StaticQuery} from 'gatsby'
//import Layout from "../components/layout"

//const names = ['James', 'Paul', 'John', 'George', 'Ringo'];
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
                    source_url
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
      {props.allWordpressPage.edges.map((item) => (
        
        <section className="home-about-section spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="ha-pic">
                            <img src={item.node.acf.home_about_image.source_url} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="ha-text">
                            <h2>{item.node.acf.home_about_title}</h2>
                            <p>{item.node.acf.home_about_description}</p>
                            <ul>
                                
                                <li><span className="icon_check"></span>dsadsa</li>
                                {item.node.acf.home_about_listing.map(abtList => (
                                    <li key={abtList.about_listing_title}><span className="icon_check"></span> {abtList.about_listing_title}</li>
                                ))}
                                <ul>
                            <li><span class="icon_check"></span> Write On Your Business Card</li>
                            <li><span class="icon_check"></span> Advertising Outdoors</li>
                            <li><span class="icon_check"></span> Effective Advertising Pointers</li>
                            <li><span class="icon_check"></span> Kook 2 Directory Add Url Free</li>
                        </ul>
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