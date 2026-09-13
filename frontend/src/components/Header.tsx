import logo from '@/assets/oceancanvas-logo.png';
import MaterialIconButton from './MaterialIconButton';
import { MdOutlineShoppingCart, MdMenu } from 'react-icons/md';
import { HeaderWrapper, Logo } from './styled/Header.styled';
import { FlexWrapper } from './styled/Flex.styled';
import AppDrawer from './AppDrawer';
import { memo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cart from './CartDrawer';
import Nav from './Nav';
import { useCartContext } from '@/hooks/useCartContext';
import { AmountIndicator } from './AmountIndicator';
import { SmallBodyText } from './styled/Text.styled';

const Header = () => {
  const { totalAmount } = useCartContext();
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
        ariaLabel="open menu"
        testId="cy-menuIcon"
        onClick={() => {
          setNavDrawerOpen(true);
          setCartDrawerOpen(false);
        }}
        icon={<MdMenu />}
      />
      <AppDrawer
        anchor={'left'}
        open={navDrawerOpen}
        onClose={() => setNavDrawerOpen(false)}
        closeAriaLabel="close menu"
        closeTestId="cy-closeMenuIcon"
      >
        <Nav handleNavClick={handleNavClick} />
      </AppDrawer>
      <Link to={'/'}>
        <Logo alt="OceanCanvas logo" src={logo} />
      </Link>
      <FlexWrapper>
        {/* <MaterialIconButton
          onClick={handleClick}
          icon={<MdOutlineFavoriteBorder />}
        /> */}
        <div>
          <MaterialIconButton
            ariaLabel="open cart"
            testId="cy-cartIcon"
            onClick={() => {
              setCartDrawerOpen(true);
              setNavDrawerOpen(false);
            }}
            icon={<MdOutlineShoppingCart />}
          />
          {totalAmount > 0 && (
            <AmountIndicator>
              <SmallBodyText>{totalAmount}</SmallBodyText>
            </AmountIndicator>
          )}
        </div>
        <AppDrawer
          anchor={'right'}
          open={cartDrawerOpen}
          onClose={() => setCartDrawerOpen(false)}
          closeAriaLabel="close cart"
          closeTestId="cy-closeCartIcon"
        >
          <Cart setCartDrawerOpen={setCartDrawerOpen} />
        </AppDrawer>
      </FlexWrapper>
    </HeaderWrapper>
  );
};

export default memo(Header);
