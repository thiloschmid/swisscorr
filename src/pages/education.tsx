import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import MenuCard, { MenuContainer } from "../components/menucard"

const Education = ({ data }: any) => {
  const { microscopy, tunnel } = useStaticQuery(graphql`
    {
      microscopy: file(relativePath: { eq: "microscopy.jpg" }) {
        childImageSharp {
          gatsbyImageData(quality: 80, formats: [AUTO, WEBP, AVIF])
        }
      }
      tunnel: file(relativePath: { eq: "tunnel.jpg" }) {
        childImageSharp {
          gatsbyImageData(quality: 80, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Education" />
      <h1>Education</h1>
      <MenuContainer>
        <MenuCard
          picture={getImage(microscopy)}
          text={`Academic Teaching`}
          link={"/education/academic-teaching"}
        />
        <MenuCard
          picture={getImage(tunnel)}
          text={`Practitioners courses`}
          link={"/education/practitioners-courses"}
        />
      </MenuContainer>
    </Layout>
  )
}

export default Education
