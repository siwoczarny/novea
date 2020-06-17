import React from 'react';
import styled, { css } from 'styled-components';
import logo from 'assets/logo/logo-foot.svg';
import fbIcon from 'assets/icons/facebook.svg';

const StyledWrapper = styled.div`
  width: 100%;
  height: 176px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.dimgrey};
  z-index: 999;
  @media (min-width: 992px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const InnerWappper = styled.div`
  display: flex;
  height: min-content;
  flex-direction: column;
  justify-content: flex-start;

  ${({ center }) =>
    center &&
    css`
      justify-content: center;
    `}

  @media (min-width: 992px) {
    height: 144px;
  }
`;

const StyledLink = styled.a`
  display: none;
  padding: 8px 0;
  font-size: ${({ theme }) => theme.fontSize.xxs};
  color: ${({ theme }) => theme.lightgrey};

  ${({ flex }) =>
    flex &&
    css`
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      width: 320px;
      height: 100px;
      border-radius: 8px;
      background-color: ${({ theme }) => theme.darkgrey};
    `}

  @media (min-width: 992px) {
    display: flex;
  }
`;

const StyledCaption = styled.p`
  padding: 8px 0 0;
  font-size: ${({ theme }) => theme.fontSize.xxs};
  line-height: 1.5;
  letter-spacing: 0.2px;
  text-align: center;
  color: ${({ theme }) => theme.lightgrey};
  @media (min-width: 992px) {
    padding: 16px 0 0;
  }
`;

const Footer = () => (
  <StyledWrapper>
    <InnerWappper center>
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
