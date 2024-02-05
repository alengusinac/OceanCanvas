import {
  BodyText,
  BoldBodyText,
  Heading1,
  Heading4,
} from '@/components/styled/Text.styled';
import { IOrder } from '@/models/IOrder';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const OrderConfirmation = () => {
  const order = useLocation().state as IOrder;
  const navigate = useNavigate();

  if (!order) navigate('/');

  const date = order.createdAt ? new Date(order.createdAt) : new Date();

  return (
    <>
      <Heading1>Order Confirmation</Heading1>
      <StyledConfirmation>
        <BodyText>Thank you for your order!</BodyText>
        <BodyText>
          <BoldBodyText>Order Number:</BoldBodyText>
          <br /> {order.orderNumber}
        </BodyText>
        <BodyText>
          <BoldBodyText>Date:</BoldBodyText>
          <br /> {date.toLocaleString('sv-se')}
        </BodyText>
        <BodyText>
          <BoldBodyText>Delivery Address:</BoldBodyText>
          <br />
          {order.address.firstname} {order.address.lastname}
          <br />
          {order.address.address}
          <br />
          {order.address.zipcode} {order.address.city}
          <br />
          {order.address.country}
        </BodyText>
      </StyledConfirmation>
      <Heading4>Shipping Information:</Heading4>
      <BodyText>
        Your order is now being processed and will soon embark on its journey to
        your doorstep. You will receive a shipping confirmation email with
        tracking details once your package is on its way.
      </BodyText>
      <Heading4>Contact Us:</Heading4>
      <BodyText>
        Should you have any questions or if there's anything else we can assist
        you with, feel free to reach out to our dedicated customer support team
        from our{' '}
        <Link to={'/contact'} target="_blank">
          contact page
        </Link>
        .
      </BodyText>
      <Heading4>Stay Connected:</Heading4>
      <BodyText>
        Join our ocean-inspired community on social media [@OceanCanvas] for the
        latest updates, exclusive offers, and a dive into the world of
        underwater art. Once again, thank you for choosing OceanCanvas. We're
        honored to be a part of your art collection.
      </BodyText>
      <BodyText>
        Best Regards,
        <br /> The OceanCanvas Team
      </BodyText>
    </>
  );
};

export default OrderConfirmation;

const StyledConfirmation = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #000;
  border-radius: 5px;
  width: 300px;
  margin-bottom: 1rem;
`;
