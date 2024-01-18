import styled from 'styled-components';

export const StyledContact = styled.div`
  margin-bottom: 50px;
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;

    a {
      margin-top: 10px;
      color: black;

      &:visited {
        color: black;
      }
    }

    & > div {
      display: flex;
      gap: 30px;
    }
  }
`;
