import React from 'react';
import HomeSlider from 'components/parts/HomeSlider';
import HomeBrand from 'components/parts/HomeBrand';
import HomeSpecialists from 'components/parts/HomeSpecialists';
import HomeJumbotron from 'components/parts/HomeJumbotron';
import HomeAbout from 'components/parts/HomeAbout';

const Home = () => (
  <>
    <HomeSlider />
    <HomeBrand />
    <HomeSpecialists />
    <HomeJumbotron />
    <HomeAbout />
  </>
);

export default Home;
