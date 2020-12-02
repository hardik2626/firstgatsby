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
                            <Link to="/" className="footer-logo"><img src={item.node.options.footer_logo.source_url} alt="" /></Link>
                        </div>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Speakers</a></li>
                            <li><a href="#">Schedule</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                        <div className="copyright-text">
                        <p>{item.node.options.footer_copyright}
  </p></div>
                        <div className="ft-social">
                            <a href="#"><i className="fa fa-facebook"></i></a>
                            <a href="#"><i className="fa fa-twitter"></i></a>
                            <a href="#"><i className="fa fa-linkedin"></i></a>
                            <a href="#"><i className="fa fa-instagram"></i></a>
                            <a href="#"><i className="fa fa-youtube-play"></i></a>
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