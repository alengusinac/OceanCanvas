import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { StyledCartDrawer } from './styled/Cart.styled';
import { Heading4 } from './styled/Text.styled';
import { useNavigate } from 'react-router-dom';
import Cart from './Cart';

interface Props {
  setCartDrawerOpen: (boolean: boolean) => void;
}

const CartDrawer = ({ setCartDrawerOpen }: Props) => {
  const navigate = useNavigate();

  return (
    <StyledCartDrawer>
      <Heading4>Shopping Cart</Heading4>
      <Divider />
      <Cart />
      <Button
        onClick={() => {
          navigate('/checkout');
          setCartDrawerOpen(false);
        }}
        variant="contained"
      >
        Checkout
      </Button>
    </StyledCartDrawer>
  );
};

export default CartDrawer;
