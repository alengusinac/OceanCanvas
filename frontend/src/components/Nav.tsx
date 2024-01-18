import Divider from '@mui/material/Divider';
import { StyledNav } from './styled/Header.styled';

interface Props {
  handleNavClick: (nav: string) => void;
}

const Nav = ({ handleNavClick }: Props) => {
  return (
    <StyledNav>
      <button onClick={() => handleNavClick('/')}>Home</button>
      <Divider />
      <button onClick={() => handleNavClick('/products')}>Photo Prints</button>
      <Divider />
      <button onClick={() => handleNavClick('/user/login')}>Login</button>
      <button onClick={() => handleNavClick('/user/signup')}>Sign Up</button>
      <Divider />
      <button onClick={() => handleNavClick('/about')}>About Us</button>
      <button onClick={() => handleNavClick('/contact')}>Contact Us</button>
      <Divider />
    </StyledNav>
  );
};

export default Nav;
