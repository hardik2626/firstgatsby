import React, { Component } from 'react'
import { graphql } from 'gatsby'


class Bannerimage extends Component {
    render(props) {
        const page = props.data.allWordpressPage
        console.log(page)
  
      return (
        <>
            {/* <section class="hero-section set-bg" data-setbg="img/hero.jpg">
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
    </section> */}
          
          <h3>Facebook</h3>
          {page.acf.banner_button_text}
          <h3>Twitter</h3>
          {page.acf.banner_button_url}
          
        </>
      )
    }
  }
  
  
  export default Bannerimage
  
  export const query = graphql`
  {
    wordpressPage {
    acf {
      banner_button_text
      banner_button_url
    }
  }
  }
`