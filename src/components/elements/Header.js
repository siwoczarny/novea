import React from 'react';
import styled, { css } from 'styled-components';
import { Navbar, Nav } from 'react-bootstrap';
import logo from 'assets/logo/logo-nav.svg';

const StyledNavbar = styled(Navbar)`
  padding: 0 32px;
  height: 56px;
`;

const StyledLink = styled(Nav.Link)`
  padding: 12px 24px 8px;
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: 500;
  line-height: 1.43;
  letter-spacing: 0.53px;
  color: ${({ theme }) => theme.dimgrey};

  ${({ focus }) =>
    focus &&
    css`
      border-radius: 4px;
      background-color: ${({ theme }) => theme.springgreen};
      color: ${({ theme }) => theme.white};
    `}
`;

const Menu = () => (
  <StyledNavbar expand="lg">
    <Navbar.Brand href="#home">
      <img src={logo} alt="logo" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
      <StyledLink href="#oferta">Oferta</StyledLink>
      <StyledLink href="#spacjalisci">Specjaliści</StyledLink>
      <StyledLink href="#cennik">Cennik</StyledLink>
      <StyledLink href="#onas">O nas</StyledLink>
      <StyledLink href="#aktualnosci">Aktualności</StyledLink>
      <StyledLink href="#kontakt">Kontakt</StyledLink>
      <StyledLink focus href="#rezerwuj">
        Rezerwuj
      </StyledLink>
    </Navbar.Collapse>
  </StyledNavbar>
);

export default Menu;
