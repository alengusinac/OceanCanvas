import logo from '@/assets/oceancanvas-logo.png';
import MaterialIconButton from './MaterialIconButton';
import {
  MdOutlineShoppingCart,
  MdMenu,
  MdClose,
  MdOutlineFavoriteBorder,
} from 'react-icons/md';
import { HeaderWrapper, Logo } from './styled/Header.styled';
import { FlexWrapper } from './styled/Flex.styled';
import Drawer from '@mui/material/Drawer';
import { memo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CartDrawer from './CartDrawer';
import Nav from './Nav';
import { colors } from '@/styles/variables';
import { useCartContext } from '@/hooks/useCartContext';
import { AmountIndicator } from './AmountIndicator';
import { SmallBodyText } from './styled/Text.styled';
import FavoritesDrawer from './FavoritesDrawer';

const Header = () => {
  const { totalAmount } = useCartContext();
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);
  const [favoritesDrawerOpen, setFavoritesDrawerOpen] = useState(false);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (nav: string) => {
    navigate(nav);
    setNavDrawerOpen(false);
  };

  return (
    <HeaderWrapper>
      <MaterialIconButton
        ariaLabel="open menu"
        testId="cy-menuIcon"
        onClick={() => {
          setNavDrawerOpen(!navDrawerOpen);
          setCartDrawerOpen(false);
          setFavoritesDrawerOpen(false);
        }}
        icon={navDrawerOpen ? <MdClose /> : <MdMenu />}
      />
      <Drawer
        anchor={'left'}
        open={navDrawerOpen}
        ModalProps={{ disableScrollLock: true }}
        onClose={() => setNavDrawerOpen(false)}
        sx={{ '& .MuiDrawer-paper': { backgroundColor: colors.white } }}
      >
        <Nav handleNavClick={handleNavClick} />
      </Drawer>
      <Link to={'/'}>
        <Logo alt="OceanCanvas logo" src={logo} />
      </Link>
      <FlexWrapper>
        <MaterialIconButton
          onClick={() => {
            setFavoritesDrawerOpen(!favoritesDrawerOpen);
            setNavDrawerOpen(false);
            setCartDrawerOpen(false);
          }}
          icon={<MdOutlineFavoriteBorder />}
        />
        <Drawer
          anchor={'right'}
          open={favoritesDrawerOpen}
          ModalProps={{ disableScrollLock: true }}
          onClose={() => setFavoritesDrawerOpen(false)}
          sx={{ '& .MuiDrawer-paper': { backgroundColor: colors.white } }}
        >
          <FavoritesDrawer setFavoritesDrawerOpen={setFavoritesDrawerOpen} />
        </Drawer>
        <div>
          <MaterialIconButton
            ariaLabel="open cart"
            testId="cy-cartIcon"
            onClick={() => {
              setCartDrawerOpen(!cartDrawerOpen);
              setNavDrawerOpen(false);
              setFavoritesDrawerOpen(false);
            }}
            icon={<MdOutlineShoppingCart />}
          />
          {totalAmount > 0 && (
            <AmountIndicator>
              <SmallBodyText>{totalAmount}</SmallBodyText>
            </AmountIndicator>
          )}
        </div>
        <Drawer
          anchor={'right'}
          open={cartDrawerOpen}
          ModalProps={{ disableScrollLock: true }}
          onClose={() => setCartDrawerOpen(false)}
          sx={{ '& .MuiDrawer-paper': { backgroundColor: colors.white } }}
        >
          <CartDrawer setCartDrawerOpen={setCartDrawerOpen} />
        </Drawer>
      </FlexWrapper>
    </HeaderWrapper>
  );
};

export default memo(Header);
