import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import NewsCard from "../components/news-card"

const IndexPage = () => (
  <Layout landingPage={true}>
    <SEO title="Home" />
    <h1>The Swiss Corrosion Network</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <StaticImage src="../images/slideshow/Background12.png" alt="background" />
    </div>

    <h2>News</h2>
    <div id="news-container">
      <NewsCard
        title={"Swiss Corrosion Science Day 2021"}
        date={"12.03.2021"}
        description={["The ", <i>Swiss Corrosion Science Day 2021</i>, " takes place on April 26, 2021, in Zofingen AG. ", <Link to="/corrosion-day/current">More information</Link>]}
      />
      <NewsCard
        title={"Something interesting happened"}
        date={"09.12.2020"}
        description={"Further description of the interesting event."}
      />
      <NewsCard
        title={"Something interesting happened"}
        date={"09.12.2020"}
        description={"Further description of the interesting event."}
      />
    </div>
  </Layout>
)

export default IndexPage
