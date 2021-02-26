import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import MemberCard from "../components/membercard"

// import logos
import eth from "../logos/eth.png"

const SecondPage = () => (
  <Layout>
    <SEO title="Members & Competences" />
    <h1>Members & Competences</h1>
    <MemberCard
      name={`Prof. Dr. Ueli Angst - Durability of Engineering Materials Research Group`}
      logo={eth}
      organisation={`Institute for Building Materials, Department of Civil, Environmental and Geomatic Engineering`}
      competences={`Corrosion in civil and subsurface engineering. Corrosion in additivie manufacturing. Porous media. Non-destructive testing. Life cycle assessment. Experimental and computational approaches.`}
    />
  </Layout>
)

export default SecondPage
