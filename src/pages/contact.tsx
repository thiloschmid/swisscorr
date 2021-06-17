import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import { css } from "@emotion/react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Dialog, { DialogContainerCSS } from "../components/dialog"

const Contact = () => {
  const { reinforcement } = useStaticQuery(graphql`
    {
      reinforcement: file(relativePath: { eq: "reinforcement.jpg" }) {
        childImageSharp {
          gatsbyImageData(quality: 80, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  `)

  const imageData = getImage(reinforcement)

  return (
    <Layout>
      <SEO title="Contact" />
      <h1>Contact</h1>
      <BgImage
        css={css`
          ${DialogContainerCSS};
          justify-content: center;
        `}
        image={imageData}
      >
        <Dialog title={"Write us an email"}>
          <a href="mailto:info@swisscorr.ch">info@swisscorr.ch</a>
        </Dialog>
      </BgImage>
    </Layout>
  )
}

export default Contact
