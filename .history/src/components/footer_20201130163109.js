import React from 'react'
import {graphql,Link,StaticQuery} from 'gatsby'
//import Layout from "../components/layout"


const Footer = () => (
    
  <StaticQuery
    query={graphql`
      {
        allWordpressAcfOptions {
            edges {
            node {
                options {
                    footer_logo {
                        source_url
                    }
                footer_copyright
                instagram_url
                linked_in_url
                twitter_url
                youtube_url
                facebook_url
                }
            }
            }
        }
      }
    `}


    render={props => (
      <>
      {props.allWordpressAcfOptions.edges.map((item) => (
        
        <footer className="footer-section">
        <div className="container">
            <div className="partner-logo owl-carousel">
                <a href="#" className="pl-table">
                    <div className="pl-tablecell">
                        <img src="img/partner-logo/logo-1.png" alt="" />
                    </div>
                </a>
                <a href="#" className="pl-table">
                    <div className="pl-tablecell">
                        <img src="img/partner-logo/logo-2.png" alt="" />
                    </div>
                </a>
                <a href="#" className="pl-table">
                    <div className="pl-tablecell">
                        <img src="img/partner-logo/logo-3.png" alt="" />
                    </div>
                </a>
                <a href="#" className="pl-table">
                    <div className="pl-tablecell">
                        <img src="img/partner-logo/logo-4.png" alt="" />
                    </div>
                </a>
                <a href="#" className="pl-table">
                    <div className="pl-tablecell">
                        <img src="img/partner-logo/logo-5.png" alt="" />
                    </div>
                </a>
                <a href="#" className="pl-table">
                    <div className="pl-tablecell">
                        <img src="img/partner-logo/logo-6.png" alt="" />
                    </div>
                </a>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="footer-text">
                        <div className="ft-logo">
                            <Link to="/" className="footer-logo"><img src={item.node.options.footer_logo.source_url} alt="{item.node.options.footer_logo.source_url}" /></Link>
                        </div>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Speakers</a></li>
                            <li><a href="#">Schedule</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                        <div className="copyright-text">
                            <p>{item.node.options.footer_copyright}</p>
                        </div>
                        <div className="ft-social">
                            <Link to={item.node.options.facebook_url}><i className="fa fa-facebook"></i></Link>
                            <Link to={item.node.options.twitter_url}><i className="fa fa-twitter"></i></Link>
                            <Link to={item.node.options.linked_in_url}><i className="fa fa-linkedin"></i></Link>
                            <Link to={item.node.options.linked_in_url}><i className="fa fa-instagram"></i></Link>
                            <Link to={item.node.options.youtube_url}><i className="fa fa-youtube-play"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>        
        ))}
      </>
    )}
  />
)
export default Footer