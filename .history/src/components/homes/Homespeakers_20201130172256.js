import React from 'react'
import {graphql,StaticQuery} from 'gatsby'

const Homespeakers = () => (
    
  <StaticQuery
    query={graphql`
      {
        
      }
    `}


    render={props => (
      <>
      {props.allWordpressPage.edges.map((item) => (
        
        
                
        ))}
      </>
    )}
  />
)
export default Homespeakers