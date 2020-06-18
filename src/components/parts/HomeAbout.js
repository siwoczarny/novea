import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Button from 'components/elements/Button';
import Title from 'components/elements/Title';
import Text from 'components/elements/Text';
import photo from 'assets/images/clinic.jpg';

const StyledWrapper = styled(Container)`
  margin: 80px auto;
  width: 100%;
`;

const StyledCol = styled(Col)`
  text-align: center;
  @media (min-width: 992px) {
    margin: auto 0;
    text-align: left;
  }
`;

const StyledImage = styled.img`
  padding: 32px 0;
  width: 70vw;
  @media (min-width: 992px) {
    width: 464px;
    padding: inherit;
  }
`;

const StyledText = styled(Text)`
  padding: 32px;
  @media (min-width: 992px) {
    padding: 32px 0;
  }
`;

const HomeAbout = () => (
  <StyledWrapper>
    <Row>
      <StyledCol lg={6}>
        <StyledImage src={photo} alt="clinic" />
      </StyledCol>
      <StyledCol lg={6}>
        <Title>Klinika</Title>
        <StyledText>
          Już dzisiaj zadbaj o swoje zdrowie. Zarezerwuj termin konsultacji u naszego specjalisty i
          ciesz się zdrowym życiem
        </StyledText>
        <Button as={NavLink} to="/about">
          Więcej o nas
        </Button>
      </StyledCol>
    </Row>
  </StyledWrapper>
);

export default HomeAbout;
