import React from 'react';
import styled, { css } from 'styled-components';
import logo from 'assets/logo/logo-foot.svg';
import fbIcon from 'assets/icons/facebook.svg';

const StyledWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 176px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.dimgrey};
  @media (max-width: 768px) {
    height: 100px;
    flex-direction: column;
    justify-content: center;
  }
`;

const InnerWappper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLink = styled.a`
  padding: 8px 0;
  font-size: ${({ theme }) => theme.fontSize.xxs};
  color: ${({ theme }) => theme.lightgrey};

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      width: 320px;
      height: 100px;
      border-radius: 8px;
      background-color: ${({ theme }) => theme.darkgrey};
    `}

  @media (max-width: 768px) {
    display: none;
  }
`;

const StyledCaption = styled.p`
  padding: 16px 0 0;
  font-size: ${({ theme }) => theme.fontSize.xxs};
  line-height: 1.5;
  letter-spacing: 0.2px;
  text-align: center;
  color: ${({ theme }) => theme.lightgrey};
  @media (max-width: 768px) {
    padding: 8px 0 0;
  }
`;

const Footer = () => (
  <StyledWrapper>
    <InnerWappper>
      <img src={logo} alt="logo" />
    </InnerWappper>
    <InnerWappper>
      <StyledLink href="#">O nas</StyledLink>
      <StyledLink href="#">Specjaliści</StyledLink>
      <StyledLink href="#">Usługi</StyledLink>
      <StyledLink href="#">Cennik</StyledLink>
    </InnerWappper>
    <InnerWappper>
      <StyledLink href="#">Rezerwacje</StyledLink>
      <StyledLink href="#">Aktualności</StyledLink>
      <StyledLink href="#">Wydarzenia</StyledLink>
      <StyledLink href="#">Kontakt</StyledLink>
    </InnerWappper>
    <InnerWappper>
      <StyledLink href="#">Polityka prywatności</StyledLink>
      <StyledLink href="#">Zasady użytkowania</StyledLink>
      <StyledLink href="#">Mapa strony</StyledLink>
    </InnerWappper>
    <InnerWappper>
      <StyledLink flex href="#">
        Znajdź nas na facebook.com
        <img src={fbIcon} alt="facebook icon" />
      </StyledLink>
      <StyledCaption>Copyright © 2020 Burchart Studio. All rights reserved.</StyledCaption>
    </InnerWappper>
  </StyledWrapper>
);

export default Footer;
