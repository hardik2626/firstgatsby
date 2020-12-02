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
                    <h2>{item.node.acf.home_speaker_title}</h2>
                    <p>These are our communicators, you can see each person information</p>
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
export default Homespeakers