import styled from 'styled-components';

export const AmountIndicator = styled.div`
  position: absolute;
  top: 7px;
  right: 7px;
  width: 22px;
  height: 22px;
  background-color: red;
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    margin: 0;
    padding: 0;
  }

  @media (min-width: 768px) {
    top: 20px;
    right: 20px;
  }
`;
