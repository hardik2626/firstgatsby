import React from 'react'
import {graphql, Link, StaticQuery} from 'gatsby'
import Layout from "../components/layout"
const Homebanner = () => (
  <StaticQuery query={graphql
    `
    {
      allWordpressPage {
        edges {
          node {
            id
            title
            excerpt
            slug
          }
        }
      }
      allWordpressPost {
        edges {
          node {
            title
            excerpt
            slug
          }
        }
      }
    }
    `
  }render = {props => (
    <Layout>
        <div>
          <h1>Pages</h1>
          {props.allWordpressPage.edges.map(({ node }) => (
            <div key={node.slug}>
              <Link to={node.slug}>
                <h2>{node.title}</h2>
              </Link>
              <h3>{node.excerpt}</h3>
            </div>
          ))}
        </div>

        <h1>Posts</h1>
        {props.allWordpressPost.edges.map(({ node }) => (
          <div key={node.slug}>
            <Link to={node.slug}>
              <h2>{node.title}</h2>
            </Link>
            <h3>{node.excerpt}</h3>
          </div>
        ))}
        </Layout>
  )} />
);
export default Homebanner;