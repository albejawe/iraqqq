module.exports = {
  pathPrefix: "/COVID19-Worldwide-Stats",
  siteMetadata: {
    title: `تجربه`,
    description: `تجربه`,
    author: `Maxine Chen`,
    siteSource: `تجربه`,
    dataSource: `تجربه`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data`,
      },
    },
    `gatsby-transformer-json`,
    `gatsby-theme-material-ui`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "تجربهتجربهتجربهتجربه",
        short_name: "تجربهتجربهتجربهتجربهتجربهتجربه",
        start_url: "تجربهتجربهتجربهتجربهتجربهتجربه",
        background_color: "#fafafa",
        theme_color: "#008dc9",
        display: "standalone",
        icon: "images/icon.png", 
      },
    },
  ],
}
