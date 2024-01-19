import { useEffect, useState } from 'react';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { StyledCart } from './styled/Cart.styled';
import { BodyText, Heading4, SmallBodyText } from './styled/Text.styled';
import CartItem from './CartItem';
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

interface Props {
  setCartDrawerOpen: (boolean: boolean) => void;
}

const Cart = ({ setCartDrawerOpen }: Props) => {
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
    <StyledCart>
      <Heading4>Shopping Cart</Heading4>
      <Divider />
      {items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <SmallBodyText>Total quantity: {totalAmount} pcs</SmallBodyText>
      <BodyText>Total price: ${totalPrice}</BodyText>
      <Button
        onClick={() => {
          navigate('/checkout');
          setCartDrawerOpen(false);
        }}
        variant="contained"
      >
        Checkout
      </Button>
    </StyledCart>
  );
};

export default Cart;
