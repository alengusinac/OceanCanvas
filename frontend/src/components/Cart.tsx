import { items } from '@/items';
import CartItem from './CartItem';
import { BodyText, SmallBodyText } from './styled/Text.styled';
import { useEffect, useState } from 'react';

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

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
      {items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <SmallBodyText>Total quantity: {totalAmount} pcs</SmallBodyText>
      <BodyText>Total price: ${totalPrice}</BodyText>
    </>
  );
};

export default Cart;
