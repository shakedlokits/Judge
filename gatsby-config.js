module.exports = {
  siteMetadata: {
    title: 'Judge'
  },
  plugins: [{
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`
      }
    }, {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `rounds`,
        path: `${__dirname}/data/`
      }
    },
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-glamor`,
    `gatsby-transformer-remark`
  ]
}
