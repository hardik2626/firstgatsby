import { StaticQuery, graphql, Link } from "gatsby"
import React from "react"
import '../assets/global.css'
import '../assets/bootstrap.min.css'
//import '../assets/font-awesome.min.css'
import '../assets/slicknav.min.css'
import Sitelogo from "./sitelogo"

const Header = () => (
  <StaticQuery
    query={graphql`
      query {
        wordpressSiteMetadata {
          name
        }
        wordpressWpApiMenusMenusItems(name: { eq: "MainMenu" }) {
          items {
            title
            object_slug
          }
        }
      }
    `}
    render={data => (
      /*<header className='header-section' style={{ background: `rebeccapurple`, marginBottom: `1.45rem`, }} >
        <div style={{ margin: `0 auto`, maxWidth: 960, padding: `1.45rem 1.0875rem`, display: `flex`, justifyContent: `space-between`, alignItems: `center`, }} >
          <h1 style={{ margin: 0 }}>
            <Link to="/" style={{ color: `white`, textDecoration: `none`, }} >
              {data.wordpressSiteMetadata.name}
            </Link>
          </h1>
          <ul style={{ listStyle: `none`, display: `flex`, margin: 0 }}>
            {data.wordpressWpApiMenusMenusItems.items.map(item => (
              <li key={item.object_slug} style={{ margin: `0 10px` }}>
                <Link to={`/${item.object_slug}`} style={{ color: `white`, textDecoration: `none`, fontFamily: `sans-serif`, }} >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </header>*/
      


      <header className="header-section">
        <div className="container">
            <div className="logo">
            
              <Link to="/">
                {data.wordpressSiteMetadata.name}
                <Sitelogo />
              </Link>
            </div>
            <div className="nav-menu">
                <nav className="mainmenu mobile-menu">
                    <ul>
                    {data.wordpressWpApiMenusMenusItems.items.map(item => (
                      <li activeClassName='active' key={item.object_slug} >
                        <Link to={`/${item.object_slug}`}>
                          {item.title}
                        </Link>
                      </li>
                    ))}
                    </ul>
                </nav>
                {/* <a href="#" className="primary-btn top-btn"><i className="fa fa-ticket"></i> Ticket</a> */}
            </div>
            <div id="mobile-menu-wrap"></div>
        </div>
    </header>
    )}
  />
)
export default Header