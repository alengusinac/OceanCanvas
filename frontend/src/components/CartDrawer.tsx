import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { StyledCartDrawer } from './styled/Cart.styled';
import { BoldBodyText, Heading4 } from './styled/Text.styled';
import { useNavigate } from 'react-router-dom';
import Cart from './Cart';
import { useCartContext } from '@/hooks/useCartContext';

interface Props {
  setCartDrawerOpen: (boolean: boolean) => void;
}

const CartDrawer = ({ setCartDrawerOpen }: Props) => {
  const navigate = useNavigate();
  const { cart } = useCartContext();

  return (
    <StyledCartDrawer>
      <Heading4>Shopping Cart</Heading4>
      {cart.length !== 0 && (
        <>
          <Divider />
          <Cart />
          <Button
            name="checkout"
            onClick={() => {
              navigate('/checkout');
              setCartDrawerOpen(false);
            }}
            variant="contained"
          >
            Checkout
          </Button>
        </>
      )}
      {cart.length === 0 && <BoldBodyText>Your cart is empty.</BoldBodyText>}
    </StyledCartDrawer>
  );
};

export default CartDrawer;
