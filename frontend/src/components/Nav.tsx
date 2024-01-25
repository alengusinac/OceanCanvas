import Divider from '@mui/material/Divider';
import { StyledNav } from './styled/Header.styled';
import { useUserContext } from '@/hooks/useUserContext';

interface Props {
  handleNavClick: (nav: string) => void;
}

const Nav = ({ handleNavClick }: Props) => {
  const { user, logout } = useUserContext();

  const LoginButtons = () => {
    return (
      <div>
        <button onClick={() => handleNavClick('/login')}>Login</button>
        <button onClick={() => handleNavClick('/signup')}>Sign Up</button>
      </div>
    );
  };

  const LoggedInButtons = () => {
    return (
      <div>
        <button onClick={() => handleNavClick('/profile')}>Profile</button>
        <button
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

export default Nav;
