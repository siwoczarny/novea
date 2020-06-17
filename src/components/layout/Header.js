import React from 'react';
import styled, { css } from 'styled-components';
import { Navbar, Nav, Button } from 'react-bootstrap';
import logo from 'assets/logo/logo-nav.svg';
import plusIcon from 'assets/icons/plus.svg';

const StyledNavbar = styled(Navbar)`
  position: fixed;
  top: 28px;
  right: 0;
  left: 0;
  padding: 7px 16px;
  height: 56px;
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0px 2px 8px 0 rgba(0, 0, 0, 0.15);

  z-index: 999;
  @media (min-width: 992px) {
    padding: 0 32px;
  }
`;

const StyledToggle = styled(Navbar.Toggle)`
  border: none;
  font-size: 24px;
`;

const StyledButton = styled(Button)`
  margin: 0 12px 0 0;
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

const StyledList = styled(Navbar.Collapse)`
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  box-shadow: 2px 9px 8px 0 rgba(0, 0, 0, 0.15);
  overflow: hidden;
  @media (min-width: 992px) {
    box-shadow: none;
  }
`;

const StyledLink = styled(Nav.Link)`
  padding: 16px 24px;
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: 400;
  line-height: 1.43;
  letter-spacing: 0.53px;
  color: ${({ theme }) => theme.dimgrey};
  background-color: ${({ theme }) => theme.white};
  @media (min-width: 992px) {
    ${({ focus }) =>
      focus &&
      css`
        padding: 8px 24px;
        border-radius: 4px;
        color: ${({ theme }) => theme.white};
        background-color: ${({ theme }) => theme.springgreen};
      `}
  }
`;

const Menu = () => (
  <StyledNavbar expand="lg">
    <StyledToggle aria-controls="basic-navbar-nav" />
    <Navbar.Brand href="#home">
      <img src={logo} alt="logo" />
    </Navbar.Brand>
    <StyledButton />
    <StyledList id="basic-navbar-nav" className="justify-content-end">
      <StyledLink href="#oferta">Oferta</StyledLink>
      <StyledLink href="#spacjalisci">Specjaliści</StyledLink>
      <StyledLink href="#cennik">Cennik</StyledLink>
      <StyledLink href="#onas">O nas</StyledLink>
      <StyledLink href="#aktualnosci">Aktualności</StyledLink>
      <StyledLink href="#kontakt">Kontakt</StyledLink>
      <StyledLink focus href="#rezerwuj">
        Rezerwuj
      </StyledLink>
    </StyledList>
  </StyledNavbar>
);

export default Menu;
