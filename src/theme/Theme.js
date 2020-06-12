import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import Styles from 'theme/Styles';
import { themeElements } from 'theme/themeElements';

const Theme = ({ children }) => (
  <>
    <Styles />
    <ThemeProvider theme={themeElements}>{children}</ThemeProvider>
  </>
);

Theme.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Theme;
