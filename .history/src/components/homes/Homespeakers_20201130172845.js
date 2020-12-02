import React from 'react'
import {graphql,StaticQuery} from 'gatsby'

const Homespeakers = () => (
    
  <StaticQuery
    query={graphql`
      {
        allWordpressPage {
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
                    <h2>{item.node.acf.home_speaker_title} dd</h2>
                    <p>These are our communicators, you can see each person information</p>
                </div>
            </div>
        </div>
    </div>
    <div className="member-item set-bg" data-setbg="img/team-member/member-1.jpg">
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
    <div className="member-item set-bg" data-setbg="img/team-member/member-2.jpg">
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
    <div className="member-item set-bg" data-setbg="img/team-member/member-3.jpg">
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
    <div className="member-item set-bg" data-setbg="img/team-member/member-4.jpg">
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
    <div className="member-item set-bg" data-setbg="img/team-member/member-5.jpg">
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
    <div className="member-item set-bg" data-setbg="img/team-member/member-6.jpg">
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
    <div className="member-item set-bg" data-setbg="img/team-member/member-7.jpg">
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
    <div className="member-item set-bg" data-setbg="img/team-member/member-8.jpg">
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
    <div className="member-item set-bg" data-setbg="img/team-member/member-9.jpg">
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
    <div className="member-item set-bg" data-setbg="img/team-member/member-10.jpg">
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