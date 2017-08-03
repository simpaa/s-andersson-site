module.exports = {
  siteMetadata: {
    title: `s-andersson`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog-posts`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: []
      }
    },
  ],
}
