import React from 'react'
import {graphql, Link, StaticQuery} from 'gatsby'
//import Layout from "../components/layout"
const Homebanner = () => (
  <StaticQuery query={graphql
    `
    {
      allWordpressPage(filter: {slug: {eq: "home"}}) {
    edges {
      node {
        acf {
          banner_button_text
          banner_button_url
          banner_subtitle
          banner_title
        }
      }
    }
  }

    }
    `
  }render = {props => (
    <>
        <div>
          <h1>Pages</h1>
          {props.allWordpressPage.edges.map( item => (
            <section className="hero-section set-bg" data-setbg="img/hero.jpg">
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
            <div>
              <h3>Banner</h3>
              {item.node.acf.banner_button_text}
              {item.node.acf.banner_button_url}
              {item.node.acf.banner_subtitle}
              {item.node.acf.banner_title}
            </div>
          ))}
        </div>

        
        
        </>
  )} />
)
export default Homebanner