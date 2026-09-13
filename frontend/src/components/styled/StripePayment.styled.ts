import { colors, fonts } from '@/styles/variables';
import styled from 'styled-components';

export { PanelWrapper as CardFormWrapper } from '@/components/styled/Panel.styled';

export const FieldRow = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;

  > div {
    flex: 1;
  }
`;

export const FieldGroup = styled.div`
  margin-bottom: 16px;
`;

export const FieldLabel = styled.label`
  display: block;
  font-family: ${fonts.body};
  font-size: 0.8rem;
  font-weight: 700;
  color: ${colors.darkBlue};
  text-transform: uppercase;
  letter-spacing: 0.03em;
  margin-bottom: 6px;
`;

export const ElementBox = styled.div<{ $focused?: boolean; $invalid?: boolean }>`
  padding: 12px 14px;
  background: ${colors.white};
  border: 1px solid
    ${({ $invalid, $focused }) =>
      $invalid ? colors.coral : $focused ? colors.aquaBlue : colors.lightGrey};
  border-radius: 6px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  box-shadow: ${({ $focused, $invalid }) =>
    $focused ? `0 0 0 3px ${$invalid ? 'rgba(255, 111, 97, 0.2)' : 'rgba(0, 191, 255, 0.2)'}` : 'none'};
`;

export const FieldError = styled.p`
  font-family: ${fonts.body};
  font-size: 0.75rem;
  color: ${colors.coral};
  margin: 6px 0 0;
`;

export const SecureNotice = styled.p`
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: ${fonts.body};
  font-size: 0.75rem;
  color: ${colors.darkBlue};
  opacity: 0.7;
  margin: 14px 0 0;
`;
