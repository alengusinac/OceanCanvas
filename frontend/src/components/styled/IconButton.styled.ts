import styled from 'styled-components';

export const IconButton = styled.button<{ $size?: number }>`
  width: ${(props) => `${props.$size}px` || '50px'};
  display: inline;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  font-size: 3rem;
`;
