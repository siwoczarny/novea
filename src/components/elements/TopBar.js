import React from 'react';
import styled from 'styled-components';
import { Nav } from 'react-bootstrap';
import phoneIcon from 'assets/icons/call.svg';
import mailIcon from 'assets/icons/at.svg';
import fontS from 'assets/icons/a.svg';
import fontM from 'assets/icons/aa.svg';
import fontL from 'assets/icons/aaa.svg';

const StyledNav = styled(Nav)`
  padding: 0 16px;
  height: 28px;
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.midnightblue};
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

const StyledButton = styled.button`
  background: transparent;
  border: none;
`;

const ActionBar = () => (
  <StyledNav>
    <Nav.Item>
      <StyledLink href="tel: 111-222-333">
        <img src={phoneIcon} alt="phone" /> 111 222 333
      </StyledLink>
      <StyledLink variant="white" href="mailto: biuro@noveaclinic.pl">
        <img src={mailIcon} alt="phone" /> biuro@noveaclinic.pl
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
