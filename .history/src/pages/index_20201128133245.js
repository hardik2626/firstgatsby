import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"
import Bannerimage from "../components/homes/bannerImage"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi Aureate</h1>
    <Bannerimage />
  </Layout>
)

export default IndexPage
