import React from "react"
import Bannerimage from "../bannerImage"
//import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi Aureate</h1>
    <Bannerimage />
  </Layout>
)

export default IndexPage
