import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


// const Sitelogo = () => {
//   const data = useStaticQuery(graphql`
//     query {
//       placeholderImage: file(relativePath: { eq: "static/logo.png" }) {
//         childImageSharp {
//           fluid(maxWidth: 300) {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//     }
//   `)

//   if (!data?.placeholderImage?.childImageSharp?.fluid) {
//     return <div>Picture not found</div>
//   }

//   return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
// }

// export default Sitelogo


const Sitelogo = () => (
    
  <StaticQuery
    query={graphql`
      allWordpressAcfOptions {
    edges {
      node {
        options {
          header_logo {
            source_url
          }
        }
      }
    }
  }
    `}


    render={props => (
      <>
      {props.allWordpressAcfOptions.edges.map((item) => (
        <a href="./index.html">
            <img src={item.node.options.header_logo.source_url} alt="" />
        </a>        
        ))}
      </>
    )}
  />
)
export default Sitelogo