import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Education > University" />
    <h1>{`Education > University Teaching`}</h1>
    <p>Welcome to page 2</p>
    <Link to="/education/university-teaching">University teaching</Link>
    <Link to="/education/practitioners-courses">Practitioners courses</Link>
  </Layout>
)

export default SecondPage
