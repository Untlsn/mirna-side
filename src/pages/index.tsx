import * as React from "react"
import styled from 'styled-components'
import FogBackground from '../components/FogBackground'
import '../style/global.css'

const MainWrapper = styled.div`
  background-color: #121212;
  height: 100vh;
  width: 100vw;
`



export default () => {

  return (
    <MainWrapper>
      <FogBackground />
    </MainWrapper>
  )
}


