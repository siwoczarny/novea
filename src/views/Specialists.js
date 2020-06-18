import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'components/elements/Link';
import Name from 'components/elements/Name';
import Spec from 'components/elements/Spec';
import Text from 'components/elements/Text';
import Title from 'components/elements/Title';
import specPhoto1 from 'assets/images/spec1.png';
import specPhoto2 from 'assets/images/spec2.png';
import specPhoto3 from 'assets/images/spec3.png';

const StyledWrapper = styled(Container)`
  position: relative;
  padding: 84px 0 176px;
  text-align: center;
`;

const InnerWrapper = styled.div`
  padding: 40px 0;

  @media (min-width: 992px) {
    padding: 40px 0;
  }
`;

const StyledText = styled(Text)`
  padding: 32px 40px 56px;
`;

const Specialists = () => (
  <StyledWrapper>
    <Row>
      <Col>
        <InnerWrapper>
          <Title>Specjaliści</Title>
          <StyledText>
            Najlepsi specjaliści w naszej okolicy pracują właśnie znami. Renomowane grono lekarzy,
            <br />
            które zawsze daje z siebie wszystko, by Ci pomóc
          </StyledText>
        </InnerWrapper>
      </Col>
    </Row>
    <Row>
      <Col lg={4}>
        <InnerWrapper>
          <img src={specPhoto1} alt="specialist" />
          <Name>Adam Kowalski</Name>
          <Spec>Ginekolog</Spec>
          <Link to="...">Więcej o lekarzu</Link>
        </InnerWrapper>
      </Col>
      <Col lg={4}>
        <InnerWrapper>
          <img src={specPhoto2} alt="specialist" />
          <Name>Jan Nowak</Name>
          <Spec>Ortopeda</Spec>
          <Link to="...">Więcej o lekarzu</Link>
        </InnerWrapper>
      </Col>
      <Col lg={4}>
        <InnerWrapper>
          <img src={specPhoto3} alt="specialist" />
          <Name>Krystyna Babicz</Name>
          <Spec>Endokrynolog</Spec>
          <Link to="...">Więcej o lekarzu</Link>
        </InnerWrapper>
      </Col>
      <Col lg={4}>
        <InnerWrapper>
          <img src={specPhoto2} alt="specialist" />
          <Name>Jan Nowak</Name>
          <Spec>Ortopeda</Spec>
          <Link to="...">Więcej o lekarzu</Link>
        </InnerWrapper>
      </Col>
      <Col lg={4}>
        <InnerWrapper>
          <img src={specPhoto3} alt="specialist" />
          <Name>Krystyna Babicz</Name>
          <Spec>Endokrynolog</Spec>
          <Link to="...">Więcej o lekarzu</Link>
        </InnerWrapper>
      </Col>
      <Col lg={4}>
        <InnerWrapper>
          <img src={specPhoto1} alt="specialist" />
          <Name>Adam Kowalski</Name>
          <Spec>Ginekolog</Spec>
          <Link to="...">Więcej o lekarzu</Link>
        </InnerWrapper>
      </Col>
    </Row>
  </StyledWrapper>
);

export default Specialists;
