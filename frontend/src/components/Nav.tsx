import Divider from '@mui/material/Divider';
import { DrawerHeader, StyledNav } from './styled/Header.styled';
import { useUserContext } from '@/hooks/useUserContext';
import { memo } from 'react';
import { MdClose } from 'react-icons/md';
import MaterialIconButton from './MaterialIconButton';

interface Props {
  handleNavClick: (nav: string) => void;
  onClose: () => void;
}

const Nav = ({ handleNavClick, onClose }: Props) => {
  const { user, logout } = useUserContext();

  const LoginButtons = () => {
    return (
      <div>
        <button name="login" onClick={() => handleNavClick('/login')}>
          Login
        </button>
        <button name="signup" onClick={() => handleNavClick('/signup')}>
          Sign Up
        </button>
      </div>
    );
  };

  const LoggedInButtons = () => {
    return (
      <div>
        <button onClick={() => handleNavClick('/profile')}>Profile</button>
        <button
          name="logout"
          onClick={() => {
            logout();
            handleNavClick('/');
          }}
        >
          Logout
        </button>
      </div>
    );
  };

  return (
    <StyledNav>
      <DrawerHeader>
        <MaterialIconButton
          ariaLabel="close menu"
          testId="cy-closeMenuIcon"
          onClick={onClose}
          icon={<MdClose />}
        />
      </DrawerHeader>
      <button onClick={() => handleNavClick('/')}>Home</button>
      <Divider />
      <button onClick={() => handleNavClick('/products')}>Photo Prints</button>
      <Divider />
      {user ? <LoggedInButtons /> : <LoginButtons />}
      <Divider />
      <button onClick={() => handleNavClick('/about')}>About Us</button>
      <button onClick={() => handleNavClick('/contact')}>Contact Us</button>
      <Divider />
    </StyledNav>
  );
};

export default memo(Nav);
