module.exports = {
  siteMetadata: {
    title: `Gary Li`,
    description: `Gary Li's Personal Website`,
    author: `Gary Li`,
    url: "https://www.iamgary.li"
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Open Sans`,
            variants: [`800`],
          },
          {
            family: `Nunito`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `I am Gary Li`,
        short_name: `Gary Li`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `fullscreen`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
