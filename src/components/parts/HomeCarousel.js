import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import photo1 from 'assets/images/2224.jpg';

const CarouselWrapper = styled.div`
  position: relative;
  padding: 0 0 30px;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const StyledWrapper = styled.div`
  position: relative;
  width: 100vw;
  min-height: 560px;
  background-image: url(${photo1});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
`;

const InnerWrapper = styled.div`
  position: absolute;
  width: 320px;
  top: 50%;
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

const StyledButton = styled.button`
  width: 212px;
  height: 40px;
  line-height: 1.43;
  letter-spacing: 0.53px;
  color: ${({ theme }) => theme.white};
  border: none;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.springgreen};
  box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.15);
`;

const HomeCarousel = () => (
  <CarouselWrapper>
    <Carousel
      additionalTransfrom={0}
      arrows={false}
      autoPlaySpeed={3000}
      centerMode={false}
      className=""
      containerClass=""
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      renderButtonGroupOutside={false}
      renderDotsOutside
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items: 1,
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0,
          },
          items: 1,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464,
          },
          items: 1,
        },
      }}
      showDots
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      <StyledWrapper>
        <InnerWrapper>
          <StyledTitle>Wykwalifikowany zespół specjalistów</StyledTitle>
          <StyledText>
            Nasi lekarze zapewniają najwyższy standard profesjonalnej opieki zdrowotnej
          </StyledText>
          <StyledButton>Sprawdź wolne terminy</StyledButton>
        </InnerWrapper>
      </StyledWrapper>
      <StyledWrapper>
        <InnerWrapper>
          <StyledTitle>Wykwalifikowany zespół specjalistów</StyledTitle>
          <StyledText>
            Nasi lekarze zapewniają najwyższy standard profesjonalnej opieki zdrowotnej
          </StyledText>
          <StyledButton>Sprawdź wolne terminy</StyledButton>
        </InnerWrapper>
      </StyledWrapper>
    </Carousel>
  </CarouselWrapper>
);

export default HomeCarousel;
