import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import MenuCard from "../components/menucard"

const Education = ({ data }: any) => {
  console.log(data)

  return (
    <Layout>
      <SEO title="Education" />
      <h1>Education</h1>
      <div id="education-menu">
        <MenuCard
          picture={data.microscopy.childImageSharp.fluid}
          text={`Academic Teaching`}
          link={"/education/academic-teaching"}
        />
        <MenuCard
          picture={data.tunnel.childImageSharp.fluid}
          text={`Practitioners courses`}
          link={"/education/practitioners-courses"}
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    microscopy: file(relativePath: { eq: "microscopy.jpg" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    tunnel: file(relativePath: { eq: "tunnel.jpg" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default Education
