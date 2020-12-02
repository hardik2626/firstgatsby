import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"

import Footer from "../components/footer"
import Scheduletime from "../components/Schedule/Scheduletime"





const SchedulePage = () => (
  <Layout>
    <SEO title="Schedule" />
    <Scheduletime />
    <Footer />
  </Layout>
)

export default SchedulePage