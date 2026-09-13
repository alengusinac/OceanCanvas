import Cart from '@/components/Cart';
import StripePayment from '@/components/StripePayment';
import {
  ShippingForm,
  ShippingTextField,
  StyledCheckout,
} from '@/components/styled/Checkout.styled';
import { PanelWrapper } from '@/components/styled/Panel.styled';
import { Heading1, Heading4 } from '@/components/styled/Text.styled';
import { useCartContext } from '@/hooks/useCartContext';
import { useUserContext } from '@/hooks/useUserContext';
import { IAddress } from '@/models/IAddress';
import { colors } from '@/styles/variables';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
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

  const verifyShipping = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setOpenPayment(true);
  };

  const handleStripePaymentSuccess = (orderData: any) => {
    clearCart();
    navigate('/confirm-order', { state: orderData });
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
        <PanelWrapper>
          <ShippingForm
            onSubmit={verifyShipping}
            onChange={onAddressChangeInput}
          >
            <ShippingTextField
              name="email"
              type="email"
              value={addressFormValues.email}
              label="E-mail"
              required
            />
            <ShippingTextField
              name="firstname"
              value={addressFormValues.firstname}
              label="Firstname"
              required
            />
            <ShippingTextField
              name="lastname"
              value={addressFormValues.lastname}
              label="Lastname"
              required
            />
            <ShippingTextField
              name="address"
              value={addressFormValues.address}
              label="Address"
              required
            />
            <ShippingTextField
              name="zipcode"
              value={addressFormValues.zipcode}
              label="Zipcode"
              required
            />
            <ShippingTextField
              name="city"
              value={addressFormValues.city}
              label="City"
              required
            />
            <ShippingTextField
              name="country"
              value={addressFormValues.country}
              label="Country"
              required
            />
            <ShippingTextField
              name="phone"
              value={addressFormValues.phone}
              label="Phone number"
              required
            />
            <Button
              type="submit"
              variant="contained"
              style={{ backgroundColor: colors.aquaBlue, marginTop: '8px' }}
            >
              Continue
            </Button>
          </ShippingForm>
        </PanelWrapper>
      </div>
      <Divider />
      {openPayment && (
        <div>
          <Heading4>Payment information</Heading4>
          <StripePayment
            totalPrice={totalPrice}
            cart={cart}
            totalAmount={totalAmount}
            addressFormValues={addressFormValues}
            onSuccess={handleStripePaymentSuccess}
            onError={() => {}}
          />
        </div>
      )}
    </StyledCheckout>
  );
};

export default memo(Checkout);
