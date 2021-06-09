import { graphql } from "gatsby"
import { css } from "@emotion/react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Dialog, { DialogContainerCSS } from "../components/dialog"
import BackgroundImage from "gatsby-background-image"

const Contact = ({ data }: any) => (
  <Layout>
    <SEO title="Contact" />
    <h1>Contact</h1>
    <BackgroundImage
      Tag="div"
      css={css`
        ${DialogContainerCSS};
        justify-content: center;
      `}
      fluid={data.bridge.childImageSharp.fluid}
    >
      <Dialog
        title={"Write us an email"}
        text={`Contact information coming soon!`}
      />
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
