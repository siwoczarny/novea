import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Link = styled(NavLink)`
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: 700;
  line-height: 1.71;
  letter-spacing: 0.4px;
  color: ${({ theme }) => theme.springgreen} !important;
  cursor: pointer;
`;

export default Link;
