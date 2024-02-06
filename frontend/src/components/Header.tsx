import logo from '@/assets/oceancanvas-logo.png';
import MaterialIconButton from './MaterialIconButton';
import { MdOutlineShoppingCart, MdMenu, MdClose } from 'react-icons/md';
import { HeaderWrapper, Logo } from './styled/Header.styled';
import { FlexWrapper } from './styled/Flex.styled';
import Drawer from '@mui/material/Drawer';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cart from './CartDrawer';
import Nav from './Nav';
import { colors } from '@/styles/variables';

const Header = () => {
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (nav: string) => {
    navigate(nav);
    setNavDrawerOpen(false);
  };

  return (
    <HeaderWrapper>
      <MaterialIconButton
        testId="cy-menuIcon"
        onClick={() => {
          setNavDrawerOpen(!navDrawerOpen);
          setCartDrawerOpen(false);
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
        <Logo src={logo} />
      </Link>
      <FlexWrapper>
        {/* <MaterialIconButton
          onClick={handleClick}
          icon={<MdOutlineFavoriteBorder />}
        /> */}
        <MaterialIconButton
          testId="cy-cartIcon"
          onClick={() => {
            setCartDrawerOpen(!cartDrawerOpen);
            setNavDrawerOpen(false);
          }}
          icon={<MdOutlineShoppingCart />}
        />
        <Drawer
          anchor={'right'}
          open={cartDrawerOpen}
          ModalProps={{ disableScrollLock: true }}
          onClose={() => setCartDrawerOpen(false)}
          sx={{ '& .MuiDrawer-paper': { backgroundColor: colors.white } }}
        >
          <Cart setCartDrawerOpen={setCartDrawerOpen} />
        </Drawer>
      </FlexWrapper>
    </HeaderWrapper>
  );
};

export default Header;
