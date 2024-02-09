import Cart from '@/components/Cart';
import { StyledCheckout } from '@/components/styled/Checkout.styled';
import { StyledForm } from '@/components/styled/Form.styled';
import { ErrorText, Heading1, Heading4 } from '@/components/styled/Text.styled';
import { validateCardExpiry, validateCardNumber } from '@/functions';
import { useCartContext } from '@/hooks/useCartContext';
import { useUserContext } from '@/hooks/useUserContext';
import { IAddress } from '@/models/IAddress';
import { IOrder } from '@/models/IOrder';
import { postOrder } from '@/services/orderService';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import { memo, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cart, totalAmount, totalPrice, clearCart } = useCartContext();
  const { user } = useUserContext();
  const [openPayment, setOpenPayment] = useState(false);
  const [addressFormValues, setAddressFormValues] = useState<IAddress>({
    email: '',
    firstname: '',
    lastname: '',
    address: '',
    zipcode: '',
    city: '',
    country: '',
    phone: '',
  });
  const [paymentFormValues, setPaymentFormValues] = useState({
    cardNumber: '',
    expirationDate: '',
    ccv: '',
  });
  const [paymentError, setPaymentError] = useState<string[]>([]);
  const [orderButtonLoading, setOrderButtonLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setAddressFormValues({
      email: user?.email ? user.email : '',
      firstname: user?.address ? user.address.firstname : '',
      lastname: user?.address ? user.address.lastname : '',
      address: user?.address ? user.address.address : '',
      zipcode: user?.address ? user.address.zipcode : '',
      city: user?.address ? user.address.city : '',
      country: user?.address ? user.address.country : '',
      phone: user?.address ? user.address.phone : '',
    });
  }, [user]);

  const onAddressChangeInput = (e: React.ChangeEvent<HTMLFormElement>) => {
    const { name, value } = e.target;
    setOpenPayment(false);
    setAddressFormValues({ ...addressFormValues, [name]: value });
  };

  const onPaymentFormChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    const { name, value } = e.target;

    setPaymentFormValues({ ...paymentFormValues, [name]: value });
  };

  const verifyShipping = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setOpenPayment(true);
  };

  const validateOrder = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errorMessages = [];
    const cardValidation = validateCardNumber(paymentFormValues.cardNumber);
    const expirationDateValidation = validateCardExpiry(
      paymentFormValues.expirationDate
    );
    const ccvValidation =
      paymentFormValues.ccv.length === 3 &&
      !isNaN(Number(paymentFormValues.ccv));

    if (!cardValidation) {
      errorMessages.push('Invalid card number');
    }
    if (!expirationDateValidation) {
      errorMessages.push('Invalid expiration date');
    }
    if (!ccvValidation) {
      errorMessages.push('Invalid CCV');
    }
    setPaymentError(errorMessages);
    if (errorMessages.length === 0) {
      postOrderAsync();
    }
  };

  const postOrderAsync = async () => {
    setOrderButtonLoading(true);
    setTimeout(async () => {
      try {
        const value: IOrder = {
          address: addressFormValues,
          payment: paymentFormValues,
          products: cart.map((item) => ({
            product: item.product._id,
            size: item.product.size,
            amount: item.amount,
          })),
          total: {
            amount: totalAmount,
            price: totalPrice,
          },
        };
        if (user) {
          value.user = user._id;
        }
        const response = await postOrder(value);
        if (response?.status === 201) {
          clearCart();
          navigate('/confirm-order', { state: response.data });
        }
      } catch (error) {
        setOrderButtonLoading(false);
        console.error(error);
      }
    }, 1000);
  };

  return (
    <StyledCheckout>
      <div>
        <Heading1>Checkout</Heading1>
        <Divider />
        <Cart />
      </div>
      <Divider />
      <div>
        <Heading4>Shipping Information</Heading4>
        <StyledForm onSubmit={verifyShipping} onChange={onAddressChangeInput}>
          <TextField
            name="email"
            type="email"
            value={addressFormValues.email}
            label="E-mail"
            variant="filled"
            required
          />
          <TextField
            name="firstname"
            value={addressFormValues.firstname}
            label="Firstname"
            variant="filled"
            required
          />
          <TextField
            name="lastname"
            value={addressFormValues.lastname}
            label="Lastname"
            variant="filled"
            required
          />
          <TextField
            name="address"
            value={addressFormValues.address}
            label="Address"
            variant="filled"
            required
          />
          <TextField
            name="zipcode"
            value={addressFormValues.zipcode}
            label="Zipcode"
            variant="filled"
            required
          />
          <TextField
            name="city"
            value={addressFormValues.city}
            label="City"
            variant="filled"
            required
          />
          <TextField
            name="country"
            value={addressFormValues.country}
            label="Country"
            variant="filled"
            required
          />
          <TextField
            name="phone"
            value={addressFormValues.phone}
            label="Phone number"
            variant="filled"
            required
          />
          <Button type="submit" variant="contained">
            Continue
          </Button>
        </StyledForm>
      </div>
      <Divider />
      {openPayment && (
        <div>
          <Heading4>Payment information</Heading4>
          {paymentError.length > 0 && (
            <div>
              {paymentError.map((error, index) => (
                <ErrorText key={index}>{error}</ErrorText>
              ))}
            </div>
          )}
          <StyledForm onSubmit={validateOrder} onChange={onPaymentFormChange}>
            <TextField
              name="cardNumber"
              value={paymentFormValues.cardNumber}
              label="Credit/Debit Card Number"
              variant="filled"
              required
            />
            <TextField
              name="expirationDate"
              value={paymentFormValues.expirationDate}
              label="Expiration Date MM/YY"
              variant="filled"
              required
            />
            <TextField
              name="ccv"
              value={paymentFormValues.ccv}
              label="CCV"
              variant="filled"
              required
            />
            <Button
              disabled={orderButtonLoading}
              type="submit"
              variant="contained"
            >
              Complete Order
            </Button>
          </StyledForm>
        </div>
      )}
    </StyledCheckout>
  );
};

export default memo(Checkout);
