import { Link } from "gatsby"
import React from "react"

import BackgroundImage from "gatsby-background-image"

interface MenuCardProps {
  picture: any
  text: string
  link: string
}

const MenuCard = ({ picture, text, link }: MenuCardProps) => (
  <div className="menu-card-wrapper">
    <Link to={link}>
      <BackgroundImage
        className="menu-card"
        Tag="div"
        backgroundColor="black"
        fluid={picture}
      >
        <h2>{text}</h2>
      </BackgroundImage>
    </Link>
  </div>
)

export default MenuCard
