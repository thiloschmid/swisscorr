import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import MenuCard from "../components/menucard"

import micro from "../images/microscopy.jpg"
import tunnel from "../images/tunnel.jpg"

const SecondPage = () => (
  <Layout>
    <SEO title="Swiss Corrosion Science Day" />
    <h1>Swiss Corrosion Science Day</h1>
    
    <div id="education-menu">
    <MenuCard 
      picture={micro}
      text={`Current Swiss Corrosion Science Day`}
      link={"/corrosion-day/current"}
    />
    <MenuCard 
      picture={tunnel}
      text={`Past Swiss Corrosion Science Days`}
      link={"/corrosion-day/past"}
    />
    </div>
  </Layout>
)

export default SecondPage
