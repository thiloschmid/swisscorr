import { Link } from "gatsby"
import React from "react"

interface MenuCardProps {
  picture: any
  text: string
  link: string
}

const MenuCard = ({ picture, text, link }: MenuCardProps) => (
  <div className="menu-card-wrapper">
  <Link to={link}>
    <div className="menu-card" style={{backgroundImage: `url(${picture})`}}>
      <h2>{text}</h2>
    </div>
  </Link>
  </div>
)

export default MenuCard
