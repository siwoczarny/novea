import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { NavLink } from 'react-router-dom';
import Button from 'components/elements/Button';
import slide1 from 'assets/images/slide1.jpg';
import slide2 from 'assets/images/slide2.jpg';
import slide3 from 'assets/images/slide3.jpg';

const CarouselWrapper = styled.div`
  position: relative;
  padding: 0 0 30px;
  width: 100%;
  height: 100%;
`;

const StyledWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: calc(100vh - 128px);
`;

const StyledBackground = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  margin: auto;
  object-fit: cover;
`;

const InnerWrapper = styled.div`
  position: absolute;
  width: 320px;
  top: 45%;
  left: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
  @media (min-width: 992px) {
    width: 320px;
    top: 50%;
    left: 30%;
    text-align: left;
  }
`;

const StyledTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: 0.2px;
  color: ${({ theme }) => theme.white};
`;

const StyledText = styled.p`
  padding: 24px 0 48px;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.2px;
  color: ${({ theme }) => theme.white};
`;

const HomeSlider = () => (
  <CarouselWrapper>
    <Carousel
      additionalTransfrom={0}
      arrows={false}
      autoPlay
      autoPlaySpeed={8000}
      centerMode={false}
      draggable
      focusOnSelect={false}
      infinite
      keyBoardControl
      minimumTouchDrag={80}
      renderButtonGroupOutside={false}
      renderDotsOutside
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 0,
          },
          items: 1,
        },
      }}
      showDots
      slidesToSlide={1}
      swipeable
    >
      <StyledWrapper>
        <StyledBackground src={slide1} alt="slide" />
        <InnerWrapper>
          <StyledTitle>Wykwalifikowany zespół specjalistów</StyledTitle>
          <StyledText>
            Nasi lekarze zapewniają najwyższy standard profesjonalnej opieki zdrowotnej
          </StyledText>
          <Button as={NavLink} to="/reservations">
            Sprawdź wolne terminy
          </Button>
        </InnerWrapper>
      </StyledWrapper>
      <StyledWrapper>
        <StyledBackground src={slide2} alt="slide" />
        <InnerWrapper>
          <StyledTitle>Nowoczesne placówki medyczne</StyledTitle>
          <StyledText>
            Oferujemy świadczenie pełnej opieki zdrowotnej od diagnostyki po leczenie kompleksowe i
            szpitalne
          </StyledText>
          <Button as={NavLink} to="/services">
            {' '}
            Sprawdź ofertę
          </Button>
        </InnerWrapper>
      </StyledWrapper>
      <StyledWrapper>
        <StyledBackground src={slide3} alt="slide" />
        <InnerWrapper>
          <StyledTitle>COVID-19: informacje i zalecenia</StyledTitle>
          <StyledText>
            Zapoznaj się z obecnymi zasadami i ograniczeniami ze względu na obecność koronawirusa.
          </StyledText>
          <Button as={NavLink} to="/news">
            Sprawdź aktualności
          </Button>
        </InnerWrapper>
      </StyledWrapper>
    </Carousel>
  </CarouselWrapper>
);

export default HomeSlider;
