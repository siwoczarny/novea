import styled from 'styled-components';

const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.2px;
  color: ${({ theme }) => theme.mediumgrey};
`;

export default Text;
