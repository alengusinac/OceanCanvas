import styled from 'styled-components';

export const StyledSizeChooser = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 250px;
  height: 50px;
  border: 1px solid #000;
  border-radius: 3px;
  padding: 0.5rem 0.5rem;
  cursor: pointer;
  background-color: #fff;

  @media (min-width: 500px) {
    width: 350px;
    padding: 0.5rem 1rem;
  }
`;

export const StyledProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  img {
    width: 100%;
    max-width: 700px;
    height: auto;
    max-height: 700px;
    object-fit: contain;
    margin: 1rem 0;
    border: 5px solid #000;
    box-shadow: 0 0 10px #000;
  }

  div > p {
    margin: 0;
    padding: 0;
  }

  button {
    margin-top: 1rem;
  }
`;
