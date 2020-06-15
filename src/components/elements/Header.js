import React from 'react';
import styled, { css } from 'styled-components';
import { Navbar, Nav, Button } from 'react-bootstrap';
import logo from 'assets/logo/logo-nav.svg';
import plusIcon from 'assets/icons/plus.svg';

const StyledNavbar = styled(Navbar)`
  padding: 0 32px;
  height: 56px;
  display: flex;
  flex-direction: row;
  @media (max-width: 992px) {
    padding: 0 16px;
  }
`;

const StyledToggle = styled(Navbar.Toggle)`
  border: none;
  font-size: 16px;
  color: ${({ theme }) => theme.midnightblue};
`;

const StyledButton = styled(Button)`
  display: none;
  @media (max-width: 992px) {
    display: inherit;
    width: 32px;
    height: 32px;
    border: none;
    background-image: url(${plusIcon});
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 14px;
    background-color: ${({ theme }) => theme.springgreen};
    outline: none;
  }
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
