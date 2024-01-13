import styled from 'styled-components';
import { colors } from '@/styles/variables';

export const HeaderWrapper = styled.header`
  background-color: ${colors.sand};
  height: 75px;
  width: 100%;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const FlexWrapper = styled.div`
  display: flex;
`;

export const LogoWrapper = styled.img`
  width: 46px;
`;

export const MaterialIcon = styled.span`
  font-size: 3rem;
`;
