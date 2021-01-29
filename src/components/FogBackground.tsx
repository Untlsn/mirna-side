import * as React from "react"
import styled, { keyframes } from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'

const FogWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 0;

  @media (orientation: portrait) {
    height: 60vw;
  }
`

const opacityGap = 0.5

const opacityChange1 = keyframes`
  0% { opacity: ${.1 * opacityGap}; }
  22% { opacity: ${.4 * opacityGap}; }
  40% { opacity: ${.28 * opacityGap}; }
  58% { opacity: ${.4 * opacityGap}; }
  80% { opacity: ${.16 * opacityGap}; }
  100% { opacity: ${.1 * opacityGap}; }
`

const opacityChange2 = keyframes`
  0% { opacity: ${.4 * opacityGap}; }
  25% { opacity: ${.2 * opacityGap}; }
  50% { opacity: ${.1 * opacityGap}; }
  80% { opacity: ${.3 * opacityGap}; }
  100% { opacity: ${.4 * opacityGap}; }
`


const littleMove = keyframes`
  from {
    transform: translateX(5vw)
  }
  to {
    transform: translateX(-5vw);
  }
`

const FloatingFog = styled.img`
  position: absolute;
  bottom: 0;
  width: 120vw;
  height: 100%;
`

const FloatingFog1 = styled(FloatingFog)`
  animation: ${opacityChange1} 7s ease infinite alternate, ${littleMove} 15s linear infinite alternate;
`
const FloatingFog2 = styled(FloatingFog)`
  top: -5px;
  animation: ${opacityChange2} 10s ease infinite alternate, ${littleMove} 15s linear infinite alternate;
`

interface ImageQuery {
  image: {
    childImageSharp: {
      fluid: {
        src: string
      }
    }
  }
}

export default () => {

  const fogImage = useStaticQuery<ImageQuery>(graphql`
      query Image {
        image: file(relativePath: {eq: "fog.png"}) {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
  `)

  const fogImageSrc = fogImage.image.childImageSharp.fluid.src

  return (
    <FogWrapper>
      <FloatingFog1 src={ fogImageSrc } />
      <FloatingFog2 src={ fogImageSrc } />
    </FogWrapper>
  )
}


