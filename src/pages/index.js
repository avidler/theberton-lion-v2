import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Carousel from "../components/carousel"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Carousel />
   
  </Layout>

)

export default IndexPage
