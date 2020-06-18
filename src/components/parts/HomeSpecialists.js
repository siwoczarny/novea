import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Button from 'components/elements/Button';
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
  margin: 80px auto 120px;
  text-align: center;
`;

const InnerWrapper = styled.div`
  position: relative;
  min-height: 480px;
`;

const StyledText = styled(Text)`
  padding: 32px 40px 56px;
`;

const HomeSpecialists = () => (
  <StyledWrapper>
    <Row>
      <Col>
        <Title>Specjaliści</Title>
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
      autoPlaySpeed={3000}
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
        <Name>Adam Kowalski</Name>
        <Spec>Ginekolog</Spec>
        <Link to="...">Więcej o lekarzu</Link>
      </InnerWrapper>
      <InnerWrapper>
        <img src={specPhoto2} alt="specialist" />
        <Name>Jan Nowak</Name>
        <Spec>Ortopeda</Spec>
        <Link to="...">Więcej o lekarzu</Link>
      </InnerWrapper>
      <InnerWrapper>
        <img src={specPhoto3} alt="specialist" />
        <Name>Krystyna Babicz</Name>
        <Spec>Endokrynolog</Spec>
        <Link to="...">Więcej o lekarzu</Link>
      </InnerWrapper>
    </Carousel>
    <Button as={NavLink} to="/specialists">
      Więcej specjalistów
    </Button>
  </StyledWrapper>
);

export default HomeSpecialists;
