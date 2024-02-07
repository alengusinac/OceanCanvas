import styled from 'styled-components';
import { ImageContainer } from './Products.styled';
import { colors } from '@/styles/variables';

export const StyledCartDrawer = styled.div`
  width: 300px;
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 75px;
  padding-bottom: 30px;

  @media (min-width: 768px) {
    margin-top: 100px;
    width: 400px;
  }
`;

export const StyledCartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid ${colors.lightGrey};
  padding: 10px 10px;

  p {
    padding-top: 5px;
  }

  @media (min-width: 768px) {
    padding: 10px 30px;
  }
`;

export const CartImageContainer = styled(ImageContainer)`
  width: 75px;
  height: 100px;
  position: relative;
  top: 5px;
`;

export const ItemActionButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 120px;

  > div {
    height: 40px;
  }
`;
