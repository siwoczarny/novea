import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import doctorIcon from 'assets/icons/doctor.svg';
import pharmacyIcon from 'assets/icons/pharmacy.svg';
import heartIcon from 'assets/icons/heartbeat.svg';

const StyledWrapper = styled(Container)`
  margin: 80px auto 0;
  width: 100%;
  text-align: center;
`;

const StyledName = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: 0.2px;
  color: ${({ theme }) => theme.dimgrey};
`;

const StyledText = styled.p`
  padding: 32px 40px 56px;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.2px;
  color: ${({ theme }) => theme.mediumgrey};
`;

const HomeBrand = () => (
  <StyledWrapper>
    <Row>
      <Col>
        <StyledName>Novea Clinic</StyledName>
        <StyledText>
          Prywatne centrum medyczne Novea&nbsp;Clinic&nbsp;Sp.&nbsp;z&nbsp;o.o.
          <br />
          powstało z myślą o&nbsp;pacjencie, któremu zależy na&nbsp;kompleksowej obsłudze
        </StyledText>
      </Col>
    </Row>
    <Row>
      <Col md={4}>
        <img src={doctorIcon} alt="doctor" />
        <StyledText>Profesjonalna konsultacja z&nbsp;najlepszymi specjalistami</StyledText>
      </Col>
      <Col md={4}>
        <img src={pharmacyIcon} alt="doctor" />
        <StyledText>
          Szybki dostęp do usług w&nbsp;nowoczesnej, w&nbsp;pełni wyposażonej placówce
        </StyledText>
      </Col>
      <Col md={4}>
        <img src={heartIcon} alt="doctor" />
        <StyledText>Kompleksowa opieka na&nbsp;najwyższym poziomie</StyledText>
      </Col>
    </Row>
  </StyledWrapper>
);

export default HomeBrand;
