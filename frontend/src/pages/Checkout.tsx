import CartItem from '@/components/CartItem';
import { CheckoutForm } from '@/components/styled/Checkout.styled';
import {
  BodyText,
  Heading4,
  SmallBodyText,
} from '@/components/styled/Text.styled';
import { Button, Divider } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const items = [
  {
    id: 0,
    title: 'Fish',
    description: 'This is a lovely fish.',
    price: 20,
    size: '20x30',
    amount: 1,
    image: 'src/assets/images/ocean1.jpg',
  },
  {
    id: 1,
    title: 'Shark',
    description: 'This is a lovely fish.',
    price: 20,
    size: '20x30',
    amount: 2,
    image: 'src/assets/images/ocean2.jpg',
  },
  {
    id: 2,
    title: 'Coral',
    description: 'This is a lovely fish.',
    price: 20,
    size: '20x30',
    amount: 1,
    image: 'src/assets/images/ocean1.jpg',
  },
  {
    id: 3,
    title: 'Diver',
    description: 'This is a lovely fish.',
    price: 20,
    size: '20x30',
    amount: 1,
    image: 'src/assets/images/ocean2.jpg',
  },
];

const Checkout = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    calculateTotal();
  });

  const calculateTotal = () => {
    let totalPrice = 0;
    items.forEach((item) => {
      totalPrice += item.amount * item.price;
    });
    setTotalPrice(totalPrice);

    setTotalAmount(
      items.reduce(function (acc, obj) {
        return acc + obj.amount;
      }, 0)
    );
  };

  return (
    <>
      <div>
        <Heading4>Checkout</Heading4>
        <Divider />
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
        <SmallBodyText>Total quantity: {totalAmount} pcs</SmallBodyText>
        <BodyText>Total price: ${totalPrice}</BodyText>
      </div>
      <Divider />
      <Heading4>Shipping Information</Heading4>
      <CheckoutForm>
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </CheckoutForm>
    </>
  );
};

export default Checkout;
