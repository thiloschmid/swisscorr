import { graphql, Link, useStaticQuery } from "gatsby"
import { useState } from "react"

// faster loading of the background using the gatsby plugin
import BackgroundImage from "gatsby-background-image"

import styled from "@emotion/styled"
import { css } from "@emotion/react"

import Menu, { NavMenuContainer } from "./menu"

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

  @media (max-width: 900px) {
    justify-content: space-between;

    ${NavMenuContainer}.open {
      display: flex;
      flex-direction: column;
      min-width: 80vw;
      background: rgba(0, 0, 0, 0.4);
      margin-bottom: 1rem;
    }
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

  @media (max-width: 900px) {
    border: 1px solid grey;
  }
`

const Hamburger = styled.input`
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: none;

  @media (max-width: 900px) {
    display: block;
    padding: 1rem;
    transition: transform 0.5s;

    &.open {
      transform: rotate(180deg);
    }
  }
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
          <Hamburger
            className={collapseNav ? "open" : ""}
            type="image"
            src={hamburger}
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
