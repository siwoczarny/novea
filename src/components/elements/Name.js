import styled from 'styled-components';

const Name = styled.h3`
  padding: 8px 0 0;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 0.17px;
  color: ${({ theme }) => theme.mediumgrey};
`;

export default Name;
