module.exports = {
  siteMetadata: {
    title: 'React Explained',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#363A45',
        theme_color: '#363A45',
        display: 'minimal-ui',
        icon: 'src/images/badge--react-dark.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}
