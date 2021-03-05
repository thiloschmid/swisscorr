import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import MenuCard from "../components/menucard"

import image1 from "../images/person-holding-metal.jpg"
import image2 from "../images/handrail.jpg"

const SecondPage = () => (
  <Layout>
    <SEO title="Swiss Corrosion Science Day" />
    <h1>Swiss Corrosion Science Day</h1>
    
    <div id="education-menu">
    <MenuCard 
      picture={image1}
      text={`Current Swiss Corrosion Science Day`}
      link={"/corrosion-day/current"}
    />
    <MenuCard 
      picture={image2}
      text={`Past Swiss Corrosion Science Days`}
      link={"/corrosion-day/past"}
    />
    </div>
  </Layout>
)

export default SecondPage
