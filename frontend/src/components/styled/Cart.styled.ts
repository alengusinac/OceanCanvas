import styled from 'styled-components';
import { ImageContainer } from './Products.styled';
import { colors } from '@/styles/variables';

export const StyledCart = styled.div`
  width: 300px;
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 75px;
  padding: 0 10px;
  padding-bottom: 30px;
`;

export const StyledCartItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${colors.lightGrey};
`;

export const CartImageContainer = styled(ImageContainer)`
  width: 75px;
  height: 100px;
`;

export const ItemActionButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
