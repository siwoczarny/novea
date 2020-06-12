import React from 'react';
import PropTypes from 'prop-types';
import Theme from 'theme/Theme';
import Menu from 'components/elements/Menu';

const MainTemplate = ({ children }) => (
  <Theme>
    <Menu />
    {children}
  </Theme>
);

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
