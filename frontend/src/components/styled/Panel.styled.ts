import { colors } from '@/styles/variables';
import styled from 'styled-components';

export const PanelWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto 24px;
  padding: 24px;
  background: ${colors.white};
  border: 1px solid ${colors.lightGrey};
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 31, 63, 0.08);
`;
