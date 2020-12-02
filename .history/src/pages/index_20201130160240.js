import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"
import Homebanner from "../components/homes/Homebanner"
import Homeabout from "../components/homes/Homeabout"
import Footer from "../components/footer"




const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Homebanner />
    <Homeabout />
    <Footer />
  </Layout>
)

export default IndexPage
