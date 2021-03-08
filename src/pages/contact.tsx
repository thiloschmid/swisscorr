import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Dialog from "../components/dialog"
import BackgroundImage from "gatsby-background-image"

const Contact = ({ data }: any) => (
  <Layout>
    <SEO title="Contact" />
    <h1>Contact</h1>
    <BackgroundImage
      Tag="div"
      className="dialog-container"
      id="contact-dialog"
      fluid={data.bridge.childImageSharp.fluid}
    >
      <Dialog title={"Write us an email"} text={`example@swisscorr.ch`} />
    </BackgroundImage>
  </Layout>
)

export const query = graphql`
  {
    bridge: file(relativePath: { eq: "reinforcement.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default Contact
