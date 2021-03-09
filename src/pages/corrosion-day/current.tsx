import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const CurrentCorrosionDay = () => (
  <Layout>
    <SEO title="Swiss Corrosion Science Day" />
    <h1>Current Swiss Corrosion Science Day</h1>

    <p>This page is currently under construction</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <StaticImage
        src="../../images/slideshow/measurement.jpg"
        alt="background"
      />
    </div>

    <h2>More information is soon to follow!</h2>
  </Layout>
)

export default CurrentCorrosionDay
