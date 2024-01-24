import { CheckoutForm } from '@/components/styled/Checkout.styled';
import {
  BodyText,
  Heading3,
  SmallBodyText,
} from '@/components/styled/Text.styled';
import { useUserContext } from '@/hooks/useUserContext';
import { changeUserPassword } from '@/services/userService';
import { Button, TextField } from '@mui/material';
import { useState } from 'react';

interface FormField {
  value: string;
  error: boolean;
  errorMessage: string;
}

interface PasswordFormValues {
  password1: FormField;
  password2: FormField;
}

const Profile = () => {
  const { user, logout } = useUserContext();
  const [passwordMessage, setPasswordMessage] = useState('');
  const [passwordFormValues, setPasswordFormValues] = useState({
    password1: {
      value: '',
      error: false,
      errorMessage: 'You must enter an password',
    },
    password2: {
      value: '',
      error: false,
      errorMessage: 'You must enter a password',
    },
  });

  const onPasswordSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (passwordFormValues.password1.value === '') {
      setPasswordFormValues({
        ...passwordFormValues,
        password1: { ...passwordFormValues.password1, error: true },
      });
      return;
    }
    if (passwordFormValues.password2.value === '') {
      setPasswordFormValues({
        ...passwordFormValues,
        password2: { ...passwordFormValues.password2, error: true },
      });
      return;
    }
    if (
      passwordFormValues.password1.value !== passwordFormValues.password2.value
    ) {
      setPasswordFormValues({
        ...passwordFormValues,
        password2: {
          ...passwordFormValues.password2,
          error: true,
          errorMessage: 'Passwords must match',
        },
      });
      return;
    } else {
      setPasswordFormValues({
        password1: { ...passwordFormValues.password1, error: false },
        password2: { ...passwordFormValues.password2, error: false },
      });

      try {
        await changeUserPassword(passwordFormValues.password1.value);
        setPasswordMessage('Password changed successfully.');
      } catch (error) {
        setPasswordMessage('Something went wrong, try again later.');
      }
    }
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setPasswordFormValues({
      ...passwordFormValues,
      [name]: {
        ...passwordFormValues[name as keyof PasswordFormValues],
        value,
      },
    });
  };

  return (
    <div>
      <h1>Profile</h1>
      <p>{user.email}</p>
      <button onClick={() => logout()}>Logout</button>
      <div>
        <h2>Orders</h2>
        <p>Order 1</p>
        <p>Order 2</p>
        <p>Order 3</p>
      </div>
      <div>
        <Heading3>Settings</Heading3>
        <BodyText>Change Address</BodyText>
        <CheckoutForm>
          <TextField label="E-mail" variant="filled" />
          <TextField label="Firstname" variant="filled" />
          <TextField label="Lastname" variant="filled" />
          <TextField label="Address" variant="filled" />
          <TextField label="Zipcode" variant="filled" />
          <TextField label="City" variant="filled" />
          <TextField label="Country" variant="filled" />
          <TextField label="Phone number" variant="filled" />
          <Button variant="contained">Save Address</Button>
        </CheckoutForm>
        <BodyText>Change Password</BodyText>
        <SmallBodyText>{passwordMessage}</SmallBodyText>
        <CheckoutForm onSubmit={onPasswordSubmit}>
          <TextField
            value={passwordFormValues.password1.value}
            onChange={onChangePassword}
            type="password"
            name="password1"
            error={passwordFormValues.password1.error}
            helperText={
              passwordFormValues.password1.error &&
              passwordFormValues.password1.errorMessage
            }
            label="New password"
            variant="filled"
          />
          <TextField
            value={passwordFormValues.password2.value}
            onChange={onChangePassword}
            type="password"
            name="password2"
            error={passwordFormValues.password2.error}
            helperText={
              passwordFormValues.password2.error &&
              passwordFormValues.password2.errorMessage
            }
            label="Confirm New password"
            variant="filled"
          />
          <Button type="submit" variant="contained">
            Save Password
          </Button>
        </CheckoutForm>
      </div>
    </div>
  );
};

export default Profile;
