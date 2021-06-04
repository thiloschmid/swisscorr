module.exports = {
  siteMetadata: {
    title: `Swisscorr`,
    description: `The Swiss corrosion network is a partnership of Swiss industrial and scientific institutions working in the field of corrosion engineering and corrosion science.`,
    author: `Thilo Schmid`,
    keywords: [
      "Swisscorr",
      "Corrosion",
      "Corrosion Science",
      "Swiss Corrosion Science",
      "Swiss Corrosion Science Network",
      "Durability",
      "Durability of Engineering Materials",
      "Corrosion Courses",
      "Swiss Corrosion",
      "Corrosion Switzerland",
      "Corrosion Science Switzerland",
    ],
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-image`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: ["/", "/about/"],
      },
    },
  ],
}
