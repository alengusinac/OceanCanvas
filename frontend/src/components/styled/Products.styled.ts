import styled from 'styled-components';

export const ProductsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 20px;
`;

export const StyledProductCard = styled.div`
  width: 150px;
  height: 270px;
  border-radius: 2px;

  h4,
  p {
    margin: 0;
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
`;

export const ProductImage = styled.img`
  width: 80%;
  border: 2px solid #000;
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.25);
`;
