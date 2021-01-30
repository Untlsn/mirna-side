import * as React from 'react'
import styled from 'styled-components'
import '../style/global.css'
import FogBackground from '../components/FogBackground'
import { useMediaQuery } from 'react-responsive'
import NavMediator from '../components/NavMediator'
import imagesAndSideData from '../graphqlTemplates/getImagesAndSideData'

const FullViewWrapper = styled.div`
  position: relative;
  background-color: #121212;
  height: 100vh;
  width: 100vw;
`

export default () => {
  const { fogImg, logoImg, site } = imagesAndSideData()

  const [fogSrc, logoSrc] = [fogImg, logoImg].map(
    (image) => image.childImageSharp.fluid.src
  )
  const { title, navLinks } = site.siteMetadata

  const isDesktop = useMediaQuery({
    query: '(min-device-width: 1224px)',
  })

  return (
    <>
      <NavMediator
        isDesktop={isDesktop}
        navLinks={navLinks}
        logoSrc={logoSrc}
        title={title}
      />
      <FullViewWrapper>
        <FogBackground fogSrc={fogSrc} />
      </FullViewWrapper>
    </>
  )
}
