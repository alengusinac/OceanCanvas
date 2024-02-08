import styled from 'styled-components';

export const StyledForm = styled.form`
  width: 300px;
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-bottom: 20px;

  @media (min-width: 500px) {
    width: 400px;
  }
`;
