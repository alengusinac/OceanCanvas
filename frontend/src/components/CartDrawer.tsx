import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { StyledCartDrawer } from './styled/Cart.styled';
import { DrawerHeader } from './styled/Header.styled';
import { BoldBodyText, Heading4 } from './styled/Text.styled';
import { useNavigate } from 'react-router-dom';
import Cart from './Cart';
import { useCartContext } from '@/hooks/useCartContext';
import { memo } from 'react';
import { MdClose } from 'react-icons/md';
import MaterialIconButton from './MaterialIconButton';

interface Props {
  setCartDrawerOpen: (boolean: boolean) => void;
}

const CartDrawer = ({ setCartDrawerOpen }: Props) => {
  const navigate = useNavigate();
  const { cart } = useCartContext();

  return (
    <StyledCartDrawer>
      <DrawerHeader>
        <MaterialIconButton
          ariaLabel="close cart"
          testId="cy-closeCartIcon"
          onClick={() => setCartDrawerOpen(false)}
          icon={<MdClose />}
        />
      </DrawerHeader>
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

export default memo(CartDrawer);
