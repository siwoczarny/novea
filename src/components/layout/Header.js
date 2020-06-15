import React from 'react';
import styled, { css } from 'styled-components';
import { Navbar, Nav, Button } from 'react-bootstrap';
import logo from 'assets/logo/logo-nav.svg';
import plusIcon from 'assets/icons/plus.svg';

const StyledNavbar = styled(Navbar)`
  padding: 7px 16px;
  height: 56px;
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.white};
  z-index: 999;
  @media (min-width: 992px) {
    padding: 0 32px;
  }
`;

const StyledToggle = styled(Navbar.Toggle)`
  border: none;
  font-size: 24px;
  color: ${({ theme }) => theme.midnightblue};
`;

const StyledButton = styled(Button)`
  display: inherit;
  width: 32px;
  height: 32px;
  border: none;
  background-image: url(${plusIcon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 16px;
  background-color: ${({ theme }) => theme.springgreen};
  outline: none;
  @media (min-width: 992px) {
    display: none;
  }
`;

const StyledLink = styled(Nav.Link)`
  padding: 8px 24px;
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: 400;
  line-height: 1.43;
  letter-spacing: 0.53px;
  color: ${({ theme }) => theme.dimgrey};
  background-color: ${({ theme }) => theme.white};

  ${({ focus }) =>
    focus &&
    css`
      border-radius: 4px;
      color: ${({ theme }) => theme.white};
      background-color: ${({ theme }) => theme.springgreen};
    `}
`;

const Menu = () => (
  <StyledNavbar expand="lg">
    <StyledToggle aria-controls="basic-navbar-nav" />
    <Navbar.Brand href="#home">
      <img src={logo} alt="logo" />
    </Navbar.Brand>
    <StyledButton />
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
