import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
import Homebanner from "../components/homes/Homebanner"




const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Homebanner />
    
  </Layout>
)

export default IndexPage
