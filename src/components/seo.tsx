/**
 * Search engine optimization. Set metadata to values defined in gatsby config
 * or provided on the corresponding page. 
 */

import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

interface SEOProps {
  description?: string
  lang?: string
  meta?: any
  title?: string
  keywords?: string[]
}

function SEO({ description, lang, meta, title, keywords }: SEOProps) {
  // eslint-disable react/jsx-pascal-case
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
          }
        }
      }
    `
  )

  // set description & title to the ones provided, or the one defined in gatsby-config.js
  const helmetDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata.title
  const helmetTitle = title || site.siteMetadata.title

  // appendd provided keywords
  const helmetKeywords = keywords
    ? keywords.concat(site.siteMetadata.keywords)
    : site.siteMetadata.keywords

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={helmetTitle}
      titleTemplate={title ? `${defaultTitle} | %s` : undefined}
      meta={[
        {
          name: `description`,
          content: helmetDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: helmetDescription,
        },
        {
          property: "keywords",
          content: helmetKeywords,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: helmetDescription,
        },

        ...meta,
      ]}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
}

export default SEO
