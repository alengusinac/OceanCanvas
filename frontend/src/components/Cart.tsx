import { useCartContext } from '@/hooks/useCartContext';
import CartItem from './CartItem';
import { BodyText, SmallBodyText } from './styled/Text.styled';
import { memo } from 'react';

const Cart = () => {
  const { cart, totalPrice, totalAmount } = useCartContext();

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

export default memo(Cart);
