import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import NewsCard from "../components/news-card"

const IndexPage = () => (
  <Layout headerHeight={"20rem"}>
    <SEO title="Home" />
    <h1>The Swiss Corrosion Network</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>

    <h2>News</h2>
    <div id="news-container">
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
      <NewsCard
        title={"Something interesting happened"}
        date={"09.12.2020"}
        description={"Further description of the interesting event."}
      />
    </div>
  </Layout>
)

export default IndexPage
