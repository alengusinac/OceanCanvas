import { colors } from '@/styles/variables';
import styled from 'styled-components';

export const LoginSignupContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${colors.lightGrey};
  border-radius: 10px;
  margin: 20px auto;
`;
