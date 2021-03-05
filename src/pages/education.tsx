import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import MenuCard from "../components/menucard"

import micro from "../images/microscopy.jpg"
import tunnel from "../images/tunnel.jpg"

const SecondPage = () => (
  <Layout>
    <SEO title="Education" />
    <h1>Education</h1>
    <div id="education-menu">
    <MenuCard 
      picture={micro}
      text={`Academic Teaching`}
      link={"/education/academic-teaching"}
    />
    <MenuCard 
      picture={tunnel}
      text={`Practitioners courses`}
      link={"/education/practitioners-courses"}
    />
    </div>
  </Layout>
)

export default SecondPage