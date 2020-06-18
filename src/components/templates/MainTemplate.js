import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Theme from 'theme/Theme';
import TopBar from 'components/layout/TopBar';
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';

class MainTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      font: 'Funkcjonalność dostępna wkrótce',
    };
  }

  changeFont = () => {
    const { font } = this.state;
    // eslint-disable-next-line
    alert(font);
  };

  render() {
    const { children } = this.props;
    return (
      <Theme>
        <TopBar changeFont={this.changeFont} />
        <Header />
        {children}
        <Footer />
      </Theme>
    );
  }
}

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
