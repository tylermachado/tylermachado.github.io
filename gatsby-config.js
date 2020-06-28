/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
      `gatsby-plugin-react-helmet`,
      `gatsby-transformer-remark`,
      `gatsby-plugin-sass`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `markdown-pages`,
          path: `${__dirname}/content`,
        }
      }
  ]
}
