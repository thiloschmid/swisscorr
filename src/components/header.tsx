import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

import DropdownLink from "./dropdown-link"

// import images
import bgImage from "../images/roof.png"
import swisscorrLogo from "../logos/swisscorr.svg"

import hamburger from "../images/hamburger.svg"

console.log(bgImage)

interface HeaderProps {
  siteTitle: string
  headerHeight?: string
}

/* Renders the header. headerHeight is only specified for the landing page,
 * where an additional dialog box is shown.
 */

const Header = ({ siteTitle, headerHeight }: HeaderProps) => {

  let [collapseNav, setCollapseNav] = useState(true);

  return (
    <header
      style={{
        marginBottom: `1.45rem`,
        color: "black",
        backgroundImage: `url(${bgImage})`,
        height: headerHeight || `6rem`,
        backgroundSize: `100%`,
        backgroundRepeat: `no-repeat`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1400,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h4>
          <nav>
            <span id="logo">
              <Link to="/">
                <img src={swisscorrLogo} width={200} />
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
            <img
              src={hamburger} 
              id="open-menu"
              alt="menu"
              onClick={() => setCollapseNav(!collapseNav)}
            />
          </nav>
        </h4>
        {headerHeight && (
          <div id="header-dialog">
            Welcome to the website of the Swiss Corrosion Network - a
            partnership of Swiss industrial and scientific institutions working
            in the field of corrosion engineering and corrosion science.
          </div>
        )}
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
