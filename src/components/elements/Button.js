import styled from 'styled-components';

const Button = styled.button`
  width: 212px;
  height: 40px;
  font-size: ${({ theme }) => theme.fontSize.xs};
  line-height: 1.43;
  letter-spacing: 0.53px;
  color: ${({ theme }) => theme.white};
  border: none;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.springgreen};
  box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.15);
  transition: all 0.2s ease-in-out;

  :hover {
    color: ${({ theme }) => theme.springgreen};
    background-color: ${({ theme }) => theme.white};
  }
`;

export default Button;
