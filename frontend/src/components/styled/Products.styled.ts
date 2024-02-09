import styled from 'styled-components';

export const StyledProducts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
`;

export const ProductsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  margin: 0 auto;
  margin-top: 20px;
  max-width: 1200px;
  gap: 5px;

  @media (min-width: 500px) {
    padding: 0 20px;
    gap: 20px;
  }
`;

export const StyledProductCard = styled.div`
  width: 150px;
  height: 270px;
  border-radius: 2px;

  h4,
  p {
    margin: 0;
    padding: 0;
  }

  @media (min-width: 600px) {
    width: 200px;
    height: 330px;
  }

  @media (min-width: 1000px) {
    width: 250px;
    height: 400px;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  background-color: rgba(238, 220, 179, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;

  @media (min-width: 600px) {
    height: 270px;
  }
  @media (min-width: 1000px) {
    height: 340px;
  }
`;

export const ProductImage = styled.img`
  width: 80%;
  border: 2px solid #000;
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.25);
`;
