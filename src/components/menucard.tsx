import { Link } from "gatsby"
import React from "react"

import BackgroundImage from "gatsby-background-image"

interface MenuCardProps {
  picture: any
  text: string
  subtext?: string
  link: string
}

const MenuCard = ({ picture, text, subtext, link }: MenuCardProps) => (
  <div className="menu-card-wrapper">
    <Link to={link}>
      <BackgroundImage
        className="menu-card"
        Tag="div"
        backgroundColor="black"
        fluid={picture}
      >
        <h2>{text}</h2>
        {subtext && <h4>{subtext}</h4>}
      </BackgroundImage>
    </Link>
  </div>
)

export default MenuCard
