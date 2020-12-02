import React, { Component } from 'react'
//import { graphql } from 'gatsby'
import Layout from '../layout'

class Bannerimage extends Component {
    render() {
        //const page = this.props.data.allWordpressPage.edges
        //console.log(page)
  
      return (
        <>
         
          {/* {page.allWordpressPage.acf.banner_button_text}
          <h3>Twitter</h3>
          {page.acf.banner_button_url} */}
          <section className="hero-section set-bg" data-setbg="https://preview.colorlib.com/theme/manup/img/hero.jpg">
        <div className="container">
            <div className="row">
                <div className="col-lg-7">
                    <div className="hero-text">
                        <span>5 to 9 may 2019, mardavall hotel, New York</span>
                        <h2>Change Your Mind<br /> To Become Sucess</h2>
                        <a href="#" className="primary-btn">Buy Ticket</a>
                    </div>
                </div>
                <div className="col-lg-5">
                    <img src="img/hero-right.png" alt="" />
                </div>
            </div>
        </div>
    </section>
        </>
          
      )
    }
  }
  
  
  export default Bannerimage
  
//   export const query = graphql`
//   {
//     allWordpressPage {
//         edges {
//           node {
//             title
//             # acf {
//             #   banner_button_text
//             #   banner_button_url
//             # }
//           }
//         }
//       }  
//   }
//`