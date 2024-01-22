import Cart from '@/components/Cart';
import { CheckoutForm } from '@/components/styled/Checkout.styled';
import { Heading4 } from '@/components/styled/Text.styled';
import { Button, Divider, TextField } from '@mui/material';
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const [openPayment, setOpenPayment] = useState(false);
  const [formValues, setFormValues] = useState({
    name: {
      value: '',
      error: false,
      errorMessage: 'You must enter a name',
    },
    age: {
      value: 21,
      error: false,
      errorMessage: 'You must enter an age',
    },
    likes: {
      value: '',
      error: false,
      errorMessage: 'You must enter your liked tech stacks',
    },
    jobTitle: {
      value: 'full-stack',
      error: false,
      errorMessage: 'You must choose your job title',
    },
  });
  // const navigate = useNavigate();

  const verifyShipping = () => {
    console.log('Verified!');
    setOpenPayment(true);
  };

  const completeOrder = () => {
    console.log('Complete!');
  };

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
        <Button onClick={verifyShipping} variant="contained">
          Continue
        </Button>
      </div>
      <Divider />
      {openPayment && (
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
          <Button onClick={completeOrder} variant="contained">
            Complete Order
          </Button>
        </div>
      )}
    </>
  );
};

export default Checkout;
