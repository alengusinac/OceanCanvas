import Cart from '@/components/Cart';
import { CheckoutForm } from '@/components/styled/Checkout.styled';
import { Heading4 } from '@/components/styled/Text.styled';
import { Button, Divider, TextField } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const [openPayment, setOpenPayment] = useState(false);
  const [formValues, setFormValues] = useState({
    email: '',
    firstname: '',
    lastname: '',
    address: '',
    zipcode: '',
    city: '',
    country: '',
    phone: '',
  });
  const navigate = useNavigate();

  const onChangeInput = (e: ChangeEvent<HTMLFormElement>) => {
    const { name, value } = e.target;
    console.log(formValues);

    setFormValues({ ...formValues, [name]: value });
  };

  const verifyShipping = () => {
    console.log('Verified!');
    setOpenPayment(true);
  };

  const completeOrder = () => {
    console.log('Complete!');
    navigate('/confirm-order');
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
        <CheckoutForm onChange={onChangeInput}>
          <TextField
            name="email"
            value={formValues.email}
            label="E-mail"
            variant="filled"
            required
          />
          <TextField
            name="firstname"
            value={formValues.firstname}
            label="Firstname"
            variant="filled"
            required
          />
          <TextField
            name="lastname"
            value={formValues.lastname}
            label="Lastname"
            variant="filled"
            required
          />
          <TextField
            name="address"
            value={formValues.address}
            label="Address"
            variant="filled"
            required
          />
          <TextField
            name="zipcode"
            value={formValues.zipcode}
            label="Zipcode"
            variant="filled"
            required
          />
          <TextField
            name="city"
            value={formValues.city}
            label="City"
            variant="filled"
            required
          />
          <TextField
            name="country"
            value={formValues.country}
            label="Country"
            variant="filled"
            required
          />
          <TextField
            name="phone"
            value={formValues.phone}
            label="Phone number"
            variant="filled"
            required
          />
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
