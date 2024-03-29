import { fonts } from '@/styles/variables';
import styled from 'styled-components';

export const Heading1 = styled.h1`
  font-family: ${fonts.heading};
  text-align: center;
  margin: 0;
  padding: 20px 20px;
`;
export const Heading2 = styled.h2`
  font-family: ${fonts.heading};
  text-align: center;
  margin: 0;
  padding: 20px 20px;
`;
export const Heading3 = styled.h3`
  font-family: ${fonts.heading};
  text-align: center;
  margin: 0;
  padding: 20px 20px;
`;
export const Heading4 = styled.h4`
  font-family: ${fonts.heading};
  text-align: center;
  margin: 0;
  padding: 20px 20px;
`;
export const BodyText = styled.p`
  font-family: ${fonts.body};
  text-align: center;
  margin: 0;
  padding: 5px 20px;
  padding-bottom: 20px;
`;
export const BoldBodyText = styled.span`
  font-family: ${fonts.body};
  font-weight: 700;
`;
export const SmallBodyText = styled.p`
  font-family: ${fonts.body};
  font-size: 0.8rem;
  text-align: center;
  margin: 0;
  padding: 5px 20px;
  padding-bottom: 20px;
`;
export const ErrorText = styled.p`
  font-family: ${fonts.body};
  color: red;
  text-align: center;
  margin: 0;
  padding: 5px 20px;
  padding-bottom: 20px;
`;
