import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import bgImage from "../images/bg-roof.png"
import swisscorrLogo from "../logos/swisscorr.svg"

console.log(bgImage)

interface HeaderProps {
  siteTitle: string
  headerHeight?: string
}

const Header = ({ siteTitle, headerHeight }: HeaderProps) => (
  <header
    style={{
      // background: "black",
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
          {/* <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              {siteTitle}
            </Link>
          </h1> */}
          <Link to="/">
            <img src={swisscorrLogo} width={200} />
          </Link>
          <Link to="/about">About</Link>
          <Link to="/members">Members & Competences</Link>
          <Link to="/education">Education</Link>
          <Link to="/corrosion-day">Swiss Corrosion Science Day</Link>
        </nav>
      </h4>
      {headerHeight && (
        <div id="header-dialog">
          Welcome to the website of the Swiss Corrosion Network - a partnership
          of Swiss industrial and scientific institutions working in the field
          of corrosion engineering and corrosion science.
        </div>
      )}
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
