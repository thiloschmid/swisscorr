import { graphql, Link, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

// faster loading of the background using the gatsby plugin
import BackgroundImage from "gatsby-background-image"

import DropdownLink from "./dropdown-link"

// import logos and menu hamburger button
import swisscorrLogo from "../logos/swisscorr.svg"
import hamburger from "../images/hamburger.svg"

interface HeaderProps {
  siteTitle: string
  landingPage?: boolean
}

const Header = ({ landingPage }: HeaderProps) => {
  // query the background image, use WebP if possible
  const data = useStaticQuery(
    graphql`
      {
        bg: file(relativePath: { eq: "roof.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  const imageData = data.bg.childImageSharp.fluid

  // if the viewport is not wide enough, the menu is collapsed initially
  let [collapseNav, setCollapseNav] = useState(true)

  return (
    <BackgroundImage
      Tag="header"
      backgroundColor="black"
      fluid={imageData}
      style={{ backgroundSize: "cover", marginBottom: `1.45rem` }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1400,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <nav>
          <span id="logo">
            <Link to="/">
              <img src={swisscorrLogo} alt="swisscorr logo" width={200} />
            </Link>
          </span>
          <span id="menu" className={collapseNav ? "" : "open"}>
            <Link className="navlink" to="/about">
              About
            </Link>
            <Link className="navlink" to="/members">
              Members & Competences
            </Link>
            <DropdownLink
              path="/education"
              name="Education"
              subpaths={[
                {
                  path: "/education/academic-teaching",
                  name: "Academic Teaching",
                },
                {
                  path: "/education/practitioners-courses",
                  name: "Practitioners courses",
                },
              ]}
            />
            <DropdownLink
              path="/corrosion-day"
              name="Swiss Corrosion Science Day"
              subpaths={[
                {
                  path: "/corrosion-day/current",
                  name: "Current Swiss Corrosion Science Day",
                },
                {
                  path: "/corrosion-day/past",
                  name: "Past Swiss Corrosion Science Days",
                },
              ]}
            />
            <Link className="navlink" to="/contact">
              Contact
            </Link>
          </span>
          <input
            type="image"
            src={hamburger}
            id="open-menu"
            alt="menu"
            onClick={() => setCollapseNav(!collapseNav)}
          />
        </nav>
        {landingPage && (
          <div id="header-dialog">
            Welcome to the website of the Swiss Corrosion Network - a
            partnership of Swiss industrial and scientific institutions working
            in the field of corrosion engineering and corrosion science.
          </div>
        )}
      </div>
    </BackgroundImage>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
