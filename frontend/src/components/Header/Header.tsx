import styled from 'styled-components';
import logo from '@/assets/oceancanvas-logo.png';
import { colors } from '@/styles/variables';
import MaterialIconButton from '../MaterialIconButton';

const HeaderWrapper = styled.header`
  background-color: ${colors.sand};
  height: 75px;
  width: 100%;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
`;

const Logo = styled.img`
  width: 46px;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <MaterialIconButton icon={'menu'} />
      <Logo src={logo} />
      <div style={{ display: 'flex' }}>
        <MaterialIconButton icon={'favorite'} />
        <MaterialIconButton icon={'shopping_cart'} />
      </div>
    </HeaderWrapper>
  );
};

export default Header;
