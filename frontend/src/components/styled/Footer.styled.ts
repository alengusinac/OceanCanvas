import styled from 'styled-components';
import { colors } from '@/styles/variables';

export const FooterWrapper = styled.footer`
  margin-top: auto;
  position: relative;
  bottom: 0;
  z-index: 10;
  background-color: ${colors.sand};
  width: 100%;
  padding: 10px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px -2px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const NewsLetterWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
