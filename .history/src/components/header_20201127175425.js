import { StaticQuery, graphql, Link } from "gatsby"
import React from "react"
import '../assets/global.css'

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
      
      


      <header class="header-section">
        <div class="container">
            <div class="logo">
              <Link to="/">
                {data.wordpressSiteMetadata.name}
              </Link>
            </div>
            <div class="nav-menu">
                <nav class="mainmenu mobile-menu">
                    <ul>

                    {data.wordpressWpApiMenusMenusItems.items.map(item => (
                      <li className='active' key={item.object_slug} style={{ margin: `0 10px` }}>
                        <Link to={`/${item.object_slug}`}>
                          {item.title}
                        </Link>
                      </li>
                    ))}
                    </ul>
                </nav>
                <a href="#" class="primary-btn top-btn"><i class="fa fa-ticket"></i> Ticket</a>
            </div>
            <div id="mobile-menu-wrap"></div>
        </div>
    </header>
    )}
  />
)
export default Header