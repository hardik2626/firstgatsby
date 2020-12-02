import React from 'react'
import {graphql,StaticQuery} from 'gatsby'
//import Layout from "../components/layout"


const Footer = () => (
    
  <StaticQuery
    query={graphql`
      {
        allWordpressPage() {
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
                            <a href="#" className="footer-logo"><img src="img/footer-logo.png" alt="" /></a>
                        </div>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Speakers</a></li>
                            <li><a href="#">Schedule</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                        <div className="copyright-text">
                        <p>Copyright &copy;
                            <script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib.Downloaded from <a href="https://themeslab.org/" target="_blank">Themeslab</a></a>
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