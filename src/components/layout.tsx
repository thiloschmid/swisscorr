/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { css } from "@emotion/react"

import Header from "./header"

import "../css/layout.css"
import "../css/main.css"

interface LayoutProps {
  children?: any
  landingPage?: boolean
}

const Layout = ({ children, landingPage }: LayoutProps) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header
        landingPage={landingPage}
        siteTitle={data.site.siteMetadata?.title || `Title`}
      />
      <div
        css={css`
          margin: 0 auto;
          max-width: 1400px;
          padding: 0 1.0875rem 1.45rem;
        `}
      >
        <main>{children}</main>
        {/* <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}
        </footer> */}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  landingPage: PropTypes.bool,
}

export default Layout
