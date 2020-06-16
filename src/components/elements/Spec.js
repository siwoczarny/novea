import styled from 'styled-components';

const Spec = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-style: italic;
  line-height: 1.71;
  letter-spacing: 0.4px;
  color: ${({ theme }) => theme.darkkhaki};
`;

export default Spec;
