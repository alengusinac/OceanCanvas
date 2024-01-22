import Cart from '@/components/Cart';
import { CheckoutForm } from '@/components/styled/Checkout.styled';
import { Heading4 } from '@/components/styled/Text.styled';
import { Divider, TextField } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  // const navigate = useNavigate();

  return (
    <>
      <div>
        <Heading4>Checkout</Heading4>
        <Divider />
        <Cart />
      </div>
      <Divider />
      <div>
        <Heading4>Shipping Information</Heading4>
        <CheckoutForm>
          <TextField label="E-mail" variant="filled" required />
          <TextField label="Firstname" variant="filled" required />
          <TextField label="Lastname" variant="filled" required />
          <TextField label="Address" variant="filled" required />
          <TextField label="Zipcode" variant="filled" required />
          <TextField label="City" variant="filled" required />
          <TextField label="Country" variant="filled" required />
          <TextField label="Phone number" variant="filled" required />
        </CheckoutForm>
      </div>
      <Divider />
      <div>
        <Heading4>Payment information</Heading4>
        <CheckoutForm>
          <TextField
            label="Credit/Debit Card Number"
            variant="filled"
            required
          />
          <TextField label="Expiration Date" variant="filled" required />
          <TextField label="CCV" variant="filled" required />
        </CheckoutForm>
      </div>
    </>
  );
};

export default Checkout;
