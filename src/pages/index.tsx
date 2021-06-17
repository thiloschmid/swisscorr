import { StaticImage } from "gatsby-plugin-image"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"

import News from "../components/news"

import SlideShowImage from "../components/slideshow-image"

const SlideShow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin: 0 -0.5rem;
  margin-bottom: 1.45rem;
`

const IndexPage = () => (
  <Layout landingPage={true}>
    <SEO />
    <h1>The Swiss Corrosion Network</h1>
    <SlideShow>
      <SlideShowImage>
        <StaticImage
          src="../images/slideshow/bewaehrungsstahlkorrosion 2.jpg"
          height={300}
          alt="slideshow-image-1"
        />
      </SlideShowImage>
      <SlideShowImage>
        <StaticImage
          src="../images/slideshow/Ring im Hafen.jpg"
          height={300}
          alt="slideshow-image-2"
        />
      </SlideShowImage>
      <SlideShowImage>
        <StaticImage
          src="../images/slideshow/kran am hafen.jpg"
          height={300}
          alt="slideshow-image-3"
        />
      </SlideShowImage>
      <SlideShowImage>
        <StaticImage
          src="../images/slideshow/Flower3.png"
          height={300}
          alt="slideshow-image-4"
        />
      </SlideShowImage>
      <SlideShowImage>
        <StaticImage
          src="../images/slideshow/Background12.png"
          height={300}
          alt="slideshow-image-5"
        />
      </SlideShowImage>
    </SlideShow>

    <News />
  </Layout>
)

export default IndexPage
