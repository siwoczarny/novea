import React from 'react';
import styled from 'styled-components';
import { Nav } from 'react-bootstrap';
import phoneIcon from 'assets/icons/call.svg';
import mailIcon from 'assets/icons/at.svg';
import fontS from 'assets/icons/a.svg';
import fontM from 'assets/icons/aa.svg';
import fontL from 'assets/icons/aaa.svg';

const StyledNav = styled(Nav)`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  padding: 0 16px;
  height: 28px;
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.midnightblue};
  z-index: 999;
`;

const StyledLink = styled.a`
  padding: 0 8px;
  font-size: ${({ theme }) => theme.fontSize.xs};
  line-height: 1.29;
  letter-spacing: 0.6px;
  color: ${({ theme }) => theme.white};
  :hover {
    color: ${({ theme }) => theme.white};
  }
`;

const StyledSpan = styled.span`
  display: none;
  @media (min-width: 992px) {
    display: inherit;
  }
`;

const StyledButton = styled.button`
  background: transparent;
  border: none;
`;

const ActionBar = () => (
  <StyledNav>
    <Nav.Item>
      <StyledLink href="tel: 111-222-333">
        <img src={phoneIcon} alt="phone" />
        <StyledSpan> 111 222 333</StyledSpan>
      </StyledLink>
      <StyledLink variant="white" href="mailto: biuro@noveaclinic.pl">
        <img src={mailIcon} alt="phone" />
        <StyledSpan> biuro@noveaclinic.pl</StyledSpan>
      </StyledLink>
    </Nav.Item>
    <Nav.Item>
      <StyledButton>
        <img src={fontS} alt="font S" />
      </StyledButton>
      <StyledButton>
        <img src={fontM} alt="font M" />
      </StyledButton>
      <StyledButton>
        <img src={fontL} alt="font L" />
      </StyledButton>
    </Nav.Item>
  </StyledNav>
);

export default ActionBar;
