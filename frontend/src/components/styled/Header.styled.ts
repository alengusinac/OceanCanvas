import styled from 'styled-components';
import { colors } from '@/styles/variables';
import { LogoWrapper } from './Logo.styled';

export const HeaderWrapper = styled.header`
  position: relative;
  z-index: 10;
  background-color: ${colors.sand};
  height: 75px;
  width: 100%;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const Logo = styled(LogoWrapper)`
  position: absolute;
  left: 50%;
  transform: translate(-50%);
`;
