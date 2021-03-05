import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Dialog from "../components/dialog"

const SecondPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>Contact</h1>
    <div className="dialog-container" id="about-text">
      <Dialog
        title={"Write us an email"}
        text={`example@swisscorr.ch`}
      />
    </div>
  </Layout>
)

export default SecondPage
