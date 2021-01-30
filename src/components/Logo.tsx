import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import '../style/fonts.css'
import '../style/logo-fixing.css';
import { Link } from "gatsby";

const LogoRotation = keyframes`
  from { transform: rotate(0deg) }
  to { transform: rotate(360deg) }
`;

const LogoImg = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 5;

  animation: ${LogoRotation} linear infinite 50s;

  top: 35vh;
  @media (orientation: portrait) {
    top: 20vh;
  }
`;

const LogoInscription = styled.h1`
  color: whitesmoke;
  text-align: center;
  font-size: 6em;
  
  font-family: 'MedievalSharp', cursive;

  position: absolute;
  left: 0;
  right: 0;
  
  z-index: 15;

  top: calc(35vh - 35px);
  @media (orientation: portrait) {
    top: calc(20vh - 35px);
  }
`

interface LogoProps {
  logoSrc: string
  isDesktop: boolean
  siteTitle: string
}

export default class Logo extends React.Component<LogoProps> {
  logoParts = {
    img: React.createRef<HTMLImageElement>(),
    insc: React.createRef<HTMLHeadingElement>()
  }

  componentDidMount() {
    if (this.props.isDesktop) {
      const imgClass = this.logoParts.img.current!!.classList
      const inscClass = this.logoParts.insc.current!!.classList
      document.addEventListener('scroll', (it) => {
        if (window.scrollY > 350) {
          imgClass.add('logo-img-fixed')
          inscClass.add('logo-incs-fixed')
        }
        else {
          imgClass.remove('logo-img-fixed')
          inscClass.remove('logo-incs-fixed')
        }
      });
    }
  }

  render() {
    return (// TODO(Replace with new Logo)
      <>
        <LogoImg src={this.props.logoSrc} alt="" ref={this.logoParts.img}/>
        <LogoInscription ref={this.logoParts.insc}><Link to="/">Mirna</Link></LogoInscription>
      </>
    );
  }
}
