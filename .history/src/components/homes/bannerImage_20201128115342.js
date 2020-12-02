import React, { Component } from 'react'


class Bannerimage extends Component {
    render() {
      
  
      return (
        <>
            <section class="hero-section set-bg" data-setbg="img/hero.jpg">
        <div class="container">
            <div class="row">
                <div class="col-lg-7">
                    <div class="hero-text">
                        <span>5 to 9 may 2019, mardavall hotel, New York</span>
                        <h2>Change Your Mind<br /> To Become Sucess</h2>
                        <a href="#" class="primary-btn">Buy Ticket</a>
                    </div>
                </div>
                <div class="col-lg-5">
                    <img src="img/hero-right.png" alt="" />
                </div>
            </div>
        </div>
    </section>
          
          <h3>Facebook</h3>
          {post.acf.demoface}
          <h3>Twitter</h3>
          {post.acf.demotwit}
          
        </>
      )
    }
  }
  
  
  export default Bannerimage
  
  export const postQuery = graphql`
    query($id: String!) {
      wordpressPage(id: { eq: $id }) {
        title
        content
        acf {
            demoface
            demotwit
          }
      }
      site {
        siteMetadata {
          title
          description
        }
      }
      
    }
  `  