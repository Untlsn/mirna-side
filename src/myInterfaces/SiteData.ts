export
interface SiteData {
  siteMetadata: {
    title: string
    navLinks: NavLinks
  }
}

export
interface NavLinks {
  left: SingleLink[]
  right: SingleLink[]
}

export
interface SingleLink {
  name: string
  to: string
}