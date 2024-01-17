import logo from '@/assets/oceancanvas-logo.png';
import MaterialIconButton from './MaterialIconButton';
import {
  MdOutlineFavoriteBorder,
  MdOutlineShoppingCart,
  MdMenu,
  MdClose,
} from 'react-icons/md';
import { HeaderWrapper, Logo, StyledNav } from './styled/Header.styled';
import { FlexWrapper } from './styled/Flex.styled';
import Drawer from '@mui/material/Drawer';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Divider from '@mui/material/Divider';

const handleClick = () => {
  console.log('CLICK');
};

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (nav: string) => {
    navigate(nav);
    setDrawerOpen(false);
  };

  return (
    <HeaderWrapper>
      <MaterialIconButton
        onClick={() => setDrawerOpen(!drawerOpen)}
        icon={drawerOpen ? <MdClose /> : <MdMenu />}
      />
      <Drawer
        anchor={'left'}
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <StyledNav>
          <button onClick={() => handleNavClick('/')}>Home</button>
          <Divider />
          <button onClick={() => handleNavClick('/products')}>
            Photo Prints
          </button>
          <Divider />
          <button onClick={() => handleNavClick('/user/login')}>Login</button>
          <button onClick={() => handleNavClick('/user/signup')}>
            Sign Up
          </button>
          <Divider />
          <button onClick={() => handleNavClick('/about')}>About Us</button>
          <button onClick={() => handleNavClick('/contact')}>Contact Us</button>
          <Divider />
        </StyledNav>
      </Drawer>
      <Link to={'/'}>
        <Logo src={logo} />
      </Link>
      <FlexWrapper>
        <MaterialIconButton
          onClick={handleClick}
          icon={<MdOutlineFavoriteBorder />}
        />
        <MaterialIconButton
          onClick={handleClick}
          icon={<MdOutlineShoppingCart />}
        />
      </FlexWrapper>
    </HeaderWrapper>
  );
};

export default Header;
