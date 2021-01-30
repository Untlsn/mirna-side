import * as React from 'react';
import styled from 'styled-components';
import '../style/fonts.css';
import { Link } from 'gatsby';
import { NavLinks, SingleLink } from '../myInterfaces/SiteData';

const HeaderWrapper = styled.header`
  height: 70px;
  width: 100vw;
  background-color: #121212;
  position: fixed;
  top: 0;
  z-index: 10;

  display: flex;
  justify-content: space-between;

  padding: 0 50px;
`;
const LinksWrapper = styled.nav`
  display: flex;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: whitesmoke;
  margin: 0 15px;

  font-size: 1.5em;
`;

const createLink = (singleLinkList: SingleLink[]) => {
  return singleLinkList.map((navLink) => (
    <NavLink key={navLink.name} to={navLink.to}>
      {navLink.name}
    </NavLink>
  ));
}


interface ThisProps {
  navLinks: NavLinks;
}

export default ({ navLinks }: ThisProps) => {
  return (
    <HeaderWrapper>
      <LinksWrapper>{createLink(navLinks.left)}</LinksWrapper>
      <LinksWrapper>{createLink(navLinks.right)}</LinksWrapper>
    </HeaderWrapper>
  );
};
