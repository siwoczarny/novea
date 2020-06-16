import React from 'react';
import styled, { css } from 'styled-components';
import { Jumbotron } from 'react-bootstrap';
import Text from 'components/elements/Text';
import quoteIcon from 'assets/icons/quote.svg';
import avatar from 'assets/images/avatar.png';

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  @media (min-width: 992px) {
    flex-direction: row;
  }
`;

const StyledText = styled(Text)`
  margin: auto 32px;
  font-style: italic;
  text-align: center;
  @media (min-width: 992px) {
    text-align: left;
  }
`;

const StyledAvatar = styled.img`
  width: 106px;
  display: flex;
  align-self: center;
  @media (min-width: 992px) {
    margin: 0 32px 0 0;
  }
`;

const StyledQuote = styled.img`
  display: flex;

  ${({ right }) =>
    right &&
    css`
      align-self: flex-end;
    `}
  ${({ left }) =>
    left &&
    css`
      align-self: flex-start;
    `}
`;

const HomeJumbotron = () => (
  <Jumbotron>
    <InnerWrapper>
      <StyledAvatar src={avatar} alt="avatar" />
      <StyledQuote right src={quoteIcon} alt="quote marks" />
      <StyledText>
        Świetna klinika, oferująca pełen wachlarz możliwości.
        <br />
        Zaopiekowali się mną najlepiej jak się da.
        <br />
        Jestem bardzo wdzięczna!
      </StyledText>
      <StyledQuote left src={quoteIcon} alt="quote marks" />
    </InnerWrapper>
  </Jumbotron>
);

export default HomeJumbotron;
