import { Button, TextField } from '@mui/material';
import { LoginSignupContainer } from '../components/styled/LoginSignup';
import { Heading2 } from '../components/styled/Text.styled';

const Signup = () => {
  const signup = () => {
    console.log('Signup');
  };
  return (
    <LoginSignupContainer>
      <Heading2>Sign Up</Heading2>
      <TextField label="Firstname" variant="filled" required />
      <TextField label="Lastname" variant="filled" required />
      <TextField label="E-mail" variant="filled" required />
      <TextField type="password" label="Password" variant="filled" required />
      <Button onClick={signup} variant="contained">
        Sign Up
      </Button>
    </LoginSignupContainer>
  );
};

export default Signup;
