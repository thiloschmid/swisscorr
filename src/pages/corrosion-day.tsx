import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import MenuCard, { MenuContainer } from "../components/menucard"

const CorrosionDay = () => {
  const { person, handrail } = useStaticQuery(graphql`
    {
      person: file(relativePath: { eq: "person-holding-metal.jpg" }) {
        childImageSharp {
          gatsbyImageData(quality: 80, formats: [AUTO, WEBP, AVIF])
        }
      }
      handrail: file(relativePath: { eq: "handrail.jpg" }) {
        childImageSharp {
          gatsbyImageData(quality: 80, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Swiss Corrosion Science Day" />
      <h1>Swiss Corrosion Science Day</h1>

      <MenuContainer>
        <MenuCard
          picture={getImage(person)}
          text={`Swiss Corrosion Science Day 2021`}
          subtext={`April 26, 2021, Zofingen & Online`}
          link={"/corrosion-day/current"}
        />
        <MenuCard
          picture={getImage(handrail)}
          text={`Past Swiss Corrosion Science Days`}
          link={"/corrosion-day/past"}
        />
      </MenuContainer>
    </Layout>
  )
}

export default CorrosionDay