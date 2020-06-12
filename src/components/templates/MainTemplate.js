import React from 'react';
import PropTypes from 'prop-types';
import Theme from 'theme/Theme';
import TopBar from 'components/elements/TopBar';
import Header from 'components/elements/Header';
import Footer from 'components/elements/Footer';

const MainTemplate = ({ children }) => (
  <Theme>
    <TopBar />
    <Header />
    {children}
    <Footer />
  </Theme>
);

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
