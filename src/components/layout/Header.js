import React from 'react';
import styled, { css } from 'styled-components';
import { Navbar, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
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

const StyledLink = styled(NavLink)`
  display: block;
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

const Header = () => {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <StyledNavbar expand="lg" expanded={expanded}>
      <StyledToggle
        aria-controls="basic-navbar-nav"
        onClick={() => setExpanded(expanded ? false : 'expanded')}
      />
      <Navbar.Brand>
        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink>
      </Navbar.Brand>
      <StyledButton as={NavLink} to="/reservations" />
      <StyledList id="basic-navbar-nav" className="justify-content-end">
        <StyledLink to="/services" onClick={() => setExpanded(false)}>
          Oferta
        </StyledLink>
        <StyledLink to="/specialists" onClick={() => setExpanded(false)}>
          Specjaliści
        </StyledLink>
        <StyledLink to="/prices" onClick={() => setExpanded(false)}>
          Cennik
        </StyledLink>
        <StyledLink to="/about" onClick={() => setExpanded(false)}>
          O nas
        </StyledLink>
        <StyledLink to="/news" onClick={() => setExpanded(false)}>
          Aktualności
        </StyledLink>
        <StyledLink to="/contact" onClick={() => setExpanded(false)}>
          Kontakt
        </StyledLink>
        <StyledLink focus to="/reservations onClick={() => setExpanded(false)}">
          Rezerwuj
        </StyledLink>
      </StyledList>
    </StyledNavbar>
  );
};

export default Header;
