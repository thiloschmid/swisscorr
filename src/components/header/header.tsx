import { graphql, Link, useStaticQuery } from "gatsby"
import { useState } from "react"

// faster loading of the background using the gatsby plugin
import BackgroundImage from "gatsby-background-image"

import styled from "@emotion/styled"
import { css } from "@emotion/react"

import Menu from "./menu"

// import logos and menu hamburger button
import swisscorrLogo from "../../images/logos/swisscorr.svg"
import hamburger from "../../images/hamburger.svg"

interface HeaderProps {
  siteTitle: string
  landingPage?: boolean
}

const HeaderWrapper = styled.div`
  margin: 0 auto;
  max-width: 1400px;
  padding: 1.45rem 1.0875rem;
`

const Nav = styled.nav`
  font-weight: bold;
  font-size: larger;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 0.5rem;

  a {
    color: white;
    text-decoration: none;
    padding: 0.5rem;
  }
`

const LogoWrapper = styled.span`
  margin-right: 5rem;
  margin-bottom: 1rem;

  img {
    margin: 0;
  }
`

const Logo = () => (
  <LogoWrapper>
    <Link to="/">
      <img src={swisscorrLogo} alt="swisscorr logo" width={220} />
    </Link>
  </LogoWrapper>
)

const HeaderDialog = styled.div`
  max-width: 35rem;
  background-color: white;
  padding: 1rem;
`

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

  // For smaller viewports the nav is collapsed. This hook keeps track of
  // the state of the nav.
  let [collapseNav, setCollapseNav] = useState(true)

  return (
    <BackgroundImage
      Tag="header"
      backgroundColor="black"
      fluid={imageData}
      css={css`
        background-size: cover;
        margin-bottom: 1.45rem;
      `}
    >
      <HeaderWrapper>
        <Nav>
          <Logo />
          <Menu collapseNav={collapseNav} />
          <input
            className={collapseNav ? "open" : ""}
            type="image"
            src={hamburger}
            id="open-menu"
            alt="menu"
            onClick={() => setCollapseNav(!collapseNav)}
          />
        </Nav>
        {landingPage && (
          <HeaderDialog>
            Welcome to the website of the Swiss Corrosion Network - a
            partnership of Swiss industrial and scientific institutions working
            in the field of corrosion engineering and corrosion science.
          </HeaderDialog>
        )}
      </HeaderWrapper>
    </BackgroundImage>
  )
}

export default Header
