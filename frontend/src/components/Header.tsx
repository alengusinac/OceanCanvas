import logo from '@/assets/oceancanvas-logo.png';
import MaterialIconButton from './MaterialIconButton';
import {
  MdOutlineFavoriteBorder,
  MdOutlineShoppingCart,
  MdMenu,
} from 'react-icons/md';
import { HeaderWrapper, Logo } from './styled/Header.styled';
import { FlexWrapper } from './styled/Flex.styled';

const handleClick = () => {
  console.log('CLICK');
};

const Header = () => {
  return (
    <HeaderWrapper>
      <MaterialIconButton onClick={handleClick} icon={<MdMenu />} />
      <Logo src={logo} />
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
