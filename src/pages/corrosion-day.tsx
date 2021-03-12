import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import MenuCard from "../components/menucard"


const SecondPage = ({ data } : any) => (
  <Layout>
    <SEO title="Swiss Corrosion Science Day" />
    <h1>Swiss Corrosion Science Day</h1>
    
    <div id="education-menu">
    <MenuCard 
      picture={data.person.childImageSharp.fluid}
      text={`Swiss Corrosion Science Day 2021`}
      subtext={`April 26, Zofingen`}
      link={"/corrosion-day/current"}
    />
    <MenuCard 
      picture={data.handrail.childImageSharp.fluid}
      text={`Past Swiss Corrosion Science Days`}
      link={"/corrosion-day/past"}
    />
    </div>
  </Layout>
)

export const query = graphql`
  {
    person: file(relativePath: { eq: "person-holding-metal.jpg" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    handrail: file(relativePath: { eq: "handrail.jpg" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default SecondPage
