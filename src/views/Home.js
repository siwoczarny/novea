import React from 'react';
import styled from 'styled-components';
import HomeSlider from 'components/parts/HomeSlider';
import HomeBrand from 'components/parts/HomeBrand';
import HomeSpecialists from 'components/parts/HomeSpecialists';
import HomeJumbotron from 'components/parts/HomeJumbotron';
import HomeAbout from 'components/parts/HomeAbout';
import HomeContact from 'components/parts/HomeContact';

const StyledWrapper = styled.div`
  padding: 84px 0 176px;
`;

const Home = () => (
  <StyledWrapper>
    <HomeSlider />
    <HomeBrand />
    <HomeSpecialists />
    <HomeJumbotron />
    <HomeAbout />
    <HomeContact />
  </StyledWrapper>
);

export default Home;
