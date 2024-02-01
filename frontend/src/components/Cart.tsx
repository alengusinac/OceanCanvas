import { useCartContext } from '@/hooks/useCartContext';
import CartItem from './CartItem';
import { BodyText, SmallBodyText } from './styled/Text.styled';
import { useEffect, useState } from 'react';

const Cart = () => {
  const { cart } = useCartContext();
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    calculateTotal();
  });

  const calculateTotal = () => {
    let totalPrice = 0;
    cart.forEach((item) => {
      totalPrice += item.amount * item.product.price;
    });
    setTotalPrice(totalPrice);

    setTotalAmount(
      cart.reduce(function (acc, obj) {
        return acc + obj.amount;
      }, 0)
    );
  };

  return (
    <>
      {cart.map((item, index) => (
        <CartItem key={index} item={item} />
      ))}
      <SmallBodyText>Total quantity: {totalAmount} pcs</SmallBodyText>
      <BodyText>Total price: ${totalPrice}</BodyText>
    </>
  );
};

export default Cart;
