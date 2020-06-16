import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import specPhoto1 from 'assets/images/spec1.png';
import specPhoto2 from 'assets/images/spec2.png';
import specPhoto3 from 'assets/images/spec3.png';

const StyledWrapper = styled(Container)`
  position: relative;
  margin: 80px auto 0;
  width: 100%;
  text-align: center;
`;

const InnerWrapper = styled.div`
  margin: 0 32px;
  position: relative;
  min-height: 480px;
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

const HomeSpecialists = () => (
  <StyledWrapper>
    <Row>
      <Col>
        <StyledName>Specjaliści</StyledName>
        <StyledText>
          Najlepsi specjaliści w naszej okolicy pracują właśnie znami. Renomowane grono lekarzy,
          <br />
          które zawsze daje z siebie wszystko, by Ci pomóc
        </StyledText>
      </Col>
    </Row>

    <Carousel
      additionalTransfrom={0}
      arrows={false}
      autoPlay
      autoPlaySpeed={5000}
      centerMode={false}
      draggable
      focusOnSelect={false}
      infinite
      keyBoardControl
      minimumTouchDrag={80}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 993,
          },
          items: 3,
        },
        mobile: {
          breakpoint: {
            max: 992,
            min: 0,
          },
          items: 1,
        },
      }}
      showDots={false}
      slidesToSlide={1}
      swipeable
    >
      <InnerWrapper>
        <img src={specPhoto1} alt="specialist" />
      </InnerWrapper>
      <InnerWrapper>
        <img src={specPhoto2} alt="specialist" />
      </InnerWrapper>
      <InnerWrapper>
        <img src={specPhoto3} alt="specialist" />
      </InnerWrapper>
    </Carousel>
  </StyledWrapper>
);

export default HomeSpecialists;
