import { colors, fonts } from '@/styles/variables';
import TextField from '@mui/material/TextField';
import styled from 'styled-components';

export const ShippingForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ShippingTextField = styled(TextField).attrs({
  variant: 'outlined',
})`
  && .MuiOutlinedInput-root {
    border-radius: 6px;
    font-family: ${fonts.body};
    background: ${colors.white};

    fieldset {
      border-color: ${colors.lightGrey};
    }

    &:hover fieldset {
      border-color: ${colors.lightGrey};
    }

    &.Mui-focused fieldset {
      border-color: ${colors.aquaBlue};
      border-width: 1px;
      box-shadow: 0 0 0 3px rgba(0, 191, 255, 0.2);
    }
  }

  && .MuiInputLabel-root.Mui-focused {
    color: ${colors.aquaBlue};
  }
`;

export const StyledCheckout = styled.div`
  width: 100%;
  margin: 0 auto;

  @media (min-width: 500px) {
    width: 400px;
  }

  @media (min-width: 750px) {
    width: 600px;
  }

  @media (min-width: 1200px) {
    width: 800px;
  }
`;
