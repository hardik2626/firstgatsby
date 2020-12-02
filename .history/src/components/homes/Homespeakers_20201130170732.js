import React from 'react'
import {graphql,StaticQuery} from 'gatsby'
//import Layout from "../components/layout"

//const names = ['James', 'Paul', 'John', 'George', 'Ringo'];
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