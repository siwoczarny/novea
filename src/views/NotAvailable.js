import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Button from 'components/elements/Button';
import Title from 'components/elements/Title';
import Text from 'components/elements/Text';

const StyledWrapper = styled(Container)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 84px 0 176px;
  text-align: center;
`;

const StyledTitle = styled(Title)`
  padding: 40px 0;
`;

const StyledButton = styled(Button)`
  margin: 16px;
`;

const NotAvailable = () => (
  <StyledWrapper>
    <StyledTitle>Podstrona w budowie</StyledTitle>
    <StyledButton as={NavLink} to="/">
      Powrót do strony głównej
    </StyledButton>
    <Text>lub</Text>
    <StyledButton as={NavLink} to="/specialists">
      Zobacz specjalistów
    </StyledButton>
    <StyledButton as={NavLink} to="/contact">
      Przejdź do kontaktu
    </StyledButton>
  </StyledWrapper>
);

export default NotAvailable;
