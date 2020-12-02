import React from 'react'
import {graphql,StaticQuery} from 'gatsby'

const Homespeakers = () => (
    
  <StaticQuery
    query={graphql`
      {
        allWordpressWpSpeaker(sort: {fields: id, order: DESC}) {
            edges {
            node {
                slug
                title
                acf {
                    speaker_facebook_url
                    speaker_insta_url
                    speaker_linkedin_url
                    speaker_twitter_url
                }
                featured_media {
                localFile {
                    url
                }
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

    {props.allWordpressWpSpeaker.edges.map(speak => (
    <div className="member-item set-bg" style={{backgroundImage: `url(${speak.node.featured_media.localFile.url})`}}>
        <div className="mi-social">
            <div className="mi-social-inner bg-gradient">
                <a href="#"><i className="fa fa-facebook"></i></a>
                <a href="#"><i className="fa fa-instagram"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
                <a href="#"><i className="fa fa-linkedin"></i></a>
            </div>
        </div>
        <div className="mi-text">
            <h5>{speak.node.title}</h5>
            <span>Speaker</span>
        </div>
    </div>
        ))}
    

        
    
</section>
        ))}
                
      </>
    )}
  />
)
export default Homespeakers