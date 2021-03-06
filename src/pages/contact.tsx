import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Dialog from "../components/dialog"

import reinforcement from "../images/reinforcement.jpg"

const SecondPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>Contact</h1>
    <div
      className="dialog-container"
      style={{ backgroundImage: `url(${reinforcement})` }}
      id="contact-dialog"
    >
      <Dialog title={"Write us an email"} text={`example@swisscorr.ch`} />
    </div>
  </Layout>
)

export default SecondPage
