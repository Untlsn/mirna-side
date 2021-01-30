import {graphql, useStaticQuery} from "gatsby";
import Image from "../myInterfaces/Image";
import {SiteData} from "../myInterfaces/SiteData";

const query = graphql`
  {
    fogImg: file(relativePath: { eq: "fog.png" }) {
      childImageSharp {
        fluid {
          src
        }
      }
    }
    logoImg: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fluid {
          src
        }
      }
    }
    site {
      siteMetadata {
        title
        navLinks {
          left {
            name
            to
          }
          right {
            name
            to
          }
        }
      }
    }
  }
`

interface ImagesAndSideData {
  fogImg: Image
  logoImg: Image
  site: SiteData
}

const imagesAndSideData = () => useStaticQuery<ImagesAndSideData>(query)

export default imagesAndSideData