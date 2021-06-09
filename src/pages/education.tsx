import { graphql } from "gatsby"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"

import MenuCard from "../components/menucard"

const EducationMenu = styled.div`
  display: flex;
  color: white !important;
  text-decoration: none;
  margin: 0 -0.5rem;

  a {
    text-decoration: none;
    color: white;
  }
`

const Education = ({ data }: any) => {
  return (
    <Layout>
      <SEO title="Education" />
      <h1>Education</h1>
      <EducationMenu>
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
      </EducationMenu>
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
