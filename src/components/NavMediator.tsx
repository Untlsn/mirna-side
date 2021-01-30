import FloatingHeader from './FloatingHeader'
import HamburgerMenu from './HamburgerMenu'
import * as React from 'react'
import { NavLinks } from '../myInterfaces/SiteData'
import Logo from './Logo'

interface ThisProps {
  isDesktop: boolean
  navLinks: NavLinks
  logoSrc: string
  title: string
}

export default ({ isDesktop, navLinks, logoSrc, title }: ThisProps) => {
  return (
    <>
      {isDesktop ? (
        <FloatingHeader navLinks={navLinks} />
      ) : (
        <HamburgerMenu navLinks={navLinks} />
      )}
      <Logo logoSrc={logoSrc} isDesktop={isDesktop} siteTitle={title} />
    </>
  )
}
