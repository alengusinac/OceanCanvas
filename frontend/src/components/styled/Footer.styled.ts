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

  @media (min-width: 1000px) {
    padding: 20px 40px;
  }
`;

export const FooterMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media (min-width: 1000px) {
    flex-direction: row;
    align-items: center;
    gap: 20px;
  }
`;

export const FooterSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 1000px) {
    flex: 1;
  }
`;

export const NewsLetterWrapper = styled.form`
  display: flex;
  flex-direction: column;
  border: 1px solid ${colors.darkBlue};
  margin-top: 20px;
  padding: 30px;
  border-radius: 5px;

  button {
    margin-top: 10px;
  }

  @media (min-width: 1000px) {
    margin-top: 0;
  }
`;

export const FooterCopyright = styled.p`
  margin: 0;

  @media (min-width: 1000px) {
    margin-top: 20px;
  }
`;
