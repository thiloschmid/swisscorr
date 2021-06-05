import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import News from "../components/news"

const IndexPage = () => (
  <Layout landingPage={true}>
    <SEO />
    <h1>The Swiss Corrosion Network</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <StaticImage
        src="../images/slideshow/Background12.png"
        alt="background"
      />
    </div>

    <News />
  </Layout>
)

export default IndexPage
