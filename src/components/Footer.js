import React from "react"
import {useStaticQuery, graphql} from "gatsby"
import {Typography, Box, Link} from "@material-ui/core"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteSource
          dataSource
        }
      }
    }
  `)
  const {siteSource, dataSource} = data.site.siteMetadata
  return (
    <Box p={4}>
      <Typography variant="body2" color="textSecondary" align="center">
        {"يتم التحديث كل 8 دقائق  عبر : "}
        <Link color="primary" href="https://github.com/mathdroid/covid-19-api">
          mathdroid API
        </Link>
        {", يتم الوصول عن طريق : "}
        <Link
          color="primary"
          href="https://www.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6"
        >
          John Hopkins University CSSE
        </Link>
        .
      </Typography>
      <Typography variant="body2" color="textSecondary" align="center">
        {"المصادر : "}
        <Link color="primary" href={dataSource}>
          {dataSource}
        </Link>
        .
        <br />
        {"المواقع : "}
        <Link color="primary" href={siteSource}>
          {siteSource}
        </Link>
        .
      </Typography>
    </Box>
  )
}

export default Footer
