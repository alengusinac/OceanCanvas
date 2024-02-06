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
  }
`;

export const StyledCartItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${colors.lightGrey};
  padding: 0 10px;
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
  justify-content: center;
  align-items: center;
  height: 100px;
`;
