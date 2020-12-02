import React from 'react'
import {graphql,StaticQuery} from 'gatsby'

const Homespeakers = () => (
    
  <StaticQuery
    query={graphql`
      {
        

        allWordpressWpSpeaker {
            edges {
            node {
                slug
                title
                featured_media {
                source_url
                }
            }
            }
        }
  
        allWordpressPage(filter: {slug: {eq: "home"}}) {
            edges {
            node {
                acf {
                    home_speaker_description
                    home_speaker_title
                }
            }
            }
        }


        
      }
    `}


    render={props => (
      <>
      {props.allWordpressPage.edges.map(item => (
        
        <section className="team-member-section">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="section-title">
                    <h2>{item.node.acf.home_speaker_title}</h2>
                    <p>{item.node.acf.home_speaker_description}</p>
                </div>
            </div>
        </div>
    </div>
    <div className="member-item set-bg" style={{backgroundImage: `url(${item.node.acf.home_background_image.localFile.url})`}} data-setbg="/static/speakers/speaker-1.jpg">
        <div className="mi-social">
            <div className="mi-social-inner bg-gradient">
                <a href="#"><i className="fa fa-facebook"></i></a>
                <a href="#"><i className="fa fa-instagram"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
                <a href="#"><i className="fa fa-linkedin"></i></a>
            </div>
        </div>
        <div className="mi-text">
            <h5>Emma Sandoval</h5>
            <span>Speaker</span>
        </div>
    </div>
    <div className="member-item set-bg" data-setbg="/static/speakers/member-2.jpg">
        <div className="mi-social">
            <div className="mi-social-inner bg-gradient">
                <a href="#"><i className="fa fa-facebook"></i></a>
                <a href="#"><i className="fa fa-instagram"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
                <a href="#"><i className="fa fa-linkedin"></i></a>
            </div>
        </div>
        <div className="mi-text">
            <h5>Emma Sandoval</h5>
            <span>Speaker</span>
        </div>
    </div>
    <div className="member-item set-bg" data-setbg="/static/speakers/member-3.jpg">
        <div className="mi-social">
            <div className="mi-social-inner bg-gradient">
                <a href="#"><i className="fa fa-facebook"></i></a>
                <a href="#"><i className="fa fa-instagram"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
                <a href="#"><i className="fa fa-linkedin"></i></a>
            </div>
        </div>
        <div className="mi-text">
            <h5>Emma Sandoval</h5>
            <span>Speaker</span>
        </div>
    </div>
    <div className="member-item set-bg" data-setbg="/static/speakers/member-4.jpg">
        <div className="mi-social">
            <div className="mi-social-inner bg-gradient">
                <a href="#"><i className="fa fa-facebook"></i></a>
                <a href="#"><i className="fa fa-instagram"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
                <a href="#"><i className="fa fa-linkedin"></i></a>
            </div>
        </div>
        <div className="mi-text">
            <h5>Emma Sandoval</h5>
            <span>Speaker</span>
        </div>
    </div>
    <div className="member-item set-bg" data-setbg="/static/speakers/member-5.jpg">
        <div className="mi-social">
            <div className="mi-social-inner bg-gradient">
                <a href="#"><i className="fa fa-facebook"></i></a>
                <a href="#"><i className="fa fa-instagram"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
                <a href="#"><i className="fa fa-linkedin"></i></a>
            </div>
        </div>
        <div className="mi-text">
            <h5>Emma Sandoval</h5>
            <span>Speaker</span>
        </div>
    </div>
    <div className="member-item set-bg" data-setbg="/static/speakers/member-6.jpg">
        <div className="mi-social">
            <div className="mi-social-inner bg-gradient">
                <a href="#"><i className="fa fa-facebook"></i></a>
                <a href="#"><i className="fa fa-instagram"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
                <a href="#"><i className="fa fa-linkedin"></i></a>
            </div>
        </div>
        <div className="mi-text">
            <h5>Emma Sandoval</h5>
            <span>Speaker</span>
        </div>
    </div>
    <div className="member-item set-bg" data-setbg="/static/speakers/member-7.jpg">
        <div className="mi-social">
            <div className="mi-social-inner bg-gradient">
                <a href="#"><i className="fa fa-facebook"></i></a>
                <a href="#"><i className="fa fa-instagram"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
                <a href="#"><i className="fa fa-linkedin"></i></a>
            </div>
        </div>
        <div className="mi-text">
            <h5>Emma Sandoval</h5>
            <span>Speaker</span>
        </div>
    </div>
    <div className="member-item set-bg" data-setbg="/static/speakers/member-8.jpg">
        <div className="mi-social">
            <div className="mi-social-inner bg-gradient">
                <a href="#"><i className="fa fa-facebook"></i></a>
                <a href="#"><i className="fa fa-instagram"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
                <a href="#"><i className="fa fa-linkedin"></i></a>
            </div>
        </div>
        <div className="mi-text">
            <h5>Emma Sandoval</h5>
            <span>Speaker</span>
        </div>
    </div>
    <div className="member-item set-bg" data-setbg="/static/speakers/member-9.jpg">
        <div className="mi-social">
            <div className="mi-social-inner bg-gradient">
                <a href="#"><i className="fa fa-facebook"></i></a>
                <a href="#"><i className="fa fa-instagram"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
                <a href="#"><i className="fa fa-linkedin"></i></a>
            </div>
        </div>
        <div className="mi-text">
            <h5>Emma Sandoval</h5>
            <span>Speaker</span>
        </div>
    </div>
    <div className="member-item set-bg" data-setbg="/static/speakers/member-10.jpg">
        <div className="mi-social">
            <div className="mi-social-inner bg-gradient">
                <a href="#"><i className="fa fa-facebook"></i></a>
                <a href="#"><i className="fa fa-instagram"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
                <a href="#"><i className="fa fa-linkedin"></i></a>
            </div>
        </div>
        <div className="mi-text">
            <h5>Emma Sandoval</h5>
            <span>Speaker</span>
        </div>
    </div>
</section>
                
        ))}
      </>
    )}
  />
)
export default Homespeakers