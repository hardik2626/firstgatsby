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
        
        <section className="team-member-section">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="section-title">
      {props.allWordpressPage.edges.map(item => (
                    <h2>{item.node.acf.home_speaker_title}</h2>
                    <p>{item.node.acf.home_speaker_description}</p>
        ))}
                </div>
            </div>
        </div>
    </div>

    {props.allWordpressWpSpeaker.items.map(speak => (
                                


    <div className="member-item set-bg">
        <div className="mi-social">
            <div className="mi-social-inner bg-gradient">
                <a href="#"><i className="fa fa-facebook"></i></a>
                <a href="#"><i className="fa fa-instagram"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
                <a href="#"><i className="fa fa-linkedin"></i></a>
            </div>
        </div>
        <div className="mi-text">
            <h5>{speak.title}</h5>
            <span>Speaker</span>
        </div>
    </div>
        ))}
    

        
    
</section>
                
      </>
    )}
  />
)
export default Homespeakers