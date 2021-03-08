import React from "react"
import { Link, graphql } from "gatsby"

import BackgroundImage from "gatsby-background-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Dialog from "../components/dialog"

// import bridge from "../images/bridge.jpg"

const About = ({ data }: any) => (
  <Layout>
    <SEO title="About" />
    <h1>About</h1>
    <BackgroundImage
      Tag="div"
      className="dialog-container"
      id="about-dialog"
      fluid={data.bridge.childImageSharp.fluid}
    >
      <Dialog
        title={"Mission"}
        text={[
          `The Swiss Corrosion Network ties together partners from industry and scientific institutions to foster collaboration, knowledge exchange and synergies. We are committed to corrosion education and courses. A particular goal is to support and promote young corrosion scientists and corrosion engineers.
      
      Our members bring together expertise in corrosion science and technology from a broad range of sectors, including civil engineering and construction, subsurface engineering, nuclear engineering and radioactive waste storage, oil and gas, biomedical, geothermal energy, additive manufacturing,  [to be completed]
      
      An annual national conference is organized, see `,
          <Link to="/corrosion-day">Swiss Corrosion Science Day</Link>,
          ".",
        ]}
      />
    </BackgroundImage>
    <h2>Organization</h2>
    <p>
      The Swiss Corrosion Network is run by all its members, with an annual
      general assembly meeting. The Swiss Corrosion Network is endorsed by
      SGO-SST.
    </p>

    <h2>Steering committee</h2>
    <ul>
      <li>Prof. Dr. Ueli Angst, ETH Zurich</li>
      <li>
        Prof. Dr. Laura Brambilla, University of Applied Sciences Western
        Switzerland, Neuchâtel
      </li>
      <li>Dr. Anna Iguol Muñoz, Ecole polytechnique fédérale de Lausanne</li>
      <li>Dr. Patrik Schmutz, EMPA</li>
    </ul>
  </Layout>
)

export const query = graphql`
  {
    bridge: file(relativePath: { eq: "bridge.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default About
