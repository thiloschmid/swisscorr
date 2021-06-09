/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

import Header from "./header/header"

import "../css/layout.css"

interface LayoutProps {
  children?: any
  landingPage?: boolean
}

const PageContainer = styled.div`
  margin: 0 auto;
  max-width: 1400px;
  padding: 0 1.0875rem 1.45rem;
`

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
    // <> ... </> is a shorthand for a JSX Fragment
    <>
      <Header
        landingPage={landingPage}
        siteTitle={data.site.siteMetadata?.title}
      />
      <PageContainer>
        <main>{children}</main>
        {/* <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}
        </footer> */}
      </PageContainer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  landingPage: PropTypes.bool,
}

export default Layout
