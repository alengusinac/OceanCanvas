import styled from 'styled-components';

export const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 600px) {
    p {
      max-width: 80%;
    }
  }

  @media (min-width: 900px) {
    flex-direction: row;
    flex-wrap: wrap;

    h1,
    p {
      width: 100%;
    }
  }
`;
